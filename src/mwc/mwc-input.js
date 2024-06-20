import { MWC } from './mwc.js'

customElements.define('mwc-input', class extends MWC
{
    #root
    #origInput

    static observedAttributes = [
        'placeholder',
        'type', 'min', 'max'
    ]

    static syncAttributes = {
        'placeholder': '.orig-input',
        'type': '.orig-input',
        'min': '.orig-input',
        'max': '.orig-input'
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
                    border-radius: .375rem;
                    border: 0;
                    font-family: inherit;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    background: white;
                    color: rgb(var(--cTheme, 0 0 0));
                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));
                    font-size: .875rem;
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                    line-height: 1.5rem;
                }
                [root]:focus-within {
                    border: 1px solid rgb(var(--cTheme, 0 0 0));
                }
                :host([disabled]) [root] {
                    pointer-events: none;
                    opacity: .6;
                }
                .orig-input {
                    font-family: inherit;
                    padding: .375rem .75rem;
                    line-height: inherit;
                    background: transparent;
                    outline: none;
                    border: 0;
                    font-size: inherit;
                }
                :host([small]) [root] {
                    font-size: .75rem;
                }
                :host([small]) .orig-input {
                    padding: .25rem .625rem;
                    border-radius: .25rem;
                    line-height: 1.25rem;
                }
                slot[name="before"] {
                    padding-left: .75rem;
                }
                slot[name="after"] {
                    padding-right: .75rem;
                }
                :host([small]) slot[name="before"] {
                    padding-left: .625rem;
                }
                :host([small]) slot[name="after"] {
                    padding-right: .625rem;
                }
            `
        )

        this.#root = this.shadowRoot.querySelector('[root]')
        this.#origInput = this.shadowRoot.querySelector('.orig-input')
    }

    get value ()
    {
        return this.#origInput.value
    }

    /**
     * @param {(string|number)} data 
     */
    set value (data)
    {
        this.#origInput.value = data
    }
})