import LesMillsClassTypes from "./LesMillsClassTypes";
import LesMillsClassTypesMenu from "./LesMillsClassTypesMenu.vue";

Statamic.$bard.extend(({mark}) => mark(new LesMillsClassTypes()));
Statamic.$bard.buttons(() => {
    return {
        name: 'lesmillsclass',
        text: 'Les Mills Class Type',
        command: 'classType',
        args: {
            key: ""
        },
        icon: 'les-mills',
        component: LesMillsClassTypesMenu
    };
});
