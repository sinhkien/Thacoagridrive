<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2022 Joas Schilling <coding@schilljs.com>
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

namespace OCA\Talk\Model;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\MultipleObjectsReturnedException;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\Exception;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * @template-extends QBMapper<Poll>
 */
class PollMapper extends QBMapper {
	/**
	 * @param IDBConnection $db
	 */
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'talk_polls', Poll::class);
	}

	/**
	 * @param int $pollId
	 * @return Poll
	 * @throws DoesNotExistException
	 * @throws MultipleObjectsReturnedException
	 * @throws Exception
	 */
	public function getByPollId(int $pollId): Poll {
		$query = $this->db->getQueryBuilder();

		$query->select('*')
			->from($this->getTableName())
			->where($query->expr()->eq('id', $query->createNamedParameter($pollId, IQueryBuilder::PARAM_INT)));

		return $this->findEntity($query);
	}

	public function deleteByRoomId(int $roomId): void {
		$query = $this->db->getQueryBuilder();

		$query->delete($this->getTableName())
			->where($query->expr()->eq('room_id', $query->createNamedParameter($roomId, IQueryBuilder::PARAM_INT)));

		$query->executeStatement();
	}

	public function deleteByPollId(int $pollId): void {
		$query = $this->db->getQueryBuilder();

		$query->delete($this->getTableName())
			->where($query->expr()->eq('id', $query->createNamedParameter($pollId, IQueryBuilder::PARAM_INT)));

		$query->executeStatement();
	}
}
