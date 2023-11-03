<?php

declare(strict_types=1);

/**
 * @copyright 2021 Anna Larch <anna@nextcloud.com>
 *
 * @author Anna Larch <anna@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

namespace OCA\Mail\Listener;

use OCA\Mail\Events\MessageFlaggedEvent;
use OCA\Mail\Service\AntiSpamService;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use Psr\Log\LoggerInterface;

/**
 * @template-implements IEventListener<Event|MessageFlaggedEvent>
 */
class SpamReportListener implements IEventListener {
	/** @var LoggerInterface */
	private $logger;

	/** @var AntiSpamService */
	private $antiSpamService;

	public function __construct(LoggerInterface $logger,
		AntiSpamService $antiSpamService) {
		$this->logger = $logger;
		$this->antiSpamService = $antiSpamService;
	}

	public function handle(Event $event): void {
		if (!$event instanceof MessageFlaggedEvent || $event->getFlag() !== '$junk') {
			return;
		}

		if (!$event->isSet()) {
			return;
		}

		// Send message to reporting service
		try {
			$this->antiSpamService->sendReportEmail($event->getAccount(), $event->getMailbox(), $event->getUid(), $event->getFlag());
		} catch (\Throwable $e) {
			$this->logger->error("Could not send spam report: " . $e->getMessage(), ['exception' => $e]);
		}
	}
}
