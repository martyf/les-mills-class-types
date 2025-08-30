import LesMillsClassTypes from "./Bard/LesMillsClassTypes";
import LesMillsClassTypesButton from "./Bard/LesMillsClassTypes.vue";

Statamic.booting(() => {
    Statamic.$bard.addExtension(({tiptap}) => LesMillsClassTypes(tiptap));
    Statamic.$bard.buttons((buttons, button) => {
        return button({
            name: 'lesmillsclass',
            text: 'Les Mills Class Type',
            html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="currentColor"><path d="M7.6 17.295c-.03.32.22.76.65.76H22.5l-.76 4.82H3.87c-1.76 0-2.47-1.6-2.36-2.58l2.93-19.17h5.58l-2.41 16.17"/></svg>',
            component: LesMillsClassTypesButton,
            active: editor => editor.isActive('lesMillsClassType')
        });
    });
});