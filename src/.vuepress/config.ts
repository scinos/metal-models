import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import figureGallery from 'markdown-it-figure-gallery'

export default defineUserConfig<DefaultThemeOptions>({
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
            { text: 'Models', link: '/', },
        ],
    },

    // markdown config
    markdown: {
        anchor: false,
    },
    extendsMarkdown: (md) => {
        md.use(figureGallery, {
            figcaption: true,
            dataType: false,
            schemaAttributes: false,
            photoswipeIntegration: true,
        })
    },

    // bundlerConfig: {
    //     viteOptions:{
    //         build: {
    //             target: 'node16',
    //             commonjsOptions: {
    //                 include: ['**/client/lib/app.js'],
    //             }
    //         },
    //         // esbuild: {
    //             // include: ['/Users/sergio/src/blogs/metalearth/node_modules/photoswipe/dist/photoswipe-lightbox.esm.js']
    //         // },
    //     }
    // },
})
