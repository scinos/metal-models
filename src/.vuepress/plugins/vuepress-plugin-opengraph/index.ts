import type { Page } from 'vuepress'

export default {
    name: 'vuepress-plugin-opengraph',
    extendsPage: (page: Page) => {
        if (!page.frontmatter?.opengraph) {
            return
        }

        page.frontmatter.head = [
            ...(page.frontmatter?.head || []),
            [
                'meta',
                {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
            ],
            [
                'meta',
                {
                    property: 'og:type',
                    content: 'website',
                },
            ],
        ]

        if (page.frontmatter.description) {
            page.frontmatter.head.push([
                'meta',
                {
                    property: 'og:description',
                    content: page.frontmatter.description,
                },
            ])
        }

        if (page.title) {
            page.frontmatter.head.push([
                'meta',
                {
                    property: 'og:title',
                    content: page.title,
                },
            ])
        }
    },

    // onInitialized: (app) => {
    //     for (const page of app.pages) {
    //         debugger
    //     }
    // },
}
