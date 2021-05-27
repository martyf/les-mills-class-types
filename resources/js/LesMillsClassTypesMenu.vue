<template>
    <div class="class-type-wrapper">
        <button
            class="bard-toolbar-button"
            :class="{ 'active': showOptions }"
            v-html="button.html"
            v-tooltip="button.text"
            @click="showOptions = !showOptions"
        ></button>
        <div class="class-type-container" v-if="showOptions" v-click-outside="closeClassTypeMenu">
            <button v-for="(type, key) in classTypes" class="class-type-button" @click="setClassType(key)">
                <span class="class-type-mark" :style="'background-color: ' + type.colour"></span>
                <span class="class-type-label">{{ type.name }}</span>
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
            this.editor.commands.lesMillsClassType({
                key: classTypeKey
            })

            // hide the menu
            this.showOptions = false;
        },
    }
};
</script>
<style lang="postcss">
.class-type-wrapper {
    @apply inline-block relative;
}

.class-type-container {
    @apply absolute bg-white border border-gray-300 rounded-sm z-10 divide-y divide-gray-100 shadow-lg;
}

.class-type-button {
    @apply text-left px-3 py-2 w-full hover:bg-gray-100 flex items-center;
}

.class-type-label {
    @apply block text-left whitespace-nowrap;
}

.class-type-mark {
    @apply block w-4 h-4 mr-3 flex-none;
}
</style>
