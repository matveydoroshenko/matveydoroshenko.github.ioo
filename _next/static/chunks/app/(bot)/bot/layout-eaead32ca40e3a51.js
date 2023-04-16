(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[479, 548], {
    9695: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 2663)),
        Promise.resolve().then(n.bind(n, 7216)),
        Promise.resolve().then(n.bind(n, 4965))
    },
    7548: function() {},
    5397: function(e) {
        e.exports = {
            default: "bot_default__pTvJK",
            bot: "bot_bot__lFYWP",
            notBot: "bot_notBot__0WCMe"
        }
    },
    7505: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            return {
                mountedInstances: new Set,
                updateHead: e=>{
                    let t = {};
                    e.forEach(e=>{
                        if ("link" === e.type && e.props["data-optimized-fonts"]) {
                            if (document.querySelector('style[data-href="'.concat(e.props["data-href"], '"]')))
                                return;
                            e.props.href = e.props["data-href"],
                            e.props["data-href"] = void 0
                        }
                        let n = t[e.type] || [];
                        n.push(e),
                        t[e.type] = n
                    }
                    );
                    let n = t.title ? t.title[0] : null
                      , a = "";
                    if (n) {
                        let {children: e} = n.props;
                        a = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                    }
                    a !== document.title && (document.title = a),
                    ["meta", "base", "link", "style", "script"].forEach(e=>{
                        (function(e, t) {
                            let n = document.getElementsByTagName("head")[0]
                              , a = n.querySelector("meta[name=next-head-count]")
                              , l = Number(a.content)
                              , i = [];
                            for (let t = 0, n = a.previousElementSibling; t < l; t++,
                            n = (null == n ? void 0 : n.previousElementSibling) || null) {
                                var u;
                                (null == n ? void 0 : null == (u = n.tagName) ? void 0 : u.toLowerCase()) === e && i.push(n)
                            }
                            let s = t.map(r).filter(e=>{
                                for (let t = 0, n = i.length; t < n; t++) {
                                    let n = i[t];
                                    if (o(n, e))
                                        return i.splice(t, 1),
                                        !1
                                }
                                return !0
                            }
                            );
                            i.forEach(e=>{
                                var t;
                                return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                            }
                            ),
                            s.forEach(e=>n.insertBefore(e, a)),
                            a.content = (l - i.length + s.length).toString()
                        }
                        )(e, t[e] || [])
                    }
                    )
                }
            }
        }
        ,
        t.isEqualNode = o,
        t.DOMAttributeNames = void 0;
        let n = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        };
        function r(e) {
            let {type: t, props: r} = e
              , o = document.createElement(t);
            for (let e in r) {
                if (!r.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === r[e])
                    continue;
                let a = n[e] || e.toLowerCase();
                "script" === t && ("async" === a || "defer" === a || "noModule" === a) ? o[a] = !!r[e] : o.setAttribute(a, r[e])
            }
            let {children: a, dangerouslySetInnerHTML: l} = r;
            return l ? o.innerHTML = l.__html || "" : a && (o.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""),
            o
        }
        function o(e, t) {
            if (e instanceof HTMLElement && t instanceof HTMLElement) {
                let n = t.getAttribute("nonce");
                if (n && !e.getAttribute("nonce")) {
                    let r = t.cloneNode(!0);
                    return r.setAttribute("nonce", ""),
                    r.nonce = n,
                    n === e.nonce && e.isEqualNode(r)
                }
            }
            return e.isEqualNode(t)
        }
        t.DOMAttributeNames = n,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    8300: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.cancelIdleCallback = t.requestIdleCallback = void 0;
        let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        }
        ;
        t.requestIdleCallback = n;
        let r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        }
        ;
        t.cancelIdleCallback = r,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    626: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.handleClientScriptLoad = y,
        t.initScriptLoader = function(e) {
            e.forEach(y),
            function() {
                let e = [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')];
                e.forEach(e=>{
                    let t = e.id || e.getAttribute("src");
                    m.add(t)
                }
                )
            }()
        }
        ,
        t.default = void 0;
        var r = n(5996).Z
          , o = n(8644).Z
          , a = n(9536).Z
          , l = n(872).Z
          , i = o(n(8431))
          , u = a(n(6006))
          , s = n(2105)
          , c = n(7505)
          , d = n(8300);
        let f = new Map
          , m = new Set
          , p = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy"]
          , h = e=>{
            let {src: t, id: n, onLoad: r=()=>{}
            , onReady: o=null, dangerouslySetInnerHTML: a, children: l="", strategy: i="afterInteractive", onError: u} = e
              , s = n || t;
            if (s && m.has(s))
                return;
            if (f.has(t)) {
                m.add(s),
                f.get(t).then(r, u);
                return
            }
            let d = ()=>{
                o && o(),
                m.add(s)
            }
              , h = document.createElement("script")
              , y = new Promise((e,t)=>{
                h.addEventListener("load", function(t) {
                    e(),
                    r && r.call(this, t),
                    d()
                }),
                h.addEventListener("error", function(e) {
                    t(e)
                })
            }
            ).catch(function(e) {
                u && u(e)
            });
            for (let[n,r] of (a ? (h.innerHTML = a.__html || "",
            d()) : l ? (h.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : "",
            d()) : t && (h.src = t,
            f.set(t, y)),
            Object.entries(e))) {
                if (void 0 === r || p.includes(n))
                    continue;
                let e = c.DOMAttributeNames[n] || n.toLowerCase();
                h.setAttribute(e, r)
            }
            "worker" === i && h.setAttribute("type", "text/partytown"),
            h.setAttribute("data-nscript", i),
            document.body.appendChild(h)
        }
        ;
        function y(e) {
            let {strategy: t="afterInteractive"} = e;
            "lazyOnload" === t ? window.addEventListener("load", ()=>{
                d.requestIdleCallback(()=>h(e))
            }
            ) : h(e)
        }
        function _(e) {
            let {id: t, src: n="", onLoad: o=()=>{}
            , onReady: a=null, strategy: c="afterInteractive", onError: f} = e
              , p = l(e, ["id", "src", "onLoad", "onReady", "strategy", "onError"])
              , {updateScripts: y, scripts: _, getIsSsr: g, appDir: v, nonce: b} = u.useContext(s.HeadManagerContext)
              , j = u.useRef(!1);
            u.useEffect(()=>{
                let e = t || n;
                j.current || (a && e && m.has(e) && a(),
                j.current = !0)
            }
            , [a, t, n]);
            let w = u.useRef(!1);
            if (u.useEffect(()=>{
                !w.current && ("afterInteractive" === c ? h(e) : "lazyOnload" === c && ("complete" === document.readyState ? d.requestIdleCallback(()=>h(e)) : window.addEventListener("load", ()=>{
                    d.requestIdleCallback(()=>h(e))
                }
                )),
                w.current = !0)
            }
            , [e, c]),
            ("beforeInteractive" === c || "worker" === c) && (y ? (_[c] = (_[c] || []).concat([r({
                id: t,
                src: n,
                onLoad: o,
                onReady: a,
                onError: f
            }, p)]),
            y(_)) : g && g() ? m.add(t || n) : g && !g() && h(e)),
            v) {
                if ("beforeInteractive" === c)
                    return n ? (i.default.preload(n, p.integrity ? {
                        as: "script",
                        integrity: p.integrity
                    } : {
                        as: "script"
                    }),
                    u.default.createElement("script", {
                        nonce: b,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(".concat(JSON.stringify([n]), ")")
                        }
                    })) : (p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html,
                    delete p.dangerouslySetInnerHTML),
                    u.default.createElement("script", {
                        nonce: b,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(".concat(JSON.stringify([0, r({}, p)]), ")")
                        }
                    }));
                "afterInteractive" === c && n && i.default.preload(n, p.integrity ? {
                    as: "script",
                    integrity: p.integrity
                } : {
                    as: "script"
                })
            }
            return null
        }
        Object.defineProperty(_, "__nextScript", {
            value: !0
        }),
        t.default = _,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    7216: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return s
            }
        });
        var r = n(9268);
        function o() {
            return (0,
            r.jsx)("p", {
                children: "Загрузка..."
            })
        }
        var a = n(4965);
        n(7548);
        var l = n(6006)
          , i = n(5397)
          , u = n.n(i);
        function s(e) {
            let {children: t} = e
              , {user: n, webApp: i} = (0,
            a.useTelegram)()
              , s = {
                "--tg-theme-bg-color": null == i ? void 0 : i.themeParams.bg_color,
                "--tg-theme-text-color": null == i ? void 0 : i.themeParams.text_color,
                "--tg-theme-hint-color": null == i ? void 0 : i.themeParams.hint_color,
                "--tg-theme-link-color": null == i ? void 0 : i.themeParams.link_color,
                "--tg-theme-button-color": null == i ? void 0 : i.themeParams.button_color,
                "--tg-theme-button-text-color": null == i ? void 0 : i.themeParams.button_text_color,
                "--tg-theme-secondary-bg-color": null == i ? void 0 : i.themeParams.secondary_bg_color
            };
            return (0,
            r.jsx)("div", {
                className: u().default,
                children: n ? (0,
                r.jsx)("div", {
                    style: s,
                    className: u().notBot,
                    children: (0,
                    r.jsx)(l.Suspense, {
                        fallback: (0,
                        r.jsx)(o, {}),
                        children: t
                    })
                }) : (0,
                r.jsx)("div", {
                    className: u().Bot,
                    children: (0,
                    r.jsx)("h1", {
                        children: "Загрузка..."
                    })
                })
            })
        }
    },
    4965: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            TelegramContext: function() {
                return i
            },
            TelegramProvider: function() {
                return u
            },
            useTelegram: function() {
                return s
            }
        });
        var r = n(9268)
          , o = n(5652)
          , a = n.n(o)
          , l = n(6006);
        let i = (0,
        l.createContext)({})
          , u = e=>{
            let {children: t} = e
              , [n,o] = (0,
            l.useState)(null);
            (0,
            l.useEffect)(()=>{
                var e;
                let t = null === (e = window.Telegram) || void 0 === e ? void 0 : e.WebApp;
                t && (t.ready(),
                o(t))
            }
            , []);
            let u = (0,
            l.useMemo)(()=>n ? {
                webApp: n,
                unsafeData: n.initDataUnsafe,
                user: n.initDataUnsafe.user
            } : {}, [n]);
            return (0,
            r.jsxs)(i.Provider, {
                value: u,
                children: [(0,
                r.jsx)(a(), {
                    src: "https://telegram.org/js/telegram-web-app.js",
                    strategy: "beforeInteractive",
                    className: "hidden"
                }), " ", t]
            })
        }
          , s = ()=>(0,
        l.useContext)(i)
    },
    2663: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return l
            }
        });
        var r = n(9268)
          , o = n(5652)
          , a = n.n(o);
        function l() {
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(a(), {
                    children: '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n   m[i].l=1*new Date();\n   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n   (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");\n\n   ym(90878475, "init", {\n        clickmap:true,\n        trackLinks:true,\n        accurateTrackBounce:true,\n        webvisor:true,\n        trackHash:true\n   });'
                }), (0,
                r.jsx)(a(), {
                    async: !0,
                    src: "https://www.googletagmanager.com/gtag/js?id=G-TSXZ0PJ4BP"
                }), (0,
                r.jsx)(a(), {
                    children: "window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n\n                gtag('config', 'G-TSXZ0PJ4BP');"
                })]
            })
        }
    },
    3177: function(e, t, n) {
        "use strict";
        /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var r = n(6006)
          , o = Symbol.for("react.element")
          , a = Symbol.for("react.fragment")
          , l = Object.prototype.hasOwnProperty
          , i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
          , u = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function s(e, t, n) {
            var r, a = {}, s = null, c = null;
            for (r in void 0 !== n && (s = "" + n),
            void 0 !== t.key && (s = "" + t.key),
            void 0 !== t.ref && (c = t.ref),
            t)
                l.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
            if (e && e.defaultProps)
                for (r in t = e.defaultProps)
                    void 0 === a[r] && (a[r] = t[r]);
            return {
                $$typeof: o,
                type: e,
                key: s,
                ref: c,
                props: a,
                _owner: i.current
            }
        }
        t.Fragment = a,
        t.jsx = s,
        t.jsxs = s
    },
    9268: function(e, t, n) {
        "use strict";
        e.exports = n(3177)
    },
    5652: function(e, t, n) {
        e.exports = n(626)
    }
}, function(e) {
    e.O(0, [264, 679, 744], function() {
        return e(e.s = 9695)
    }),
    _N_E = e.O()
}
]);
