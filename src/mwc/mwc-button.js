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
                    border: 1px solid #3AB75C;
                    font-family: inherit;
                    cursor: pointer;
                    width: 100%;
                    background: var(--c-brand, #3AB75C);
                    color: var(--c-brand-text, #FFFFFF);
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
                    color: var(--c-brand, #1ABC9C);
                }
            `
        )
    }
})