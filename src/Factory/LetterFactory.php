<?php

namespace App\Factory;

use App\Entity\Letter;
use App\Repository\LetterRepository;
use Enhavo\Bundle\AppBundle\Factory\Factory;

class LetterFactory extends Factory
{
    /** @var LetterRepository */
    protected $letterRepository;

    public function __construct(string $className, LetterRepository $letterRepository)
    {
        parent::__construct($className);
        $this->letterRepository = $letterRepository;
    }

    /**
     * {@inheritdoc}
     */
    public function createNew()
    {
        /** @var Letter $newLetter */
        $newLetter = parent::createNew();
        $lastPosition = $this->letterRepository->getLastPosition();
        $newLetter->setPosition($lastPosition + 1);
        return $newLetter;
    }
}
