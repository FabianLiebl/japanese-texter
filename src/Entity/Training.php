<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Sylius\Component\Resource\Model\ResourceInterface;

class Training implements ResourceInterface
{
    /** @var ?int */
    private $id;

    /** @var ?string */
    private $name;

    /** @var ?string */
    private $slug;

    /** @var Collection|TrainingLetter[] */
    private $letters;

    public function __construct()
    {
        $this->letters = new ArrayCollection();
    }

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
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string|null $name
     */
    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return string|null
     */
    public function getSlug(): ?string
    {
        return $this->slug;
    }

    /**
     * @param string|null $slug
     */
    public function setSlug(?string $slug): void
    {
        $this->slug = $slug;
    }

    /**
     * @return TrainingLetter[]|Collection
     */
    public function getLetters()
    {
        return $this->letters;
    }

    /**
     * @param TrainingLetter $letter
     */
    public function addLetter(TrainingLetter $letter)
    {
        $this->letters->add($letter);
        $letter->setTraining($this);
    }

    /**
     * @param TrainingLetter $letter
     */
    public function removeLetter(TrainingLetter $letter)
    {
        $this->letters->removeElement($letter);
        $letter->setTraining(null);
    }
}
