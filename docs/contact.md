---
sidebar: false
---

<div class="main-container">
  <div class="main-image">
    <img src="/contacts/WeChat.jpg" alt="Stylish Image" class="styled-image" />
      <span>&nbsp &nbsp &nbsp &nbsp </span>
      <div class="introduction">嗨！您好，欢迎来到我的个人博客！我叫周悦。
      这里是我分享技术心得和记录成长点滴的地方。我会定期更新一些技术文章，涵盖前端开发、后端技术、工具使用等内容，希望能为同样热爱技术的你带来一些启发和帮助。同时，我也会记录生活中的思考与感悟，见证自己的成长与变化。无论是技术还是生活，这里都是一个开放的交流空间。感谢你的到来，愿我们共同进步，一起成长！
      </div>
      
  </div>
  <div class="main-content">
    我还不知道应该在这里做什么有趣的东西（^ - ^），也许有空了会放个炫酷的3d特效~。
  </div>
  
</div>

<style lang="scss" >
.vp-page [vp-content] {
    max-width:initial;
    margin:inherit;
    height:inherit;
    width:100%;
    padding:0;
}
.vp-page{
  padding-left:0;
  padding-bottom:0;

}
.main-container{
  height:100%;
  width:100%;
  display:flex;

  .main-image{
    max-width: 600px;
    max-height:500px;
    color: rgb(92, 92, 92);
    .introduction{
      padding:10px
    }
  }
  .main-content{
    flex:1;
    padding:20px 10px 10px 10px;
    color: rgb(92, 92, 92);
  }
   @media (max-width: 620px) {
    flex-direction: column;
    .main-image{
      max-width: fit-content;
      max-height: fit-content;
    }
  }

}

</style>
