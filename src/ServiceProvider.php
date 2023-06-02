<?php

namespace MartyFriedel\LesMillsClassTypes;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/les-mills-class-types.js',
    ];

    protected $stylesheets = [
        __DIR__.'/../dist/css/les-mills-class-types.css'
    ];

    public function bootAddon()
    {
        Augmentor::addExtension('lesMillsClassType', new LesMillsClassType());
    }
}
