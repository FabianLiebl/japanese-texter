<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Enhavo\Bundle\MediaBundle\Model\FileInterface;
use Sylius\Component\Resource\Model\ResourceInterface;

class Tag implements ResourceInterface
{
    /** @var ?int */
    private $id;

    /** @var ?string */
    private $name;

    /** @var ?string */
    private $orGroup;

    /** @var bool */
    private $favorite = false;

    /** @var ?int */
    private $position;

    /** @var ?FileInterface */
    private $icon;

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
     * @return string|null
     */
    public function getOrGroup(): ?string
    {
        return $this->orGroup;
    }

    /**
     * @param string|null $orGroup
     */
    public function setOrGroup(?string $orGroup): void
    {
        $this->orGroup = $orGroup;
    }

    /**
     * @return bool
     */
    public function isFavorite(): bool
    {
        return $this->favorite;
    }

    /**
     * @param bool $favorite
     */
    public function setFavorite(bool $favorite): void
    {
        $this->favorite = $favorite;
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
     * @return FileInterface|null
     */
    public function getIcon(): ?FileInterface
    {
        return $this->icon;
    }

    /**
     * @param FileInterface|null $icon
     */
    public function setIcon(?FileInterface $icon): void
    {
        $this->icon = $icon;
    }

    /**
     * @return Letter[]|Collection|null
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
    }

    /**
     * @param Letter $letter
     */
    public function removeLetter(Letter $letter)
    {
        $this->letters->removeElement($letter);
    }
}
