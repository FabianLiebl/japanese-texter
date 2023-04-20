<?php

namespace App\Factory;

use App\Entity\LetterLine;
use App\Repository\LetterLineRepository;
use Enhavo\Bundle\AppBundle\Factory\Factory;

class LetterLineFactory extends Factory
{
    /** @var LetterLineRepository */
    protected $letterLineRepository;

    public function __construct(string $className, LetterLineRepository $letterLineRepository)
    {
        parent::__construct($className);
        $this->letterLineRepository = $letterLineRepository;
    }

    /**
     * {@inheritdoc}
     */
    public function createNew()
    {
        /** @var LetterLine $newLetterLine */
        $newLetterLine = parent::createNew();
        $lastPosition = $this->letterLineRepository->getLastPosition();
        $newLetterLine->setPosition($lastPosition + 1);
        return $newLetterLine;
    }
}
