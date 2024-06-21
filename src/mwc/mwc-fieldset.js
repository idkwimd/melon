import { MWC } from './mwc.js'

customElements.define('mwc-fieldset', class extends MWC
{
    constructor ()
    {
        super(
            /*html*/`
                <fieldset root>
                    <legend display="inline-block">
                        <slot name="legend"></slot>
                    </legend>
                    <slot />
                </fieldset>
            `,
            /*css*/`
                [root] {
                    border: 1px solid rgb(var(--cBaseBorder, 0 0 0 / .15));
                    padding: 1rem;
                    border-radius: .375rem;
                    background: rgb(var(--cBaseL2, 255 255 255));
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                }
                legend {
                    padding-left: .5rem;
                    padding-right: .5rem;
                    font-size: .875rem;
                    font-weight: 500;
                    background: rgb(var(--cTheme, 0 0 0));
                    color: rgb(var(--cThemeText, 255 255 255));
                    padding: .375rem .875rem;
                    border-radius: 999px;
                    line-height: 1.25rem;
                }
            `
        )
    }
})