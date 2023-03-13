<?php

namespace App\Model;

class TrainingBatch
{
    /** @var TrainingBatchEntry[] */
    private $entries;

    /** @var ?string */
    private $type;

    /**
     * @return TrainingBatchEntry[]
     */
    public function getEntries(): array
    {
        return $this->entries;
    }

    /**
     * @param TrainingBatchEntry[] $entries
     */
    public function setEntries(array $entries): void
    {
        $this->entries = $entries;
    }

    /**
     * @return string|null
     */
    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * @param string|null $type
     */
    public function setType(?string $type): void
    {
        $this->type = $type;
    }
}
