import type { Page } from 'vuepress'
import type { HeadConfig } from '@vuepress/shared'
import type { PluginOptions } from '@vuepress/core'

type FrontmatterConfig = {
    image?: string
    author?: string
}

interface Config extends PluginOptions {
    author?: string
    baseUrl?: string
}

const ogMeta = (name: string, value: string): HeadConfig => {
    return ['meta', { property: name, content: value }]
}

const twitterMeta = (name: string, value: string): HeadConfig => {
    return ['meta', { name, content: value }]
}

export default (options: Config) => {
    return {
        name: 'vuepress-plugin-opengraph',
        extendsPage: (page: Page) => {
            if (!page.frontmatter?.opengraph) {
                return
            }

            const openGraph = page.frontmatter.opengraph as FrontmatterConfig
            const baseUrl = options.baseUrl ?? ''

            page.frontmatter.head = [
                ...(page.frontmatter?.head || []),
                twitterMeta('twitter:card', 'summary_large_image'),
                ogMeta('og:type', 'website'),
                ogMeta('og:url', baseUrl + page.path),
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
                page.frontmatter.head.push(
                    ogMeta('og:image', baseUrl + openGraph.image)
                )
            }

            if (options.author) {
                page.frontmatter.head.push(
                    twitterMeta('twitter:creator', options.author)
                )
            }
        },
    }
}
