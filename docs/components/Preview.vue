<template>
    <iframe ref="previewFrame" class="m-preview"></iframe>
</template>

<style scoped>
    .m-preview {
        width: 100%;
        border: none;
    }
</style>

<script setup>
    import { ref, onMounted, defineProps } from 'vue'

    const props = defineProps({
        html: String,
        centered: Boolean
    })
    
    const previewFrame = ref()

    onMounted(() =>
    {
        previewFrame.value.srcdoc = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    @import url('https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css');
                    @import url('https://rsms.me/inter/inter.css');
                    body {
                        margin: 0;
                        box-sizing: border-box;
                        font-family: Inter, sans-serif;
                        font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11', 'zero';
                    }
                    body * {
                        box-sizing: inherit;
                    }
                    body.centered {
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                <\/style>
                <script src="\/mwc.js" defer><\/script>
            <\/head>
            <body class="${props.centered ? 'centered' : ''}">
                ${props.html}
            <\/body>
            <\/html>
        `
    })
</script>