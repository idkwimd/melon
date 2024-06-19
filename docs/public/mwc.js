(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./mwc/mwc-button.js");
require("./mwc/mwc-input.js");
require("./mwc/mwc-menu.js");

},{"./mwc/mwc-button.js":2,"./mwc/mwc-input.js":3,"./mwc/mwc-menu.js":4}],2:[function(require,module,exports){
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
    return _callSuper(this, _class, [/*html*/"\n                <button root>\n                    <slot></slot>\n                </button>\n            ", /*css*/"\n                :host {\n                    display: inline-block;\n                }\n                [root] {\n                    padding: .375rem .75rem;\n                    font-size: .875rem;\n                    border-radius: .375rem;\n                    font-weight: 500;\n                    line-height: 1.5rem;\n                    border: 1px solid rgb(var(--cTheme, 0 0 0));\n                    font-family: inherit;\n                    cursor: pointer;\n                    width: 100%;\n                    background: rgb(var(--cTheme, 0 0 0));\n                    color: rgb(var(--cThemeText, 255 255 255));\n                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n                }\n                :host([disabled]) [root] {\n                    pointer-events: none;\n                    opacity: .6rem;\n                }\n                :host([small]) [root] {\n                    padding: .25rem .625rem;\n                    font-size: .75rem;\n                    border-radius: .25rem;\n                    line-height: 1.25rem;\n                }\n                :host([outlined]) [root] {\n                    background: transparent;\n                    color: rgb(var(--cTheme, 0 0 0));\n                }\n            "]);
  }
  _inherits(_class, _MWC);
  return _createClass(_class);
}(_mwc.MWC));

},{"./mwc.js":5}],3:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mwc = require("./mwc.js");
var _Class, _root, _origInput;
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
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
customElements.define('mwc-input', (_root = /*#__PURE__*/new WeakMap(), _origInput = /*#__PURE__*/new WeakMap(), (_Class = /*#__PURE__*/function (_MWC) {
  function _Class() {
    var _this;
    _classCallCheck(this, _Class);
    _this = _callSuper(this, _Class, [/*html*/"\n                <div root>\n                    <slot name=\"before\" display=\"inline-block\"></slot>\n                    <input type=\"text\" class=\"orig-input\" />\n                    <slot name=\"after\" display=\"inline-block\"></slot>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: inline-block;\n                }\n                [root] {\n                    border-radius: .375rem;\n                    border: 0;\n                    font-family: inherit;\n                    display: flex;\n                    align-items: center;\n                    width: 100%;\n                    background: white;\n                    color: rgb(var(--cTheme, 0 0 0));\n                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));\n                    font-size: .875rem;\n                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n                }\n                [root]:focus-within {\n                    border: 1px solid rgb(var(--cTheme, 0 0 0));\n                }\n                :host([disabled]) [root] {\n                    pointer-events: none;\n                    opacity: .6;\n                }\n                .orig-input {\n                    font-family: inherit;\n                    padding: .375rem .75rem;\n                    line-height: 1.5rem;\n                    background: transparent;\n                    outline: none;\n                    border: 0;\n                    font-size: inherit;\n                }\n                :host([small]) [root] {\n                    font-size: .75rem;\n                }\n                :host([small]) .orig-input {\n                    padding: .25rem .625rem;\n                    border-radius: .25rem;\n                    line-height: 1.25rem;\n                }\n                slot[name=\"before\"] {\n                    padding-left: .875rem;\n                }\n                slot[name=\"after\"] {\n                    padding-right: .875rem;\n                }\n                :host([small]) slot[name=\"before\"] {\n                    padding-left: .75rem;\n                }\n                :host([small]) slot[name=\"after\"] {\n                    padding-right: .75rem;\n                }\n            "]);
    _classPrivateFieldInitSpec(_this, _root, void 0);
    _classPrivateFieldInitSpec(_this, _origInput, void 0);
    _classPrivateFieldSet(_root, _this, _this.shadowRoot.querySelector('[root]'));
    _classPrivateFieldSet(_origInput, _this, _this.shadowRoot.querySelector('.orig-input'));
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
  }]);
}(_mwc.MWC), _defineProperty(_Class, "observedAttributes", ['placeholder', 'type', 'min', 'max']), _defineProperty(_Class, "syncAttributes", {
  'placeholder': '.orig-input',
  'type': '.orig-input',
  'min': '.orig-input',
  'max': '.orig-input'
}), _Class)));

},{"./mwc.js":5}],4:[function(require,module,exports){
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
    _this = _callSuper(this, _class2, [/*html*/"\n                <div root>\n                    <div class=\"text\">\n                        <slot name=\"icon\" display=\"inline-block\"></slot>\n                        <slot></slot>\n                        <svg class=\"caret closed\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z\"></path></svg>\n                        <svg class=\"caret opened\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z\"></path></svg>\n                    </div>\n                    <slot name=\"nested\"></slot>\n                </div>\n            ", /*css*/"\n                :host {\n                    display: block;\n                }\n                .text {\n                    width: 100%;\n                    display: flex;\n                    align-items: center;\n                    padding: .375rem .75rem;\n                    cursor: pointer;\n                    border-radius: .25rem;\n                    color: rgb(var(--cTheme, 0 0 0));\n                }\n                .text:hover {\n                    background: rgb(0 0 0 / .08);\n                }\n                .caret {\n                    display: none;\n                    height: 22px;\n                    margin-left: auto;\n                    margin-right: -.375rem;\n                }\n                slot[name=\"nested\"] {\n                    display: none;\n                }\n                slot[name=\"icon\"] {\n                    margin-right: .75rem;\n                }\n                :host([opened]) slot[name=\"nested\"] {\n                    display: block;\n                }\n                :host([has-nested-menu][opened]) .caret.opened {\n                    display: inline-block;\n                }\n                :host([has-nested-menu]:not([opened])) .caret.closed {\n                    display: inline-block;\n                }\n            "]);
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
      detail: value
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

},{"./mwc.js":5}],5:[function(require,module,exports){
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
    }).innerHTML = "\n            ".concat(html, "\n            <style>\n                ").concat(css, "\n                [root] {\n                    box-sizing: border-box;\n                }\n                [root] * {\n                    box-sizing: inherit;\n                }\n                slot[display] {\n                    display: none;\n                }\n            </style>\n        ");
    _this.shadowRoot.querySelectorAll('slot[display]').forEach(function (el) {
      el.addEventListener('slotchange', function (event) {
        event.target.style.display = event.target.assignedNodes().length > 0 ? event.target.getAttribute('display') : 'none';
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
