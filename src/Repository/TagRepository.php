<?php

namespace App\Repository;

use Enhavo\Bundle\AppBundle\Repository\EntityRepository;

class TagRepository extends EntityRepository
{
    public function findByTerm($term, $limit)
    {
        $query = $this->createQueryBuilder('t')
            ->orWhere('t.name LIKE :term')
            ->setParameter('term', sprintf('%s%%', $term))
            ->orderBy('t.name');

        $paginator = $this->getPaginator($query);
        $paginator->setMaxPerPage($limit);
        return $paginator;
    }
}
