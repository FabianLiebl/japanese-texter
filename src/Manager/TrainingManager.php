<?php

namespace App\Manager;

use App\Entity\Training;
use App\Entity\TrainingLetter;
use App\Model\TrainingBatch;
use App\Model\TrainingBatchChoice;
use App\Model\TrainingBatchEntry;

class TrainingManager
{
    const TRAINING_TYPE_SOUND_LETTER = 'sound-letter';
    const TRAINING_TYPE_LETTER_SOUND = 'letter-sound';
    const TRAINING_TYPE_RANDOM = 'random';

    const TRAINING_TYPES = [
        self::TRAINING_TYPE_SOUND_LETTER,
        self::TRAINING_TYPE_LETTER_SOUND,
        self::TRAINING_TYPE_RANDOM,
    ];

    const NUM_ENTRIES = 10;
    const NUM_CHOICES_PER_ENTRY = 12;

    const SCORE_BASE = 30;
    const SCORE_MAX = 60;
    const SCORE_ADJUSTMENT_CORRECT = -1;
    const SCORE_ADJUSTMENT_WRONG = 5;
    const SCORE_GOOD = 10;
    const SCORE_MID = 20;

    public function createTrainingBatch(Training $training, string $type): TrainingBatch
    {
        $letters = $this->chooseLettersByScore($training);
        if ($type === self::TRAINING_TYPE_RANDOM) {
            if (random_int(0, 1) === 0) {
                $type = self::TRAINING_TYPE_SOUND_LETTER;
            } else {
                $type = self::TRAINING_TYPE_LETTER_SOUND;
            }
        }

        if ($type === self::TRAINING_TYPE_SOUND_LETTER) {
            return $this->createTrainingBatchSoundLetter($training, $letters);
        } else {
            return $this->createTrainingBatchLetterSound($training, $letters);
        }
    }

    public function adjustLetterScore(TrainingLetter $letter, bool $correct)
    {
        $adjustment = $correct ? self::SCORE_ADJUSTMENT_CORRECT : self::SCORE_ADJUSTMENT_WRONG;
        $letter->setScore(max(1, min(self::SCORE_MAX, $letter->getScore() + $adjustment)));
    }

    public function changeLetterScore(TrainingLetter $letter, int $value)
    {
        $letter->setScore(max(1, min(self::SCORE_MAX, $letter->getScore() + $value)));
    }

    public function toggleLetterActive(TrainingLetter $letter)
    {
        $letter->setActive(!$letter->isActive());
    }

    private function chooseLettersByScore(Training $training): array
    {
        $result = [];
        $totalScore = 0;
        $letterList = [];
        foreach($training->getLetters() as $letter) {
            if ($letter->isActive()) {
                $totalScore += $letter->getScore();
                $letterList []= $letter;
            }
        }

        $numEntries = min(self::NUM_ENTRIES, count($letterList));

        for($entryIndex = 0; $entryIndex < $numEntries; $entryIndex++) {
            if (count($letterList) === 0) {
                break;
            }

            $rand = random_int(0, $totalScore - 1);
            $letterIndex = 0;
            while (isset($letterList[$letterIndex]) && $rand >= $letterList[$letterIndex]->getScore()) {
                $rand -= $letterList[$letterIndex]->getScore();
                $letterIndex++;
            }
            if (isset($letterList[$letterIndex])) {
                $result []= $letterList[$letterIndex];
                $totalScore -= $letterList[$letterIndex]->getScore();
                unset($letterList[$letterIndex]);
                $letterList = array_values($letterList);
            }
        }

        shuffle($result);
        return $result;
    }

    private function createTrainingBatchSoundLetter(Training $training, array $letters): TrainingBatch
    {
        $result = new TrainingBatch();
        $result->setType(self::TRAINING_TYPE_SOUND_LETTER);

        $entries = [];
        /** @var TrainingLetter $letter */
        foreach($letters as $letter) {
            $entry = new TrainingBatchEntry(
                $letter->getLetter()->getSound(),
                $letter->getLetter()->getLetter(),
                $this->getRandomChoices($training, $letter, false),
                $letter->getId()
            );
            $entries []= $entry;
        }
        $result->setEntries($entries);
        return $result;
    }

    private function createTrainingBatchLetterSound(Training $training, array $letters): TrainingBatch
    {
        $result = new TrainingBatch();
        $result->setType(self::TRAINING_TYPE_LETTER_SOUND);

        $entries = [];
        /** @var TrainingLetter $letter */
        foreach($letters as $letter) {
            $entry = new TrainingBatchEntry(
                $letter->getLetter()->getLetter(),
                $letter->getLetter()->getSound(),
                $this->getRandomChoices($training, $letter, true),
                $letter->getId()
            );
            $entries []= $entry;
        }
        $result->setEntries($entries);
        return $result;
    }

    private function getRandomChoices(Training $training, TrainingLetter $correct, bool $sound): array
    {
        $allLetters = [];
        foreach($training->getLetters() as $letter) {
            if ($sound) {
                $value = $letter->getLetter()->getSound();
                $correctValue = $correct->getLetter()->getSound();
            } else {
                $value = $letter->getLetter()->getLetter();
                $correctValue = $correct->getLetter()->getLetter();
            }
            if ($value !== $correctValue) {
                $allLetters []= $letter;
            }
        }

        $resultLetters = [];
        if (self::NUM_CHOICES_PER_ENTRY <= 0) {
            $resultLetters = $allLetters;
        } else {
            $numChoices = min(self::NUM_CHOICES_PER_ENTRY - 1, count($allLetters));

            shuffle($allLetters);
            for($i = 0; $i < $numChoices; $i++) {
                $resultLetters []= $allLetters[$i];
            }
        }
        $resultLetters []= $correct;
        shuffle($resultLetters);

        $resultTrainingBatchChoices = [];
        foreach($resultLetters as $resultLetter) {
            if ($sound) {
                $value = $resultLetter->getLetter()->getSound();
            } else {
                $value = $resultLetter->getLetter()->getLetter();
            }
            $resultTrainingBatchChoices []= new TrainingBatchChoice($value, $resultLetter->getId());
        }

        return $resultTrainingBatchChoices;
    }
}
