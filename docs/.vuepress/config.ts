import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Welcome To Fye-Blog ！',
    base: '/fye-blog/', // 替换为你的仓库名称
    description: '这里是我的个人博客，我会分享一些技术文章以及记录一些个人生活',
    theme,
    // pwa 建议设置为 false
    shouldPrefetch: false,
    bundler: viteBundler(),
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }],
        // 添加百度统计
        [
            'script',
            {},
            `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?d577272a8eca77fe83f1777fd580e932";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
        ]
    ]
})
