<?php

namespace App\Repository;

use App\Entity\LetterLine;
use Enhavo\Bundle\AppBundle\Repository\EntityRepository;

class LetterLineRepository extends EntityRepository
{
    public function getLastPosition()
    {
        $em = $this->getEntityManager();
        $tableName = $em->getClassMetadata(LetterLine::class)->getTableName();
        $stmt = $em->getConnection()->prepare('SELECT MAX(`position`) AS max_position FROM ' . $tableName);
        $stmtResult = $stmt->executeQuery();
        $result = $stmtResult->fetchAllAssociative();
        if (count($result) == 0) {
            return 0;
        }  else {
            return $result[0]['max_position'];
        }
    }

    public function findByTerm($term, $limit)
    {
        $query = $this->createQueryBuilder('a')
            ->andWhere('a.name LIKE :term')
            ->setParameter('term', sprintf('%%%s%%', $term))
            ->orderBy('a.name');

        $paginator = $this->getPaginator($query);
        $paginator->setMaxPerPage($limit);
        return $paginator;
    }
}
