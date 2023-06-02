<?php

namespace MartyFriedel\LesMillsClassTypes;

use Tiptap\Core\Mark; 
use Tiptap\Utils\HTML; 

class LesMillsClassType extends Mark
{
    public static $name = 'lesMillsClassType';

    public function renderHTML($mark, $attributes = [])
    {
        return [
            'span', 
            HTML::mergeAttributes([
                'class' => 'les-mills-class '.$mark->attrs->key
            ], $attributes),
            0 
        ];
    }
}
