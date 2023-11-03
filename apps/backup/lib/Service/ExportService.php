<?php

declare(strict_types=1);


/**
 * Nextcloud - Backup now. Restore later.
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Maxence Lange <maxence@artificial-owl.com>
 * @copyright 2021, Maxence Lange <maxence@artificial-owl.com>
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


namespace OCA\Backup\Service;

use OCA\Backup\Tools\Exceptions\SignatoryException;
use SodiumException;

/**
 * Class ExportService
 *
 * @package OCA\Backup\Service
 */
class ExportService {


	/** @var RemoteService */
	private $remoteService;

	/** @var RemoteStreamService */
	private $remoteStreamService;

	/** @var EncryptService */
	private $encryptService;

	/** @var ConfigService */
	private $configService;


	/**
	 * ExportService constructor.
	 *
	 * @param RemoteService $remoteService
	 * @param RemoteStreamService $remoteStreamService
	 * @param EncryptService $encryptService
	 * @param ConfigService $configService
	 */
	public function __construct(
		RemoteService $remoteService,
		RemoteStreamService $remoteStreamService,
		EncryptService $encryptService,
		ConfigService $configService
	) {
		$this->remoteService = $remoteService;
		$this->remoteStreamService = $remoteStreamService;
		$this->encryptService = $encryptService;
		$this->configService = $configService;
	}


	/**
	 * @param bool $encrypted
	 * @param string $key
	 *
	 * @return string
	 * @throws SignatoryException
	 * @throws SodiumException
	 */
	public function export(bool $encrypted, string &$key = ''): string {
		$this->remoteStreamService->getAppSignatory(true);

		$setup = [
			'signatory' => $this->configService->getAppValue('key_pairs'),
			'remote' => $this->remoteService->getAll(true),
			'encryption' => $this->encryptService->getEncryptionKeys(true)
		];

		$data = json_encode($setup);
		if ($encrypted) {
			$data = $this->encryptService->encryptString($data, $key);
		}

		return $data;
	}
}
