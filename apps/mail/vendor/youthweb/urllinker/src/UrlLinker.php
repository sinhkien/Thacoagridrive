<?php

declare(strict_types=1);
/*
 * UrlLinker converts any web addresses in plain text into HTML hyperlinks.
 * Copyright (C) 2016-2022  Youthweb e.V. <info@youthweb.net>

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

namespace Youthweb\UrlLinker;

use Closure;
use InvalidArgumentException;
use UnexpectedValueException;

final class UrlLinker implements UrlLinkerInterface
{
    /**
     * Ftp addresses like "ftp://example.com" will be allowed, default false
     */
    private bool $allowFtpAddresses = false;

    /**
     * Uppercase URL schemes like "HTTP://exmaple.com" will be allowed:
     */
    private bool $allowUpperCaseUrlSchemes = false;

    /**
     * Closure to modify the way the urls will be linked
     */
    private Closure $htmlLinkCreator;

    /**
     * Closure to modify the way the emails will be linked
     */
    private Closure $emailLinkCreator;

    /**
     * @var array<string,bool>
     */
    private array $validTlds;

    /**
     * Set the configuration
     *
     * @since v1.1.0
     *
     * @param array<string,mixed> $options Configuation array
     */
    public function __construct(array $options = [])
    {
        $allowedOptions = [
            'allowFtpAddresses',
            'allowUpperCaseUrlSchemes',
            'htmlLinkCreator',
            'emailLinkCreator',
            'validTlds',
        ];

        foreach ($allowedOptions as $key) {
            switch ($key) {
                case 'allowFtpAddresses':
                    if (array_key_exists($key, $options)) {
                        $value = $options[$key];

                        if (! is_bool($value)) {
                            throw new InvalidArgumentException(sprintf(
                                'Option "%s" must be of type "%s", "%s" given.',
                                $key,
                                'boolean',
                                function_exists('get_debug_type') ? get_debug_type($value) : (is_object($value) ? get_class($value) : gettype($value))
                            ));
                        }
                    } else {
                        $value = false;
                    }

                    $this->allowFtpAddresses = $value;

                    break;

                case 'allowUpperCaseUrlSchemes':
                    if (array_key_exists($key, $options)) {
                        $value = $options[$key];

                        if (! is_bool($value)) {
                            throw new InvalidArgumentException(sprintf(
                                'Option "%s" must be of type "%s", "%s" given.',
                                $key,
                                'boolean',
                                function_exists('get_debug_type') ? get_debug_type($value) : (is_object($value) ? get_class($value) : gettype($value))
                            ));
                        }
                    } else {
                        $value = false;
                    }

                    $this->allowUpperCaseUrlSchemes = $value;

                    break;

                case 'htmlLinkCreator':
                    if (array_key_exists($key, $options)) {
                        $value = $options[$key];

                        if (! is_object($value) or ! $value instanceof Closure) {
                            throw new InvalidArgumentException(sprintf(
                                'Option "%s" must be of type "%s", "%s" given.',
                                $key,
                                Closure::class,
                                function_exists('get_debug_type') ? get_debug_type($value) : (is_object($value) ? get_class($value) : gettype($value))
                            ));
                        }
                    } else {
                        $value = Closure::fromCallable([$this, 'createHtmlLink']);
                    }

                    $this->htmlLinkCreator = $value;

                    break;

                case 'emailLinkCreator':
                    if (array_key_exists($key, $options)) {
                        $value = $options[$key];

                        if (! is_object($value) or ! $value instanceof Closure) {
                            throw new InvalidArgumentException(sprintf(
                                'Option "%s" must be of type "%s", "%s" given.',
                                $key,
                                Closure::class,
                                function_exists('get_debug_type') ? get_debug_type($value) : (is_object($value) ? get_class($value) : gettype($value))
                            ));
                        }
                    } else {
                        $value = Closure::fromCallable([$this, 'createEmailLink']);
                    }

                    $this->emailLinkCreator = $value;

                    break;

                case 'validTlds':
                    if (array_key_exists($key, $options)) {
                        $value = (array) $options[$key];
                    } else {
                        $value = DomainStorage::getValidTlds();
                    }

                    $this->validTlds = $value;

                    break;
            }
        }
    }

    /**
     * Transforms plain text into valid HTML, escaping special characters and
     * turning URLs into links.
     *
     * @param string $text
     */
    public function linkUrlsAndEscapeHtml(string $text): string
    {
        // We can abort if there is no . in $text
        if (strpos($text, '.') === false) {
            return $this->escapeHtml($text);
        }

        $html = '';

        $position = 0;

        $match = [];

        while (preg_match($this->buildRegex(), $text, $match, PREG_OFFSET_CAPTURE, $position)) {
            [$url, $urlPosition] = $match[0];

            // Add the text leading up to the URL.
            $html .= $this->escapeHtml(substr($text, $position, $urlPosition - $position));

            $scheme      = $match[1][0];
            $username    = $match[2][0];
            $password    = $match[3][0];
            $domain      = $match[4][0];
            $afterDomain = $match[5][0]; // everything following the domain
            $port        = $match[6][0];
            $path        = $match[7][0];

            // Check that the TLD is valid or that $domain is an IP address.
            $tld = strtolower((string) strrchr($domain, '.'));

            if (preg_match('{^\.[0-9]{1,3}$}', $tld) || isset($this->validTlds[$tld])) {
                // Do not permit implicit scheme if a password is specified, as
                // this causes too many errors (e.g. "my email:foo@example.org").
                if (! $scheme && $password) {
                    $html .= $this->escapeHtml($username);

                    // Continue text parsing at the ':' following the "username".
                    $position = $urlPosition + strlen($username);

                    continue;
                }

                if (! $scheme && $username && ! $password && ! $afterDomain) {
                    // Looks like an email address.
                    $emailLink = $this->emailLinkCreator->__invoke($url, $url);

                    if (! is_string($emailLink)) {
                        throw new UnexpectedValueException(sprintf(
                            'Return value of Closure for "%s" must return value of type "string", "%s" given.',
                            'emailLinkCreator',
                            gettype($emailLink)
                        ));
                    }

                    // Add the hyperlink.
                    $html .= $emailLink;
                } else {
                    // Prepend http:// if no scheme is specified
                    $completeUrl = $scheme ? $url : "http://$url";
                    $linkText = "$domain$port$path";

                    $htmlLink = $this->htmlLinkCreator->__invoke($completeUrl, $linkText);

                    if (! is_string($htmlLink)) {
                        throw new UnexpectedValueException(sprintf(
                            'Return value of Closure for "%s" must return value of type "string", "%s" given.',
                            'htmlLinkCreator',
                            gettype($htmlLink)
                        ));
                    }

                    $html .= $htmlLink;
                }
            } else {
                // Not a valid URL.
                $html .= $this->escapeHtml($url);
            }

            // Continue text parsing from after the URL.
            $position = $urlPosition + strlen($url);
        }

        // Add the remainder of the text.
        $html .= $this->escapeHtml(substr($text, $position));

        return $html;
    }

    /**
     * Turns URLs into links in a piece of valid HTML/XHTML.
     *
     * Beware: Never render HTML from untrusted sources. Rendering HTML provided by
     * a malicious user can lead to system compromise through cross-site scripting.
     *
     * @param string $html
     */
    public function linkUrlsInTrustedHtml(string $html): string
    {
        $reMarkup = '{</?([a-z]+)([^"\'>]|"[^"]*"|\'[^\']*\')*>|&#?[a-zA-Z0-9]+;|$}';

        $insideAnchorTag = false;
        $position = 0;
        $result = '';

        // Iterate over every piece of markup in the HTML.
        while (true) {
            $match = [];
            preg_match($reMarkup, $html, $match, PREG_OFFSET_CAPTURE, $position);

            [$markup, $markupPosition] = $match[0];

            // Process text leading up to the markup.
            $text = substr($html, $position, $markupPosition - $position);

            // Link URLs unless we're inside an anchor tag.
            if (! $insideAnchorTag) {
                $text = $this->linkUrlsAndEscapeHtml($text);
            }

            $result .= $text;

            // End of HTML?
            if ($markup === '') {
                break;
            }

            // Check if markup is an anchor tag ('<a>', '</a>').
            if ($markup[0] !== '&' && $match[1][0] === 'a') {
                $insideAnchorTag = ($markup[1] !== '/');
            }

            // Pass markup through unchanged.
            $result .= $markup;

            // Continue after the markup.
            $position = $markupPosition + strlen($markup);
        }

        return $result;
    }

    /**
     * @return string
     */
    private function buildRegex(): string
    {
        /**
         * Regular expression bits used by linkUrlsAndEscapeHtml() to match URLs.
         */
        $rexScheme = 'https?://';

        if ($this->allowFtpAddresses) {
            $rexScheme .= '|ftp://';
        }

        $rexDomain     = '(?:[-a-zA-Z0-9\x7f-\xff]{1,63}\.)+[a-zA-Z\x7f-\xff][-a-zA-Z0-9\x7f-\xff]{1,62}';
        $rexIp         = '(?:[1-9][0-9]{0,2}\.|0\.){3}(?:[1-9][0-9]{0,2}|0)';
        $rexPort       = '(:[0-9]{1,5})?';
        $rexPath       = '(/[!$-/0-9:;=@_\':;!a-zA-Z\x7f-\xff]*?)?';
        $rexQuery      = '(\?[!$-/0-9:;=@_\':;!a-zA-Z\x7f-\xff]+?)?';
        $rexFragment   = '(#[!$-/0-9?:;=@_\':;!a-zA-Z\x7f-\xff]+?)?';
        $rexUsername   = '[^]\\\\\x00-\x20\"(),:-<>[\x7f-\xff]{1,64}';
        $rexPassword   = $rexUsername; // allow the same characters as in the username
        $rexUrl        = "($rexScheme)?(?:($rexUsername)(:$rexPassword)?@)?($rexDomain|$rexIp)($rexPort$rexPath$rexQuery$rexFragment)";
        $rexTrailPunct = "[)'?.!,;:]"; // valid URL characters which are not part of the URL if they appear at the very end
        $rexNonUrl	 = "[^-_#$+.!*%'(),;/?:@=&a-zA-Z0-9\x7f-\xff]"; // characters that should never appear in a URL

        $rexUrlLinker = "{\\b$rexUrl(?=$rexTrailPunct*($rexNonUrl|$))}";

        if ($this->allowUpperCaseUrlSchemes) {
            $rexUrlLinker .= 'i';
        }

        return $rexUrlLinker;
    }

    /**
     * Default method for creating a HTML link
     */
    private function createHtmlLink(string $url, string $content): string
    {
        $link = sprintf(
            '<a href="%s">%s</a>',
            $this->escapeHtml($url),
            $this->escapeHtml($content)
        );

        // Cheap e-mail obfuscation to trick the dumbest mail harvesters.
        return str_replace('@', '&#64;', $link);
    }

    /**
     * Default method for creating an email link
     */
    private function createEmailLink(string $url, string $content): string
    {
        $link = $this->createHtmlLink("mailto:$url", $content);

        // Cheap e-mail obfuscation to trick the dumbest mail harvesters.
        return str_replace('@', '&#64;', $link);
    }

    private function escapeHtml(string $string): string
    {
        $flags = ENT_COMPAT | ENT_HTML401;
        $encoding = ini_get('default_charset');
        $encoding = $encoding !== false ? $encoding : null;
        $double_encode = false; // Do not double encode

        return htmlspecialchars($string, $flags, $encoding, $double_encode);
    }
}
