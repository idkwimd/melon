import { MWC } from './mwc.js'

customElements.define('mwc-input', class extends MWC
{
    #origInput

    static observedAttributes = [
        'placeholder',
        'type'
    ]

    static syncAttributes = {
        'placeholder': '.orig-input',
        'type': '.orig-input'
    }

    constructor ()
    {
        super(
            /*html*/`
                <div root>
                    <slot name="before" display="inline-block"></slot>
                    <input type="text" class="orig-input" />
                    <slot name="after" display="inline-block"></slot>
                </div>
            `,
            /*css*/`
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
            `
        )
    }
})