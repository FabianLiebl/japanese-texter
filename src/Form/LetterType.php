<?php

namespace App\Form;

use App\Entity\Letter;
use App\Entity\LetterLine;
use App\Entity\Tag;
use Enhavo\Bundle\FormBundle\Form\Type\AutoCompleteEntityType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class LetterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('letter', TextType::class, [
            'label' => 'Letter',
            'required' => false
        ]);

        $builder->add('sound', TextType::class, [
            'label' => 'Sound',
            'required' => false
        ]);

        $builder->add('letterLine', AutoCompleteEntityType::class, [
            'label' => 'Line',
            'class' => LetterLine::class,
            'multiple' => false,
            'choice_label' => 'name',
            'route' => 'app_letter_line_auto_complete',
            'placeholder' => '---'
        ]);

        $builder->add('tags', TagEntityType::class, [
            'label' => 'Tags',
            'required' => false
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Letter::class
        ]);
    }
}
