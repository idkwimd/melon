(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./mwc/mwc-button.js");
require("./mwc/mwc-input.js");

},{"./mwc/mwc-button.js":2,"./mwc/mwc-input.js":3}],2:[function(require,module,exports){
"use strict";

var _mwc = require("./mwc.js");
customElements.define('mwc-button', class extends _mwc.MWC {
  constructor() {
    super( /*html*/`
                <button root>
                    <slot></slot>
                </button>
            `, /*css*/`
                :host {
                    display: inline-block;
                }
                [root] {
                    padding: var(--size-4, .5rem) var(--size-7, .875rem);
                    border-radius: var(--size-3, .375rem);
                    font-size: var(--size-8, 1rem);
                    font-weight: 500;
                    line-height: 1.45rem;
                    border: 0;
                    font-family: inherit;
                    cursor: pointer;
                    width: 100%;
                    background: var(--c-brand, #1ABC9C);
                    border: 1px solid var(--c-brand, #1ABC9C);
                    color: var(--c-brand-text, #FFFFFF);
                }
                :host([disabled]) [root] {
                    pointer-events: none;
                    opacity: .6rem;
                }
                :host([small]) [root] {
                    padding: var(--size-3, .375rem) var(--size-6, .75rem);
                    font-size: var(--size-7, .875rem);
                    border-radius: var(--size-2, .25rem);
                    line-height: 1.12rem;
                }
                :host([outlined]) [root] {
                    background: transparent;
                    color: var(--c-brand, #1ABC9C);
                    border: 1px solid var(--c-brand, #1ABC9C);
                }
            `);
  }
});

},{"./mwc.js":4}],3:[function(require,module,exports){
"use strict";

var _mwc = require("./mwc.js");
customElements.define('mwc-input', class extends _mwc.MWC {
  #origInput;
  static observedAttributes = ['placeholder', 'type'];
  static syncAttributes = {
    'placeholder': '.orig-input',
    'type': '.orig-input'
  };
  constructor() {
    super( /*html*/`
                <div root>
                    <slot name="before" display="inline-block"></slot>
                    <input type="text" class="orig-input" />
                    <slot name="after" display="inline-block"></slot>
                </div>
            `, /*css*/`
                :host {
                    display: inline-block;
                }
                [root] {
                    border-radius: var(--size-3, .375rem);
                    border: 0;
                    font-family: inherit;
                    width: 100%;
                    background: white;
                    border: 1px solid #cbd5e1;
                    color: #222222;
                }
                [root]:focus-within {
                    border: 1px solid var(--c-brand, #94a3b8);
                }
                .orig-input {
                    font-family: inherit;
                    padding: var(--size-4, .5rem) var(--size-7, .875rem);
                    font-size: var(--size-8, 1rem);
                    font-weight: 500;
                    line-height: 1.45rem;
                    background: transparent;
                    outline: none;
                    border: 0;
                }
                :host([small]) .orig-input {
                    padding: var(--size-3, .375rem) var(--size-6, .75rem);
                    font-size: var(--size-7, .875rem);
                    border-radius: var(--size-2, .25rem);
                    line-height: 1.12rem;
                }
                slot[name="before"] {
                    padding-left: var(--size-7, .875rem);
                }
                slot[name="after"] {
                    padding-right: var(--size-7, .875rem);
                }
                :host([small]) slot[name="before"] {
                    padding-left: var(--size-6, .75rem);
                }
                :host([small]) slot[name="after"] {
                    padding-right: var(--size-6, .75rem);
                }
            `);
  }
});

},{"./mwc.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MWC = void 0;
class MWC extends HTMLElement {
  constructor(html, css) {
    super();
    this.attachShadow({
      mode: 'open'
    }).innerHTML = `
            ${html}
            <style>
                ${css}
                [root] {
                    box-sizing: border-box;
                }
                [root] * {
                    box-sizing: inherit;
                }
                slot[display] {
                    display: none;
                }
            </style>
        `;
    this.shadowRoot.querySelectorAll('slot[display]').forEach(el => {
      el.addEventListener('slotchange', event => {
        event.target.style.display = event.target.assignedNodes().length > 0 ? event.target.getAttribute('display') : 'none';
      });
    });
  }
  attributeChangedCallback(name, ov, nv) {
    let syncTo = this.constructor.syncAttributes[name];
    if (!syncTo) {
      return;
    }
    if (typeof syncTo === 'string') {
      syncTo = [syncTo];
    }
    syncTo.forEach(el => {
      el = typeof el === 'string' ? this.shadowRoot.querySelector(el) : el;
      el.setAttribute(name, nv);
    });
  }
}
exports.MWC = MWC;

},{}]},{},[1]);
