import { MWC } from './mwc.js'

customElements.define('mwc-dialog', class extends MWC
{
    #root
    #card

    constructor ()
    {
        super(
            /*html*/`
                <div root>
                    <div class="card">
                        <slot name="heading" display="flex"></slot>
                        <slot></slot>
                    </div>
                </div>
            `,
            /*css*/`
                [root] {
                    position: fixed;
                    z-index: 96;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: rgb(0 0 0 / .5);
                    backdrop-filter: blur(5px);
                    visibility: hidden;
                    opacity: 0;
                    pointer-events: none;
                    transition: all .25s;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                :host([active]) [root] {
                    visibility: visible;
                    opacity: 1;
                    pointer-events: initial;
                }
                :host([small]) .card {
                    width: 400px;
                }
                .card {
                    margin-top: 4rem;
                    margin-bottom: 4rem;
                    max-height: calc(100% - 8rem);
                    width: 800px;
                    background: rgb(var(--cBaseL1, 244 244 252));
                    border-radius: .375rem;
                    margin-left: auto;
                    margin-right: auto;
                    display: flex;
                    flex-direction: column;
                    transition: all .25s;
                    transform: translateY(15px);
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                }
                :host([active]) .card {
                    transform: translateY(0px);
                }
                slot[name="heading"] {
                    align-items: center;
                    padding: 1rem 1.25rem;
                    border-bottom: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));
                    font-weight: 500;
                    font-size: 1.25rem;
                    flex: 0 1 auto;
                    border-top-left-radius: inherit;
                    border-top-right-radius: inherit;
                }
                slot:not([name]) {
                    display: block;
                    padding: 1.75rem;
                    overflow-y: auto;
                    overflow-x: hidden;
                    flex: 1;
                }
                ::-webkit-scrollbar {
                    width: 14px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    border: 4px solid rgba(0, 0, 0, 0);
                    background-clip: padding-box;
                    border-radius: 9999px;
                    background-color: rgb(var(--cTheme, 0 0 0));
                }
            `
        )

        this.#root = this.shadowRoot.querySelector('[root]')
        this.#card = this.shadowRoot.querySelector('.card')
        this.#card.addEventListener('click', this.#onCardClick.bind(this))
        this.#root.addEventListener('click', this.hide.bind(this))
    }

    show ()
    {
        this.setAttribute('active', '')
    }

    hide ()
    {
        this.removeAttribute('active')
    }

    #onCardClick (event)
    {
        event.stopPropagation()
    }
})