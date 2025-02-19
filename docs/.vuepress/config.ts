import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Welcome To Fye-Blog ！',
    description: '这里是我的个人博客，我会分享一些技术文章以及记录一些个人生活',
    theme,
    // pwa 建议设置为 false
    shouldPrefetch: false,
    bundler: viteBundler(),
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]]
})
