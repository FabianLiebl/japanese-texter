<?php

namespace App\Twig;

use Symfony\Component\Asset\Packages;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Symfony\WebpackEncoreBundle\Asset\TagRenderer;

class TagRendererWithAssetsVersion extends TagRenderer
{
    private $assetsVersion;

    public function __construct(
        $entrypointLookupCollection,
        Packages $packages,
        $assetsVersion,
        array $defaultAttributes = [],
        array $defaultScriptAttributes = [],
        array $defaultLinkAttributes = [],
        EventDispatcherInterface $eventDispatcher = null
    ){
        $this->assetsVersion = $assetsVersion;
        parent::__construct(
            $entrypointLookupCollection,
            $packages,
            $defaultAttributes,
            $defaultScriptAttributes,
            $defaultLinkAttributes,
            $eventDispatcher
        );
    }

    public function renderWebpackScriptTags(string $entryName, string $packageName = null, string $entrypointName = null, array $extraAttributes = []): string
    {
        $result = parent::renderWebpackScriptTags($entryName, $packageName, $entrypointName, $extraAttributes);
        $result = preg_replace('/">/', '?' . $this->assetsVersion . '">', $result);
        return $result;
    }

    public function renderWebpackLinkTags(string $entryName, string $packageName = null, string $entrypointName = null, array $extraAttributes = []): string
    {
        $result = parent::renderWebpackLinkTags($entryName, $packageName, $entrypointName, $extraAttributes);
        $result = preg_replace('/">/', '?' . $this->assetsVersion . '">', $result);
        return $result;
    }
}
