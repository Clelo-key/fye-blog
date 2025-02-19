---
article: false
---

  <div class="main-container">
    <div class="main-image">
      <div class="personal_account">
        <img src="/contacts/we_chat.jpg" alt="个人微信号" />
      </div>
      <div class="publish_account">
        <div class="text">欢迎大家关注我的公众号哦！😁</div>
        <img src="/contacts/publich_account.jpg" alt="公众号" />
      </div>
    </div>
    <div class="introduction">
      嗨！您好，欢迎来到我的个人博客！我叫周悦。
      这里是我分享技术心得和记录成长点滴的地方。我会定期更新一些技术文章，涵盖前端开发、后端技术、工具使用等内容，希望能为同样热爱技术的你带来一些启发和帮助。同时，我也会记录生活中的思考与感悟，见证自己的成长与变化。无论是技术还是生活，这里都是一个开放的交流空间。感谢你的到来，愿我们共同进步，一起成长！
    </div>
  </div>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  .main-image {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    gap: 20px; // 增加间距
    align-items: center;

    .personal_account,
    .publish_account {
      flex: 1;
      text-align: center;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 10px; // 图片圆角
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 图片阴影
      }
    }

    .publish_account {
      .text {
        margin-bottom: 10px;
        font-size: 16px;
        color: gray;
      }
    }
  }

  .introduction {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    line-height: 1.6;
    color: #555;
  }

  @media (max-width: 620px) {
    .main-image {
      flex-direction: column;
      gap: 10px;

      .personal_account,
      .publish_account {
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }
      }

      .publish_account {
        display: flex;
        flex-direction: column;
        align-items: center;

        .text {
          writing-mode: horizontal-tb; // 恢复默认文字方向
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
    }

    .introduction {
      padding: 15px;
      font-size: 14px;
    }
  }
}
</style>
