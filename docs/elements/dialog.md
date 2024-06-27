<script setup>
    import { ref, onMounted } from 'vue'
    const infoDialog = ref()
</script>

# Dialog

## Examples
::: code-group
```html
<mwc-button id="dialogTrigger">Open Dialog</mwc-button>
<mwc-dialog id="infoDialog">
    <span slot="heading">Heading</span>
    Dialog content
</mwc-dialog>
```
```js
dialogTrigger.addEventListener('click', () => {
    infoDialog.show()
})
```
:::
<mwc-button @click="infoDialog.show()">Open Dialog</mwc-button>
<mwc-dialog ref="infoDialog">
    <span slot="heading">Heading</span>
    Dialog content
</mwc-dialog>

## Slots
| Name | Description |
| --- | --- |
| [default] | Dialog content |
| heading ||

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| show | | Show the dialog |
| hide | | Hide the dialog |