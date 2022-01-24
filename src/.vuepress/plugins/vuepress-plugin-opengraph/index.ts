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

        if (openGraph.image) {
            page.frontmatter.head.push(ogMeta('og:image', openGraph.image))
        }
    },
}
