<?php

namespace App\Repository;

use App\Entity\Letter;
use Enhavo\Bundle\AppBundle\Repository\EntityRepository;

class LetterRepository extends EntityRepository
{
    public function getLastPosition()
    {
        $em = $this->getEntityManager();
        $tableName = $em->getClassMetadata(Letter::class)->getTableName();
        $stmt = $em->getConnection()->prepare('SELECT MAX(`position`) AS max_position FROM ' . $tableName);
        $stmtResult = $stmt->executeQuery();
        $result = $stmtResult->fetchAllAssociative();
        if (count($result) == 0) {
            return 0;
        }  else {
            return $result[0]['max_position'];
        }
    }
}
