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
                    getAttrs: (dom) => ({
                        key: dom.getAttribute('data-class')
                    })
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

    commands({type, updateMark, removeMark}) {
        return attrs => {
            if (attrs.key) {
                return updateMark(type, attrs)
            }

            return removeMark(type)
        }
    }

    pasteRules({type}) {
        return [];
    }

    plugins() {
        return [];
    }
}