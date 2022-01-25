import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import type { WebpackBundlerOptions } from '@vuepress/bundler-webpack'
import PluginOpengraph from './plugins/vuepress-plugin-opengraph/index.js'

export default defineUserConfig<DefaultThemeOptions, WebpackBundlerOptions>({
    // dir config
    dest: './dist',
    temp: './.temp',
    cache: './.cache',

    // site config
    title: 'Metal Folds',
    description: 'Pictures of my Metal Earth models',
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

    // theme and its config
    theme: path.resolve(__dirname, './theme'),
    themeConfig: {
        darkMode: false,
        logo: '/logos/logo_64.png',
        themePlugins: {
            nprogress: false,
            git: false,
            mediumZoom: false,
        },
        navbar: [
            { text: 'Models', link: '/' },
            { text: 'About', link: '/about.html' },
        ],
    },

    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],
        [
            PluginOpengraph,
            {
                author: '@scinos',
                baseUrl: 'https://metalfolds.page',
            },
        ],
    ],

    // markdown config
    markdown: {
        anchor: false,
    },

    bundler: '@vuepress/bundler-webpack',
})
