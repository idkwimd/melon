import { MWC } from './mwc.js'

customElements.define('mwc-select', class extends MWC
{
    #root
    #origSelect
    #errorMessageEl

    constructor ()
    {
        super(
            /*html*/`
                <div root>
                    <slot name="before" display="inline-block"></slot>
                    <select class="orig-select"></select>
                    <div class="error-message"></div>
                </div>
            `,
            /*css*/`
                :host {
                    display: inline-block;
                }
                [root] {
                    display: inline-flex;
                    align-items: center;
                    border-radius: .375rem;
                    font-size: .875rem;
                    background: rgb(var(--cBaseL2, 255 255 255));
                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                    line-height: 1.5rem;
                    position: relative;
                }
                [root]:focus-within {
                    border: 1px solid rgb(var(--cTheme, 0 0 0));
                }
                :host([block]) {
                    display: block;
                }
                :host([block]) [root] {
                    display: flex;
                }
                :host([small]) [root] {
                    font-size: .75rem;
                    border-radius: .25rem;
                    line-height: 1.25rem;
                }
                :hist([small]) .orig-select {
                    padding: .25rem .625rem;
                }
                .orig-select {
                    box-sizing: border-box;
                    display: block;
                    height: 100%;
                    padding: .375rem .75rem;
                    padding-right: 2.4rem;
                    line-height: inherit;
                    border: none;
                    outline: none;
                    background: transparent;
                    font-family: inherit;
                    font-size: inherit;
                    font-weight: inherit;
                    margin: 0;
                    flex: 1;
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z'%3E%3C/path%3E%3C/svg%3E");
                    background-position: right .5rem top calc(50% + .5px);
                    background-repeat: no-repeat;
                    background-size: 24px;
                    min-width: 4rem;
                }
                .error-message {
                    padding: .125rem .5rem;
                    background: rgb(var(--cError, 232 85 62));
                    color: rgb(var(--cErrorText, 255 255 255));
                    border-radius: 0px 0px .25rem .25rem;
                    font-size: .75rem;
                    display: none;
                    position: absolute;
                    top: calc(100%);
                    right: -1px;
                }
                slot[name="before"] {
                    margin-left: .5rem;
                }
                :host([has-error]) [root] {
                    border: 1px solid rgb(var(--cError, 232 85 62));
                    border-bottom-right-radius: 0px;
                }
                :host([has-error]) .error-message {
                   display: inline-block;
                }
            `
        )

        this.#root = this.shadowRoot.querySelector('[root]')
        this.#origSelect = this.shadowRoot.querySelector('.orig-select')
        this.#origSelect.addEventListener('change', this.#onChange.bind(this))
        this.#errorMessageEl = this.shadowRoot.querySelector('.error-message')
        this.#origSelect.addEventListener('change', this.#onChange.bind(this))
    }

    #onChange (event)
    {
        this.error = null

        this.dispatchEvent(new CustomEvent('change', {
            detail: event.target.value
        }))
    }

    get value ()
    {
        return this.#origSelect.value
    }

    set value (o)
    {
        this.#origSelect.value = o
    }

    /**
     * Set options
     * @param {object[]} options
     * @param {(string|number)} options.text 
     * @param {(string|number)} options.value
     */
    set data (options)
    {
        while (this.#origSelect.options.length > 0)
        {                
            this.#origSelect.remove(0)
        }

        let firstOpt = new Option('Select...', '')
            firstOpt.disabled = true
            firstOpt.selected = true

        this.#origSelect.options[0] = firstOpt

        for (const [i, item] of options.entries())
        {
            this.#origSelect.options[i + 1] = new Option(
                item.text || item.name,
                item.id || item.value
            )
        }
    }

    set error (message)
    {
        if ([undefined, null].includes(message))
        {
            this.removeAttribute('has-error')
            return
        }

        this.#errorMessageEl.textContent = message
        this.setAttribute('has-error', '')
    }
})