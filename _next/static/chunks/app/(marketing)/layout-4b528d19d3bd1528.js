(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [41, 548],
  {
    4724: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 2104, 23)),
        Promise.resolve().then(n.t.bind(n, 626, 23)),
        Promise.resolve().then(n.bind(n, 692)),
        Promise.resolve().then(n.bind(n, 2663));
    },
    7548: function () {},
    7505: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          return {
            mountedInstances: new Set(),
            updateHead: (e) => {
              let t = {};
              e.forEach((e) => {
                if ("link" === e.type && e.props["data-optimized-fonts"]) {
                  if (
                    document.querySelector(
                      'style[data-href="'.concat(e.props["data-href"], '"]')
                    )
                  )
                    return;
                  (e.props.href = e.props["data-href"]),
                    (e.props["data-href"] = void 0);
                }
                let n = t[e.type] || [];
                n.push(e), (t[e.type] = n);
              });
              let n = t.title ? t.title[0] : null,
                o = "";
              if (n) {
                let { children: e } = n.props;
                o =
                  "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "";
              }
              o !== document.title && (document.title = o),
                ["meta", "base", "link", "style", "script"].forEach((e) => {
                  (function (e, t) {
                    let n = document.getElementsByTagName("head")[0],
                      o = n.querySelector("meta[name=next-head-count]"),
                      i = Number(o.content),
                      l = [];
                    for (
                      let t = 0, n = o.previousElementSibling;
                      t < i;
                      t++,
                        n =
                          (null == n ? void 0 : n.previousElementSibling) ||
                          null
                    ) {
                      var s;
                      (null == n
                        ? void 0
                        : null == (s = n.tagName)
                        ? void 0
                        : s.toLowerCase()) === e && l.push(n);
                    }
                    let c = t.map(r).filter((e) => {
                      for (let t = 0, n = l.length; t < n; t++) {
                        let n = l[t];
                        if (a(n, e)) return l.splice(t, 1), !1;
                      }
                      return !0;
                    });
                    l.forEach((e) => {
                      var t;
                      return null == (t = e.parentNode)
                        ? void 0
                        : t.removeChild(e);
                    }),
                      c.forEach((e) => n.insertBefore(e, o)),
                      (o.content = (i - l.length + c.length).toString());
                  })(e, t[e] || []);
                });
            },
          };
        }),
        (t.isEqualNode = a),
        (t.DOMAttributeNames = void 0);
      let n = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function r(e) {
        let { type: t, props: r } = e,
          a = document.createElement(t);
        for (let e in r) {
          if (
            !r.hasOwnProperty(e) ||
            "children" === e ||
            "dangerouslySetInnerHTML" === e ||
            void 0 === r[e]
          )
            continue;
          let o = n[e] || e.toLowerCase();
          "script" === t && ("async" === o || "defer" === o || "noModule" === o)
            ? (a[o] = !!r[e])
            : a.setAttribute(o, r[e]);
        }
        let { children: o, dangerouslySetInnerHTML: i } = r;
        return (
          i
            ? (a.innerHTML = i.__html || "")
            : o &&
              (a.textContent =
                "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""),
          a
        );
      }
      function a(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let n = t.getAttribute("nonce");
          if (n && !e.getAttribute("nonce")) {
            let r = t.cloneNode(!0);
            return (
              r.setAttribute("nonce", ""),
              (r.nonce = n),
              n === e.nonce && e.isEqualNode(r)
            );
          }
        }
        return e.isEqualNode(t);
      }
      (t.DOMAttributeNames = n),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    626: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleClientScriptLoad = y),
        (t.initScriptLoader = function (e) {
          e.forEach(y),
            (function () {
              let e = [
                ...document.querySelectorAll(
                  '[data-nscript="beforeInteractive"]'
                ),
                ...document.querySelectorAll(
                  '[data-nscript="beforePageRender"]'
                ),
              ];
              e.forEach((e) => {
                let t = e.id || e.getAttribute("src");
                m.add(t);
              });
            })();
        }),
        (t.default = void 0);
      var r = n(5996).Z,
        a = n(8644).Z,
        o = n(9536).Z,
        i = n(872).Z,
        l = a(n(8431)),
        s = o(n(6006)),
        c = n(2105),
        u = n(7505),
        d = n(8300);
      let f = new Map(),
        m = new Set(),
        p = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
        ],
        h = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: a = null,
              dangerouslySetInnerHTML: o,
              children: i = "",
              strategy: l = "afterInteractive",
              onError: s,
            } = e,
            c = n || t;
          if (c && m.has(c)) return;
          if (f.has(t)) {
            m.add(c), f.get(t).then(r, s);
            return;
          }
          let d = () => {
              a && a(), m.add(c);
            },
            h = document.createElement("script"),
            y = new Promise((e, t) => {
              h.addEventListener("load", function (t) {
                e(), r && r.call(this, t), d();
              }),
                h.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              s && s(e);
            });
          for (let [n, r] of (o
            ? ((h.innerHTML = o.__html || ""), d())
            : i
            ? ((h.textContent =
                "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""),
              d())
            : t && ((h.src = t), f.set(t, y)),
          Object.entries(e))) {
            if (void 0 === r || p.includes(n)) continue;
            let e = u.DOMAttributeNames[n] || n.toLowerCase();
            h.setAttribute(e, r);
          }
          "worker" === l && h.setAttribute("type", "text/partytown"),
            h.setAttribute("data-nscript", l),
            document.body.appendChild(h);
        };
      function y(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              d.requestIdleCallback(() => h(e));
            })
          : h(e);
      }
      function b(e) {
        let {
            id: t,
            src: n = "",
            onLoad: a = () => {},
            onReady: o = null,
            strategy: u = "afterInteractive",
            onError: f,
          } = e,
          p = i(e, ["id", "src", "onLoad", "onReady", "strategy", "onError"]),
          {
            updateScripts: y,
            scripts: b,
            getIsSsr: g,
            appDir: v,
            nonce: _,
          } = s.useContext(c.HeadManagerContext),
          w = s.useRef(!1);
        s.useEffect(() => {
          let e = t || n;
          w.current || (o && e && m.has(e) && o(), (w.current = !0));
        }, [o, t, n]);
        let x = s.useRef(!1);
        if (
          (s.useEffect(() => {
            !x.current &&
              ("afterInteractive" === u
                ? h(e)
                : "lazyOnload" === u &&
                  ("complete" === document.readyState
                    ? d.requestIdleCallback(() => h(e))
                    : window.addEventListener("load", () => {
                        d.requestIdleCallback(() => h(e));
                      })),
              (x.current = !0));
          }, [e, u]),
          ("beforeInteractive" === u || "worker" === u) &&
            (y
              ? ((b[u] = (b[u] || []).concat([
                  r({ id: t, src: n, onLoad: a, onReady: o, onError: f }, p),
                ])),
                y(b))
              : g && g()
              ? m.add(t || n)
              : g && !g() && h(e)),
          v)
        ) {
          if ("beforeInteractive" === u)
            return n
              ? (l.default.preload(
                  n,
                  p.integrity
                    ? { as: "script", integrity: p.integrity }
                    : { as: "script" }
                ),
                s.default.createElement("script", {
                  nonce: _,
                  dangerouslySetInnerHTML: {
                    __html: "(self.__next_s=self.__next_s||[]).push(".concat(
                      JSON.stringify([n]),
                      ")"
                    ),
                  },
                }))
              : (p.dangerouslySetInnerHTML &&
                  ((p.children = p.dangerouslySetInnerHTML.__html),
                  delete p.dangerouslySetInnerHTML),
                s.default.createElement("script", {
                  nonce: _,
                  dangerouslySetInnerHTML: {
                    __html: "(self.__next_s=self.__next_s||[]).push(".concat(
                      JSON.stringify([0, r({}, p)]),
                      ")"
                    ),
                  },
                }));
          "afterInteractive" === u &&
            n &&
            l.default.preload(
              n,
              p.integrity
                ? { as: "script", integrity: p.integrity }
                : { as: "script" }
            );
        }
        return null;
      }
      Object.defineProperty(b, "__nextScript", { value: !0 }),
        (t.default = b),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    692: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r,
        a,
        o,
        i = n(9268);
      let l = {
        documents: [
          { name: "Политика конфиденциальности", href: "policy" },
          { name: "Публичная оферта", href: "public_offer" },
        ],
        header: [
          { name: "Главная", href: "/" },
          { name: "О нас", href: "/about" },
        ],
        menu: [
          { name: "Главная", href: "/" },
          { name: "О нас", href: "/about" },
        ],
        instruction: [
          { name: "iOS", href: "/bot/instruction/iphone" },
          { name: "Android", href: "/bot/instruction/android" },
          { name: "MacOS", href: "/bot/instruction/mac" },
          { name: "Windows", href: "/bot/instruction/windows" },
          { name: "Linux", href: "/bot/instruction/linux" },
        ],
      };
      var s = n(5846),
        c = n.n(s),
        u = n(6254);
      function d() {
        return (d = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var f = function (e) {
        return u.createElement(
          "svg",
          d(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 500 569.96",
              width: "1em",
              height: "1em",
            },
            e
          ),
          r ||
            (r = u.createElement("path", {
              d: "M500 234.45a353.56 353.56 0 0 1-3.75 51.45L449 258.63q1-12 1-24.18a302.51 302.51 0 0 0-1.92-34.11 1.38 1.38 0 0 0 0-.2 298.41 298.41 0 0 0-5.4-32 .17.17 0 0 1 0-.07l-30.74-17.74-35.28-20.35-42.14-24.33-7.86-4.54-.14-.07-50-28.86h-.06l-25-14.43-25 14.43-.16.09-4.41 2.55-45.59 26.32-.18.11-12.6 7.27-37.42 21.6-.34.21-38.31 22.11-11.7 6.75-.18.11-18.64 10.75a297.37 297.37 0 0 0-5.16 31.83s0 0 0 .06c-.06.4-.1.82-.14 1.23a300.65 300.65 0 0 0-1.61 31.21q0 13 1.09 25.64l-.48.28-50-28.86-.54-.31q.15-14.69 1.47-29.08 1.18-13.08 3.34-25.86a345 345 0 0 1 8.83-38.89l11.89-6.86.17-.1 50-28.88.35-.2 7.11-4.1 42.89-24.77.2-.11 2.76-1.59 19.47-11.24 27.78-16 .16-.1 25-14.43 15.87-9.17L251.49-.02l33.09 19.1 16.91 9.76 25 14.43 42.11 24.32 7.89 4.54.12.09 38.87 22.43 11.13 6.43 59.08 34.11a347.86 347.86 0 0 1 12.61 65s0 0 0 .05q1.44 14.73 1.62 29.81v.19c.08 1.45.08 2.84.08 4.21ZM484.57 337.52a344.34 344.34 0 0 1-18.36 47.14 1.22 1.22 0 0 1-.07.17 348.26 348.26 0 0 1-24.68 43.47c-3.76 5.66-7.71 11.21-11.79 16.64q-9.06 12-19.12 23.22c-.09.1-.19.19-.27.29a351.46 351.46 0 0 1-37.58 36c-1.82 1.5-3.64 3-5.49 4.43A348.61 348.61 0 0 1 250 569.98a348.67 348.67 0 0 1-117.19-61A350.63 350.63 0 0 1 20.16 351.84q-2.37-6.63-4.47-13.38a345.89 345.89 0 0 1-11-46.35l45.61 26.34 14.06 8.12A300.45 300.45 0 0 0 250 517.39a299.1 299.1 0 0 0 75.91-39.89q11.7-8.5 22.51-18.06 9-7.94 17.41-16.62l.27-.29a300.51 300.51 0 0 0 31.9-39.28 298.61 298.61 0 0 0 24.62-43.5 1.11 1.11 0 0 0 .07-.16 297.88 297.88 0 0 0 17.21-47.81Z",
            })),
          a ||
            (a = u.createElement("path", {
              d: "M425 234.45c0 3.42-.06 6.82-.2 10.2l-50.6-29.21-57-32.94-15.72-9.08-50-28.86-.13-.07-.19.11-50 28.86-.35.21-50 28.88-.16.09-24.93 14.39a.47.47 0 0 0 0 .16q-.65 8.55-.65 17.26c0 3.79.1 7.56.28 11.29l25.43 14.68 138.56 80A175.94 175.94 0 0 1 252 376.66l-113.65-65.61-37.63-21.74-22.59-13a274.46 274.46 0 0 1-2.89-30 .53.53 0 0 1 0-.13q-.26-5.82-.25-11.7c0-5.85.18-11.64.54-17.4a276.12 276.12 0 0 1 3.69-30.93l21.37-12.33.16-.1 40.5-23.37 9.52-5.5.35-.2 50-28.87.19-.12 46.07-26.58 3.95-2.28 50 28.86.14.07 50 28.88 6.46 3.72 62.55 36.11a277 277 0 0 1 4.52 50.01Z",
            })),
          o ||
            (o = u.createElement("path", {
              d: "M417.43 298.76A271.88 271.88 0 0 1 401 346.98c0 .05 0 .11-.07.17a276.22 276.22 0 0 1-24.58 43.53 275.24 275.24 0 0 1-32.59 38.9 1.85 1.85 0 0 1-.28.28 275.24 275.24 0 0 1-31 26.45q-5.16 3.78-10.52 7.33a273.8 273.8 0 0 1-52 27A275.92 275.92 0 0 1 98.7 346.33l98.3 56.75 12.84 7.42 42.38 24.48a225.62 225.62 0 0 0 46-31.2l.29-.26a226 226 0 0 0 34.35-37.89 224.2 224.2 0 0 0 24.47-43.65c0-.06 0-.11.07-.17l-43.75-25.25-112.76-65.08 50-28.86 73.76 42.58 47.14 27.21Z",
            }))
        );
      };
      function m() {
        return (0, i.jsxs)("header", {
          className: "navbar fixed z-50 bg-primary",
          children: [
            (0, i.jsx)("div", {
              className: "navbar-start",
              children: (0, i.jsxs)("div", {
                className: "dropdown",
                children: [
                  (0, i.jsx)("label", {
                    tabIndex: 0,
                    className: "btn-ghost btn-circle btn",
                    children: (0, i.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: (0, i.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 6h16M4 12h16M4 18h7",
                      }),
                    }),
                  }),
                  (0, i.jsx)("ul", {
                    tabIndex: 0,
                    className:
                      "dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-neutral p-2 shadow",
                    children: l.header.map((e) =>
                      (0, i.jsx)(
                        "li",
                        {
                          children: (0, i.jsx)(c(), {
                            href: e.href,
                            children: e.name,
                          }),
                        },
                        e.name
                      )
                    ),
                  }),
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className: "navbar-center",
              children: (0, i.jsxs)(c(), {
                className: "btn-ghost btn text-xl font-bold normal-case",
                href: "/",
                children: [
                  (0, i.jsx)(f, {
                    className: "mr-2 h-9 w-auto fill-base-content p-1",
                  }),
                  "VPNsib.com",
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className: " navbar-end hidden md:flex",
              children: (0, i.jsx)(c(), {
                className: "btn",
                target: "_blank",
                href: "https://t.me/vpnsibcom_bot",
                children: "Подключиться",
              }),
            }),
          ],
        });
      }
      n(7548);
    },
    2663: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n(9268),
        a = n(5652),
        o = n.n(a);
      function i() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(o(), {
              children:
                '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n   m[i].l=1*new Date();\n   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n   (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");\n\n   ym(90878475, "init", {\n        clickmap:true,\n        trackLinks:true,\n        accurateTrackBounce:true,\n        webvisor:true,\n        trackHash:true\n   });',
            }),
            (0, r.jsx)(o(), {
              async: !0,
              src: "https://www.googletagmanager.com/gtag/js?id=G-TSXZ0PJ4BP",
            }),
            (0, r.jsx)(o(), {
              children:
                "window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n\n                gtag('config', 'G-TSXZ0PJ4BP');",
            }),
          ],
        });
      }
    },
    3177: function (e, t, n) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(6006),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        l =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        s = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, t, n) {
        var r,
          o = {},
          c = null,
          u = null;
        for (r in (void 0 !== n && (c = "" + n),
        void 0 !== t.key && (c = "" + t.key),
        void 0 !== t.ref && (u = t.ref),
        t))
          i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: u,
          props: o,
          _owner: l.current,
        };
      }
      (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
    },
    9268: function (e, t, n) {
      "use strict";
      e.exports = n(3177);
    },
    5846: function (e, t, n) {
      e.exports = n(2104);
    },
    5652: function (e, t, n) {
      e.exports = n(626);
    },
  },
  function (e) {
    e.O(0, [774, 104, 264, 679, 744], function () {
      return e((e.s = 4724));
    }),
      (_N_E = e.O());
  },
]);
