---
home: true
title: 首页
heroImage: ./images/header.jpg
actions:
    - text: Get Started
      link: /getting-started.html
      type: primary

    - text: 我的简历
      link: https://vuejs.press/guide/introduction.html
      type: secondary
features:
    - title: '快速开始'
      details: '只需几分钟即可搭建一个文档站点。'
    - title: '易于使用'
      details: '基于 Markdown 和 Vue，简单易上手。'
    - title: '高度可定制'
      details: '支持自定义主题和插件扩展。'
footer: MPL Licensed | Copyright © 2022-present
---

如果你对网页内容有任何问题，请随时告诉我，我会尽力帮助你！联系我 --> Email：zyfyenet@163.com 、[微信：注明来意哦!]

[微信：注明来意哦!]: /contact

<style lang="scss" >
.vp-home{
  position: relative;
}

.route-link-active {
  background: var(--c-brand);
  color: green;
  .category-num {
        color: var(--c-bg);
  }
}
.vp-home [vp-content]{
  position: absolute;
  top:41rem
}
</style>
