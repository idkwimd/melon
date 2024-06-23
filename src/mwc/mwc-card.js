import { MWC } from './mwc.js'

customElements.define('mwc-card', class extends MWC
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
                    padding: 1rem;
                    background: rgb(var(--cBaseL2, 255 255 255));
                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));
                    border-radius: .375rem;
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                }
            `
        )
    }
})