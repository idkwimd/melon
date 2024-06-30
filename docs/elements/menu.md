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
| select | Same event propaginated from [mwc-menu-item](menu) |