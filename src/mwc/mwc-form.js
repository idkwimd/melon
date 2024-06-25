import { MWC } from './mwc.js'


class FormError extends Error
{
    constructor (message, field)
    {
        super(message)
        this.field = field
    }
}


customElements.define('mwc-form', class extends MWC
{
    #root

    constructor ()
    {
        super(
            /*html*/`
                <form root>
                    <slot></slot>
                </form>
            `
        )

        this.#root = this.shadowRoot.querySelector('[root]')
        this.#root.addEventListener('click', this.#onClickInside.bind(this))
    }

    async #onClickInside (event)
    {
        if (event.target.getAttribute('type') !== 'submit')
        {
            return
        }

        event.preventDefault()

        let action = this.getAttribute('action')
        let method = this.getAttribute('method') || 'post'

        if (!action)
        {
            throw new Error('No action found for <wc-form>')
        }
        
        let formData

        try
        {
            formData = this.#makeFormData()
        }
        catch (err)
        {
            if (err instanceof FormError)
            {
                err.field.error = err.message.trim()
                return
            }
        }

        let res
        let responseEvent = 'success'
        let fetchFn = window.$fetch || window.fetch
        let options = { method }

        if (method === 'get')
        {
            action += '?' + new URLSearchParams(formData).toString()
        }
        else
        {
            options.body = formData.data
        }

        event.target.disabled = true

        res = await fetchFn(action, options)

        if (res instanceof Response)
        {
            res = {
                ok: res.ok,
                payload: await res.json(),
                status: res.status
            }
        }

        if (!res.ok)
        {
            responseEvent = 'fail'

            if (res.payload.errors)
            {
                for (const [key, value] of Object.entries(res.payload.errors))
                {
                    const field = formData.fields[key]

                    if (field)
                    {
                        formData.fields[key].errorMessage = value
                    }
                }
            }
        }

        this.dispatchEvent(new CustomEvent(responseEvent, {
            detail: res
        }))

        event.target.disabled = false
    }

    #makeFormData ()
    {
        const data = new FormData()
        const fields = {}
        const formElements = this.#getFormElements()
        const jsonData = {}

        for (const el of formElements)
        {
            const name = el.getAttribute('name')
            const isRequired = el.hasAttribute('required')

            if (isRequired && [undefined, null, ''].includes(el.value))
            {
                throw new FormError(`This field is required`, el)
            }

            fields[name] = el

            if (![undefined, null, ''].includes(el.value))
            {
                if (name.startsWith('json:'))
                {
                    const [, field, prop] = name.split(':')
                    
                    if (!jsonData[field])
                    {
                        jsonData[field] = {}
                    }

                    jsonData[field][prop] = el.value
                }

                if (el.value instanceof Array)
                {      
                    name = name.endsWith('[]')
                        ? name
                        : name + '[]'
                    
                    for (const value of el.value)
                    {
                        data.append(name, value)
                    }
                }
                else
                {
                    data.append(name, el.value)
                }
            }
        }

        for (const field in jsonData)
        {
            data.set(field, JSON.stringify(jsonData[field]))
        }

        return {
            fields,
            data
        }
    }

    #getFormElements ()
    {
        const allSlottedNodes = this.#root.querySelector('slot').assignedElements({ flatten: true })
        const result = []

        for (const n of allSlottedNodes)
        {
            [...(n.hasAttribute('name') ? [n] : []), ...n.querySelectorAll('[name]')].forEach(el =>
            {
                result.push(el)
            })
        }

        return result
    }

    set data (o)
    {
        const formElements = this.#getFormElements()
        const jsonData = {}
        
        for (const el of formElements)
        {
            const altName = el.getAttribute('alt-name')
            const name = el.getAttribute('name')

            let value = o === null
                ? ''
                : o[altName || name]

            if (name.startsWith('json:'))
            {
                const [, field, prop] = name.split(':')

                if (!jsonData[field])
                {
                    jsonData[field] = JSON.parse(o[field])
                }

                value = jsonData[field][prop]
            }

            if (value !== undefined)
            {
                el.value = value
            }
        }
    }
})