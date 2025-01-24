import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import sidebar from './sidebar'
import * as echarts from 'echarts'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Welcome To Fye-Blog ！',
    description: '这里是我的个人博客，我会分享一些技术文章以及记录一些个人生活',

    theme: defaultTheme({
        logo: './images/header.jpg',
        extraStyles: ['styles/index.scss'], // 引入自定义 CSS 文件
        navbar: [
            '/',
            {
                text: '文章',
                link: '/article/'
            },
            {
                text: '分类',
                link: '/category/'
            },
            {
                text: '更新历史',
                link: '/timeline/'
            }
        ],
        sidebar,
        echarts: true,
        repo: 'https://github.com/Snailclimb/JavaGuide'
    }),

    plugins: [
        blogPlugin({
            // Only files under posts are articles
            filter: ({ filePathRelative }) =>
                filePathRelative
                    ? filePathRelative.startsWith('posts/')
                    : false,

            // Getting article info
            getInfo: ({ frontmatter, title, data }) => ({
                title,
                author: frontmatter.author || '',
                date: frontmatter.date || null,
                category: frontmatter.category || [],
                tag: frontmatter.tag || [],
                excerpt:
                    // Support manually set excerpt through frontmatter
                    typeof frontmatter.excerpt === 'string'
                        ? frontmatter.excerpt
                        : data?.excerpt || ''
            }),

            // Generate excerpt for all pages excerpt those users choose to disable
            excerptFilter: ({ frontmatter }) =>
                !frontmatter.home &&
                frontmatter.excerpt !== false &&
                typeof frontmatter.excerpt !== 'string',

            category: [
                {
                    key: 'category',
                    getter: (page) => page.frontmatter.category || [],
                    layout: 'Category',
                    itemLayout: 'Category',
                    frontmatter: () => ({
                        title: 'Categories'
                        // sidebar: false
                    }),
                    itemFrontmatter: (name) => ({
                        title: `Category ${name}`
                        // sidebar: false
                    })
                }
            ],

            type: [
                {
                    key: 'article',
                    // Remove archive articles
                    filter: (page) => !page.frontmatter.archive,
                    layout: 'Article',
                    frontmatter: () => ({
                        title: 'Articles',
                        sidebar: false
                    }),
                    // Sort pages with time and sticky
                    sorter: (pageA, pageB) => {
                        if (
                            pageA.frontmatter.sticky &&
                            pageB.frontmatter.sticky
                        )
                            return (
                                pageB.frontmatter.sticky -
                                pageA.frontmatter.sticky
                            )

                        if (
                            pageA.frontmatter.sticky &&
                            !pageB.frontmatter.sticky
                        )
                            return -1

                        if (
                            !pageA.frontmatter.sticky &&
                            pageB.frontmatter.sticky
                        )
                            return 1

                        if (!pageB.frontmatter.date) return 1
                        if (!pageA.frontmatter.date) return -1

                        return (
                            new Date(pageB.frontmatter.date).getTime() -
                            new Date(pageA.frontmatter.date).getTime()
                        )
                    }
                },
                {
                    key: 'timeline',
                    // Only article with date should be added to timeline
                    filter: (page) => page.frontmatter.date instanceof Date,
                    // Sort pages with time
                    sorter: (pageA, pageB) =>
                        new Date(pageB.frontmatter.date).getTime() -
                        new Date(pageA.frontmatter.date).getTime(),
                    layout: 'Timeline',
                    frontmatter: () => ({
                        title: 'Timeline',
                        sidebar: false
                    })
                }
            ],
            hotReload: true
        })
    ],

    bundler: viteBundler()
})
