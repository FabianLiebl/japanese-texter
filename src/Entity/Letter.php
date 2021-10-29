<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Sylius\Component\Resource\Model\ResourceInterface;

class Letter implements ResourceInterface
{
    /** @var ?int */
    private $id;

    /** @var ?string */
    private $letter;

    /** @var ?string */
    private $sound;

    /** @var bool */
    private $favorite = true;

    /** @var ?int */
    private $position;

    /** @var Collection|Tag[]|null */
    private $tags;

    public function __construct()
    {
        $this->tags = new ArrayCollection();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getLetter(): ?string
    {
        return $this->letter;
    }

    /**
     * @param string|null $letter
     */
    public function setLetter(?string $letter): void
    {
        $this->letter = $letter;
    }

    /**
     * @return string|null
     */
    public function getSound(): ?string
    {
        return $this->sound;
    }

    /**
     * @param string|null $sound
     */
    public function setSound(?string $sound): void
    {
        $this->sound = $sound;
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
     * @return Tag[]|Collection|null
     */
    public function getTags()
    {
        return $this->tags;
    }

    /**
     * @param Tag $tag
     */
    public function addTag(Tag $tag)
    {
        $this->tags->add($tag);
        $tag->addLetter($this);
    }

    /**
     * @param Tag $tag
     */
    public function removeTag(Tag $tag)
    {
        $this->tags->removeElement($tag);
        $tag->removeLetter($this);
    }

    /**
     * @return array
     */
    public function getTagIds()
    {
        $result = [];
        foreach($this->tags as $tag) {
            $result [$tag->getId()]= $tag->getId();
        }
        return $result;
    }
}
