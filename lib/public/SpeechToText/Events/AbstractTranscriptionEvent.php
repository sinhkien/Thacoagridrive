<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023 Marcel Klehr <mklehr@gmx.net>
 *
 * @author Marcel Klehr <mklehr@gmx.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OCP\SpeechToText\Events;

use OCP\EventDispatcher\Event;
use OCP\Files\File;

/**
 * @since 27.0.0
 */
abstract class AbstractTranscriptionEvent extends Event {
	/**
	 * @since 27.0.0
	 */
	public function __construct(
		private int $fileIdId,
		private ?File $file,
		private ?string $userId,
		private string $appId,
	) {
		parent::__construct();
	}

	/**
	 * @since 27.0.0
	 */
	public function getFileId(): int {
		return $this->fileIdId;
	}

	/**
	 * @since 27.0.0
	 */
	public function getFile(): ?File {
		return $this->file;
	}

	/**
	 * @since 27.0.0
	 */
	public function getUserId(): ?string {
		return $this->userId;
	}

	/**
	 * @since 27.0.0
	 */
	public function getAppId(): string {
		return $this->appId;
	}
}
