<template>
    <div class="inline-block relative">
        <button
            class="bard-toolbar-button"
            :class="{ 'active': currentKey || showOptions }"
            v-html="button.html"
            v-tooltip="button.text"
            @click="showOptions = !showOptions"
        ></button>
        <div class="absolute bg-white border border-gray-300 rounded-sm z-10 divide-y divide-gray-100 shadow-lg"
             v-if="showOptions" v-click-outside="closeClassTypeMenu">
            <button v-for="(type, key) in classTypes" 
                    class="text-left px-3 py-2 w-full hover:bg-gray-100 flex items-center" 
                    @click="setClassType(key)"
                    :class="{ 'bg-gray-200' : key == currentKey }">
                <span class="block w-4 h-4 mr-3 flex-none" :style="'background-color: ' + type.colour"></span>
                <span class="block text-left whitespace-nowrap">{{ type.name }}</span>
            </button>
        </div>
    </div>
</template>
<script>
import vClickOutside from 'v-click-outside'

export default {
    directives: {
        clickOutside: vClickOutside.directive
    },
    mixins: [BardToolbarButton],
    computed: {
        classTypes() {
            return {
                'bodyattack': {
                    name: 'BodyAttack',
                    colour: '#FCC500'
                },
                'bodybalance': {
                    name: 'BodyBalance',
                    colour: '#b9d47d'
                },
                'bodypump': {
                    name: 'BodyPump',
                    colour: '#ea4851'
                },
                'bodyvive': {
                    name: 'BodyVive',
                    colour: '#752f8b'
                },
                'cxworx': {
                    name: 'CXWORX',
                    colour: '#e75204'
                },
                'les-mills-core': {
                    name: 'Les Mills Core',
                    colour: '#444444'
                },
                'les-mills-tone': {
                    name: 'Les Mills Tone',
                    colour: '#777777'
                }
            };
        },
        currentKey() {
            return '';
            return this.editor.getMarkAttrs('lesMillsClassType').key;
        }
    },
    data() {
        return {
            showOptions: false
        };
    },
    methods: {
        closeClassTypeMenu() {
            // close the menu
            this.showOptions = false;
        },
        setClassType(classTypeKey) {
            // update the editor
            this.editor.commands.setClassType({
                key: classTypeKey == this.currentKey ? false : classTypeKey
            })

            // hide the menu
            this.showOptions = false;
        },
    }
};
</script>