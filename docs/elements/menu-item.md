# Menu Item
`mwc-menu-item`

Intended to be used as child of `<mwc-menu>`. See [Menu](menu)

## Slots
| Name | Description |
| ---  | ---         |
| [default] | Item content |
| icon | Icon on the left  |
| extra | Extra accent text  |

## Attributes
| Name | Value | Description |
| ---  | ---    | ---     |
| active || Adds active indicator |
| value | `String\|Number` | Value to emit on selecting the menu |

## Events
| Name | Description |
| --- | --- |
| select | Emits a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) when an item was clicked with the item's value as `detail.value` property if exits |