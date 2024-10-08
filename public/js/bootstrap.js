(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
  var require_bootstrap_bundle_min = __commonJS({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
      }(exports, function() {
        "use strict";
        const t = "transitionend", e = (t2) => {
          let e2 = t2.getAttribute("data-bs-target");
          if (!e2 || "#" === e2) {
            let i2 = t2.getAttribute("href");
            if (!i2 || !i2.includes("#") && !i2.startsWith(".")) return null;
            i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
          }
          return e2;
        }, i = (t2) => {
          const i2 = e(t2);
          return i2 && document.querySelector(i2) ? i2 : null;
        }, n = (t2) => {
          const i2 = e(t2);
          return i2 ? document.querySelector(i2) : null;
        }, s = (e2) => {
          e2.dispatchEvent(new Event(t));
        }, o = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), r = (t2) => o(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(t2) : null, a = (t2, e2, i2) => {
          Object.keys(i2).forEach((n2) => {
            const s2 = i2[n2], r2 = e2[n2], a2 = r2 && o(r2) ? "element" : null == (l2 = r2) ? `${l2}` : {}.toString.call(l2).match(/\s([a-z]+)/i)[1].toLowerCase();
            var l2;
            if (!new RegExp(s2).test(a2)) throw new TypeError(`${t2.toUpperCase()}: Option "${n2}" provided type "${a2}" but expected type "${s2}".`);
          });
        }, l = (t2) => !(!o(t2) || 0 === t2.getClientRects().length) && "visible" === getComputedStyle(t2).getPropertyValue("visibility"), c = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), h = (t2) => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof t2.getRootNode) {
            const e2 = t2.getRootNode();
            return e2 instanceof ShadowRoot ? e2 : null;
          }
          return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? h(t2.parentNode) : null;
        }, d = () => {
        }, u = (t2) => {
          t2.offsetHeight;
        }, f = () => {
          const { jQuery: t2 } = window;
          return t2 && !document.body.hasAttribute("data-bs-no-jquery") ? t2 : null;
        }, p = [], m = () => "rtl" === document.documentElement.dir, g = (t2) => {
          var e2;
          e2 = () => {
            const e3 = f();
            if (e3) {
              const i2 = t2.NAME, n2 = e3.fn[i2];
              e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
            }
          }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", () => {
            p.forEach((t3) => t3());
          }), p.push(e2)) : e2();
        }, _ = (t2) => {
          "function" == typeof t2 && t2();
        }, b = (e2, i2, n2 = true) => {
          if (!n2) return void _(e2);
          const o2 = ((t2) => {
            if (!t2) return 0;
            let { transitionDuration: e3, transitionDelay: i3 } = window.getComputedStyle(t2);
            const n3 = Number.parseFloat(e3), s2 = Number.parseFloat(i3);
            return n3 || s2 ? (e3 = e3.split(",")[0], i3 = i3.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i3))) : 0;
          })(i2) + 5;
          let r2 = false;
          const a2 = ({ target: n3 }) => {
            n3 === i2 && (r2 = true, i2.removeEventListener(t, a2), _(e2));
          };
          i2.addEventListener(t, a2), setTimeout(() => {
            r2 || s(i2);
          }, o2);
        }, v = (t2, e2, i2, n2) => {
          let s2 = t2.indexOf(e2);
          if (-1 === s2) return t2[!i2 && n2 ? t2.length - 1 : 0];
          const o2 = t2.length;
          return s2 += i2 ? 1 : -1, n2 && (s2 = (s2 + o2) % o2), t2[Math.max(0, Math.min(s2, o2 - 1))];
        }, y = /[^.]*(?=\..*)\.|.*/, w = /\..*/, E = /::\d+$/, A = {};
        let T = 1;
        const O = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = /^(mouseenter|mouseleave)/i, k = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function L(t2, e2) {
          return e2 && `${e2}::${T++}` || t2.uidEvent || T++;
        }
        function x(t2) {
          const e2 = L(t2);
          return t2.uidEvent = e2, A[e2] = A[e2] || {}, A[e2];
        }
        function D(t2, e2, i2 = null) {
          const n2 = Object.keys(t2);
          for (let s2 = 0, o2 = n2.length; s2 < o2; s2++) {
            const o3 = t2[n2[s2]];
            if (o3.originalHandler === e2 && o3.delegationSelector === i2) return o3;
          }
          return null;
        }
        function S(t2, e2, i2) {
          const n2 = "string" == typeof e2, s2 = n2 ? i2 : e2;
          let o2 = P(t2);
          return k.has(o2) || (o2 = t2), [n2, s2, o2];
        }
        function N(t2, e2, i2, n2, s2) {
          if ("string" != typeof e2 || !t2) return;
          if (i2 || (i2 = n2, n2 = null), C.test(e2)) {
            const t3 = (t4) => function(e3) {
              if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget)) return t4.call(this, e3);
            };
            n2 ? n2 = t3(n2) : i2 = t3(i2);
          }
          const [o2, r2, a2] = S(e2, i2, n2), l2 = x(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = D(c2, r2, o2 ? i2 : null);
          if (h2) return void (h2.oneOff = h2.oneOff && s2);
          const d2 = L(r2, e2.replace(y, "")), u2 = o2 ? /* @__PURE__ */ function(t3, e3, i3) {
            return function n3(s3) {
              const o3 = t3.querySelectorAll(e3);
              for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode) for (let a3 = o3.length; a3--; ) if (o3[a3] === r3) return s3.delegateTarget = r3, n3.oneOff && j.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
              return null;
            };
          }(t2, i2, n2) : /* @__PURE__ */ function(t3, e3) {
            return function i3(n3) {
              return n3.delegateTarget = t3, i3.oneOff && j.off(t3, n3.type, e3), e3.apply(t3, [n3]);
            };
          }(t2, i2);
          u2.delegationSelector = o2 ? i2 : null, u2.originalHandler = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
        }
        function I(t2, e2, i2, n2, s2) {
          const o2 = D(e2[i2], n2, s2);
          o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
        }
        function P(t2) {
          return t2 = t2.replace(w, ""), O[t2] || t2;
        }
        const j = { on(t2, e2, i2, n2) {
          N(t2, e2, i2, n2, false);
        }, one(t2, e2, i2, n2) {
          N(t2, e2, i2, n2, true);
        }, off(t2, e2, i2, n2) {
          if ("string" != typeof e2 || !t2) return;
          const [s2, o2, r2] = S(e2, i2, n2), a2 = r2 !== e2, l2 = x(t2), c2 = e2.startsWith(".");
          if (void 0 !== o2) {
            if (!l2 || !l2[r2]) return;
            return void I(t2, l2, r2, o2, s2 ? i2 : null);
          }
          c2 && Object.keys(l2).forEach((i3) => {
            !function(t3, e3, i4, n3) {
              const s3 = e3[i4] || {};
              Object.keys(s3).forEach((o3) => {
                if (o3.includes(n3)) {
                  const n4 = s3[o3];
                  I(t3, e3, i4, n4.originalHandler, n4.delegationSelector);
                }
              });
            }(t2, l2, i3, e2.slice(1));
          });
          const h2 = l2[r2] || {};
          Object.keys(h2).forEach((i3) => {
            const n3 = i3.replace(E, "");
            if (!a2 || e2.includes(n3)) {
              const e3 = h2[i3];
              I(t2, l2, r2, e3.originalHandler, e3.delegationSelector);
            }
          });
        }, trigger(t2, e2, i2) {
          if ("string" != typeof e2 || !t2) return null;
          const n2 = f(), s2 = P(e2), o2 = e2 !== s2, r2 = k.has(s2);
          let a2, l2 = true, c2 = true, h2 = false, d2 = null;
          return o2 && n2 && (a2 = n2.Event(e2, i2), n2(t2).trigger(a2), l2 = !a2.isPropagationStopped(), c2 = !a2.isImmediatePropagationStopped(), h2 = a2.isDefaultPrevented()), r2 ? (d2 = document.createEvent("HTMLEvents"), d2.initEvent(s2, l2, true)) : d2 = new CustomEvent(e2, { bubbles: l2, cancelable: true }), void 0 !== i2 && Object.keys(i2).forEach((t3) => {
            Object.defineProperty(d2, t3, { get: () => i2[t3] });
          }), h2 && d2.preventDefault(), c2 && t2.dispatchEvent(d2), d2.defaultPrevented && void 0 !== a2 && a2.preventDefault(), d2;
        } }, M = /* @__PURE__ */ new Map(), H = { set(t2, e2, i2) {
          M.has(t2) || M.set(t2, /* @__PURE__ */ new Map());
          const n2 = M.get(t2);
          n2.has(e2) || 0 === n2.size ? n2.set(e2, i2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n2.keys())[0]}.`);
        }, get: (t2, e2) => M.has(t2) && M.get(t2).get(e2) || null, remove(t2, e2) {
          if (!M.has(t2)) return;
          const i2 = M.get(t2);
          i2.delete(e2), 0 === i2.size && M.delete(t2);
        } };
        class B {
          constructor(t2) {
            (t2 = r(t2)) && (this._element = t2, H.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
            H.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t2) => {
              this[t2] = null;
            });
          }
          _queueCallback(t2, e2, i2 = true) {
            b(t2, e2, i2);
          }
          static getInstance(t2) {
            return H.get(r(t2), this.DATA_KEY);
          }
          static getOrCreateInstance(t2, e2 = {}) {
            return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
          }
          static get VERSION() {
            return "5.1.3";
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
        }
        const R = (t2, e2 = "hide") => {
          const i2 = `click.dismiss${t2.EVENT_KEY}`, s2 = t2.NAME;
          j.on(document, i2, `[data-bs-dismiss="${s2}"]`, function(i3) {
            if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), c(this)) return;
            const o2 = n(this) || this.closest(`.${s2}`);
            t2.getOrCreateInstance(o2)[e2]();
          });
        };
        class W extends B {
          static get NAME() {
            return "alert";
          }
          close() {
            if (j.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t2 = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t2);
          }
          _destroyElement() {
            this._element.remove(), j.trigger(this._element, "closed.bs.alert"), this.dispose();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = W.getOrCreateInstance(this);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        R(W, "close"), g(W);
        const $ = '[data-bs-toggle="button"]';
        class z extends B {
          static get NAME() {
            return "button";
          }
          toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = z.getOrCreateInstance(this);
              "toggle" === t2 && e2[t2]();
            });
          }
        }
        function q(t2) {
          return "true" === t2 || "false" !== t2 && (t2 === Number(t2).toString() ? Number(t2) : "" === t2 || "null" === t2 ? null : t2);
        }
        function F(t2) {
          return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
        }
        j.on(document, "click.bs.button.data-api", $, (t2) => {
          t2.preventDefault();
          const e2 = t2.target.closest($);
          z.getOrCreateInstance(e2).toggle();
        }), g(z);
        const U = { setDataAttribute(t2, e2, i2) {
          t2.setAttribute(`data-bs-${F(e2)}`, i2);
        }, removeDataAttribute(t2, e2) {
          t2.removeAttribute(`data-bs-${F(e2)}`);
        }, getDataAttributes(t2) {
          if (!t2) return {};
          const e2 = {};
          return Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs")).forEach((i2) => {
            let n2 = i2.replace(/^bs/, "");
            n2 = n2.charAt(0).toLowerCase() + n2.slice(1, n2.length), e2[n2] = q(t2.dataset[i2]);
          }), e2;
        }, getDataAttribute: (t2, e2) => q(t2.getAttribute(`data-bs-${F(e2)}`)), offset(t2) {
          const e2 = t2.getBoundingClientRect();
          return { top: e2.top + window.pageYOffset, left: e2.left + window.pageXOffset };
        }, position: (t2) => ({ top: t2.offsetTop, left: t2.offsetLeft }) }, V = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
          const i2 = [];
          let n2 = t2.parentNode;
          for (; n2 && n2.nodeType === Node.ELEMENT_NODE && 3 !== n2.nodeType; ) n2.matches(e2) && i2.push(n2), n2 = n2.parentNode;
          return i2;
        }, prev(t2, e2) {
          let i2 = t2.previousElementSibling;
          for (; i2; ) {
            if (i2.matches(e2)) return [i2];
            i2 = i2.previousElementSibling;
          }
          return [];
        }, next(t2, e2) {
          let i2 = t2.nextElementSibling;
          for (; i2; ) {
            if (i2.matches(e2)) return [i2];
            i2 = i2.nextElementSibling;
          }
          return [];
        }, focusableChildren(t2) {
          const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(", ");
          return this.find(e2, t2).filter((t3) => !c(t3) && l(t3));
        } }, K = "carousel", X = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true }, Y = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, Q = "next", G = "prev", Z = "left", J = "right", tt = { ArrowLeft: J, ArrowRight: Z }, et = "slid.bs.carousel", it = "active", nt = ".active.carousel-item";
        class st extends B {
          constructor(t2, e2) {
            super(t2), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e2), this._indicatorsElement = V.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
          }
          static get Default() {
            return X;
          }
          static get NAME() {
            return K;
          }
          next() {
            this._slide(Q);
          }
          nextWhenVisible() {
            !document.hidden && l(this._element) && this.next();
          }
          prev() {
            this._slide(G);
          }
          pause(t2) {
            t2 || (this._isPaused = true), V.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
          }
          cycle(t2) {
            t2 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
          }
          to(t2) {
            this._activeElement = V.findOne(nt, this._element);
            const e2 = this._getItemIndex(this._activeElement);
            if (t2 > this._items.length - 1 || t2 < 0) return;
            if (this._isSliding) return void j.one(this._element, et, () => this.to(t2));
            if (e2 === t2) return this.pause(), void this.cycle();
            const i2 = t2 > e2 ? Q : G;
            this._slide(i2, this._items[t2]);
          }
          _getConfig(t2) {
            return t2 = { ...X, ...U.getDataAttributes(this._element), ..."object" == typeof t2 ? t2 : {} }, a(K, t2, Y), t2;
          }
          _handleSwipe() {
            const t2 = Math.abs(this.touchDeltaX);
            if (t2 <= 40) return;
            const e2 = t2 / this.touchDeltaX;
            this.touchDeltaX = 0, e2 && this._slide(e2 > 0 ? J : Z);
          }
          _addEventListeners() {
            this._config.keyboard && j.on(this._element, "keydown.bs.carousel", (t2) => this._keydown(t2)), "hover" === this._config.pause && (j.on(this._element, "mouseenter.bs.carousel", (t2) => this.pause(t2)), j.on(this._element, "mouseleave.bs.carousel", (t2) => this.cycle(t2))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
            const t2 = (t3) => this._pointerEvent && ("pen" === t3.pointerType || "touch" === t3.pointerType), e2 = (e3) => {
              t2(e3) ? this.touchStartX = e3.clientX : this._pointerEvent || (this.touchStartX = e3.touches[0].clientX);
            }, i2 = (t3) => {
              this.touchDeltaX = t3.touches && t3.touches.length > 1 ? 0 : t3.touches[0].clientX - this.touchStartX;
            }, n2 = (e3) => {
              t2(e3) && (this.touchDeltaX = e3.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t3) => this.cycle(t3), 500 + this._config.interval));
            };
            V.find(".carousel-item img", this._element).forEach((t3) => {
              j.on(t3, "dragstart.bs.carousel", (t4) => t4.preventDefault());
            }), this._pointerEvent ? (j.on(this._element, "pointerdown.bs.carousel", (t3) => e2(t3)), j.on(this._element, "pointerup.bs.carousel", (t3) => n2(t3)), this._element.classList.add("pointer-event")) : (j.on(this._element, "touchstart.bs.carousel", (t3) => e2(t3)), j.on(this._element, "touchmove.bs.carousel", (t3) => i2(t3)), j.on(this._element, "touchend.bs.carousel", (t3) => n2(t3)));
          }
          _keydown(t2) {
            if (/input|textarea/i.test(t2.target.tagName)) return;
            const e2 = tt[t2.key];
            e2 && (t2.preventDefault(), this._slide(e2));
          }
          _getItemIndex(t2) {
            return this._items = t2 && t2.parentNode ? V.find(".carousel-item", t2.parentNode) : [], this._items.indexOf(t2);
          }
          _getItemByOrder(t2, e2) {
            const i2 = t2 === Q;
            return v(this._items, e2, i2, this._config.wrap);
          }
          _triggerSlideEvent(t2, e2) {
            const i2 = this._getItemIndex(t2), n2 = this._getItemIndex(V.findOne(nt, this._element));
            return j.trigger(this._element, "slide.bs.carousel", { relatedTarget: t2, direction: e2, from: n2, to: i2 });
          }
          _setActiveIndicatorElement(t2) {
            if (this._indicatorsElement) {
              const e2 = V.findOne(".active", this._indicatorsElement);
              e2.classList.remove(it), e2.removeAttribute("aria-current");
              const i2 = V.find("[data-bs-target]", this._indicatorsElement);
              for (let e3 = 0; e3 < i2.length; e3++) if (Number.parseInt(i2[e3].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t2)) {
                i2[e3].classList.add(it), i2[e3].setAttribute("aria-current", "true");
                break;
              }
            }
          }
          _updateInterval() {
            const t2 = this._activeElement || V.findOne(nt, this._element);
            if (!t2) return;
            const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
            e2 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e2) : this._config.interval = this._config.defaultInterval || this._config.interval;
          }
          _slide(t2, e2) {
            const i2 = this._directionToOrder(t2), n2 = V.findOne(nt, this._element), s2 = this._getItemIndex(n2), o2 = e2 || this._getItemByOrder(i2, n2), r2 = this._getItemIndex(o2), a2 = Boolean(this._interval), l2 = i2 === Q, c2 = l2 ? "carousel-item-start" : "carousel-item-end", h2 = l2 ? "carousel-item-next" : "carousel-item-prev", d2 = this._orderToDirection(i2);
            if (o2 && o2.classList.contains(it)) return void (this._isSliding = false);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o2, d2).defaultPrevented) return;
            if (!n2 || !o2) return;
            this._isSliding = true, a2 && this.pause(), this._setActiveIndicatorElement(o2), this._activeElement = o2;
            const f2 = () => {
              j.trigger(this._element, et, { relatedTarget: o2, direction: d2, from: s2, to: r2 });
            };
            if (this._element.classList.contains("slide")) {
              o2.classList.add(h2), u(o2), n2.classList.add(c2), o2.classList.add(c2);
              const t3 = () => {
                o2.classList.remove(c2, h2), o2.classList.add(it), n2.classList.remove(it, h2, c2), this._isSliding = false, setTimeout(f2, 0);
              };
              this._queueCallback(t3, n2, true);
            } else n2.classList.remove(it), o2.classList.add(it), this._isSliding = false, f2();
            a2 && this.cycle();
          }
          _directionToOrder(t2) {
            return [J, Z].includes(t2) ? m() ? t2 === Z ? G : Q : t2 === Z ? Q : G : t2;
          }
          _orderToDirection(t2) {
            return [Q, G].includes(t2) ? m() ? t2 === G ? Z : J : t2 === G ? J : Z : t2;
          }
          static carouselInterface(t2, e2) {
            const i2 = st.getOrCreateInstance(t2, e2);
            let { _config: n2 } = i2;
            "object" == typeof e2 && (n2 = { ...n2, ...e2 });
            const s2 = "string" == typeof e2 ? e2 : n2.slide;
            if ("number" == typeof e2) i2.to(e2);
            else if ("string" == typeof s2) {
              if (void 0 === i2[s2]) throw new TypeError(`No method named "${s2}"`);
              i2[s2]();
            } else n2.interval && n2.ride && (i2.pause(), i2.cycle());
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              st.carouselInterface(this, t2);
            });
          }
          static dataApiClickHandler(t2) {
            const e2 = n(this);
            if (!e2 || !e2.classList.contains("carousel")) return;
            const i2 = { ...U.getDataAttributes(e2), ...U.getDataAttributes(this) }, s2 = this.getAttribute("data-bs-slide-to");
            s2 && (i2.interval = false), st.carouselInterface(e2, i2), s2 && st.getInstance(e2).to(s2), t2.preventDefault();
          }
        }
        j.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler), j.on(window, "load.bs.carousel.data-api", () => {
          const t2 = V.find('[data-bs-ride="carousel"]');
          for (let e2 = 0, i2 = t2.length; e2 < i2; e2++) st.carouselInterface(t2[e2], st.getInstance(t2[e2]));
        }), g(st);
        const ot = "collapse", rt = { toggle: true, parent: null }, at = { toggle: "boolean", parent: "(null|element)" }, lt = "show", ct = "collapse", ht = "collapsing", dt = "collapsed", ut = ":scope .collapse .collapse", ft = '[data-bs-toggle="collapse"]';
        class pt extends B {
          constructor(t2, e2) {
            super(t2), this._isTransitioning = false, this._config = this._getConfig(e2), this._triggerArray = [];
            const n2 = V.find(ft);
            for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) {
              const e4 = n2[t3], s2 = i(e4), o2 = V.find(s2).filter((t4) => t4 === this._element);
              null !== s2 && o2.length && (this._selector = s2, this._triggerArray.push(e4));
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
          }
          static get Default() {
            return rt;
          }
          static get NAME() {
            return ot;
          }
          toggle() {
            this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (this._isTransitioning || this._isShown()) return;
            let t2, e2 = [];
            if (this._config.parent) {
              const t3 = V.find(ut, this._config.parent);
              e2 = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e3) => !t3.includes(e3));
            }
            const i2 = V.findOne(this._selector);
            if (e2.length) {
              const n3 = e2.find((t3) => i2 !== t3);
              if (t2 = n3 ? pt.getInstance(n3) : null, t2 && t2._isTransitioning) return;
            }
            if (j.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e2.forEach((e3) => {
              i2 !== e3 && pt.getOrCreateInstance(e3, { toggle: false }).hide(), t2 || H.set(e3, "bs.collapse", null);
            });
            const n2 = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[n2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
            const s2 = `scroll${n2[0].toUpperCase() + n2.slice(1)}`;
            this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[n2] = "", j.trigger(this._element, "shown.bs.collapse");
            }, this._element, true), this._element.style[n2] = `${this._element[s2]}px`;
          }
          hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t2 = this._getDimension();
            this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, u(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
            const e2 = this._triggerArray.length;
            for (let t3 = 0; t3 < e2; t3++) {
              const e3 = this._triggerArray[t3], i2 = n(e3);
              i2 && !this._isShown(i2) && this._addAriaAndCollapsedClass([e3], false);
            }
            this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove(ht), this._element.classList.add(ct), j.trigger(this._element, "hidden.bs.collapse");
            }, this._element, true);
          }
          _isShown(t2 = this._element) {
            return t2.classList.contains(lt);
          }
          _getConfig(t2) {
            return (t2 = { ...rt, ...U.getDataAttributes(this._element), ...t2 }).toggle = Boolean(t2.toggle), t2.parent = r(t2.parent), a(ot, t2, at), t2;
          }
          _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
          }
          _initializeChildren() {
            if (!this._config.parent) return;
            const t2 = V.find(ut, this._config.parent);
            V.find(ft, this._config.parent).filter((e2) => !t2.includes(e2)).forEach((t3) => {
              const e2 = n(t3);
              e2 && this._addAriaAndCollapsedClass([t3], this._isShown(e2));
            });
          }
          _addAriaAndCollapsedClass(t2, e2) {
            t2.length && t2.forEach((t3) => {
              e2 ? t3.classList.remove(dt) : t3.classList.add(dt), t3.setAttribute("aria-expanded", e2);
            });
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = {};
              "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false);
              const i2 = pt.getOrCreateInstance(this, e2);
              if ("string" == typeof t2) {
                if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
                i2[t2]();
              }
            });
          }
        }
        j.on(document, "click.bs.collapse.data-api", ft, function(t2) {
          ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
          const e2 = i(this);
          V.find(e2).forEach((t3) => {
            pt.getOrCreateInstance(t3, { toggle: false }).toggle();
          });
        }), g(pt);
        var mt = "top", gt = "bottom", _t = "right", bt = "left", vt = "auto", yt = [mt, gt, _t, bt], wt = "start", Et = "end", At = "clippingParents", Tt = "viewport", Ot = "popper", Ct = "reference", kt = yt.reduce(function(t2, e2) {
          return t2.concat([e2 + "-" + wt, e2 + "-" + Et]);
        }, []), Lt = [].concat(yt, [vt]).reduce(function(t2, e2) {
          return t2.concat([e2, e2 + "-" + wt, e2 + "-" + Et]);
        }, []), xt = "beforeRead", Dt = "read", St = "afterRead", Nt = "beforeMain", It = "main", Pt = "afterMain", jt = "beforeWrite", Mt = "write", Ht = "afterWrite", Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];
        function Rt(t2) {
          return t2 ? (t2.nodeName || "").toLowerCase() : null;
        }
        function Wt(t2) {
          if (null == t2) return window;
          if ("[object Window]" !== t2.toString()) {
            var e2 = t2.ownerDocument;
            return e2 && e2.defaultView || window;
          }
          return t2;
        }
        function $t(t2) {
          return t2 instanceof Wt(t2).Element || t2 instanceof Element;
        }
        function zt(t2) {
          return t2 instanceof Wt(t2).HTMLElement || t2 instanceof HTMLElement;
        }
        function qt(t2) {
          return "undefined" != typeof ShadowRoot && (t2 instanceof Wt(t2).ShadowRoot || t2 instanceof ShadowRoot);
        }
        const Ft = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
          var e2 = t2.state;
          Object.keys(e2.elements).forEach(function(t3) {
            var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
            zt(s2) && Rt(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
              var e3 = n2[t4];
              false === e3 ? s2.removeAttribute(t4) : s2.setAttribute(t4, true === e3 ? "" : e3);
            }));
          });
        }, effect: function(t2) {
          var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
          return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
            Object.keys(e2.elements).forEach(function(t3) {
              var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
                return t4[e3] = "", t4;
              }, {});
              zt(n2) && Rt(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
                n2.removeAttribute(t4);
              }));
            });
          };
        }, requires: ["computeStyles"] };
        function Ut(t2) {
          return t2.split("-")[0];
        }
        function Vt(t2, e2) {
          var i2 = t2.getBoundingClientRect();
          return { width: i2.width / 1, height: i2.height / 1, top: i2.top / 1, right: i2.right / 1, bottom: i2.bottom / 1, left: i2.left / 1, x: i2.left / 1, y: i2.top / 1 };
        }
        function Kt(t2) {
          var e2 = Vt(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
          return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
        }
        function Xt(t2, e2) {
          var i2 = e2.getRootNode && e2.getRootNode();
          if (t2.contains(e2)) return true;
          if (i2 && qt(i2)) {
            var n2 = e2;
            do {
              if (n2 && t2.isSameNode(n2)) return true;
              n2 = n2.parentNode || n2.host;
            } while (n2);
          }
          return false;
        }
        function Yt(t2) {
          return Wt(t2).getComputedStyle(t2);
        }
        function Qt(t2) {
          return ["table", "td", "th"].indexOf(Rt(t2)) >= 0;
        }
        function Gt(t2) {
          return (($t(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
        }
        function Zt(t2) {
          return "html" === Rt(t2) ? t2 : t2.assignedSlot || t2.parentNode || (qt(t2) ? t2.host : null) || Gt(t2);
        }
        function Jt(t2) {
          return zt(t2) && "fixed" !== Yt(t2).position ? t2.offsetParent : null;
        }
        function te(t2) {
          for (var e2 = Wt(t2), i2 = Jt(t2); i2 && Qt(i2) && "static" === Yt(i2).position; ) i2 = Jt(i2);
          return i2 && ("html" === Rt(i2) || "body" === Rt(i2) && "static" === Yt(i2).position) ? e2 : i2 || function(t3) {
            var e3 = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t3) && "fixed" === Yt(t3).position) return null;
            for (var i3 = Zt(t3); zt(i3) && ["html", "body"].indexOf(Rt(i3)) < 0; ) {
              var n2 = Yt(i3);
              if ("none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || -1 !== ["transform", "perspective"].indexOf(n2.willChange) || e3 && "filter" === n2.willChange || e3 && n2.filter && "none" !== n2.filter) return i3;
              i3 = i3.parentNode;
            }
            return null;
          }(t2) || e2;
        }
        function ee(t2) {
          return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
        }
        var ie = Math.max, ne = Math.min, se = Math.round;
        function oe(t2, e2, i2) {
          return ie(t2, ne(e2, i2));
        }
        function re(t2) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
        }
        function ae(t2, e2) {
          return e2.reduce(function(e3, i2) {
            return e3[i2] = t2, e3;
          }, {});
        }
        const le = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
          var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = Ut(i2.placement), l2 = ee(a2), c2 = [bt, _t].indexOf(a2) >= 0 ? "height" : "width";
          if (o2 && r2) {
            var h2 = function(t3, e3) {
              return re("number" != typeof (t3 = "function" == typeof t3 ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) ? t3 : ae(t3, yt));
            }(s2.padding, i2), d2 = Kt(o2), u2 = "y" === l2 ? mt : bt, f2 = "y" === l2 ? gt : _t, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = te(o2), _2 = g2 ? "y" === l2 ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, E2 = oe(v2, w2, y2), A2 = l2;
            i2.modifiersData[n2] = ((e2 = {})[A2] = E2, e2.centerOffset = E2 - w2, e2);
          }
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.options.element, n2 = void 0 === i2 ? "[data-popper-arrow]" : i2;
          null != n2 && ("string" != typeof n2 || (n2 = e2.elements.popper.querySelector(n2))) && Xt(e2.elements.popper, n2) && (e2.elements.arrow = n2);
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
        function ce(t2) {
          return t2.split("-")[1];
        }
        var he = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function de(t2) {
          var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l2 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = true === h2 ? function(t3) {
            var e3 = t3.x, i3 = t3.y, n3 = window.devicePixelRatio || 1;
            return { x: se(se(e3 * n3) / n3) || 0, y: se(se(i3 * n3) / n3) || 0 };
          }(r2) : "function" == typeof h2 ? h2(r2) : r2, u2 = d2.x, f2 = void 0 === u2 ? 0 : u2, p2 = d2.y, m2 = void 0 === p2 ? 0 : p2, g2 = r2.hasOwnProperty("x"), _2 = r2.hasOwnProperty("y"), b2 = bt, v2 = mt, y2 = window;
          if (c2) {
            var w2 = te(i2), E2 = "clientHeight", A2 = "clientWidth";
            w2 === Wt(i2) && "static" !== Yt(w2 = Gt(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", A2 = "scrollWidth"), w2 = w2, s2 !== mt && (s2 !== bt && s2 !== _t || o2 !== Et) || (v2 = gt, m2 -= w2[E2] - n2.height, m2 *= l2 ? 1 : -1), s2 !== bt && (s2 !== mt && s2 !== gt || o2 !== Et) || (b2 = _t, f2 -= w2[A2] - n2.width, f2 *= l2 ? 1 : -1);
          }
          var T2, O2 = Object.assign({ position: a2 }, c2 && he);
          return l2 ? Object.assign({}, O2, ((T2 = {})[v2] = _2 ? "0" : "", T2[b2] = g2 ? "0" : "", T2.transform = (y2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + m2 + "px)" : "translate3d(" + f2 + "px, " + m2 + "px, 0)", T2)) : Object.assign({}, O2, ((e2 = {})[v2] = _2 ? m2 + "px" : "", e2[b2] = g2 ? f2 + "px" : "", e2.transform = "", e2));
        }
        const ue = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = void 0 === n2 || n2, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l2 = void 0 === a2 || a2, c2 = { placement: Ut(e2.placement), variation: ce(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2 };
          null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, de(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, de(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
        }, data: {} };
        var fe = { passive: true };
        const pe = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = void 0 === s2 || s2, r2 = n2.resize, a2 = void 0 === r2 || r2, l2 = Wt(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
          return o2 && c2.forEach(function(t3) {
            t3.addEventListener("scroll", i2.update, fe);
          }), a2 && l2.addEventListener("resize", i2.update, fe), function() {
            o2 && c2.forEach(function(t3) {
              t3.removeEventListener("scroll", i2.update, fe);
            }), a2 && l2.removeEventListener("resize", i2.update, fe);
          };
        }, data: {} };
        var me = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function ge(t2) {
          return t2.replace(/left|right|bottom|top/g, function(t3) {
            return me[t3];
          });
        }
        var _e = { start: "end", end: "start" };
        function be(t2) {
          return t2.replace(/start|end/g, function(t3) {
            return _e[t3];
          });
        }
        function ve(t2) {
          var e2 = Wt(t2);
          return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
        }
        function ye(t2) {
          return Vt(Gt(t2)).left + ve(t2).scrollLeft;
        }
        function we(t2) {
          var e2 = Yt(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
          return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
        }
        function Ee(t2) {
          return ["html", "body", "#document"].indexOf(Rt(t2)) >= 0 ? t2.ownerDocument.body : zt(t2) && we(t2) ? t2 : Ee(Zt(t2));
        }
        function Ae(t2, e2) {
          var i2;
          void 0 === e2 && (e2 = []);
          var n2 = Ee(t2), s2 = n2 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = Wt(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], we(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
          return s2 ? a2 : a2.concat(Ae(Zt(r2)));
        }
        function Te(t2) {
          return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
        }
        function Oe(t2, e2) {
          return e2 === Tt ? Te(function(t3) {
            var e3 = Wt(t3), i2 = Gt(t3), n2 = e3.visualViewport, s2 = i2.clientWidth, o2 = i2.clientHeight, r2 = 0, a2 = 0;
            return n2 && (s2 = n2.width, o2 = n2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r2 = n2.offsetLeft, a2 = n2.offsetTop)), { width: s2, height: o2, x: r2 + ye(t3), y: a2 };
          }(t2)) : zt(e2) ? function(t3) {
            var e3 = Vt(t3);
            return e3.top = e3.top + t3.clientTop, e3.left = e3.left + t3.clientLeft, e3.bottom = e3.top + t3.clientHeight, e3.right = e3.left + t3.clientWidth, e3.width = t3.clientWidth, e3.height = t3.clientHeight, e3.x = e3.left, e3.y = e3.top, e3;
          }(e2) : Te(function(t3) {
            var e3, i2 = Gt(t3), n2 = ve(t3), s2 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = ie(i2.scrollWidth, i2.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = ie(i2.scrollHeight, i2.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + ye(t3), l2 = -n2.scrollTop;
            return "rtl" === Yt(s2 || i2).direction && (a2 += ie(i2.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
          }(Gt(t2)));
        }
        function Ce(t2) {
          var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? Ut(s2) : null, r2 = s2 ? ce(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
          switch (o2) {
            case mt:
              e2 = { x: a2, y: i2.y - n2.height };
              break;
            case gt:
              e2 = { x: a2, y: i2.y + i2.height };
              break;
            case _t:
              e2 = { x: i2.x + i2.width, y: l2 };
              break;
            case bt:
              e2 = { x: i2.x - n2.width, y: l2 };
              break;
            default:
              e2 = { x: i2.x, y: i2.y };
          }
          var c2 = o2 ? ee(o2) : null;
          if (null != c2) {
            var h2 = "y" === c2 ? "height" : "width";
            switch (r2) {
              case wt:
                e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
                break;
              case Et:
                e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
            }
          }
          return e2;
        }
        function ke(t2, e2) {
          void 0 === e2 && (e2 = {});
          var i2 = e2, n2 = i2.placement, s2 = void 0 === n2 ? t2.placement : n2, o2 = i2.boundary, r2 = void 0 === o2 ? At : o2, a2 = i2.rootBoundary, l2 = void 0 === a2 ? Tt : a2, c2 = i2.elementContext, h2 = void 0 === c2 ? Ot : c2, d2 = i2.altBoundary, u2 = void 0 !== d2 && d2, f2 = i2.padding, p2 = void 0 === f2 ? 0 : f2, m2 = re("number" != typeof p2 ? p2 : ae(p2, yt)), g2 = h2 === Ot ? Ct : Ot, _2 = t2.rects.popper, b2 = t2.elements[u2 ? g2 : h2], v2 = function(t3, e3, i3) {
            var n3 = "clippingParents" === e3 ? function(t4) {
              var e4 = Ae(Zt(t4)), i4 = ["absolute", "fixed"].indexOf(Yt(t4).position) >= 0 && zt(t4) ? te(t4) : t4;
              return $t(i4) ? e4.filter(function(t5) {
                return $t(t5) && Xt(t5, i4) && "body" !== Rt(t5);
              }) : [];
            }(t3) : [].concat(e3), s3 = [].concat(n3, [i3]), o3 = s3[0], r3 = s3.reduce(function(e4, i4) {
              var n4 = Oe(t3, i4);
              return e4.top = ie(n4.top, e4.top), e4.right = ne(n4.right, e4.right), e4.bottom = ne(n4.bottom, e4.bottom), e4.left = ie(n4.left, e4.left), e4;
            }, Oe(t3, o3));
            return r3.width = r3.right - r3.left, r3.height = r3.bottom - r3.top, r3.x = r3.left, r3.y = r3.top, r3;
          }($t(b2) ? b2 : b2.contextElement || Gt(t2.elements.popper), r2, l2), y2 = Vt(t2.elements.reference), w2 = Ce({ reference: y2, element: _2, strategy: "absolute", placement: s2 }), E2 = Te(Object.assign({}, _2, w2)), A2 = h2 === Ot ? E2 : y2, T2 = { top: v2.top - A2.top + m2.top, bottom: A2.bottom - v2.bottom + m2.bottom, left: v2.left - A2.left + m2.left, right: A2.right - v2.right + m2.right }, O2 = t2.modifiersData.offset;
          if (h2 === Ot && O2) {
            var C2 = O2[s2];
            Object.keys(T2).forEach(function(t3) {
              var e3 = [_t, gt].indexOf(t3) >= 0 ? 1 : -1, i3 = [mt, gt].indexOf(t3) >= 0 ? "y" : "x";
              T2[t3] += C2[i3] * e3;
            });
          }
          return T2;
        }
        function Le(t2, e2) {
          void 0 === e2 && (e2 = {});
          var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = void 0 === l2 ? Lt : l2, h2 = ce(n2), d2 = h2 ? a2 ? kt : kt.filter(function(t3) {
            return ce(t3) === h2;
          }) : yt, u2 = d2.filter(function(t3) {
            return c2.indexOf(t3) >= 0;
          });
          0 === u2.length && (u2 = d2);
          var f2 = u2.reduce(function(e3, i3) {
            return e3[i3] = ke(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[Ut(i3)], e3;
          }, {});
          return Object.keys(f2).sort(function(t3, e3) {
            return f2[t3] - f2[e3];
          });
        }
        const xe = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name;
          if (!e2.modifiersData[n2]._skip) {
            for (var s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = Ut(g2), b2 = l2 || (_2 !== g2 && p2 ? function(t3) {
              if (Ut(t3) === vt) return [];
              var e3 = ge(t3);
              return [be(t3), e3, be(e3)];
            }(g2) : [ge(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
              return t3.concat(Ut(i3) === vt ? Le(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }) : i3);
            }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, E2 = /* @__PURE__ */ new Map(), A2 = true, T2 = v2[0], O2 = 0; O2 < v2.length; O2++) {
              var C2 = v2[O2], k2 = Ut(C2), L2 = ce(C2) === wt, x2 = [mt, gt].indexOf(k2) >= 0, D2 = x2 ? "width" : "height", S2 = ke(e2, { placement: C2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), N2 = x2 ? L2 ? _t : bt : L2 ? gt : mt;
              y2[D2] > w2[D2] && (N2 = ge(N2));
              var I2 = ge(N2), P2 = [];
              if (o2 && P2.push(S2[k2] <= 0), a2 && P2.push(S2[N2] <= 0, S2[I2] <= 0), P2.every(function(t3) {
                return t3;
              })) {
                T2 = C2, A2 = false;
                break;
              }
              E2.set(C2, P2);
            }
            if (A2) for (var j2 = function(t3) {
              var e3 = v2.find(function(e4) {
                var i3 = E2.get(e4);
                if (i3) return i3.slice(0, t3).every(function(t4) {
                  return t4;
                });
              });
              if (e3) return T2 = e3, "break";
            }, M2 = p2 ? 3 : 1; M2 > 0 && "break" !== j2(M2); M2--) ;
            e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
          }
        }, requiresIfExists: ["offset"], data: { _skip: false } };
        function De(t2, e2, i2) {
          return void 0 === i2 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
        }
        function Se(t2) {
          return [mt, _t, gt, bt].some(function(e2) {
            return t2[e2] >= 0;
          });
        }
        const Ne = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = ke(e2, { elementContext: "reference" }), a2 = ke(e2, { altBoundary: true }), l2 = De(r2, n2), c2 = De(a2, s2, o2), h2 = Se(l2), d2 = Se(c2);
          e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
        } }, Ie = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = void 0 === s2 ? [0, 0] : s2, r2 = Lt.reduce(function(t3, i3) {
            return t3[i3] = function(t4, e3, i4) {
              var n3 = Ut(t4), s3 = [bt, mt].indexOf(n3) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
              return r3 = r3 || 0, a3 = (a3 || 0) * s3, [bt, _t].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
            }(i3, e2.rects, o2), t3;
          }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
          null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
        } }, Pe = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
          var e2 = t2.state, i2 = t2.name;
          e2.modifiersData[i2] = Ce({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
        }, data: {} }, je = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, m2 = void 0 === p2 ? 0 : p2, g2 = ke(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = Ut(e2.placement), b2 = ce(e2.placement), v2 = !b2, y2 = ee(_2), w2 = "x" === y2 ? "y" : "x", E2 = e2.modifiersData.popperOffsets, A2 = e2.rects.reference, T2 = e2.rects.popper, O2 = "function" == typeof m2 ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, C2 = { x: 0, y: 0 };
          if (E2) {
            if (o2 || a2) {
              var k2 = "y" === y2 ? mt : bt, L2 = "y" === y2 ? gt : _t, x2 = "y" === y2 ? "height" : "width", D2 = E2[y2], S2 = E2[y2] + g2[k2], N2 = E2[y2] - g2[L2], I2 = f2 ? -T2[x2] / 2 : 0, P2 = b2 === wt ? A2[x2] : T2[x2], j2 = b2 === wt ? -T2[x2] : -A2[x2], M2 = e2.elements.arrow, H2 = f2 && M2 ? Kt(M2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, R2 = B2[k2], W2 = B2[L2], $2 = oe(0, A2[x2], H2[x2]), z2 = v2 ? A2[x2] / 2 - I2 - $2 - R2 - O2 : P2 - $2 - R2 - O2, q2 = v2 ? -A2[x2] / 2 + I2 + $2 + W2 + O2 : j2 + $2 + W2 + O2, F2 = e2.elements.arrow && te(e2.elements.arrow), U2 = F2 ? "y" === y2 ? F2.clientTop || 0 : F2.clientLeft || 0 : 0, V2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement][y2] : 0, K2 = E2[y2] + z2 - V2 - U2, X2 = E2[y2] + q2 - V2;
              if (o2) {
                var Y2 = oe(f2 ? ne(S2, K2) : S2, D2, f2 ? ie(N2, X2) : N2);
                E2[y2] = Y2, C2[y2] = Y2 - D2;
              }
              if (a2) {
                var Q2 = "x" === y2 ? mt : bt, G2 = "x" === y2 ? gt : _t, Z2 = E2[w2], J2 = Z2 + g2[Q2], tt2 = Z2 - g2[G2], et2 = oe(f2 ? ne(J2, K2) : J2, Z2, f2 ? ie(tt2, X2) : tt2);
                E2[w2] = et2, C2[w2] = et2 - Z2;
              }
            }
            e2.modifiersData[n2] = C2;
          }
        }, requiresIfExists: ["offset"] };
        function Me(t2, e2, i2) {
          void 0 === i2 && (i2 = false);
          var n2 = zt(e2);
          zt(e2) && function(t3) {
            var e3 = t3.getBoundingClientRect();
            e3.width, t3.offsetWidth, e3.height, t3.offsetHeight;
          }(e2);
          var s2, o2, r2 = Gt(e2), a2 = Vt(t2), l2 = { scrollLeft: 0, scrollTop: 0 }, c2 = { x: 0, y: 0 };
          return (n2 || !n2 && !i2) && (("body" !== Rt(e2) || we(r2)) && (l2 = (s2 = e2) !== Wt(s2) && zt(s2) ? { scrollLeft: (o2 = s2).scrollLeft, scrollTop: o2.scrollTop } : ve(s2)), zt(e2) ? ((c2 = Vt(e2)).x += e2.clientLeft, c2.y += e2.clientTop) : r2 && (c2.x = ye(r2))), { x: a2.left + l2.scrollLeft - c2.x, y: a2.top + l2.scrollTop - c2.y, width: a2.width, height: a2.height };
        }
        function He(t2) {
          var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n2 = [];
          function s2(t3) {
            i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach(function(t4) {
              if (!i2.has(t4)) {
                var n3 = e2.get(t4);
                n3 && s2(n3);
              }
            }), n2.push(t3);
          }
          return t2.forEach(function(t3) {
            e2.set(t3.name, t3);
          }), t2.forEach(function(t3) {
            i2.has(t3.name) || s2(t3);
          }), n2;
        }
        var Be = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function Re() {
          for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++) e2[i2] = arguments[i2];
          return !e2.some(function(t3) {
            return !(t3 && "function" == typeof t3.getBoundingClientRect);
          });
        }
        function We(t2) {
          void 0 === t2 && (t2 = {});
          var e2 = t2, i2 = e2.defaultModifiers, n2 = void 0 === i2 ? [] : i2, s2 = e2.defaultOptions, o2 = void 0 === s2 ? Be : s2;
          return function(t3, e3, i3) {
            void 0 === i3 && (i3 = o2);
            var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Be, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
              var s4 = "function" == typeof i4 ? i4(a2.options) : i4;
              d2(), a2.options = Object.assign({}, o2, a2.options, s4), a2.scrollParents = { reference: $t(t3) ? Ae(t3) : t3.contextElement ? Ae(t3.contextElement) : [], popper: Ae(e3) };
              var r3, c3, u2 = function(t4) {
                var e4 = He(t4);
                return Bt.reduce(function(t5, i5) {
                  return t5.concat(e4.filter(function(t6) {
                    return t6.phase === i5;
                  }));
                }, []);
              }((r3 = [].concat(n2, a2.options.modifiers), c3 = r3.reduce(function(t4, e4) {
                var i5 = t4[e4.name];
                return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
              }, {}), Object.keys(c3).map(function(t4) {
                return c3[t4];
              })));
              return a2.orderedModifiers = u2.filter(function(t4) {
                return t4.enabled;
              }), a2.orderedModifiers.forEach(function(t4) {
                var e4 = t4.name, i5 = t4.options, n3 = void 0 === i5 ? {} : i5, s5 = t4.effect;
                if ("function" == typeof s5) {
                  var o3 = s5({ state: a2, name: e4, instance: h2, options: n3 });
                  l2.push(o3 || function() {
                  });
                }
              }), h2.update();
            }, forceUpdate: function() {
              if (!c2) {
                var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
                if (Re(e4, i4)) {
                  a2.rects = { reference: Me(e4, te(i4), "fixed" === a2.options.strategy), popper: Kt(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
                    return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
                  });
                  for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++) if (true !== a2.reset) {
                    var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = void 0 === r3 ? {} : r3, d3 = s4.name;
                    "function" == typeof o3 && (a2 = o3({ state: a2, options: l3, name: d3, instance: h2 }) || a2);
                  } else a2.reset = false, n3 = -1;
                }
              }
            }, update: (s3 = function() {
              return new Promise(function(t4) {
                h2.forceUpdate(), t4(a2);
              });
            }, function() {
              return r2 || (r2 = new Promise(function(t4) {
                Promise.resolve().then(function() {
                  r2 = void 0, t4(s3());
                });
              })), r2;
            }), destroy: function() {
              d2(), c2 = true;
            } };
            if (!Re(t3, e3)) return h2;
            function d2() {
              l2.forEach(function(t4) {
                return t4();
              }), l2 = [];
            }
            return h2.setOptions(i3).then(function(t4) {
              !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
            }), h2;
          };
        }
        var $e = We(), ze = We({ defaultModifiers: [pe, Pe, ue, Ft] }), qe = We({ defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne] });
        const Fe = Object.freeze({ __proto__: null, popperGenerator: We, detectOverflow: ke, createPopperBase: $e, createPopper: qe, createPopperLite: ze, top: mt, bottom: gt, right: _t, left: bt, auto: vt, basePlacements: yt, start: wt, end: Et, clippingParents: At, viewport: Tt, popper: Ot, reference: Ct, variationPlacements: kt, placements: Lt, beforeRead: xt, read: Dt, afterRead: St, beforeMain: Nt, main: It, afterMain: Pt, beforeWrite: jt, write: Mt, afterWrite: Ht, modifierPhases: Bt, applyStyles: Ft, arrow: le, computeStyles: ue, eventListeners: pe, flip: xe, hide: Ne, offset: Ie, popperOffsets: Pe, preventOverflow: je }), Ue = "dropdown", Ve = "Escape", Ke = "Space", Xe = "ArrowUp", Ye = "ArrowDown", Qe = new RegExp("ArrowUp|ArrowDown|Escape"), Ge = "click.bs.dropdown.data-api", Ze = "keydown.bs.dropdown.data-api", Je = "show", ti = '[data-bs-toggle="dropdown"]', ei = ".dropdown-menu", ii = m() ? "top-end" : "top-start", ni = m() ? "top-start" : "top-end", si = m() ? "bottom-end" : "bottom-start", oi = m() ? "bottom-start" : "bottom-end", ri = m() ? "left-start" : "right-start", ai = m() ? "right-start" : "left-start", li = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: true }, ci = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
        class hi extends B {
          constructor(t2, e2) {
            super(t2), this._popper = null, this._config = this._getConfig(e2), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
          }
          static get Default() {
            return li;
          }
          static get DefaultType() {
            return ci;
          }
          static get NAME() {
            return Ue;
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (c(this._element) || this._isShown(this._menu)) return;
            const t2 = { relatedTarget: this._element };
            if (j.trigger(this._element, "show.bs.dropdown", t2).defaultPrevented) return;
            const e2 = hi.getParentFromElement(this._element);
            this._inNavbar ? U.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e2), "ontouchstart" in document.documentElement && !e2.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t3) => j.on(t3, "mouseover", d)), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Je), this._element.classList.add(Je), j.trigger(this._element, "shown.bs.dropdown", t2);
          }
          hide() {
            if (c(this._element) || !this._isShown(this._menu)) return;
            const t2 = { relatedTarget: this._element };
            this._completeHide(t2);
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
          }
          _completeHide(t2) {
            j.trigger(this._element, "hide.bs.dropdown", t2).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => j.off(t3, "mouseover", d)), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, "hidden.bs.dropdown", t2));
          }
          _getConfig(t2) {
            if (t2 = { ...this.constructor.Default, ...U.getDataAttributes(this._element), ...t2 }, a(Ue, t2, this.constructor.DefaultType), "object" == typeof t2.reference && !o(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect) throw new TypeError(`${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t2;
          }
          _createPopper(t2) {
            if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e2 = this._element;
            "parent" === this._config.reference ? e2 = t2 : o(this._config.reference) ? e2 = r(this._config.reference) : "object" == typeof this._config.reference && (e2 = this._config.reference);
            const i2 = this._getPopperConfig(), n2 = i2.modifiers.find((t3) => "applyStyles" === t3.name && false === t3.enabled);
            this._popper = qe(e2, this._menu, i2), n2 && U.setDataAttribute(this._menu, "popper", "static");
          }
          _isShown(t2 = this._element) {
            return t2.classList.contains(Je);
          }
          _getMenuElement() {
            return V.next(this._element, ei)[0];
          }
          _getPlacement() {
            const t2 = this._element.parentNode;
            if (t2.classList.contains("dropend")) return ri;
            if (t2.classList.contains("dropstart")) return ai;
            const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t2.classList.contains("dropup") ? e2 ? ni : ii : e2 ? oi : si;
          }
          _detectNavbar() {
            return null !== this._element.closest(".navbar");
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
          }
          _getPopperConfig() {
            const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
            return "static" === this._config.display && (t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t2) : this._config.popperConfig };
          }
          _selectMenuItem({ key: t2, target: e2 }) {
            const i2 = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l);
            i2.length && v(i2, e2, t2 === Ye, !i2.includes(e2)).focus();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = hi.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
          static clearMenus(t2) {
            if (t2 && (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key)) return;
            const e2 = V.find(ti);
            for (let i2 = 0, n2 = e2.length; i2 < n2; i2++) {
              const n3 = hi.getInstance(e2[i2]);
              if (!n3 || false === n3._config.autoClose) continue;
              if (!n3._isShown()) continue;
              const s2 = { relatedTarget: n3._element };
              if (t2) {
                const e3 = t2.composedPath(), i3 = e3.includes(n3._menu);
                if (e3.includes(n3._element) || "inside" === n3._config.autoClose && !i3 || "outside" === n3._config.autoClose && i3) continue;
                if (n3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName))) continue;
                "click" === t2.type && (s2.clickEvent = t2);
              }
              n3._completeHide(s2);
            }
          }
          static getParentFromElement(t2) {
            return n(t2) || t2.parentNode;
          }
          static dataApiKeydownHandler(t2) {
            if (/input|textarea/i.test(t2.target.tagName) ? t2.key === Ke || t2.key !== Ve && (t2.key !== Ye && t2.key !== Xe || t2.target.closest(ei)) : !Qe.test(t2.key)) return;
            const e2 = this.classList.contains(Je);
            if (!e2 && t2.key === Ve) return;
            if (t2.preventDefault(), t2.stopPropagation(), c(this)) return;
            const i2 = this.matches(ti) ? this : V.prev(this, ti)[0], n2 = hi.getOrCreateInstance(i2);
            if (t2.key !== Ve) return t2.key === Xe || t2.key === Ye ? (e2 || n2.show(), void n2._selectMenuItem(t2)) : void (e2 && t2.key !== Ke || hi.clearMenus());
            n2.hide();
          }
        }
        j.on(document, Ze, ti, hi.dataApiKeydownHandler), j.on(document, Ze, ei, hi.dataApiKeydownHandler), j.on(document, Ge, hi.clearMenus), j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), j.on(document, Ge, ti, function(t2) {
          t2.preventDefault(), hi.getOrCreateInstance(this).toggle();
        }), g(hi);
        const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ui = ".sticky-top";
        class fi {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const t2 = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t2);
          }
          hide() {
            const t2 = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e2) => e2 + t2), this._setElementAttributes(di, "paddingRight", (e2) => e2 + t2), this._setElementAttributes(ui, "marginRight", (e2) => e2 - t2);
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
          }
          _setElementAttributes(t2, e2, i2) {
            const n2 = this.getWidth();
            this._applyManipulationCallback(t2, (t3) => {
              if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2) return;
              this._saveInitialAttribute(t3, e2);
              const s2 = window.getComputedStyle(t3)[e2];
              t3.style[e2] = `${i2(Number.parseFloat(s2))}px`;
            });
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(di, "paddingRight"), this._resetElementAttributes(ui, "marginRight");
          }
          _saveInitialAttribute(t2, e2) {
            const i2 = t2.style[e2];
            i2 && U.setDataAttribute(t2, e2, i2);
          }
          _resetElementAttributes(t2, e2) {
            this._applyManipulationCallback(t2, (t3) => {
              const i2 = U.getDataAttribute(t3, e2);
              void 0 === i2 ? t3.style.removeProperty(e2) : (U.removeDataAttribute(t3, e2), t3.style[e2] = i2);
            });
          }
          _applyManipulationCallback(t2, e2) {
            o(t2) ? e2(t2) : V.find(t2, this._element).forEach(e2);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
        }
        const pi = { className: "modal-backdrop", isVisible: true, isAnimated: false, rootElement: "body", clickCallback: null }, mi = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" }, gi = "show", _i = "mousedown.bs.backdrop";
        class bi {
          constructor(t2) {
            this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
          }
          show(t2) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && u(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation(() => {
              _(t2);
            })) : _(t2);
          }
          hide(t2) {
            this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation(() => {
              this.dispose(), _(t2);
            })) : _(t2);
          }
          _getElement() {
            if (!this._element) {
              const t2 = document.createElement("div");
              t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
            }
            return this._element;
          }
          _getConfig(t2) {
            return (t2 = { ...pi, ..."object" == typeof t2 ? t2 : {} }).rootElement = r(t2.rootElement), a("backdrop", t2, mi), t2;
          }
          _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), j.on(this._getElement(), _i, () => {
              _(this._config.clickCallback);
            }), this._isAppended = true);
          }
          dispose() {
            this._isAppended && (j.off(this._element, _i), this._element.remove(), this._isAppended = false);
          }
          _emulateAnimation(t2) {
            b(t2, this._getElement(), this._config.isAnimated);
          }
        }
        const vi = { trapElement: null, autofocus: true }, yi = { trapElement: "element", autofocus: "boolean" }, wi = ".bs.focustrap", Ei = "backward";
        class Ai {
          constructor(t2) {
            this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
          }
          activate() {
            const { trapElement: t2, autofocus: e2 } = this._config;
            this._isActive || (e2 && t2.focus(), j.off(document, wi), j.on(document, "focusin.bs.focustrap", (t3) => this._handleFocusin(t3)), j.on(document, "keydown.tab.bs.focustrap", (t3) => this._handleKeydown(t3)), this._isActive = true);
          }
          deactivate() {
            this._isActive && (this._isActive = false, j.off(document, wi));
          }
          _handleFocusin(t2) {
            const { target: e2 } = t2, { trapElement: i2 } = this._config;
            if (e2 === document || e2 === i2 || i2.contains(e2)) return;
            const n2 = V.focusableChildren(i2);
            0 === n2.length ? i2.focus() : this._lastTabNavDirection === Ei ? n2[n2.length - 1].focus() : n2[0].focus();
          }
          _handleKeydown(t2) {
            "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? Ei : "forward");
          }
          _getConfig(t2) {
            return t2 = { ...vi, ..."object" == typeof t2 ? t2 : {} }, a("focustrap", t2, yi), t2;
          }
        }
        const Ti = "modal", Oi = "Escape", Ci = { backdrop: true, keyboard: true, focus: true }, ki = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" }, Li = "hidden.bs.modal", xi = "show.bs.modal", Di = "resize.bs.modal", Si = "click.dismiss.bs.modal", Ni = "keydown.dismiss.bs.modal", Ii = "mousedown.dismiss.bs.modal", Pi = "modal-open", ji = "show", Mi = "modal-static";
        class Hi extends B {
          constructor(t2, e2) {
            super(t2), this._config = this._getConfig(e2), this._dialog = V.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollBar = new fi();
          }
          static get Default() {
            return Ci;
          }
          static get NAME() {
            return Ti;
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || this._isTransitioning || j.trigger(this._element, xi, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isAnimated() && (this._isTransitioning = true), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j.on(this._dialog, Ii, () => {
              j.one(this._element, "mouseup.dismiss.bs.modal", (t3) => {
                t3.target === this._element && (this._ignoreBackdropClick = true);
              });
            }), this._showBackdrop(() => this._showElement(t2)));
          }
          hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (j.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = false;
            const t2 = this._isAnimated();
            t2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ji), j.off(this._element, Si), j.off(this._dialog, Ii), this._queueCallback(() => this._hideModal(), this._element, t2);
          }
          dispose() {
            [window, this._dialog].forEach((t2) => j.off(t2, ".bs.modal")), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          handleUpdate() {
            this._adjustDialog();
          }
          _initializeBackDrop() {
            return new bi({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
          }
          _initializeFocusTrap() {
            return new Ai({ trapElement: this._element });
          }
          _getConfig(t2) {
            return t2 = { ...Ci, ...U.getDataAttributes(this._element), ..."object" == typeof t2 ? t2 : {} }, a(Ti, t2, ki), t2;
          }
          _showElement(t2) {
            const e2 = this._isAnimated(), i2 = V.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i2 && (i2.scrollTop = 0), e2 && u(this._element), this._element.classList.add(ji), this._queueCallback(() => {
              this._config.focus && this._focustrap.activate(), this._isTransitioning = false, j.trigger(this._element, "shown.bs.modal", { relatedTarget: t2 });
            }, this._dialog, e2);
          }
          _setEscapeEvent() {
            this._isShown ? j.on(this._element, Ni, (t2) => {
              this._config.keyboard && t2.key === Oi ? (t2.preventDefault(), this.hide()) : this._config.keyboard || t2.key !== Oi || this._triggerBackdropTransition();
            }) : j.off(this._element, Ni);
          }
          _setResizeEvent() {
            this._isShown ? j.on(window, Di, () => this._adjustDialog()) : j.off(window, Di);
          }
          _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
              document.body.classList.remove(Pi), this._resetAdjustments(), this._scrollBar.reset(), j.trigger(this._element, Li);
            });
          }
          _showBackdrop(t2) {
            j.on(this._element, Si, (t3) => {
              this._ignoreBackdropClick ? this._ignoreBackdropClick = false : t3.target === t3.currentTarget && (true === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
            }), this._backdrop.show(t2);
          }
          _isAnimated() {
            return this._element.classList.contains("fade");
          }
          _triggerBackdropTransition() {
            if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const { classList: t2, scrollHeight: e2, style: i2 } = this._element, n2 = e2 > document.documentElement.clientHeight;
            !n2 && "hidden" === i2.overflowY || t2.contains(Mi) || (n2 || (i2.overflowY = "hidden"), t2.add(Mi), this._queueCallback(() => {
              t2.remove(Mi), n2 || this._queueCallback(() => {
                i2.overflowY = "";
              }, this._dialog);
            }, this._dialog), this._element.focus());
          }
          _adjustDialog() {
            const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
            (!i2 && t2 && !m() || i2 && !t2 && m()) && (this._element.style.paddingLeft = `${e2}px`), (i2 && !t2 && !m() || !i2 && t2 && m()) && (this._element.style.paddingRight = `${e2}px`);
          }
          _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
          }
          static jQueryInterface(t2, e2) {
            return this.each(function() {
              const i2 = Hi.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
                i2[t2](e2);
              }
            });
          }
        }
        j.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t2) {
          const e2 = n(this);
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), j.one(e2, xi, (t3) => {
            t3.defaultPrevented || j.one(e2, Li, () => {
              l(this) && this.focus();
            });
          });
          const i2 = V.findOne(".modal.show");
          i2 && Hi.getInstance(i2).hide(), Hi.getOrCreateInstance(e2).toggle(this);
        }), R(Hi), g(Hi);
        const Bi = "offcanvas", Ri = { backdrop: true, keyboard: true, scroll: false }, Wi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" }, $i = "show", zi = ".offcanvas.show", qi = "hidden.bs.offcanvas";
        class Fi extends B {
          constructor(t2, e2) {
            super(t2), this._config = this._getConfig(e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
          }
          static get NAME() {
            return Bi;
          }
          static get Default() {
            return Ri;
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || j.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new fi().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add($i), this._queueCallback(() => {
              this._config.scroll || this._focustrap.activate(), j.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t2 });
            }, this._element, true));
          }
          hide() {
            this._isShown && (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.remove($i), this._backdrop.hide(), this._queueCallback(() => {
              this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new fi().reset(), j.trigger(this._element, qi);
            }, this._element, true)));
          }
          dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          _getConfig(t2) {
            return t2 = { ...Ri, ...U.getDataAttributes(this._element), ..."object" == typeof t2 ? t2 : {} }, a(Bi, t2, Wi), t2;
          }
          _initializeBackDrop() {
            return new bi({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: true, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
          }
          _initializeFocusTrap() {
            return new Ai({ trapElement: this._element });
          }
          _addEventListeners() {
            j.on(this._element, "keydown.dismiss.bs.offcanvas", (t2) => {
              this._config.keyboard && "Escape" === t2.key && this.hide();
            });
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Fi.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        j.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t2) {
          const e2 = n(this);
          if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), c(this)) return;
          j.one(e2, qi, () => {
            l(this) && this.focus();
          });
          const i2 = V.findOne(zi);
          i2 && i2 !== e2 && Fi.getInstance(i2).hide(), Fi.getOrCreateInstance(e2).toggle(this);
        }), j.on(window, "load.bs.offcanvas.data-api", () => V.find(zi).forEach((t2) => Fi.getOrCreateInstance(t2).show())), R(Fi), g(Fi);
        const Ui = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Xi = (t2, e2) => {
          const i2 = t2.nodeName.toLowerCase();
          if (e2.includes(i2)) return !Ui.has(i2) || Boolean(Vi.test(t2.nodeValue) || Ki.test(t2.nodeValue));
          const n2 = e2.filter((t3) => t3 instanceof RegExp);
          for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) if (n2[t3].test(i2)) return true;
          return false;
        };
        function Yi(t2, e2, i2) {
          if (!t2.length) return t2;
          if (i2 && "function" == typeof i2) return i2(t2);
          const n2 = new window.DOMParser().parseFromString(t2, "text/html"), s2 = [].concat(...n2.body.querySelectorAll("*"));
          for (let t3 = 0, i3 = s2.length; t3 < i3; t3++) {
            const i4 = s2[t3], n3 = i4.nodeName.toLowerCase();
            if (!Object.keys(e2).includes(n3)) {
              i4.remove();
              continue;
            }
            const o2 = [].concat(...i4.attributes), r2 = [].concat(e2["*"] || [], e2[n3] || []);
            o2.forEach((t4) => {
              Xi(t4, r2) || i4.removeAttribute(t4.nodeName);
            });
          }
          return n2.body.innerHTML;
        }
        const Qi = "tooltip", Gi = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Zi = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" }, Ji = { AUTO: "auto", TOP: "top", RIGHT: m() ? "left" : "right", BOTTOM: "bottom", LEFT: m() ? "right" : "left" }, tn = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: [0, 0], container: false, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: true, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, en = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" }, nn = "fade", sn = "show", on = "show", rn = "out", an = ".tooltip-inner", ln = ".modal", cn = "hide.bs.modal", hn = "hover", dn = "focus";
        class un extends B {
          constructor(t2, e2) {
            if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t2), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e2), this.tip = null, this._setListeners();
          }
          static get Default() {
            return tn;
          }
          static get NAME() {
            return Qi;
          }
          static get Event() {
            return en;
          }
          static get DefaultType() {
            return Zi;
          }
          enable() {
            this._isEnabled = true;
          }
          disable() {
            this._isEnabled = false;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle(t2) {
            if (this._isEnabled) if (t2) {
              const e2 = this._initializeOnDelegatedTarget(t2);
              e2._activeTrigger.click = !e2._activeTrigger.click, e2._isWithActiveTrigger() ? e2._enter(null, e2) : e2._leave(null, e2);
            } else {
              if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);
              this._enter(null, this);
            }
          }
          dispose() {
            clearTimeout(this._timeout), j.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
          }
          show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t2 = j.trigger(this._element, this.constructor.Event.SHOW), e2 = h(this._element), i2 = null === e2 ? this._element.ownerDocument.documentElement.contains(this._element) : e2.contains(this._element);
            if (t2.defaultPrevented || !i2) return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
            const n2 = this.getTipElement(), s2 = ((t3) => {
              do {
                t3 += Math.floor(1e6 * Math.random());
              } while (document.getElementById(t3));
              return t3;
            })(this.constructor.NAME);
            n2.setAttribute("id", s2), this._element.setAttribute("aria-describedby", s2), this._config.animation && n2.classList.add(nn);
            const o2 = "function" == typeof this._config.placement ? this._config.placement.call(this, n2, this._element) : this._config.placement, r2 = this._getAttachment(o2);
            this._addAttachmentClass(r2);
            const { container: a2 } = this._config;
            H.set(n2, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a2.append(n2), j.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = qe(this._element, n2, this._getPopperConfig(r2)), n2.classList.add(sn);
            const l2 = this._resolvePossibleFunction(this._config.customClass);
            l2 && n2.classList.add(...l2.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => {
              j.on(t3, "mouseover", d);
            });
            const c2 = this.tip.classList.contains(nn);
            this._queueCallback(() => {
              const t3 = this._hoverState;
              this._hoverState = null, j.trigger(this._element, this.constructor.Event.SHOWN), t3 === rn && this._leave(null, this);
            }, this.tip, c2);
          }
          hide() {
            if (!this._popper) return;
            const t2 = this.getTipElement();
            if (j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t2.classList.remove(sn), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => j.off(t3, "mouseover", d)), this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false;
            const e2 = this.tip.classList.contains(nn);
            this._queueCallback(() => {
              this._isWithActiveTrigger() || (this._hoverState !== on && t2.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), j.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
            }, this.tip, e2), this._hoverState = "";
          }
          update() {
            null !== this._popper && this._popper.update();
          }
          isWithContent() {
            return Boolean(this.getTitle());
          }
          getTipElement() {
            if (this.tip) return this.tip;
            const t2 = document.createElement("div");
            t2.innerHTML = this._config.template;
            const e2 = t2.children[0];
            return this.setContent(e2), e2.classList.remove(nn, sn), this.tip = e2, this.tip;
          }
          setContent(t2) {
            this._sanitizeAndSetContent(t2, this.getTitle(), an);
          }
          _sanitizeAndSetContent(t2, e2, i2) {
            const n2 = V.findOne(i2, t2);
            e2 || !n2 ? this.setElementContent(n2, e2) : n2.remove();
          }
          setElementContent(t2, e2) {
            if (null !== t2) return o(e2) ? (e2 = r(e2), void (this._config.html ? e2.parentNode !== t2 && (t2.innerHTML = "", t2.append(e2)) : t2.textContent = e2.textContent)) : void (this._config.html ? (this._config.sanitize && (e2 = Yi(e2, this._config.allowList, this._config.sanitizeFn)), t2.innerHTML = e2) : t2.textContent = e2);
          }
          getTitle() {
            const t2 = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t2);
          }
          updateAttachment(t2) {
            return "right" === t2 ? "end" : "left" === t2 ? "start" : t2;
          }
          _initializeOnDelegatedTarget(t2, e2) {
            return e2 || this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
          }
          _resolvePossibleFunction(t2) {
            return "function" == typeof t2 ? t2.call(this._element) : t2;
          }
          _getPopperConfig(t2) {
            const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: true, phase: "afterWrite", fn: (t3) => this._handlePopperPlacementChange(t3) }], onFirstUpdate: (t3) => {
              t3.options.placement !== t3.placement && this._handlePopperPlacementChange(t3);
            } };
            return { ...e2, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e2) : this._config.popperConfig };
          }
          _addAttachmentClass(t2) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t2)}`);
          }
          _getAttachment(t2) {
            return Ji[t2.toUpperCase()];
          }
          _setListeners() {
            this._config.trigger.split(" ").forEach((t2) => {
              if ("click" === t2) j.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t3) => this.toggle(t3));
              else if ("manual" !== t2) {
                const e2 = t2 === hn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i2 = t2 === hn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                j.on(this._element, e2, this._config.selector, (t3) => this._enter(t3)), j.on(this._element, i2, this._config.selector, (t3) => this._leave(t3));
              }
            }), this._hideModalHandler = () => {
              this._element && this.hide();
            }, j.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: "manual", selector: "" } : this._fixTitle();
          }
          _fixTitle() {
            const t2 = this._element.getAttribute("title"), e2 = typeof this._element.getAttribute("data-bs-original-title");
            (t2 || "string" !== e2) && (this._element.setAttribute("data-bs-original-title", t2 || ""), !t2 || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t2), this._element.setAttribute("title", ""));
          }
          _enter(t2, e2) {
            e2 = this._initializeOnDelegatedTarget(t2, e2), t2 && (e2._activeTrigger["focusin" === t2.type ? dn : hn] = true), e2.getTipElement().classList.contains(sn) || e2._hoverState === on ? e2._hoverState = on : (clearTimeout(e2._timeout), e2._hoverState = on, e2._config.delay && e2._config.delay.show ? e2._timeout = setTimeout(() => {
              e2._hoverState === on && e2.show();
            }, e2._config.delay.show) : e2.show());
          }
          _leave(t2, e2) {
            e2 = this._initializeOnDelegatedTarget(t2, e2), t2 && (e2._activeTrigger["focusout" === t2.type ? dn : hn] = e2._element.contains(t2.relatedTarget)), e2._isWithActiveTrigger() || (clearTimeout(e2._timeout), e2._hoverState = rn, e2._config.delay && e2._config.delay.hide ? e2._timeout = setTimeout(() => {
              e2._hoverState === rn && e2.hide();
            }, e2._config.delay.hide) : e2.hide());
          }
          _isWithActiveTrigger() {
            for (const t2 in this._activeTrigger) if (this._activeTrigger[t2]) return true;
            return false;
          }
          _getConfig(t2) {
            const e2 = U.getDataAttributes(this._element);
            return Object.keys(e2).forEach((t3) => {
              Gi.has(t3) && delete e2[t3];
            }), (t2 = { ...this.constructor.Default, ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }).container = false === t2.container ? document.body : r(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), a(Qi, t2, this.constructor.DefaultType), t2.sanitize && (t2.template = Yi(t2.template, t2.allowList, t2.sanitizeFn)), t2;
          }
          _getDelegateConfig() {
            const t2 = {};
            for (const e2 in this._config) this.constructor.Default[e2] !== this._config[e2] && (t2[e2] = this._config[e2]);
            return t2;
          }
          _cleanTipClass() {
            const t2 = this.getTipElement(), e2 = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i2 = t2.getAttribute("class").match(e2);
            null !== i2 && i2.length > 0 && i2.map((t3) => t3.trim()).forEach((e3) => t2.classList.remove(e3));
          }
          _getBasicClassPrefix() {
            return "bs-tooltip";
          }
          _handlePopperPlacementChange(t2) {
            const { state: e2 } = t2;
            e2 && (this.tip = e2.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e2.placement)));
          }
          _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null);
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = un.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        g(un);
        const fn = { ...un.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }, pn = { ...un.DefaultType, content: "(string|element|function)" }, mn = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" };
        class gn extends un {
          static get Default() {
            return fn;
          }
          static get NAME() {
            return "popover";
          }
          static get Event() {
            return mn;
          }
          static get DefaultType() {
            return pn;
          }
          isWithContent() {
            return this.getTitle() || this._getContent();
          }
          setContent(t2) {
            this._sanitizeAndSetContent(t2, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t2, this._getContent(), ".popover-body");
          }
          _getContent() {
            return this._resolvePossibleFunction(this._config.content);
          }
          _getBasicClassPrefix() {
            return "bs-popover";
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = gn.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        g(gn);
        const _n = "scrollspy", bn = { offset: 10, method: "auto", target: "" }, vn = { offset: "number", method: "string", target: "(string|element)" }, yn = "active", wn = ".nav-link, .list-group-item, .dropdown-item", En = "position";
        class An extends B {
          constructor(t2, e2) {
            super(t2), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e2), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, j.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process();
          }
          static get Default() {
            return bn;
          }
          static get NAME() {
            return _n;
          }
          refresh() {
            const t2 = this._scrollElement === this._scrollElement.window ? "offset" : En, e2 = "auto" === this._config.method ? t2 : this._config.method, n2 = e2 === En ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V.find(wn, this._config.target).map((t3) => {
              const s2 = i(t3), o2 = s2 ? V.findOne(s2) : null;
              if (o2) {
                const t4 = o2.getBoundingClientRect();
                if (t4.width || t4.height) return [U[e2](o2).top + n2, s2];
              }
              return null;
            }).filter((t3) => t3).sort((t3, e3) => t3[0] - e3[0]).forEach((t3) => {
              this._offsets.push(t3[0]), this._targets.push(t3[1]);
            });
          }
          dispose() {
            j.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
          }
          _getConfig(t2) {
            return (t2 = { ...bn, ...U.getDataAttributes(this._element), ..."object" == typeof t2 && t2 ? t2 : {} }).target = r(t2.target) || document.documentElement, a(_n, t2, vn), t2;
          }
          _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }
          _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          }
          _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
          }
          _process() {
            const t2 = this._getScrollTop() + this._config.offset, e2 = this._getScrollHeight(), i2 = this._config.offset + e2 - this._getOffsetHeight();
            if (this._scrollHeight !== e2 && this.refresh(), t2 >= i2) {
              const t3 = this._targets[this._targets.length - 1];
              this._activeTarget !== t3 && this._activate(t3);
            } else {
              if (this._activeTarget && t2 < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
              for (let e3 = this._offsets.length; e3--; ) this._activeTarget !== this._targets[e3] && t2 >= this._offsets[e3] && (void 0 === this._offsets[e3 + 1] || t2 < this._offsets[e3 + 1]) && this._activate(this._targets[e3]);
            }
          }
          _activate(t2) {
            this._activeTarget = t2, this._clear();
            const e2 = wn.split(",").map((e3) => `${e3}[data-bs-target="${t2}"],${e3}[href="${t2}"]`), i2 = V.findOne(e2.join(","), this._config.target);
            i2.classList.add(yn), i2.classList.contains("dropdown-item") ? V.findOne(".dropdown-toggle", i2.closest(".dropdown")).classList.add(yn) : V.parents(i2, ".nav, .list-group").forEach((t3) => {
              V.prev(t3, ".nav-link, .list-group-item").forEach((t4) => t4.classList.add(yn)), V.prev(t3, ".nav-item").forEach((t4) => {
                V.children(t4, ".nav-link").forEach((t5) => t5.classList.add(yn));
              });
            }), j.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t2 });
          }
          _clear() {
            V.find(wn, this._config.target).filter((t2) => t2.classList.contains(yn)).forEach((t2) => t2.classList.remove(yn));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = An.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        j.on(window, "load.bs.scrollspy.data-api", () => {
          V.find('[data-bs-spy="scroll"]').forEach((t2) => new An(t2));
        }), g(An);
        const Tn = "active", On = "fade", Cn = "show", kn = ".active", Ln = ":scope > li > .active";
        class xn extends B {
          static get NAME() {
            return "tab";
          }
          show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return;
            let t2;
            const e2 = n(this._element), i2 = this._element.closest(".nav, .list-group");
            if (i2) {
              const e3 = "UL" === i2.nodeName || "OL" === i2.nodeName ? Ln : kn;
              t2 = V.find(e3, i2), t2 = t2[t2.length - 1];
            }
            const s2 = t2 ? j.trigger(t2, "hide.bs.tab", { relatedTarget: this._element }) : null;
            if (j.trigger(this._element, "show.bs.tab", { relatedTarget: t2 }).defaultPrevented || null !== s2 && s2.defaultPrevented) return;
            this._activate(this._element, i2);
            const o2 = () => {
              j.trigger(t2, "hidden.bs.tab", { relatedTarget: this._element }), j.trigger(this._element, "shown.bs.tab", { relatedTarget: t2 });
            };
            e2 ? this._activate(e2, e2.parentNode, o2) : o2();
          }
          _activate(t2, e2, i2) {
            const n2 = (!e2 || "UL" !== e2.nodeName && "OL" !== e2.nodeName ? V.children(e2, kn) : V.find(Ln, e2))[0], s2 = i2 && n2 && n2.classList.contains(On), o2 = () => this._transitionComplete(t2, n2, i2);
            n2 && s2 ? (n2.classList.remove(Cn), this._queueCallback(o2, t2, true)) : o2();
          }
          _transitionComplete(t2, e2, i2) {
            if (e2) {
              e2.classList.remove(Tn);
              const t3 = V.findOne(":scope > .dropdown-menu .active", e2.parentNode);
              t3 && t3.classList.remove(Tn), "tab" === e2.getAttribute("role") && e2.setAttribute("aria-selected", false);
            }
            t2.classList.add(Tn), "tab" === t2.getAttribute("role") && t2.setAttribute("aria-selected", true), u(t2), t2.classList.contains(On) && t2.classList.add(Cn);
            let n2 = t2.parentNode;
            if (n2 && "LI" === n2.nodeName && (n2 = n2.parentNode), n2 && n2.classList.contains("dropdown-menu")) {
              const e3 = t2.closest(".dropdown");
              e3 && V.find(".dropdown-toggle", e3).forEach((t3) => t3.classList.add(Tn)), t2.setAttribute("aria-expanded", true);
            }
            i2 && i2();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = xn.getOrCreateInstance(this);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        j.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t2) {
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), c(this) || xn.getOrCreateInstance(this).show();
        }), g(xn);
        const Dn = "toast", Sn = "hide", Nn = "show", In = "showing", Pn = { animation: "boolean", autohide: "boolean", delay: "number" }, jn = { animation: true, autohide: true, delay: 5e3 };
        class Mn extends B {
          constructor(t2, e2) {
            super(t2), this._config = this._getConfig(e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
          }
          static get DefaultType() {
            return Pn;
          }
          static get Default() {
            return jn;
          }
          static get NAME() {
            return Dn;
          }
          show() {
            j.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Sn), u(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback(() => {
              this._element.classList.remove(In), j.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
          }
          hide() {
            this._element.classList.contains(Nn) && (j.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(In), this._queueCallback(() => {
              this._element.classList.add(Sn), this._element.classList.remove(In), this._element.classList.remove(Nn), j.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
          }
          dispose() {
            this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), super.dispose();
          }
          _getConfig(t2) {
            return t2 = { ...jn, ...U.getDataAttributes(this._element), ..."object" == typeof t2 && t2 ? t2 : {} }, a(Dn, t2, this.constructor.DefaultType), t2;
          }
          _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
          }
          _onInteraction(t2, e2) {
            switch (t2.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = e2;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = e2;
            }
            if (e2) return void this._clearTimeout();
            const i2 = t2.relatedTarget;
            this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
          }
          _setListeners() {
            j.on(this._element, "mouseover.bs.toast", (t2) => this._onInteraction(t2, true)), j.on(this._element, "mouseout.bs.toast", (t2) => this._onInteraction(t2, false)), j.on(this._element, "focusin.bs.toast", (t2) => this._onInteraction(t2, true)), j.on(this._element, "focusout.bs.toast", (t2) => this._onInteraction(t2, false));
          }
          _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Mn.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        return R(Mn), g(Mn), { Alert: W, Button: z, Carousel: st, Collapse: pt, Dropdown: hi, Modal: Hi, Offcanvas: Fi, Popover: gn, ScrollSpy: An, Tab: xn, Toast: Mn, Tooltip: un };
      });
    }
  });

  // <stdin>
  var import_bootstrap_bundle_min = __toESM(require_bootstrap_bundle_min());
})();
/*! Bundled license information:

bootstrap/dist/js/bootstrap.bundle.min.js:
  (*!
    * Bootstrap v5.1.3 (https://getbootstrap.com/)
    * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
