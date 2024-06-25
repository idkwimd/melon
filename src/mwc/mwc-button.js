import { MWC } from './mwc.js'

customElements.define('mwc-button', class extends MWC
{
    constructor ()
    {
        super(
            /*html*/`
                <button root>
                    <slot></slot>
                </button>
            `,
            /*css*/`
                :host {
                    display: inline-block;
                }
                [root] {
                    padding: .375rem .75rem;
                    font-size: .875rem;
                    border-radius: .375rem;
                    font-weight: 500;
                    line-height: 1.5rem;
                    border: 1px solid rgb(var(--cTheme, 0 0 0));
                    font-family: inherit;
                    cursor: pointer;
                    width: 100%;
                    background: rgb(var(--cTheme, 0 0 0));
                    color: rgb(var(--cThemeText, 255 255 255));
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                }
                :host([disabled]) [root] {
                    pointer-events: none;
                    opacity: .6rem;
                }
                :host([small]) [root] {
                    padding: .25rem .625rem;
                    font-size: .75rem;
                    border-radius: .25rem;
                    line-height: 1.25rem;
                }
                :host([outlined]) [root] {
                    background: transparent;
                    color: rgb(var(--cTheme, 0 0 0));
                }
                :host([block]) {
                    display: block;
                }
            `
        )
    }
})