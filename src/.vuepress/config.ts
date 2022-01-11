import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // common config
    dest: './dist',
    temp: './.temp',
    cache: './.cache',

    head: [
        [
            'link',
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: true,
            },
        ],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        [
            'link',
            {
                href: 'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap',
                rel: 'stylesheet',
            },
        ],
    ],

    // site config
    title: 'Metal Folds',
    description: 'Pictures of my Metal Earth models',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        darkMode: false,
        logo: '/images/logo_64.png',
        themePlugins: {
            nprogress: false,
            git: false,
        },
        navbar: [
            // NavbarItem
            {
                text: 'Models',
                link: '/',
            },
        ],
    },
    markdown: {
        anchor: false,
    },
})
