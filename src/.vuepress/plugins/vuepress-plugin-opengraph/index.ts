import type { Page } from 'vuepress'
import type { HeadConfig } from '@vuepress/shared'

type OpengraphConfig = {
    image?: string
}

const ogMeta = (name: string, value: string): HeadConfig => {
    return ['meta', { property: name, content: value }]
}

export default {
    name: 'vuepress-plugin-opengraph',
    extendsPage: (page: Page) => {
        if (!page.frontmatter?.opengraph) {
            return
        }

        const openGraph = page.frontmatter.opengraph as OpengraphConfig

        page.frontmatter.head = [
            ...(page.frontmatter?.head || []),
            [
                'meta',
                {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
            ],
            ogMeta('og:type', 'website'),
        ]

        if (page.frontmatter.description) {
            page.frontmatter.head.push(
                ogMeta('og:description', page.frontmatter.description)
            )
        }

        if (page.title) {
            page.frontmatter.head.push(ogMeta('og:title', page.title))
        }

        if (openGraph.image) {
            page.frontmatter.head.push(ogMeta('og:image', openGraph.image))
        }
    },

    // onInitialized: (app) => {
    //     for (const page of app.pages) {
    //         debugger
    //     }
    // },
}
