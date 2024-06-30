---
head:
    - - script
      - src: select.js
      - defer:
---


<script setup>
    import { ref, onMounted } from 'vue' 
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
<mwc-select id="nameSelect" ref="nameSelect"></mwc-select>

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