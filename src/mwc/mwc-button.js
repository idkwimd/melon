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
            `
        )
    }
})