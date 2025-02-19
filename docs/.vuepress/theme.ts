import { hopeTheme } from 'vuepress-theme-hope'
import sidebar from './sidebar'
import navbar from './navbar'

export default hopeTheme({
    logo: './images/logo.png',
    author: {
        name: '周悦',
        url: 'https://fyed.top'
    },
    navbar,
    sidebar,
    repo: 'https://github.com/Clelo-key/fye-blog',
    docsRepo: 'Clelo-key/fye-blog',
    docsDir: 'docs',
    blog: {
        // 个人介绍页地址
        intro: '/resume',
        sidebarDisplay: 'mobile',
        // 博主头像
        avatar: './images/logo.png',
        // 座右铭
        description: '可惜啊！人生如棋，落子无悔。',
        medias: {
            Github: 'https://github.com/Clelo-key',
            Gitee: 'https://gitee.com/clelostar',
            bilibili: 'https://space.bilibili.com/198785703',
            Wechat: '/contact'
        }
    },
    plugins: {
        blog: {
            type: []
        }
    }
})
