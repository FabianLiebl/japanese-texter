<?php

namespace App\Form;

use App\Entity\Tag;
use Enhavo\Bundle\MediaBundle\Form\Type\MediaType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TagType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name', TextType::class,[
            'label' => 'Name',
            'required' => false
        ]);

        $builder->add('orGroup', TextType::class,[
            'label' => 'Or Group',
            'required' => false
        ]);

        $builder->add('icon', MediaType::class, [
            'label' => 'Icon',
            'multiple' => false,
            'required' => false
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Tag::class
        ]);
    }
}
