<?php

namespace App\Controller;

use App\Entity\TrainingLetter;
use App\Manager\TrainingManager;
use App\Repository\TrainingRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class TrainingController extends AbstractController
{
    /** @var TrainingRepository */
    private $trainingRepository;

    /** @var TrainingManager */
    private $trainingManager;

    /** @var EntityManagerInterface */
    private $entityManager;

    public function __construct(
        TrainingRepository $trainingRepository,
        TrainingManager $trainingManager,
        EntityManagerInterface $entityManager
    )
    {
        $this->trainingRepository = $trainingRepository;
        $this->trainingManager = $trainingManager;
        $this->entityManager = $entityManager;
    }

    public function indexAction(Request $request)
    {
        $trainings = $this->trainingRepository->findAll();

        return $this->render('theme/training/index.html.twig', [
            'trainings' => $trainings,
        ]);
    }

    public function trainAction(Request $request)
    {
        $slug = $request->get('slug');
        $type = $request->get('type');

        $training = $this->trainingRepository->findOneBy([
            'slug' => $slug,
        ]);

        if (!$training) {
            throw new NotFoundHttpException();
        }
        if (!in_array($type, TrainingManager::TRAINING_TYPES)) {
            throw new NotFoundHttpException();
        }

        $trainingBatch = $this->trainingManager->createTrainingBatch($training, $type);

        return $this->render('theme/training/train.html.twig', [
            'training' => $training,
            'trainingBatch' => $trainingBatch,
        ]);
    }

    public function listLettersAction(Request $request)
    {
        $slug = $request->get('slug');

        $training = $this->trainingRepository->findOneBy([
            'slug' => $slug,
        ]);

        if (!$training) {
            throw new NotFoundHttpException();
        }

        return $this->render('theme/training/list-letters.html.twig', [
            'training' => $training,
        ]);
    }

    public function adjustLetterScoreAction(Request $request)
    {
        $letterId = $request->get('letterId');
        $correct = $request->get('correct') == '1';

        /** @var ?TrainingLetter $letter */
        $letter = $this->entityManager->getRepository(TrainingLetter::class)->find($letterId);
        if (!$letter) {
            throw new NotFoundHttpException();
        }

        $this->trainingManager->adjustLetterScore($letter, $correct);
        $this->entityManager->flush();

        return new JsonResponse([
            'success' => true,
        ]);
    }

    public function changeLetterScoreAction(Request $request)
    {
        $letterId = $request->get('letterId');
        $value = $request->get('value');

        /** @var ?TrainingLetter $letter */
        $letter = $this->entityManager->getRepository(TrainingLetter::class)->find($letterId);
        if (!$letter) {
            throw new NotFoundHttpException();
        }

        $this->trainingManager->changeLetterScore($letter, intval($value));
        $this->entityManager->flush();

        return new JsonResponse([
            'success' => true,
            'score' => $letter->getScore(),
            'scoreClass' => $letter->getScoreClass(),
        ]);
    }

    public function toggleLetterActiveAction(Request $request)
    {
        $letterId = $request->get('letterId');

        /** @var ?TrainingLetter $letter */
        $letter = $this->entityManager->getRepository(TrainingLetter::class)->find($letterId);
        if (!$letter) {
            throw new NotFoundHttpException();
        }

        $this->trainingManager->toggleLetterActive($letter);
        $this->entityManager->flush();

        return new JsonResponse([
            'success' => true,
            'letterActive' => $letter->isActive(),
        ]);
    }
}
