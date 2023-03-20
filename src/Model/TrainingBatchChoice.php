<?php

namespace App\Model;

class TrainingBatchChoice
{
    /** @var ?string */
    private $choice;

    /** @var ?int */
    private $letterId;

    /**
     * @param string|null $choice
     * @param int|null $letterId
     */
    public function __construct(?string $choice, ?int $letterId)
    {
        $this->choice = $choice;
        $this->letterId = $letterId;
    }

    /**
     * @return string|null
     */
    public function getChoice(): ?string
    {
        return $this->choice;
    }

    /**
     * @param string|null $choice
     */
    public function setChoice(?string $choice): void
    {
        $this->choice = $choice;
    }

    /**
     * @return int|null
     */
    public function getLetterId(): ?int
    {
        return $this->letterId;
    }

    /**
     * @param int|null $letterId
     */
    public function setLetterId(?int $letterId): void
    {
        $this->letterId = $letterId;
    }
}
