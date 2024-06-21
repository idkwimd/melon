import { MWC } from './mwc.js'

customElements.define('mwc-grid', class extends MWC
{
    constructor ()
    {
        super(
            /*html*/`
                <div root>
                    <slot></slot>
                </div>
            `,
            /*css*/`
                :host {
                    display: block;
                }
                [root] {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 1.25rem;
                    width: 100%;
                }
                ::slotted([span="1"]) {
                    grid-column: span 1;
                }
                ::slotted([span="2"]) {
                    grid-column: span 2;
                }
                ::slotted([span="3"]) {
                    grid-column: span 3;
                }
                ::slotted([span="4"]) {
                    grid-column: span 4;
                }
                ::slotted([span="5"]) {
                    grid-column: span 5;
                }
                ::slotted([span="6"]) {
                    grid-column: span 6;
                }
                ::slotted([span="7"]) {
                    grid-column: span 7;
                }
                ::slotted([span="8"]) {
                    grid-column: span 8;
                }
                ::slotted([span="9"]) {
                    grid-column: span 9;
                }
                ::slotted([span="10"]) {
                    grid-column: span 10;
                }
                ::slotted([span="11"]) {
                    grid-column: span 11;
                }
                ::slotted([span="12"]) {
                    grid-column: span 12;
                }
            `
        )
    }
})