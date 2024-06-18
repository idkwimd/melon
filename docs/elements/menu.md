# Menu
`mwc-menu`

## Examples

```html
<mwc-menu>
    <mwc-menu-item>Home</mwc-menu-item>
    <mwc-menu-item>Profile
        <mwc-menu slot="nested">
            <mwc-menu-item value="my-info">My Info</mwc-menu-item>
            <mwc-menu-item value="settings">Settings</mwc-menu-item>
        </mwc-menu>
    </mwc-menu-item>
</mwc-menu>
```
<mwc-menu>
    <mwc-menu-item>Home</mwc-menu-item>
    <mwc-menu-item>Profile
        <mwc-menu slot="nested">
            <mwc-menu-item value="my-info">My Info</mwc-menu-item>
            <mwc-menu-item value="settings">Settings</mwc-menu-item>
        </mwc-menu>
    </mwc-menu-item>
</mwc-menu>

## Events
| Name      | Description       |
| ---       | ---               |
| select | Emits a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) when an item was clicked with the item's value as `detail` property if exits |