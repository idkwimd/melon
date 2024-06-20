import { MWC } from './mwc.js'

customElements.define('mwc-tab', class extends MWC
{
    #root
    #contentSlot
    #tabSlot
    #slides
    #tabs

    constructor ()
    {
        super(
            /*html*/`
                <div root>
                    <div class="tabs">
                        <slot name="tabs"></slot>
                    </div>
                    <div class="content">
                        <slot></slot>
                    </div>
                </div>
            `,
            /*css*/`
                :host {
                    display: block;
                }
                [root] {
                    border-radius: .375rem;
                    background: rgb(var(--cBaseL2, 255 255 255));
                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                }
                .tabs {
                    white-space: nowrap;
                    padding-left: .5rem;
                    padding-right: .5rem;
                    border-bottom: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));
                }
                .content {
                    padding: 1.25rem;
                }
                slot:not([name])::slotted(*:not([active])) {
                    display: none;
                }
            `
        )

        this.#tabSlot = this.shadowRoot.querySelector('slot[name="tabs"]')
        this.#contentSlot = this.shadowRoot.querySelector('slot:not([name])')
        this.#tabSlot.addEventListener('slotchange', this.#onTabs.bind(this))
        this.#contentSlot.addEventListener('slotchange', this.#onContent.bind(this))
        this.#root = this.shadowRoot.querySelector('[root]')
        this.#root.addEventListener('click', this.#onClick.bind(this))
    }

    #onClick (event)
    {
        if (event.target.tagName === 'MWC-TAB-HANDLE')
        {
            this.#select(event.target)
        }
    }

    #select (handle)
    {
        const name = handle.getAttribute('for')

        for (const tab of this.#tabs)
        {
            if (tab.getAttribute('for') === name)
            {
                tab.setAttribute('active', '')
            }
            else
            {
                tab.removeAttribute('active')
            }
        }

        for (const slide of this.#slides)
        {
            if (slide.getAttribute('name') === name)
            {
                slide.setAttribute('active', '')
            }
            else
            {
                slide.removeAttribute('active')
            }
        }
    }

    /**
     * @param {Event} event 
     */
    #onContent (event)
    {
        this.#slides = [...event.target.assignedElements()]
    }

    /**
     * @param {Event} event 
     */
    #onTabs (event)
    {
        this.#tabs = [...event.target.assignedElements()]

        setTimeout(() =>
        {
            this.#select(this.#tabs[0])
        },
        0)
    }
})

customElements.define('mwc-tab-handle', class extends MWC
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
                    display: inline-block;
                }
                [root] {
                    display: inline-flex;
                    align-items: center;
                    padding: .75rem;
                    position: relative;
                    text-align: center;
                    cursor: pointer;
                }
                :host([active]) [root]::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    border-radius: 10px;
                    background: rgb(var(--cTheme, 0 0 0));
                }
                :host(:not([active])) [root] {
                    opacity: .8;
                }
            `
        )
    }
})