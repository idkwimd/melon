export class MWC extends HTMLElement
{
    constructor (html, css)
    {
        super()
        
        this.attachShadow({ mode: 'open' }).innerHTML = `
            ${html}
            <style>
                ${css}
                [root] {
                    box-sizing: border-box;
                }
                [root] * {
                    box-sizing: inherit;
                }
                [display] {
                    display: none;
                }
            </style>
        `

        this.shadowRoot.querySelectorAll('[display]').forEach(el =>
        {
            const slot = el instanceof HTMLSlotElement
                ? el
                : el.querySelector('slot')

            slot.addEventListener('slotchange', (event) =>
            {
                el.style.display = event.target.assignedNodes().length > 0
                    ? el.getAttribute('display')
                    : 'none'
            })
        })
    }

    attributeChangedCallback(name, ov, nv)
    {
        let syncTo = this.constructor.syncAttributes[name]

        if (!syncTo)
        {
            return
        }

        if (typeof syncTo === 'string')
        {
            syncTo = [syncTo]
        }

        syncTo.forEach(el =>
        {
            el = typeof el === 'string'
                ? this.shadowRoot.querySelector(el)
                : el
                
            el.setAttribute(name, nv)
        })
    }
}