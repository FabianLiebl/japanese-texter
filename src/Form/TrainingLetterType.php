<?php

namespace App\Form;

use App\Entity\Letter;
use App\Entity\TrainingLetter;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TrainingLetterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('letter', EntityType::class, [
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
            'multiple' => false,
            'expanded' => false,
        ]);
        $builder->add('score', NumberType::class, [
            'label' => 'Current score',
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => TrainingLetter::class,
        ]);
    }
}
