import { MWC } from './mwc.js'

customElements.define('mwc-label', class extends MWC
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
                    display: flex;
                    align-items: center;
                    margin-bottom: .5rem;
                    font-size: 1.125rem;
                    font-weight: 500;
                }
            `
        )
    }
})