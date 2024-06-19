import { MWC } from './mwc.js'

customElements.define('mwc-menu', class extends MWC
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
                    width: 100%;
                    padding: .375rem;
                    border-radius: .375rem;
                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));
                    background: rgb(var(--cBaseL2, 255 255 255));
                }
                :host([nested]) [root] {
                    border: none;
                    padding: 0 0 0 1rem;
                }
            `
        )
    }
})

customElements.define('mwc-menu-item', class extends MWC
{
    #root
    #nestedSlot
    #hasNestedMenu

    constructor ()
    {
        super(
            /*html*/`
                <div root>
                    <div class="text">
                        <slot name="icon" display="inline-block"></slot>
                        <slot></slot>
                        <svg class="caret closed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                        <svg class="caret opened" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                    </div>
                    <slot name="nested"></slot>
                </div>
            `,
            /*css*/`
                :host {
                    display: block;
                }
                .text {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: .375rem .75rem;
                    cursor: pointer;
                    border-radius: .25rem;
                    color: rgb(var(--cTheme, 0 0 0));
                }
                .text:hover {
                    background: rgb(0 0 0 / .08);
                }
                .caret {
                    display: none;
                    height: 22px;
                    margin-left: auto;
                    margin-right: -.375rem;
                }
                slot[name="nested"] {
                    display: none;
                }
                slot[name="icon"] {
                    margin-right: .75rem;
                }
                :host([opened]) slot[name="nested"] {
                    display: block;
                }
                :host([has-nested-menu][opened]) .caret.opened {
                    display: inline-block;
                }
                :host([has-nested-menu]:not([opened])) .caret.closed {
                    display: inline-block;
                }
            `
        )

        this.#hasNestedMenu = false
        this.#root = this.shadowRoot.querySelector('[root]')
        this.#root.addEventListener('click', this.#onClick.bind(this))
        this.#nestedSlot = this.shadowRoot.querySelector('slot[name="nested"]')
        this.#nestedSlot.addEventListener('slotchange', this.#onNestedSlotChange.bind(this))
    }

    #onClick (event)
    {
        event.stopPropagation()

        if (this.#hasNestedMenu)
        {
            this.toggleAttribute('opened')
            return
        }

        const value = this.getAttribute('value')

        if (value !== undefined)
        {
            this.dispatchEvent(new CustomEvent('select', {
                detail: value
            }))
        }
    }

    #onNestedSlotChange (event)
    {
        const assignedElements = event.target.assignedElements()

        if (assignedElements.length > 0)
        {
            this.setAttribute('has-nested-menu', '')
            this.#hasNestedMenu = true
            assignedElements[0].setAttribute('nested', '')
        }
        else
        {
            this.removeAttribute('has-nested-menu')
            this.#hasNestedMenu = false
        }
    }
})