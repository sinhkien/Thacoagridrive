<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023, Joas Schilling <coding@schilljs.com>
 *
 * @author Joas Schilling <coding@schilljs.com>
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
 *
 */

namespace OCA\Talk\Listener;

use OCA\Talk\Chat\ChatManager;
use OCA\Talk\Chat\MessageParser;
use OCA\Talk\Events\BotInstallEvent;
use OCA\Talk\Events\BotUninstallEvent;
use OCA\Talk\Events\ChatEvent;
use OCA\Talk\Events\ChatParticipantEvent;
use OCA\Talk\Model\Bot;
use OCA\Talk\Model\BotConversationMapper;
use OCA\Talk\Model\BotServer;
use OCA\Talk\Model\BotServerMapper;
use OCA\Talk\Service\BotService;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\EventDispatcher\IEventListener;
use OCP\Server;
use Psr\Log\LoggerInterface;

/**
 * @template-implements IEventListener<Event>
 */
class BotListener implements IEventListener {
	public function __construct(
		protected BotServerMapper $botServerMapper,
		protected BotConversationMapper $botConversationMapper,
		protected BotService $botService,
		protected LoggerInterface $logger,
	) {
	}

	public static function register(IEventDispatcher $dispatcher): void {
		$dispatcher->addListener(ChatManager::EVENT_AFTER_MESSAGE_SEND, [self::class, 'afterMessageSendStatic']);
		$dispatcher->addListener(ChatManager::EVENT_AFTER_SYSTEM_MESSAGE_SEND, [self::class, 'afterSystemMessageSendStatic']);
	}

	public static function afterMessageSendStatic(ChatEvent $event): void {
		if (!$event instanceof ChatParticipantEvent) {
			// No bots for bots
			return;
		}

		/** @var BotService $service */
		$service = Server::get(BotService::class);
		$messageParser = Server::get(MessageParser::class);
		$service->afterChatMessageSent($event, $messageParser);
	}

	public static function afterSystemMessageSendStatic(ChatEvent $event): void {
		/** @var BotService $service */
		$service = Server::get(BotService::class);
		$messageParser = Server::get(MessageParser::class);
		$service->afterSystemMessageSent($event, $messageParser);
	}

	public function handle(Event $event): void {
		if ($event instanceof BotInstallEvent) {
			$this->handleBotInstallEvent($event);
		}
		if ($event instanceof BotUninstallEvent) {
			$this->handleBotUninstallEvent($event);
		}
	}

	protected function handleBotInstallEvent(BotInstallEvent $event): void {
		try {
			$this->botService->validateBotParameters($event->getName(), $event->getSecret(), $event->getUrl(), $event->getDescription());
		} catch (\InvalidArgumentException $e) {
			$this->logger->error('Invalid data in bot install event: ' . $e->getMessage(), ['exception' => $e]);
			throw $e;
		}

		try {
			$bot = $this->botServerMapper->findByUrlAndSecret($event->getUrl(), $event->getSecret());

			$bot->setName($event->getName());
			$bot->setDescription($event->getDescription());
			$this->botServerMapper->update($bot);
		} catch (DoesNotExistException) {
			try {
				$this->botServerMapper->findByUrl($event->getUrl());
				$e = new \InvalidArgumentException('Bot with the same URL and a different secret is already registered');
				$this->logger->error('Invalid data in bot install event: ' . $e->getMessage(), ['exception' => $e]);
				throw $e;
			} catch (DoesNotExistException) {
			}

			$bot = new BotServer();
			$bot->setName($event->getName());
			$bot->setDescription($event->getDescription());
			$bot->setSecret($event->getSecret());
			$bot->setUrl($event->getUrl());
			$bot->setUrlHash(sha1($event->getUrl()));
			$bot->setState(Bot::STATE_ENABLED);
			$this->botServerMapper->insert($bot);
		}
	}

	protected function handleBotUninstallEvent(BotUninstallEvent $event): void {
		try {
			$bot = $this->botServerMapper->findByUrlAndSecret($event->getUrl(), $event->getSecret());
			$this->botConversationMapper->deleteByBotId($bot->getId());
			$this->botServerMapper->delete($bot);
		} catch (DoesNotExistException) {
		}
	}
}
