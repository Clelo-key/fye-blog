import { navbar } from 'vuepress-theme-hope'

export default navbar([
    '/',
    {
        text: '文章',
        link: '/article/'
    },
    // {
    //     text: '分类',
    //     link: '/category/'
    // },
    {
        text: '更新历史',
        link: '/timeline/'
    }
])
