<script setup>
    import Preview from '../components/Preview.vue'
</script>

# Select
`mwc-select`

## Examples
::: code-group
```html
<mwc-select id="nameSelect"></mwc-select>
```
```js
nameSelect.data = [
    { text: 'Aritra', value: 1 },
    { text: 'Mark', value: 2 },
    { text: 'Venessa', value: 3 }
]
```
:::
<Preview html="
    <mwc-select id=&quot;nameSelect&quot;></mwc-select>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            nameSelect.data = [
                { text: 'Aritra', value: 1 },
                { text: 'Mark', value: 2 },
                { text: 'Venessa Williams', value: 3 }
            ]
        })
    </script>
" />

## Getters
| Name      | Values    | Description       |
| ---       | ---       | ---               |
| value | `String \| Number` ||

## Setters
| Name      | Values    | Description       |
| ---       | ---       | ---               |
| value | `String \| Number` ||
| data | `{ text:String, value:(String\|Number) }[]` | Set select options |

## Attributes
| Name      | Values    | Description       |
| ---       | ---       | ---               |
| name | `String` ||

## Event
| Name      | Values    | Description       |
| ---       | ---       | ---               |
| select | `String\|Number` | When item is selected |