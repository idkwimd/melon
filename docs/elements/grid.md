<style scoped>
    div[span] {
        background: #74b9ff;
        padding: .85rem 1rem;
    }
</style>

# Grid
`mwc-grid`

A 12-column grid system

## Examples
### Auto wrap
:::code-group
```html
<mwc-grid>
    <div span="4">Cell 1</div>
    <div span="4">Cell 2</div>
    <div span="4">Cell 3</div>
    <div span="4">Cell 4</div>
</mwc-grid>
```
```css
div[span] {
    background: #74b9ff;
    padding: .85rem 1rem;
}
```
:::
<mwc-grid>
    <div span="4">Cell 1</div>
    <div span="4">Cell 2</div>
    <div span="4">Cell 3</div>
    <div span="4">Cell 4</div>
</mwc-grid>


### Difference column sizes
:::code-group
```html
<mwc-grid>
    <div span="4">Cell 1</div>
    <div span="8">Cell 2</div>
</mwc-grid>
```
```css
div[span] {
    background: #74b9ff;
    padding: .85rem 1rem;
}
```
:::
<mwc-grid>
    <div span="4">Cell 1</div>
    <div span="8">Cell 2</div>
</mwc-grid>

## Slots
| Name | Description |
| --- | ---|
| [default] | Grid content. Immediate child elements accepts `span=<1-12>` attribute to control columns size |