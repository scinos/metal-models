import type { Page } from 'vuepress'
import type { HeadConfig } from '@vuepress/shared'

type OpengraphConfig = {
    image?: string
    author?: string
}

const ogMeta = (name: string, value: string): HeadConfig => {
    return ['meta', { property: name, content: value }]
}

const twitterMeta = (name: string, value: string): HeadConfig => {
    return ['meta', { name, content: value }]
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
            twitterMeta('twitter:card', 'summary_large_image'),
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

        if (openGraph.author) {
            page.frontmatter.head.push(
                twitterMeta('twitter:creator', openGraph.author)
            )
        }
    },

    // onInitialized: (app) => {
    //     for (const page of app.pages) {
    //         debugger
    //     }
    // },
}
