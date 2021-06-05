const {core: commands} = Statamic.$bard.tiptap;
const {markInputRule} = commands;

export default class LesMillsClassTypes {
    name() {
        return "lesMillsClassType";
    }

    schema() {
        return {
            attrs: {
                key: '',
            },
            parseDOM: [
                {
                    tag: "span.les-mills-class",
                    getAttrs: (value) => ({key: value}),
                }
            ],
            toDOM: (mark) => [
                "span",
                {
                    'class': 'les-mills-class ' + mark.attrs.key,
                    'data-class': mark.attrs.key
                },
                0,
            ],
        };
    }

    commands({type, updateMark}) {
        return (attrs) => updateMark(type, attrs);
    }

    inputRules({type}) {
        return [];
    }

    pasteRules({type}) {
        return [];
    }

    plugins() {
        return [];
    }
}
