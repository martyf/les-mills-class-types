const { Mark, mergeAttributes } = Statamic.$bard.tiptap.core;

export const LesMillsClassTypes = Mark.create({ 
    name: 'lesMillsClassType',

    addAttributes() {
        return {
            key: {
                default: '',
            },
        };
    },

    parseHTML() { 
        return [
                {
                    tag: "span.les-mills-class",
                    getAttrs: (dom) => ({
                        key: dom.getAttribute('data-class')
                    })
                }
            ];
    },

    renderHTML({mark, HTMLAttributes}) {
        return [
                "span",
                mergeAttributes(HTMLAttributes,
                {
                    'class': 'les-mills-class ' + mark.attrs.key,
                    'data-class': mark.attrs.key
                }),
                0,
            ];
    },

    addCommands() {
        return {
            setClassType: (attributes) => ({ commands }) => {
                return commands.toggleMark(this.name, attributes);
            }
        }
    },

    pasteRules({type}) {
        return [];
    },

    plugins() {
        return [];
    }
});