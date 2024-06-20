<script setup>
    import { ref, onMounted } from 'vue'
    import Preview from '../components/Preview.vue'
</script>

# Tab
`mwc-tab`

## Examples
```html
<mwc-tab>
    <mwc-tab-handle for="tab1" slot="tabs">Tab #1</mwc-tab-handle>
    <mwc-tab-handle for="tab2" slot="tabs">Tab #2</mwc-tab-handle>
    <mwc-tab-handle for="tab3" slot="tabs">Tab #3</mwc-tab-handle>
    <div name="tab1">TAB 1</div>
    <div name="tab2">TAB 2</div>
    <div name="tab3">TAB 3</div>
</mwc-tab>
```
<Preview html="
    &lt;mwc-tab&gt;
        &lt;mwc-tab-handle for=&quot;tab1&quot; slot=&quot;tabs&quot;&gt;Tab #1&lt;/mwc-tab-handle&gt;
        &lt;mwc-tab-handle for=&quot;tab2&quot; slot=&quot;tabs&quot;&gt;Tab #2&lt;/mwc-tab-handle&gt;
        &lt;mwc-tab-handle for=&quot;tab3&quot; slot=&quot;tabs&quot;&gt;Tab #3&lt;/mwc-tab-handle&gt;
        &lt;div name=&quot;tab1&quot;&gt;TAB 1&lt;/div&gt;
        &lt;div name=&quot;tab2&quot;&gt;TAB 2&lt;/div&gt;
        &lt;div name=&quot;tab3&quot;&gt;TAB 3&lt;/div&gt;
    &lt;/mwc-tab&gt;
"/>

> Add `name=""` attribute to child elements to make it tab view