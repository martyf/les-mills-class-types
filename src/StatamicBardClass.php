<?php

namespace MarvelousMartin\StatamicBardClass;

use Tiptap\Core\Mark; 
use Tiptap\Utils\HTML; 

class StatamicBardClass extends Mark
{
    public static $name = 'bardClass';

    public function renderHTML($mark, $attributes = [])
    {
        return [
            'span', 
            HTML::mergeAttributes([
                'class' => 'bard-class '.$mark->attrs->key
            ], $attributes),
            0 
        ];
    }
}
