<?php

namespace OCA\SideMenu\Service;

/**
 * class Color.
 *
 * @author Simon Vieille <simon@deblan.fr>
 */
class Color
{
    /**
     * @thanks https://stackoverflow.com/posts/54393956/revision
     */
    public function adjustBrightness(string $hexCode, float $adjustPercent): string
    {
        $hexCode = ltrim($hexCode, '#');

        if (3 == strlen($hexCode)) {
            $hexCode = $hexCode[0].$hexCode[0].$hexCode[1].$hexCode[1].$hexCode[2].$hexCode[2];
        }

        $hexCode = array_map('hexdec', str_split($hexCode, 2));

        foreach ($hexCode as &$color) {
            $adjustableLimit = $adjustPercent < 0 ? $color : 255 - $color;
            $adjustAmount = ceil($adjustableLimit * $adjustPercent);

            $color = str_pad(dechex($color + $adjustAmount), 2, '0', STR_PAD_LEFT);
        }

        return '#'.implode($hexCode);
    }
}
