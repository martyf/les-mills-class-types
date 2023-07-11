(() => {
    var e = {
        536: function (e) {
            e.exports = function () {
                var e = "__v-click-outside", t = "undefined" != typeof window, n = "undefined" != typeof navigator,
                    r = t && ("ontouchstart" in window || n && navigator.msMaxTouchPoints > 0) ? ["touchstart"] : ["click"];

                function o(e) {
                    var t = e.event, n = e.handler;
                    (0, e.middleware)(t) && n(t)
                }

                function a(t, n) {
                    var a = function (e) {
                        var t = "function" == typeof e;
                        if (!t && "object" != typeof e) throw new Error("v-click-outside: Binding value must be a function or an object");
                        return {
                            handler: t ? e : e.handler,
                            middleware: e.middleware || function (e) {
                                return e
                            },
                            events: e.events || r,
                            isActive: !(!1 === e.isActive),
                            detectIframe: !(!1 === e.detectIframe),
                            capture: !!e.capture
                        }
                    }(n.value), s = a.handler, i = a.middleware, c = a.detectIframe, l = a.capture;
                    if (a.isActive) {
                        if (t[e] = a.events.map((function (e) {
                            return {
                                event: e, srcTarget: document.documentElement, handler: function (e) {
                                    return function (e) {
                                        var t = e.el, n = e.event, r = e.handler, a = e.middleware,
                                            s = n.composedPath && n.composedPath() || n.path;
                                        (s ? s.indexOf(t) < 0 : !t.contains(n.target)) && o({
                                            event: n,
                                            handler: r,
                                            middleware: a
                                        })
                                    }({el: t, event: e, handler: s, middleware: i})
                                }, capture: l
                            }
                        })), c) {
                            var u = {
                                event: "blur", srcTarget: window, handler: function (e) {
                                    return function (e) {
                                        var t = e.el, n = e.event, r = e.handler, a = e.middleware;
                                        setTimeout((function () {
                                            var e = document.activeElement;
                                            e && "IFRAME" === e.tagName && !t.contains(e) && o({
                                                event: n,
                                                handler: r,
                                                middleware: a
                                            })
                                        }), 0)
                                    }({el: t, event: e, handler: s, middleware: i})
                                }, capture: l
                            };
                            t[e] = [].concat(t[e], [u])
                        }
                        t[e].forEach((function (n) {
                            var r = n.event, o = n.srcTarget, a = n.handler;
                            return setTimeout((function () {
                                t[e] && o.addEventListener(r, a, l)
                            }), 0)
                        }))
                    }
                }

                function s(t) {
                    (t[e] || []).forEach((function (e) {
                        return e.srcTarget.removeEventListener(e.event, e.handler, e.capture)
                    })), delete t[e]
                }

                var i = t ? {
                    bind: a, update: function (e, t) {
                        var n = t.value, r = t.oldValue;
                        JSON.stringify(n) !== JSON.stringify(r) && (s(e), a(e, {value: n}))
                    }, unbind: s
                } : {};
                return {
                    install: function (e) {
                        e.directive("click-outside", i)
                    }, directive: i
                }
            }()
        }
    }, t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var a = t[r] = {exports: {}};
        return e[r].call(a.exports, a, a.exports, n), a.exports
    }

    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {a: t}), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        var e = Statamic.$bard.tiptap.core, t = e.Mark, r = e.mergeAttributes, o = t.create({
            name: "bardClass", addAttributes: function () {
                return {key: {default: ""}}
            }, parseHTML: function () {
                return [{
                    tag: "span.bard-class", getAttrs: function (e) {
                        return {key: e.getAttribute("data-class")}
                    }
                }]
            }, renderHTML: function (e) {
                var t = e.mark, n = e.HTMLAttributes;
                return ["span", r(n, {class: "bard-class " + t.attrs.key, "data-class": t.attrs.key}), 0]
            }, addCommands: function () {
                var e = this;
                return {
                    setClassType: function (t) {
                        return function (n) {
                            return n.commands.toggleMark(e.name, t)
                        }
                    }
                }
            }, pasteRules: function (e) {
                e.type;
                return []
            }, plugins: function () {
                return []
            }
        }), a = n(536);
        var s = function (e, t, n, r, o, a, s, i) {
            var c, l = "function" == typeof e ? e.options : e;
            if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), a && (l._scopeId = "data-v-" + a), s ? (c = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
            }, l._ssrRegister = c) : o && (c = i ? function () {
                o.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot)
            } : o), c) if (l.functional) {
                l._injectStyles = c;
                var u = l.render;
                l.render = function (e, t) {
                    return c.call(t), u(e, t)
                }
            } else {
                var d = l.beforeCreate;
                l.beforeCreate = d ? [].concat(d, c) : [c]
            }
            return {exports: e, options: l}
        }({
            directives: {clickOutside: n.n(a)().directive},
            mixins: [BardToolbarButton],
            computed: {
                classTypes: function () {
                    return {
                        warning: {name: "Pozor", colour: "#f91925"},
                        done: {name: "Vyřešeno", colour: "#27d508"},
                        important: {name: "Důležité", colour: "#752f8b"},
                        mute: {name: "Potlačeno", colour: "#777777"},
                        interesting: {name: "Zajímavé", colour: "#ff7d0a"}
                    }
                }, currentKey: function () {
                    return this.editor.getAttributes("bardClass").key
                }
            },
            data: function () {
                return {showOptions: !1}
            },
            methods: {
                closeClassTypeMenu: function () {
                    this.showOptions = !1
                }, setClassType: function (e) {
                    this.editor.commands.setClassType({key: e !== this.currentKey && e}), this.showOptions = !1
                }
            }
        }, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "inline-block relative"}, [n("button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.button.text,
                    expression: "button.text"
                }],
                staticClass: "bard-toolbar-button",
                class: {active: e.currentKey || e.showOptions},
                domProps: {innerHTML: e._s(e.button.html)},
                on: {
                    click: function (t) {
                        e.showOptions = !e.showOptions
                    }
                }
            }), e._v(" "), e.showOptions ? n("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: e.closeClassTypeMenu,
                    expression: "closeClassTypeMenu"
                }],
                staticClass: "absolute bg-white border border-gray-300 rounded-sm z-10 divide-y divide-gray-100 shadow-lg"
            }, e._l(e.classTypes, (function (t, r) {
                return n("button", {
                    staticClass: "text-left px-3 py-2 w-full hover:bg-gray-100 flex items-center",
                    class: {"bg-gray-200": r == e.currentKey},
                    on: {
                        click: function (t) {
                            return e.setClassType(r)
                        }
                    }
                }, [n("span", {
                    staticClass: "block w-4 h-4 mr-3 flex-none",
                    style: "background-color: " + t.colour
                }), e._v(" "), n("span", {staticClass: "block text-left whitespace-nowrap"}, [e._v(e._s(t.name))])])
            })), 0) : e._e()])
        }), [], !1, null, null, null);
        const i = s.exports;
        Statamic.$bard.addExtension((function () {
            return o
        })), Statamic.$bard.buttons((function (e, t) {
            return t({
                name: "bard-class-button",
                text: "Zvýraznit text",
                args: {key: ""},
                html: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 576 512" fill="currentColor"><path d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H208c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"/></svg>',
                component: i
            })
        }))
    })()
})();