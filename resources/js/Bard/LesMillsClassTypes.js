export default function (tiptap) {

    const {Mark, mergeAttributes} = tiptap.core;

    return Mark.create({
        name: 'lesMillsClassType',

        addAttributes() {
            return {
                classType: {
                    default: '',
                },
            };
        },

        parseHTML() {
            return [
                {
                    tag: "span.les-mills-class",
                    getAttrs: (dom) => ({
                        classType: dom.getAttribute('data-class')
                    })
                }
            ];
        },

        renderHTML({mark, HTMLAttributes}) {
            return [
                "span",
                mergeAttributes(HTMLAttributes,
                    {
                        'class': 'les-mills-class ' + mark.attrs.classType,
                        'data-class': mark.attrs.classType
                    }),
                0,
            ];
        },

        addCommands() {
            return {
                addLesMillsClassType: attributes => ({chain}) => chain().setMark(this.name, attributes).run(),
                removeLesMillsClassType: () => ({chain}) => chain().unsetMark(this.name).run(),
                toggleLesMillsClassType: attributes => ({chain}) => chain().toggleMark(this.name, attributes).run(),
            }
        },
    });
}