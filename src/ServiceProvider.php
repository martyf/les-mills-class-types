<?php

namespace MarvelousMartin\StatamicBardClass;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/bard-class.js',
    ];

    protected $stylesheets = [
        __DIR__.'/../dist/css/bard-class.css'
    ];

    public function bootAddon()
    {
        Augmentor::addExtension('bardClass', new StatamicBardClass());
    }
}
