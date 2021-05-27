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

    protected $publishables = [
        __DIR__.'/../dist/css/fonts' => 'css/fonts'
    ];

    public function boot()
    {
        parent::boot();
        Augmentor::addMark(LesMillsClassType::class);
    }
}
