<?php

namespace MartyFriedel\LesMillsClassTypes;

use ProseMirrorToHtml\Marks\Mark;

class LesMillsClassType extends Mark
{
    protected $markType = 'lesMillsClassType';
    protected $tagName = 'span';

    public function matching(): bool
    {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array
    {
        return [
            [
                'tag'   => 'span',
                'attrs' => [
                    'class' => 'les-mills-class '.$this->mark->attrs->key
                ],
            ],
        ];
    }
}
