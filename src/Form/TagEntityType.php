<?php

namespace App\Form;

use App\Entity\Tag;
use App\Repository\TagRepository;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TagEntityType extends AbstractType
{
    /** @var TagRepository */
    private $tagRepository;

    /**
     * @param TagRepository $tagRepository
     */
    public function __construct(TagRepository $tagRepository)
    {
        $this->tagRepository = $tagRepository;
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $iconList = [];
        $tags = $this->tagRepository->findAll();
        /** @var Tag $tag */
        foreach($tags as $tag) {
            $iconList[$tag->getId()] = $tag->getIcon();
        }

        $view->vars['iconList'] = $iconList;
    }

    public function getParent()
    {
        return EntityType::class;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'class' => Tag::class,
            'choice_label' => 'name',
            'query_builder' => function(EntityRepository $entityRepository) {
                return $entityRepository
                    ->createQueryBuilder('tag')
                    ->orderBy('tag.position', 'asc');
            },
            'multiple' => true,
            'expanded' => true
        ]);
    }
}
