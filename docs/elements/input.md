# Input
`mwc-input`

## Examples

### Normal
```html
<mwc-input placeholder="Username..."></mwc-input>
```
<mwc-input placeholder="Username..."></mwc-input>

### Small
```html
<mwc-input small type="date"></mwc-input>
```
<mwc-input small type="date"></mwc-input>

### With slot
```html
<mwc-input>
    <span slot="before">http://</span>
</mwc-input>
```
<mwc-input>
    <span slot="before">http://</span>
</mwc-input>

## Attributes
| Name      | Values    | Description       |
| ---       | ---       | ---               |
| small     |           | Smaller form factor      |
| name      | String | |
| placeholder | String | |
| disabled |||
| type | String | See [Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) |
| min | Number ||
| max | Number ||

## Slots
| Name      | Description       |
| ---       | ---               |
| before | Before input |
| after | After input |

## Getters
| Name      | Values    | Description       |
| ---       | ---       | ---               |
| value | String \| Number | Get input value |

## Setters
| Name      | Values    | Description       |
| ---       | ---       | ---               |
| value | String \| Number | Set input value |