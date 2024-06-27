(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./mwc/mwc-button.js");
require("./mwc/mwc-input.js");
require("./mwc/mwc-menu.js");
require("./mwc/mwc-select.js");
require("./mwc/mwc-tab.js");
require("./mwc/mwc-dialog.js");
require("./mwc/mwc-grid.js");
require("./mwc/mwc-label.js");
require("./mwc/mwc-fieldset.js");
require("./mwc/mwc-form.js");
require("./mwc/mwc-card.js");

},{"./mwc/mwc-button.js":2,"./mwc/mwc-card.js":3,"./mwc/mwc-dialog.js":4,"./mwc/mwc-fieldset.js":5,"./mwc/mwc-form.js":6,"./mwc/mwc-grid.js":7,"./mwc/mwc-input.js":8,"./mwc/mwc-label.js":9,"./mwc/mwc-menu.js":10,"./mwc/mwc-select.js":11,"./mwc/mwc-tab.js":12}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
customElements.define('mwc-button', /*#__PURE__*/function (_MWC) {
  function _class() {
    _classCallCheck(this, _class);
    return _callSuper(this, _class, [/*html*/"\n                <button root>\n                    <slot></slot>\n                </button>\n            ", /*css*/"\n                :host {\n                    display: inline-block;\n                }\n                [root] {\n                    padding: .375rem .75rem;\n                    font-size: .875rem;\n                    border-radius: .375rem;\n                    font-weight: 500;\n                    line-height: 1.5rem;\n                    border: 1px solid rgb(var(--cTheme, 0 0 0));\n                    font-family: inherit;\n                    cursor: pointer;\n                    width: 100%;\n                    background: rgb(var(--cTheme, 0 0 0));\n                    color: rgb(var(--cThemeText, 255 255 255));\n                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n                }\n                :host([disabled]) [root] {\n                    pointer-events: none;\n                    opacity: .6rem;\n                }\n                :host([small]) [root] {\n                    padding: .25rem .625rem;\n                    font-size: .75rem;\n                    border-radius: .25rem;\n                    line-height: 1.25rem;\n                }\n                :host([outlined]) [root] {\n                    background: transparent;\n                    color: rgb(var(--cTheme, 0 0 0));\n                }\n                :host([block]) {\n                    display: block;\n                }\n            "]);
  }
  _inherits(_class, _MWC);
  return _createClass(_class);
}(_mwc.MWC));

},{"./mwc.js":13}],3:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
customElements.define('mwc-card', /*#__PURE__*/function (_MWC) {
  function _class() {
    _classCallCheck(this, _class);
    return _callSuper(this, _class, [/*html*/"\n                <div root>\n                    <slot></slot>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: block;\n                }\n                [root] {\n                    padding: 1rem;\n                    background: rgb(var(--cBaseL2, 255 255 255));\n                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));\n                    border-radius: .375rem;\n                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n                }\n            "]);
  }
  _inherits(_class, _MWC);
  return _createClass(_class);
}(_mwc.MWC));

},{"./mwc.js":13}],4:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
var _root, _card, _Class_brand;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
customElements.define('mwc-dialog', (_root = /*#__PURE__*/new WeakMap(), _card = /*#__PURE__*/new WeakMap(), _Class_brand = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function (_MWC) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class, [/*html*/"\n                <div root>\n                    <div class=\"card\">\n                        <slot name=\"heading\" display=\"flex\"></slot>\n                        <slot></slot>\n                    </div>\n                </div>\n            ", /*css*/"\n                [root] {\n                    position: fixed;\n                    z-index: 96;\n                    top: 0;\n                    left: 0;\n                    bottom: 0;\n                    right: 0;\n                    background: rgb(0 0 0 / .5);\n                    backdrop-filter: blur(5px);\n                    visibility: hidden;\n                    opacity: 0;\n                    pointer-events: none;\n                    transition: all .25s;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: center;\n                    align-items: center;\n                }\n                :host([active]) [root] {\n                    visibility: visible;\n                    opacity: 1;\n                    pointer-events: initial;\n                }\n                :host([small]) .card {\n                    width: 480px;\n                }\n                .card {\n                    margin-top: 4rem;\n                    margin-bottom: 4rem;\n                    max-height: calc(100% - 8rem);\n                    width: 800px;\n                    background: rgb(var(--cBaseL1, 244 244 252));\n                    border-radius: .375rem;\n                    margin-left: auto;\n                    margin-right: auto;\n                    display: flex;\n                    flex-direction: column;\n                    transition: all .25s;\n                    transform: translateY(15px);\n                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n                }\n                :host([active]) .card {\n                    transform: translateY(0px);\n                }\n                slot[name=\"heading\"] {\n                    align-items: center;\n                    padding: 1rem 1.25rem;\n                    border-bottom: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));\n                    font-weight: 500;\n                    font-size: 1.25rem;\n                    flex: 0 1 auto;\n                    border-top-left-radius: inherit;\n                    border-top-right-radius: inherit;\n                }\n                slot:not([name]) {\n                    display: block;\n                    padding: 1.75rem;\n                    overflow-y: auto;\n                    overflow-x: hidden;\n                    flex: 1;\n                }\n                ::-webkit-scrollbar {\n                    width: 14px;\n                }\n                ::-webkit-scrollbar-track {\n                    background: transparent;\n                }\n                ::-webkit-scrollbar-thumb {\n                    border: 4px solid rgba(0, 0, 0, 0);\n                    background-clip: padding-box;\n                    border-radius: 9999px;\n                    background-color: rgb(var(--cTheme, 0 0 0));\n                }\n            "]);
    _classPrivateMethodInitSpec(_this, _Class_brand);
    _classPrivateFieldInitSpec(_this, _root, void 0);
    _classPrivateFieldInitSpec(_this, _card, void 0);
    _classPrivateFieldSet(_root, _this, _this.shadowRoot.querySelector('[root]'));
    _classPrivateFieldSet(_card, _this, _this.shadowRoot.querySelector('.card'));
    _classPrivateFieldGet(_card, _this).addEventListener('click', _assertClassBrand(_Class_brand, _this, _onCardClick).bind(_this));
    _classPrivateFieldGet(_root, _this).addEventListener('click', _this.hide.bind(_this));
    return _this;
  }
  _inherits(_class, _MWC);
  return _createClass(_class, [{
    key: "show",
    value: function show() {
      this.setAttribute('active', '');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.removeAttribute('active');
    }
  }]);
}(_mwc.MWC)));
function _onCardClick(event) {
  event.stopPropagation();
}

},{"./mwc.js":13}],5:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
customElements.define('mwc-fieldset', /*#__PURE__*/function (_MWC) {
  function _class() {
    _classCallCheck(this, _class);
    return _callSuper(this, _class, [/*html*/"\n                <fieldset root>\n                    <legend display=\"inline-block\">\n                        <slot name=\"legend\"></slot>\n                    </legend>\n                    <slot />\n                </fieldset>\n            ", /*css*/"\n                [root] {\n                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));\n                    padding: 1.5rem;\n                    border-radius: .375rem;\n                    background: rgb(var(--cBaseL2, 255 255 255));\n                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n                }\n                :host([bordered]) [root] {\n                    border: 1px solid rgb(var(--cTheme, 0 0 0));\n                }\n                legend {\n                    padding-left: .5rem;\n                    padding-right: .5rem;\n                    font-size: .875rem;\n                    font-weight: 500;\n                    background: rgb(var(--cTheme, 0 0 0));\n                    color: rgb(var(--cThemeText, 255 255 255));\n                    padding: .375rem .875rem;\n                    border-radius: 999px;\n                    line-height: 1.25rem;\n                }\n            "]);
  }
  _inherits(_class, _MWC);
  return _createClass(_class);
}(_mwc.MWC));

},{"./mwc.js":13}],6:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
var _root, _Class_brand;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var FormError = /*#__PURE__*/function (_Error) {
  function FormError(message, field) {
    var _this;
    _classCallCheck(this, FormError);
    _this = _callSuper(this, FormError, [message]);
    _this.field = field;
    return _this;
  }
  _inherits(FormError, _Error);
  return _createClass(FormError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
customElements.define('mwc-form', (_root = /*#__PURE__*/new WeakMap(), _Class_brand = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function (_MWC) {
  function _class() {
    var _this2;
    _classCallCheck(this, _class);
    _this2 = _callSuper(this, _class, [/*html*/"\n                <form root>\n                    <slot></slot>\n                </form>\n            ", /*css*/"\n                :host {\n                    display: block;\n                }\n            "]);
    _classPrivateMethodInitSpec(_this2, _Class_brand);
    _classPrivateFieldInitSpec(_this2, _root, void 0);
    _classPrivateFieldSet(_root, _this2, _this2.shadowRoot.querySelector('[root]'));
    _classPrivateFieldGet(_root, _this2).addEventListener('click', _assertClassBrand(_Class_brand, _this2, _onClickInside).bind(_this2));
    return _this2;
  }
  _inherits(_class, _MWC);
  return _createClass(_class, [{
    key: "data",
    set: function set(o) {
      var formElements = _assertClassBrand(_Class_brand, this, _getFormElements).call(this);
      var jsonData = {};
      var _iterator = _createForOfIteratorHelper(formElements),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;
          var altName = el.getAttribute('alt-name');
          var name = el.getAttribute('name');
          var value = o === null ? '' : o[altName || name];
          if (name.startsWith('json:')) {
            var _name$split = name.split(':'),
              _name$split2 = _slicedToArray(_name$split, 3),
              field = _name$split2[1],
              prop = _name$split2[2];
            if (!jsonData[field]) {
              jsonData[field] = JSON.parse(o[field]);
            }
            value = jsonData[field][prop];
          }
          if (value !== undefined) {
            el.value = value;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
}(_mwc.MWC)));
function _onClickInside(_x) {
  return _onClickInside2.apply(this, arguments);
}
function _onClickInside2() {
  _onClickInside2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var action, method, formData, res, responseEvent, fetchFn, options, _i, _Object$entries, _Object$entries$_i, key, value, field;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(event.target.getAttribute('type') !== 'submit')) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          event.preventDefault();
          action = this.getAttribute('action');
          method = this.getAttribute('method') || 'post';
          if (action) {
            _context.next = 7;
            break;
          }
          throw new Error('No action found for <wc-form>');
        case 7:
          _context.prev = 7;
          formData = _assertClassBrand(_Class_brand, this, _makeFormData).call(this);
          _context.next = 16;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](7);
          if (!(_context.t0 instanceof FormError)) {
            _context.next = 16;
            break;
          }
          _context.t0.field.error = _context.t0.message.trim();
          return _context.abrupt("return");
        case 16:
          responseEvent = 'success';
          fetchFn = window.$fetch || window.fetch;
          options = {
            method: method
          };
          if (method === 'get') {
            action += '?' + new URLSearchParams(formData).toString();
          } else {
            options.body = formData.data;
          }
          event.target.disabled = true;
          _context.next = 23;
          return fetchFn(action, options);
        case 23:
          res = _context.sent;
          if (!(res instanceof Response)) {
            _context.next = 31;
            break;
          }
          _context.t1 = res.ok;
          _context.next = 28;
          return res.json();
        case 28:
          _context.t2 = _context.sent;
          _context.t3 = res.status;
          res = {
            ok: _context.t1,
            payload: _context.t2,
            status: _context.t3
          };
        case 31:
          if (!res.ok) {
            responseEvent = 'fail';
            if (res.payload.errors) {
              for (_i = 0, _Object$entries = Object.entries(res.payload.errors); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                field = formData.fields[key];
                if (field) {
                  formData.fields[key].errorMessage = value;
                }
              }
            }
          }
          this.dispatchEvent(new CustomEvent(responseEvent, {
            detail: res
          }));
          event.target.disabled = false;
        case 34:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[7, 11]]);
  }));
  return _onClickInside2.apply(this, arguments);
}
function _makeFormData() {
  var data = new FormData();
  var fields = {};
  var formElements = _assertClassBrand(_Class_brand, this, _getFormElements).call(this);
  var jsonData = {};
  var _iterator2 = _createForOfIteratorHelper(formElements),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var el = _step2.value;
      var name = el.getAttribute('name');
      var isRequired = el.hasAttribute('required');
      if (isRequired && [undefined, null, ''].includes(el.value)) {
        throw new FormError("This field is required", el);
      }
      fields[name] = el;
      if (![undefined, null, ''].includes(el.value)) {
        if (name.startsWith('json:')) {
          var _name$split3 = name.split(':'),
            _name$split4 = _slicedToArray(_name$split3, 3),
            _field = _name$split4[1],
            prop = _name$split4[2];
          if (!jsonData[_field]) {
            jsonData[_field] = {};
          }
          jsonData[_field][prop] = el.value;
        } else if (el.value instanceof Array) {
          name.endsWith('[]') ? name : name + '[]', _readOnlyError("name");
          var _iterator3 = _createForOfIteratorHelper(el.value),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var value = _step3.value;
              data.append(name, value);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else {
          data.append(name, el.value);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  for (var field in jsonData) {
    data.set(field, JSON.stringify(jsonData[field]));
  }
  return {
    fields: fields,
    data: data
  };
}
function _getFormElements() {
  var allSlottedNodes = _classPrivateFieldGet(_root, this).querySelector('slot').assignedElements({
    flatten: true
  });
  var result = [];
  var _iterator4 = _createForOfIteratorHelper(allSlottedNodes),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var n = _step4.value;
      [].concat(_toConsumableArray(n.hasAttribute('name') ? [n] : []), _toConsumableArray(n.querySelectorAll('[name]'))).forEach(function (el) {
        result.push(el);
      });
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return result;
}

},{"./mwc.js":13}],7:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
customElements.define('mwc-grid', /*#__PURE__*/function (_MWC) {
  function _class() {
    _classCallCheck(this, _class);
    return _callSuper(this, _class, [/*html*/"\n                <div root>\n                    <slot></slot>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: block;\n                }\n                [root] {\n                    display: grid;\n                    grid-template-columns: repeat(12, 1fr);\n                    gap: 1.25rem;\n                    width: 100%;\n                }\n                ::slotted([span=\"1\"]) {\n                    grid-column: span 1;\n                }\n                ::slotted([span=\"2\"]) {\n                    grid-column: span 2;\n                }\n                ::slotted([span=\"3\"]) {\n                    grid-column: span 3;\n                }\n                ::slotted([span=\"4\"]) {\n                    grid-column: span 4;\n                }\n                ::slotted([span=\"5\"]) {\n                    grid-column: span 5;\n                }\n                ::slotted([span=\"6\"]) {\n                    grid-column: span 6;\n                }\n                ::slotted([span=\"7\"]) {\n                    grid-column: span 7;\n                }\n                ::slotted([span=\"8\"]) {\n                    grid-column: span 8;\n                }\n                ::slotted([span=\"9\"]) {\n                    grid-column: span 9;\n                }\n                ::slotted([span=\"10\"]) {\n                    grid-column: span 10;\n                }\n                ::slotted([span=\"11\"]) {\n                    grid-column: span 11;\n                }\n                ::slotted([span=\"12\"]) {\n                    grid-column: span 12;\n                }\n            "]);
  }
  _inherits(_class, _MWC);
  return _createClass(_class);
}(_mwc.MWC));

},{"./mwc.js":13}],8:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
var _Class, _root, _origInput, _errorMessageEl, _Class_brand;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
customElements.define('mwc-input', (_root = /*#__PURE__*/new WeakMap(), _origInput = /*#__PURE__*/new WeakMap(), _errorMessageEl = /*#__PURE__*/new WeakMap(), _Class_brand = /*#__PURE__*/new WeakSet(), (_Class = /*#__PURE__*/function (_MWC) {
  function _Class() {
    var _this;
    _classCallCheck(this, _Class);
    _this = _callSuper(this, _Class, [/*html*/"\n                <div root>\n                    <slot name=\"before\" display=\"inline-block\"></slot>\n                    <input type=\"text\" class=\"orig-input\" />\n                    <slot name=\"after\" display=\"inline-block\"></slot>\n                    <div class=\"error-message\"></div>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: inline-block;\n                }\n                [root] {\n                    border-radius: .375rem;\n                    border: 0;\n                    font-family: inherit;\n                    display: flex;\n                    align-items: center;\n                    width: 100%;\n                    background: white;\n                    color: rgb(var(--cTheme, 0 0 0));\n                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));\n                    font-size: .875rem;\n                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n                    line-height: 1.5rem;\n                    position: relative;\n                }\n                :host([block]) {\n                    display: block;\n                    width: 100%;\n                }\n                [root]:focus-within {\n                    border: 1px solid rgb(var(--cTheme, 0 0 0));\n                }\n                :host([disabled]) [root] {\n                    pointer-events: none;\n                    opacity: .6;\n                }\n                .error-message {\n                    padding: .125rem .5rem;\n                    background: rgb(var(--cError, 232 85 62));\n                    color: rgb(var(--cErrorText, 255 255 255));\n                    border-radius: 0px 0px .25rem .25rem;\n                    font-size: .75rem;\n                    display: none;\n                    position: absolute;\n                    top: calc(100%);\n                    right: -1px;\n                }\n                .orig-input {\n                    font-family: inherit;\n                    padding: .375rem .75rem;\n                    line-height: inherit;\n                    background: transparent;\n                    outline: none;\n                    border: 0;\n                    font-size: inherit;\n                    flex: 1;\n                    min-width: 0px;\n                    max-width: 100%;\n                }\n                :host([small]) [root] {\n                    font-size: .75rem;\n                }\n                :host([small]) .orig-input {\n                    padding: .25rem .625rem;\n                    border-radius: .25rem;\n                    line-height: 1.25rem;\n                }\n                slot[name=\"before\"] {\n                    padding-left: .75rem;\n                }\n                slot[name=\"after\"] {\n                    padding-right: .75rem;\n                }\n                :host([small]) slot[name=\"before\"] {\n                    padding-left: .625rem;\n                }\n                :host([small]) slot[name=\"after\"] {\n                    padding-right: .625rem;\n                }\n                :host([has-error]) [root] {\n                    border: 1px solid rgb(var(--cError, 232 85 62));\n                    border-bottom-right-radius: 0px;\n                }\n                :host([has-error]) .error-message {\n                   display: inline-block;\n                }\n            "]);
    _classPrivateMethodInitSpec(_this, _Class_brand);
    _classPrivateFieldInitSpec(_this, _root, void 0);
    _classPrivateFieldInitSpec(_this, _origInput, void 0);
    _classPrivateFieldInitSpec(_this, _errorMessageEl, void 0);
    _classPrivateFieldSet(_root, _this, _this.shadowRoot.querySelector('[root]'));
    _classPrivateFieldSet(_origInput, _this, _this.shadowRoot.querySelector('.orig-input'));
    _classPrivateFieldSet(_errorMessageEl, _this, _this.shadowRoot.querySelector('.error-message'));
    _classPrivateFieldGet(_origInput, _this).addEventListener('input', _assertClassBrand(_Class_brand, _this, _onInput).bind(_this));
    _classPrivateFieldGet(_origInput, _this).addEventListener('change', _assertClassBrand(_Class_brand, _this, _onChange).bind(_this));
    return _this;
  }
  _inherits(_Class, _MWC);
  return _createClass(_Class, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(_origInput, this).value;
    }

    /**
     * @param {(string|number)} data 
     */,
    set: function set(data) {
      _classPrivateFieldGet(_origInput, this).value = data;
    }
  }, {
    key: "error",
    set: function set(message) {
      if ([undefined, null].includes(message)) {
        this.removeAttribute('has-error');
        return;
      }
      _classPrivateFieldGet(_errorMessageEl, this).textContent = message;
      this.setAttribute('has-error', '');
    }
  }]);
}(_mwc.MWC), _defineProperty(_Class, "observedAttributes", ['placeholder', 'type', 'min', 'max']), _defineProperty(_Class, "syncAttributes", {
  'placeholder': '.orig-input',
  'type': '.orig-input',
  'min': '.orig-input',
  'max': '.orig-input'
}), _Class)));
function _onInput() {
  this.error = null;
}
function _onChange(event) {
  this.dispatchEvent(new CustomEvent('change', {
    detail: event.target.value
  }));
}

},{"./mwc.js":13}],9:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
customElements.define('mwc-label', /*#__PURE__*/function (_MWC) {
  function _class() {
    _classCallCheck(this, _class);
    return _callSuper(this, _class, [/*html*/"\n                <div root>\n                    <slot></slot>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: block;\n                }\n                [root] {\n                    display: flex;\n                    align-items: center;\n                    margin-bottom: .5rem;\n                    font-size: 1.125rem;\n                    font-weight: 500;\n                }\n            "]);
  }
  _inherits(_class, _MWC);
  return _createClass(_class);
}(_mwc.MWC));

},{"./mwc.js":13}],10:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
var _root, _nestedSlot, _hasNestedMenu, _Class_brand;
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
customElements.define('mwc-menu', /*#__PURE__*/function (_MWC) {
  function _class() {
    _classCallCheck(this, _class);
    return _callSuper(this, _class, [/*html*/"\n                <div root>\n                    <slot></slot>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: block;\n                }\n                [root] {\n                    width: 100%;\n                    padding: .375rem;\n                    border-radius: .375rem;\n                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));\n                    background: rgb(var(--cBaseL2, 255 255 255));\n                }\n                :host([nested]) [root] {\n                    border: none;\n                    padding: 0 0 0 1rem;\n                }\n            "]);
  }
  _inherits(_class, _MWC);
  return _createClass(_class);
}(_mwc.MWC));
customElements.define('mwc-menu-item', (_root = /*#__PURE__*/new WeakMap(), _nestedSlot = /*#__PURE__*/new WeakMap(), _hasNestedMenu = /*#__PURE__*/new WeakMap(), _Class_brand = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function (_MWC2) {
  function _class2() {
    var _this;
    _classCallCheck(this, _class2);
    _this = _callSuper(this, _class2, [/*html*/"\n                <div root>\n                    <div class=\"text\">\n                        <slot name=\"icon\" display=\"inline-block\"></slot>\n                        <slot></slot>\n                        <svg class=\"caret closed\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z\"></path></svg>\n                        <svg class=\"caret opened\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z\"></path></svg>\n                    </div>\n                    <slot name=\"nested\"></slot>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: block;\n                }\n                .text {\n                    width: 100%;\n                    display: flex;\n                    align-items: center;\n                    padding: .375rem .75rem;\n                    cursor: pointer;\n                    border-radius: .25rem;\n                    color: rgb(var(--cTheme, 0 0 0));\n                }\n                .text:hover {\n                    background: rgb(var(--cBaseL1, 0 0 0 / .08));\n                }\n                .caret {\n                    display: none;\n                    height: 22px;\n                    margin-left: auto;\n                    margin-right: -.375rem;\n                }\n                slot[name=\"nested\"] {\n                    display: none;\n                }\n                slot[name=\"icon\"] {\n                    margin-right: .75rem;\n                    margin-left: -.375rem\n                }\n                :host([opened]) slot[name=\"nested\"] {\n                    display: block;\n                }\n                :host([has-nested-menu][opened]) .caret.opened {\n                    display: inline-block;\n                }\n                :host([has-nested-menu]:not([opened])) .caret.closed {\n                    display: inline-block;\n                }\n            "]);
    _classPrivateMethodInitSpec(_this, _Class_brand);
    _classPrivateFieldInitSpec(_this, _root, void 0);
    _classPrivateFieldInitSpec(_this, _nestedSlot, void 0);
    _classPrivateFieldInitSpec(_this, _hasNestedMenu, void 0);
    _classPrivateFieldSet(_hasNestedMenu, _this, false);
    _classPrivateFieldSet(_root, _this, _this.shadowRoot.querySelector('[root]'));
    _classPrivateFieldGet(_root, _this).addEventListener('click', _assertClassBrand(_Class_brand, _this, _onClick).bind(_this));
    _classPrivateFieldSet(_nestedSlot, _this, _this.shadowRoot.querySelector('slot[name="nested"]'));
    _classPrivateFieldGet(_nestedSlot, _this).addEventListener('slotchange', _assertClassBrand(_Class_brand, _this, _onNestedSlotChange).bind(_this));
    return _this;
  }
  _inherits(_class2, _MWC2);
  return _createClass(_class2);
}(_mwc.MWC)));
function _onClick(event) {
  event.stopPropagation();
  if (_classPrivateFieldGet(_hasNestedMenu, this)) {
    this.toggleAttribute('opened');
    return;
  }
  var value = this.getAttribute('value');
  if (value !== undefined) {
    this.dispatchEvent(new CustomEvent('select', {
      detail: value,
      composed: true,
      bubbles: true
    }));
  }
}
function _onNestedSlotChange(event) {
  var assignedElements = event.target.assignedElements();
  if (assignedElements.length > 0) {
    this.setAttribute('has-nested-menu', '');
    _classPrivateFieldSet(_hasNestedMenu, this, true);
    assignedElements[0].setAttribute('nested', '');
  } else {
    this.removeAttribute('has-nested-menu');
    _classPrivateFieldSet(_hasNestedMenu, this, false);
  }
}

},{"./mwc.js":13}],11:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
var _root, _origSelect, _errorMessageEl, _Class_brand;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
customElements.define('mwc-select', (_root = /*#__PURE__*/new WeakMap(), _origSelect = /*#__PURE__*/new WeakMap(), _errorMessageEl = /*#__PURE__*/new WeakMap(), _Class_brand = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function (_MWC) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class, [/*html*/"\n                <div root>\n                    <slot name=\"before\" display=\"inline-block\"></slot>\n                    <select class=\"orig-select\"></select>\n                    <div class=\"error-message\"></div>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: inline-block;\n                }\n                [root] {\n                    display: inline-flex;\n                    align-items: center;\n                    border-radius: .375rem;\n                    font-size: .875rem;\n                    background: rgb(var(--cBaseL2, 255 255 255));\n                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));\n                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n                    line-height: 1.5rem;\n                    position: relative;\n                }\n                [root]:focus-within {\n                    border: 1px solid rgb(var(--cTheme, 0 0 0));\n                }\n                :host([block]) {\n                    display: block;\n                }\n                :host([block]) [root] {\n                    display: flex;\n                }\n                :host([small]) [root] {\n                    font-size: .75rem;\n                    border-radius: .25rem;\n                    line-height: 1.25rem;\n                }\n                :hist([small]) .orig-select {\n                    padding: .25rem .625rem;\n                }\n                .orig-select {\n                    box-sizing: border-box;\n                    display: block;\n                    height: 100%;\n                    padding: .375rem .75rem;\n                    padding-right: 2.4rem;\n                    line-height: inherit;\n                    border: none;\n                    outline: none;\n                    background: transparent;\n                    font-family: inherit;\n                    font-size: inherit;\n                    font-weight: inherit;\n                    margin: 0;\n                    flex: 1;\n                    appearance: none;\n                    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z'%3E%3C/path%3E%3C/svg%3E\");\n                    background-position: right .5rem top 50%;\n                    background-repeat: no-repeat;\n                    background-size: 24px;\n                    min-width: 4rem;\n                }\n                .error-message {\n                    padding: .125rem .5rem;\n                    background: rgb(var(--cError, 232 85 62));\n                    color: rgb(var(--cErrorText, 255 255 255));\n                    border-radius: 0px 0px .25rem .25rem;\n                    font-size: .75rem;\n                    display: none;\n                    position: absolute;\n                    top: calc(100%);\n                    right: -1px;\n                }\n                slot[name=\"before\"] {\n                    margin-left: .5rem;\n                }\n                :host([has-error]) [root] {\n                    border: 1px solid rgb(var(--cError, 232 85 62));\n                    border-bottom-right-radius: 0px;\n                }\n                :host([has-error]) .error-message {\n                   display: inline-block;\n                }\n            "]);
    _classPrivateMethodInitSpec(_this, _Class_brand);
    _classPrivateFieldInitSpec(_this, _root, void 0);
    _classPrivateFieldInitSpec(_this, _origSelect, void 0);
    _classPrivateFieldInitSpec(_this, _errorMessageEl, void 0);
    _classPrivateFieldSet(_root, _this, _this.shadowRoot.querySelector('[root]'));
    _classPrivateFieldSet(_origSelect, _this, _this.shadowRoot.querySelector('.orig-select'));
    _classPrivateFieldGet(_origSelect, _this).addEventListener('change', _assertClassBrand(_Class_brand, _this, _onChange).bind(_this));
    _classPrivateFieldSet(_errorMessageEl, _this, _this.shadowRoot.querySelector('.error-message'));
    _classPrivateFieldGet(_origSelect, _this).addEventListener('change', _assertClassBrand(_Class_brand, _this, _onChange).bind(_this));
    return _this;
  }
  _inherits(_class, _MWC);
  return _createClass(_class, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(_origSelect, this).value;
    },
    set: function set(o) {
      _classPrivateFieldGet(_origSelect, this).value = o;
    }

    /**
     * Set options
     * @param {object[]} options
     * @param {(string|number)} options.text 
     * @param {(string|number)} options.value
     */
  }, {
    key: "data",
    set: function set(options) {
      while (_classPrivateFieldGet(_origSelect, this).options.length > 0) {
        _classPrivateFieldGet(_origSelect, this).remove(0);
      }
      var firstOpt = new Option('Select...', '');
      firstOpt.disabled = true;
      firstOpt.selected = true;
      _classPrivateFieldGet(_origSelect, this).options[0] = firstOpt;
      var _iterator = _createForOfIteratorHelper(options.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            i = _step$value[0],
            item = _step$value[1];
          _classPrivateFieldGet(_origSelect, this).options[i + 1] = new Option(item.text || item.name, item.id || item.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "error",
    set: function set(message) {
      if ([undefined, null].includes(message)) {
        this.removeAttribute('has-error');
        return;
      }
      _classPrivateFieldGet(_errorMessageEl, this).textContent = message;
      this.setAttribute('has-error', '');
    }
  }]);
}(_mwc.MWC)));
function _onChange(event) {
  this.error = null;
  this.dispatchEvent(new CustomEvent('select', {
    detail: event.target.value
  }));
}

},{"./mwc.js":13}],12:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
var _root, _contentSlot, _tabSlot, _slides, _tabs, _Class_brand;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
customElements.define('mwc-tab', (_root = /*#__PURE__*/new WeakMap(), _contentSlot = /*#__PURE__*/new WeakMap(), _tabSlot = /*#__PURE__*/new WeakMap(), _slides = /*#__PURE__*/new WeakMap(), _tabs = /*#__PURE__*/new WeakMap(), _Class_brand = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function (_MWC) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class, [/*html*/"\n                <div root>\n                    <div class=\"tabs\">\n                        <slot name=\"tabs\"></slot>\n                    </div>\n                    <div class=\"content\">\n                        <slot></slot>\n                    </div>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: block;\n                }\n                [root] {\n                    border-radius: .375rem;\n                    background: rgb(var(--cBaseL2, 255 255 255));\n                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));\n                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n                }\n                .tabs {\n                    white-space: nowrap;\n                    padding-left: .5rem;\n                    padding-right: .5rem;\n                    border-bottom: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));\n                }\n                .content {\n                    padding: 1.25rem;\n                }\n                slot:not([name])::slotted(*:not([active])) {\n                    display: none;\n                }\n            "]);
    _classPrivateMethodInitSpec(_this, _Class_brand);
    _classPrivateFieldInitSpec(_this, _root, void 0);
    _classPrivateFieldInitSpec(_this, _contentSlot, void 0);
    _classPrivateFieldInitSpec(_this, _tabSlot, void 0);
    _classPrivateFieldInitSpec(_this, _slides, void 0);
    _classPrivateFieldInitSpec(_this, _tabs, void 0);
    _classPrivateFieldSet(_tabSlot, _this, _this.shadowRoot.querySelector('slot[name="tabs"]'));
    _classPrivateFieldSet(_contentSlot, _this, _this.shadowRoot.querySelector('slot:not([name])'));
    _classPrivateFieldGet(_tabSlot, _this).addEventListener('slotchange', _assertClassBrand(_Class_brand, _this, _onTabs).bind(_this));
    _classPrivateFieldGet(_contentSlot, _this).addEventListener('slotchange', _assertClassBrand(_Class_brand, _this, _onContent).bind(_this));
    _classPrivateFieldSet(_root, _this, _this.shadowRoot.querySelector('[root]'));
    _classPrivateFieldGet(_root, _this).addEventListener('click', _assertClassBrand(_Class_brand, _this, _onClick).bind(_this));
    return _this;
  }
  _inherits(_class, _MWC);
  return _createClass(_class);
}(_mwc.MWC)));
function _onClick(event) {
  if (event.target.tagName === 'MWC-TAB-HANDLE') {
    _assertClassBrand(_Class_brand, this, _select).call(this, event.target);
  }
}
function _select(handle) {
  var name = handle.getAttribute('for');
  var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(_tabs, this)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tab = _step.value;
      if (tab.getAttribute('for') === name) {
        tab.setAttribute('active', '');
      } else {
        tab.removeAttribute('active');
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(_slides, this)),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var slide = _step2.value;
      if (slide.getAttribute('name') === name) {
        slide.setAttribute('active', '');
      } else {
        slide.removeAttribute('active');
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
/**
 * @param {Event} event 
 */
function _onContent(event) {
  _classPrivateFieldSet(_slides, this, _toConsumableArray(event.target.assignedElements()));
}
/**
 * @param {Event} event 
 */
function _onTabs(event) {
  var _this2 = this;
  _classPrivateFieldSet(_tabs, this, _toConsumableArray(event.target.assignedElements()));
  setTimeout(function () {
    _assertClassBrand(_Class_brand, _this2, _select).call(_this2, _classPrivateFieldGet(_tabs, _this2)[0]);
  }, 0);
}
customElements.define('mwc-tab-handle', /*#__PURE__*/function (_MWC2) {
  function _class2() {
    _classCallCheck(this, _class2);
    return _callSuper(this, _class2, [/*html*/"\n                <div root>\n                    <slot></slot>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: inline-block;\n                }\n                [root] {\n                    display: inline-flex;\n                    align-items: center;\n                    padding: .75rem;\n                    position: relative;\n                    text-align: center;\n                    cursor: pointer;\n                }\n                :host([active]) [root]::after {\n                    content: '';\n                    position: absolute;\n                    bottom: -2px;\n                    left: 0;\n                    width: 100%;\n                    height: 3px;\n                    border-radius: 10px;\n                    background: rgb(var(--cTheme, 0 0 0));\n                }\n                :host(:not([active])) [root] {\n                    opacity: .8;\n                }\n            "]);
  }
  _inherits(_class2, _MWC2);
  return _createClass(_class2);
}(_mwc.MWC));

},{"./mwc.js":13}],13:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MWC = void 0;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var MWC = exports.MWC = /*#__PURE__*/function (_HTMLElement) {
  function MWC(html, css) {
    var _this;
    _classCallCheck(this, MWC);
    _this = _callSuper(this, MWC);
    _this.attachShadow({
      mode: 'open'
    }).innerHTML = "\n            ".concat(html, "\n            <style>\n                ").concat(css, "\n                [root] {\n                    box-sizing: border-box;\n                }\n                [root] * {\n                    box-sizing: inherit;\n                }\n                [display] {\n                    display: none;\n                }\n            </style>\n        ");
    _this.shadowRoot.querySelectorAll('[display]').forEach(function (el) {
      var slot = el instanceof HTMLSlotElement ? el : el.querySelector('slot');
      slot.addEventListener('slotchange', function (event) {
        el.style.display = event.target.assignedNodes().length > 0 ? el.getAttribute('display') : 'none';
      });
    });
    return _this;
  }
  _inherits(MWC, _HTMLElement);
  return _createClass(MWC, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, ov, nv) {
      var _this2 = this;
      var syncTo = this.constructor.syncAttributes[name];
      if (!syncTo) {
        return;
      }
      if (typeof syncTo === 'string') {
        syncTo = [syncTo];
      }
      syncTo.forEach(function (el) {
        el = typeof el === 'string' ? _this2.shadowRoot.querySelector(el) : el;
        el.setAttribute(name, nv);
      });
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

},{}]},{},[1]);
