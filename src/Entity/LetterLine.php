<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Sylius\Component\Resource\Model\ResourceInterface;

class LetterLine implements ResourceInterface
{
    /** @var ?int */
    private $id;

    /** @var ?string */
    private $name;

    /** @var ?int */
    private $position;

    /** @var Collection|Letter[]|null */
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
     * @return int|null
     */
    public function getPosition(): ?int
    {
        return $this->position;
    }

    /**
     * @param int|null $position
     */
    public function setPosition(?int $position): void
    {
        $this->position = $position;
    }

    /**
     * @return Letter[]|ArrayCollection|Collection|null
     */
    public function getLetters()
    {
        return $this->letters;
    }

    /**
     * @param Letter $letter
     */
    public function addLetter(Letter $letter)
    {
        $this->letters->add($letter);
        $letter->setLetterLine($this);
    }

    /**
     * @param Letter $letter
     */
    public function removeLetter(Letter $letter)
    {
        $this->letters->removeElement($letter);
        $letter->setLetterLine(null);
    }
}
