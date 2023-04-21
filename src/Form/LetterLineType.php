<?php

namespace App\Form;

use App\Entity\Letter;
use App\Entity\LetterLine;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class LetterLineType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name', TextType::class, [
            'label' => 'Name',
            'required' => false,
        ]);
        $builder->add('letters', EntityType::class, [
            'label' => 'Letter',
            'class' => Letter::class,
            'choice_label' => function(Letter $letter) {
                $result = $letter->getSound();
                $group = [];
                foreach ($letter->getTags() as $tag) {
                    if ($tag->getHasGroupColor()) {
                        $group []= $tag->getName();
                    }
                }
                if (count($group) > 0) {
                    $result .= ' (' . implode(',', $group) . ')';
                }
                $result .= ' => ' . $letter->getLetter();
                return $result;
            },
            'multiple' => true,
            'expanded' => false,
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => LetterLine::class
        ]);
    }

}
