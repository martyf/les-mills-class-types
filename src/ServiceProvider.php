<?php

namespace MartyFriedel\LesMillsClassTypes;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $vite = [
        'input' => [
            'resources/css/les-mills-class-types.css',
            'resources/js/cp.js',
        ],
        'publicDirectory' => 'resources/dist',
    ];

    public function bootAddon()
    {
        Augmentor::addExtension('lesMillsClassType', new LesMillsClassType());
    }
}
