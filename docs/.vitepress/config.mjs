import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Melon WC",
    description: "An easy-to-use web component library made with love by a watermelon lover",
    head: [
        ['script', { type: 'module', src: '/mwc.js' }]
    ],
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: tag => tag.startsWith('mwc-')
            }
        }
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Elements', link: '/elements/' }
        ],
        search: {
            provider: 'local'
        },
        docFooter: {
            next: false,
            prev: false
        },
        sidebar: [
            {
                text: 'Elements',
                base: '/elements/',
                link: '/',
                items: [
                    { text: 'Button', link: 'button' },
                    { text: 'Input', link: 'input' },
                    { text: 'Menu', link: 'menu' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/idkwimd/melon' }
        ]
    }
})
