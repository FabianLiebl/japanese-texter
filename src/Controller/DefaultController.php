<?php

namespace App\Controller;

use App\Entity\Tag;
use App\Repository\LetterLineRepository;
use App\Repository\LetterRepository;
use App\Repository\TagRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DefaultController extends AbstractController
{
    /** @var TagRepository */
    private $tagRepository;

    /** @var LetterRepository */
    private $letterRepository;

    /** @var LetterLineRepository */
    private $letterLineRepository;

    /** @var EntityManagerInterface */
    private $entityManager;

    /**
     * @param TagRepository $tagRepository
     * @param LetterRepository $letterRepository
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(TagRepository $tagRepository, LetterRepository $letterRepository, LetterLineRepository $letterLineRepository, EntityManagerInterface $entityManager)
    {
        $this->tagRepository = $tagRepository;
        $this->letterRepository = $letterRepository;
        $this->letterLineRepository = $letterLineRepository;
        $this->entityManager = $entityManager;
    }

    public function indexAction()
    {
        $favoriteTags = $this->tagRepository->findBy(['favorite' => true], ['position' => 'asc']);
        $tags = $this->tagRepository->findBy(['favorite' => false], ['position' => 'asc']);

//        $favoriteLetters = $this->letterRepository->findBy(['favorite' => true], ['position' => 'asc']);
        $lines = $this->letterLineRepository->findBy([], ['position' => 'asc']);
//        $letters = $this->letterRepository->findBy(['favorite' => false, 'letterLine' => null], ['position' => 'asc']);

        return $this->render('theme/default/index.html.twig', [
            'favoriteTags' => $favoriteTags,
            'tags' => $tags,
//            'favoriteLetters' => $favoriteLetters,
//            'letters' => $letters,
            'lines' => $lines,
        ]);
    }

    public function favoriteTag(Request $request)
    {
        $id = $request->get('id');
        /** @var Tag $tag */
        $tag = $this->tagRepository->find($id);
        if (!$tag) {
            throw new NotFoundHttpException();
        }

        $tag->setFavorite(true);
        $this->entityManager->flush();

        return new JsonResponse([
            'success' => true
        ]);
    }

    public function unfavoriteTag(Request $request)
    {
        $id = $request->get('id');
        /** @var Tag $tag */
        $tag = $this->tagRepository->find($id);
        if (!$tag) {
            throw new NotFoundHttpException();
        }

        $tag->setFavorite(false);
        $this->entityManager->flush();

        return new JsonResponse([
            'success' => true
        ]);
    }

    public function favoriteLetter(Request $request)
    {
        $id = $request->get('id');
        /** @var Letter $letter */
        $letter = $this->letterRepository->find($id);
        if (!$letter) {
            throw new NotFoundHttpException();
        }

        $letter->setFavorite(true);
        $this->entityManager->flush();

        return new JsonResponse([
            'success' => true
        ]);
    }

    public function unfavoriteLetter(Request $request)
    {
        $id = $request->get('id');
        /** @var Letter $letter */
        $letter = $this->letterRepository->find($id);
        if (!$letter) {
            throw new NotFoundHttpException();
        }

        $letter->setFavorite(false);
        $this->entityManager->flush();

        return new JsonResponse([
            'success' => true
        ]);
    }
}
