<?php

namespace App\Entity;

use App\Manager\TrainingManager;

class TrainingLetter
{
    /** @var ?int */
    private $id;

    /** @var ?int */
    private $score = 100;

    /** @var bool */
    private $active = true;

    /** @var ?Letter */
    private $letter;

    /** @var ?Training */
    private $training;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @param int|null $id
     */
    public function setId(?int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return int|null
     */
    public function getScore(): ?int
    {
        return $this->score;
    }

    /**
     * @param int|null $score
     */
    public function setScore(?int $score): void
    {
        if ($score === null) {
            $score = TrainingManager::SCORE_BASE;
        }
        $this->score = $score;
    }

    public function isActive(): bool
    {
        return $this->active;
    }

    public function setActive(bool $active): void
    {
        $this->active = $active;
    }

    /**
     * @return Letter|null
     */
    public function getLetter(): ?Letter
    {
        return $this->letter;
    }

    /**
     * @param Letter|null $letter
     */
    public function setLetter(?Letter $letter): void
    {
        $this->letter = $letter;
    }

    /**
     * @return Training|null
     */
    public function getTraining(): ?Training
    {
        return $this->training;
    }

    /**
     * @param Training|null $training
     */
    public function setTraining(?Training $training): void
    {
        $this->training = $training;
    }

    public function getScoreClass()
    {
        if ($this->getScore() <= TrainingManager::SCORE_GOOD) {
            return 'good';
        } elseif ($this->getScore() <= TrainingManager::SCORE_MID) {
            return 'mid';
        }
        return 'bad';
    }
}
