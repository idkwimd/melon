# Form
`mwc-form`

Asynchronous form that makes `POST` request to `action` value on submit. `<mwc-form>` must have an
element with `type="submit"` attribute to make the form submittable

<style scoped>
    mwc-form {
        padding: 1rem;
    }
</style>

## Examples
:::code-group
```html
<mwc-card>
    <mwc-form action="/user">
        <mwc-grid>
            <div span="6">
                <mwc-label>Username</mwc-label>
                <mwc-input name="username" block></mwc-input>
            </div>
            <div span="6">
                <mwc-label>Password</mwc-label>
                <mwc-input name="password" block></mwc-input>
            </div>
            <div span="12">
                <mwc-label>URL</mwc-label>
                <mwc-input name="url" block></mwc-input>
            </div>
            <div span="12">
                <mwc-button type="submit">Submit</mwc-button>
            </div>
        </mwc-grid>
    </mwc-form>
</mwc-card>
```
```css
mwc-form {
    padding: 1rem;
}
```
:::
<mwc-card>
    <mwc-form action="/user">
        <mwc-grid>
            <div span="6">
                <mwc-label>Username</mwc-label>
                <mwc-input name="username" block></mwc-input>
            </div>
            <div span="6">
                <mwc-label>Password</mwc-label>
                <mwc-input name="password" block></mwc-input>
            </div>
            <div span="12">
                <mwc-label>URL</mwc-label>
                <mwc-input name="url" block></mwc-input>
            </div>
            <div span="12">
                <mwc-button type="submit">Submit</mwc-button>
            </div>
        </mwc-grid>
    </mwc-form>
</mwc-card>

### JSON Amalgamation
```html
<mwc-card>
    <mwc-form action="/user">
        <mwc-grid>
            <div span="6">
                <mwc-label>Username</mwc-label>
                <mwc-input name="json:userinfo:username" block></mwc-input>
            </div>
            <div span="6">
                <mwc-label>Password</mwc-label>
                <mwc-input name="json:userinfo:password" block></mwc-input>
            </div>
            <div span="12">
                <mwc-label>URL</mwc-label>
                <mwc-input name="json:userinfo:url" block></mwc-input>
            </div>
            <div span="12">
                <mwc-button type="submit">Submit</mwc-button>
            </div>
        </mwc-grid>
    </mwc-form>
</mwc-card>
```

Using `json:<form_prop>:<json_prop>` format in name attribute will amalgamate the values
of the fields with same `<form_prop>` into a stringified json value as `<form_prop>` form data property.
For example, the example above will produce `userinfo` from data property with value
```
"{\"username\":\"value\", \"password\":\"pass\", \"url\":\"value\"}"
```


## Attributes
| Name | Value | Description |
| ---  | ---  | ---       |
| action | `String` | URL address the form should submit to |

## Slots
| Name | Description |
| ---  | ---         |
| [default] | Form content |

## Events
| Name | Value | Description |
| ---  | ---  | ---       |
| success | `{ ok:Boolean, status:Number, payload:Object }` | Emited when response status is betwen 200-299 |
| fail | `{ ok:Boolean, status:Number, payload:Object }` | Emited when response status is not betwen 200-299 |