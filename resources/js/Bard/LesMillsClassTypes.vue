<script setup>
import {Button, Popover} from '@statamic/cms/ui';
import {computed} from 'vue';

const props = defineProps({
    button: Object,
    active: Boolean,
    variant: String,
    config: Object,
    bard: {},
    editor: {},
})

const classTypes = [
    {
        key: 'bodyattack',
        name: 'BodyAttack',
        colour: '#FCC500'
    },
    {
        key: 'bodybalance',
        name: 'BodyBalance',
        colour: '#b9d47d'
    },
    {
        key: 'bodypump',
        name: 'BodyPump',
        colour: '#ea4851'
    },
    {
        key: 'bodyvive',
        name: 'BodyVive',
        colour: '#752f8b'
    },
    {
        key: 'cxworx',
        name: 'CXWORX',
        colour: '#e75204'
    },
    {
        key: 'les-mills-core',
        name: 'Les Mills Core',
        colour: '#444444'
    },
    {
        key: 'les-mills-tone',
        name: 'Les Mills Tone',
        colour: '#777777'
    }
];

const setClassType = function (classType) {
    if (classType === currentClassType.value) {
        props.editor.chain().focus().removeLesMillsClassType().run()
    } else {
        props.editor.chain().focus().addLesMillsClassType({classType: classType}).run()
    }
}

const currentClassType = computed(() => {
    return props.editor.getAttributes('lesMillsClassType').classType;
});

</script>
<template>
    <Popover class="les-mills-class-types" align="start" :inset="true">
        <template #trigger>
            <Button
                class="px-2!"
                :class="{ active }"
                variant="ghost"
                size="sm"
                :aria-label="button.text"
                v-tooltip="button.text"
            >
                <ui-icon :name="button.svg" v-if="button.svg" class="size-4"/>
                <div class="flex items-center" v-html="button.html" v-if="button.html"/>
            </Button>
        </template>
        <button v-for="(classType) in classTypes"
                class="text-left px-3 py-2 w-full hover:bg-gray-100 flex gap-x-3 items-center"
                @click="setClassType(classType.key)"
                :class="{ 'bg-gray-200' : classType.key === currentClassType }">
            <span class="block size-4 rounded-full flex-none" :style="{
                'background-color': classType.colour
            }"></span>
            <span class="block text-sm text-left whitespace-nowrap">{{ classType.name }}</span>
        </button>
    </Popover>
</template>
<style>
.les-mills-class-types {
    width: auto !important;
}
</style>