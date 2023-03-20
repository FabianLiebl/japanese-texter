<?php

namespace App\Model;

use App\Entity\Letter;

class TrainingBatchEntry
{
    /** @var ?string */
    private $prompt;

    /** @var ?string */
    private $correctResult;

    /** @var string[] */
    private $choices = [];

    /** @var ?int */
    private $letterId;

    /**
     * @param string|null $prompt
     * @param string|null $correctResult
     * @param TrainingBatchChoice[] $choices
     * @param int|null $letterId
     */
    public function __construct(?string $prompt, ?string $correctResult, array $choices, ?int $letterId)
    {
        $this->prompt = $prompt;
        $this->correctResult = $correctResult;
        $this->choices = $choices;
        $this->letterId = $letterId;
    }

    /**
     * @return string|null
     */
    public function getPrompt(): ?string
    {
        return $this->prompt;
    }

    /**
     * @param string|null $prompt
     */
    public function setPrompt(?string $prompt): void
    {
        $this->prompt = $prompt;
    }

    /**
     * @return string|null
     */
    public function getCorrectResult(): ?string
    {
        return $this->correctResult;
    }

    /**
     * @param string|null $correctResult
     */
    public function setCorrectResult(?string $correctResult): void
    {
        $this->correctResult = $correctResult;
    }

    /**
     * @return TrainingBatchChoice[]
     */
    public function getChoices(): array
    {
        return $this->choices;
    }

    /**
     * @param TrainingBatchChoice[] $choices
     */
    public function setChoices(array $choices): void
    {
        $this->choices = $choices;
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
