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
                slot[display] {
                    display: none;
                }
            </style>
        `

        this.shadowRoot.querySelectorAll('slot[display]').forEach(el =>
        {
            el.addEventListener('slotchange', (event) =>
            {
                event.target.style.display = event.target.assignedNodes().length > 0
                    ? event.target.getAttribute('display')
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