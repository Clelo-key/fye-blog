---
title: 微信小程序 基础知识
category:
    - 前端
tag:
    - 小程序
    - out date
excerpt: 一些微信小程序的入门笔记，方便日后查阅。
---

# 项目结构:

1. pages页面
    1. .js文件: 页面脚本文件,js函数
    2. .json文件,当前页面配置文件,配置窗口外观,表现等
    3. .wxml文件,当前页的模板结构文件
    4. .wxss文件,当前页面的样式文件
2. 根目录json文件:
    1. app.json:小程序的全局配置文件,(页面路径,窗口外观,界面表现,底部bab等)
        1. pages结点:记录小程序当前页面的路径
        2. window结点;记录窗口外观
        3. style 结点,全局定义小程序样式版本
        4. sitemapLocation结点,定义sitmap.json的存放路径
    2. peoject.config.json文件:项目配置工具,小程序开发工具的个性化配置
        1. setting:编译配置
        2. projectname:项目名称
        3. appid:小程序账户id
    3. sitemap.json文件用来配置小程序是否允许微信索引,即是否可以通过微信搜索索引到
        1. checkSitMap:project.config.json中的setting结点下的 checkSitMap字段可配置索引的开关

-   # 基本操作

    -   创建页面: 找app.json的pages结点下定义新页面的路径,自动生成改文件目录
    -   修改项目首页: 调整app.json的pages结点下的页面路径前后顺序,第一个为首页

-   # 组件
    -   view:普通视图容器
    -   scrool-view:可滑动的视图容器
    -   swiper: 轮播图容器,该组件具有一下属性.
        -   indicator-dots: boolean类型,默认为false,控制是否显示轮播图底部指示点
        -   indicator-color: color类型,控制指示点颜色
        -   indicator-active-color: color类型,当前指示点颜色
        -   autoplay:boolean类型: 默认值false,轮播图是否自动切换
        -   interval:number类型: 默认值5000,自动切换间隔
        -   circular:boolean类型: 默认值false,轮播图是否采用衔接滑动
    -   swiper-item: 轮播图项
    -   text: 文本组件,使用selectable属性支持长按选中
    -   rich-text: 富文本组件,使用node属性,将结点内的内容渲染为wxml,并替换原有内容
    -   button: 按钮组件,具有多种属性
        -   通过on-type属性可以调用各种功能
        -   type: 设置类型
        -   size: 调整大小
        -   plain: 镂空按钮
    -   image: 图片组件,默认宽高300x240,具有mode属性,该属性具有一下字段.
        -   scaleToFill: (默认值) 缩放模式.不保持纵横比缩放图片.使此图片的宽高完全拉伸至填满image元素.
        -   aspectFile:缩放模式,保持横纵比缩放图片,使图片的长边能完全显示出来.也就是完整的显示图片.
        -   aspectFill:缩放模式,保持纵横比缩放图片,使图片的短边能完全显示出来.其余部分会被剪切
        -   widthFix:缩放模式,宽度不变,高度自动变化.保持原图宽高比不变.
        -   heightFix:缩放模式,高度不变,宽度自动变化,保持原图宽高比不变.
    -   navigator:导航组件

# 小程序API:

微信小程序大致有三类API:

## 事件监听

特点:以on开头,用来监听事件的触发

```
wx.onWindowResize(function callback): 监听窗口尺寸变化的事件
```

## 同步API

特点:

1. 以sync结尾的API都是同步API.
2. 同步API的执行结果,可以通过函数返回值直接获取,如果执行出错会抛出异常.

```
wx.setStorageSync("key","value")向本地存储中写如内容.
```

## 异步API

特点:类似于jQuery中的$.ajax(options)函数,需要通过scucess,fall,complate接收调用的结果

```
wx.request()发起网络数据请求，通过scucess回调函数接收数据。
```

# WXML模板语法

## 数据绑定

1). 定义数据:在页面文件对应目录下的js文件中的data对象内。
2). 在wxml中使用插值表达式，在“{{}}”符号中填写绑定的数据名词。
3). 在插值表达式中可使用基本运算与逻辑判断

## 事件绑定

小程序中常用事件有:tap,input,change
1). tap:手指触摸后离开，与点击事件相同。绑定方式：bindtap或bind:tap
2). input:文本框输入事件。绑定方式：bindinput或bind:input
3). change: 状态改变时触发。绑定方式：bindchange或bind:change

当事件触发回调时会受到一个事件对象event,该对象具有一下属性。
|属性|类型|说明|
|-|-|:-:|
|type|String|事件类型|
|timeStamp|Integer|页面打开到触发事件所经过的毫秒数|
|target|Object|触发事件的组件的一些属性值集合|
|currentTarget|object|当前组件的一些属性值集合|
|detail|Object|额外的信息|
|touchers|Array|触摸事件，当前停留在屏幕中的触摸点幸喜的数组|
|changedTouches|Array|触摸事件，当前变化的触摸点信息的数组|

target和currentTarget的区别：
target:是触发该事件的源头组件，而currentTarget是当前事件所绑定的组件。如下例：target对应button标签,currentTarget对应view标签

```
<view id="currenttarget" bindtap="outhandler">
  <button id="target">按钮</button>
</view>

outhandler函数定义:
  outhandler(e){
    console.log(e)
  },
```

## 事件传参与数据传递

### 1). 数据传递

可以使用this.Date重新为Data中的值赋值.如:

```
  outhandler(e){
    console.log(e)
    this.setData({
      dynamic:this.data.dynamic="按钮已点击"
    })
  },
```

### 2). 事件传参

微信小程序,不能再绑定事件的同时为事件传递参数.如下例的错误用法.

```
<view id="currenttarget" bindtap="outhandler("传递参数")">
  <button id="target">按钮</button>
</view>

```

正确用法应该使用data-info字段加上插值表达式.info为参数名.如下:

```
<view id="currenttarget" bindtap="outhandler" data-info="{{"传递参数"}}">
  <button id="target">按钮</button>
</view>
```

在处理函数中我们可以使用event.target.dataset.参数名,获取具体的参数值.如:

```
  outhandler(e){
    console.log(e)
    // console.log(e.target.dataset)
    // 在传递参数时应注意参数是在target还是在currentTarget
    console.log(e.currentTarget.dataset)
    this.setData({
      dynamic:this.data.dynamic="按钮已点击"
    })

  },

```

### 3). 双向数据绑定

微信小程序的双向数据绑定需要使用bindinput事件,input输入框(注意微信小程序的输入框默认空白,无任何样式),event.detail.value数据指针(数据源)

```
<input  id="username" model:value="{{msg}}" bindinput="ChangeInput"></input>

ChangeInput(e){
    this.setData({
      msg:e.detail.value
    })
  },
```

## WXML渲染

### 4). 在view中使用wx.if="{{condition}}"来判断是否需要渲染视图代码块.

```

<view wx:if="{{msg>=100||msg<=0}}">
  <text decode='true'> 彩蛋 Bong!!Bang!!! MSG≥100||MSG≤0
  </text>
</view>
<view wx:elif="{{msg>=50}}">
  <text decode='true'> 彩蛋 Bong!!Bang!!! 50≤MSG&lt;100
  </text>
</view>
<view wx:else>
  <text decode='true'> 彩蛋 Bong!!Bang!!! 0&lt;MSG&lt;50
  </text>
</view>

```

### 5). 列表循环

与vue的v-for类似.

```
<view id="list">
  <view><span>id</span><span>brand</span></view>
  <view wx:for="{{array}}" wx:key="id" wx:for-index="id" wx:for-item="obj">
    <span>{{id+1}}</span><span>{{obj.brand}}</span>
  </view>
</view>
```

### 6). 公共样式表导入

使用@import可以导入公共的样式文件

```
@import "/common/common.wxss"
```

### 7). 全局下拉刷新

在app.json.window中把enablePullDownRefresh的值设置为true.
在app.json.window中可以指定backgroundColor的值,设置下拉刷新
在app.json.window中可以指定backgroundTextStyle的值(light,dark),设置下拉刷新时,圆点的颜色

## TabBar

在app.json.TabBar中设置底部和顶部导航栏,数量最少2最多5.顶部导航栏不显示图标.

TabBar的属性:
position:TabBar的位置(bottom,top)
list:tab页的标签,标签包含

-   pagePath:页面路径
-   text:标签名字
-   inconPath:未选择时的图标路径
-   selectedlcoPath:选中时的图标路径

borderStyle:设置TabBar的边框颜色
backgroundColor:设置TabBar的背景颜色
selectedlconPath:设置导航栏被选中时的颜色
incoPath:设置导航栏图标
color:设置文本颜色
selectedColor:选中时的文本颜色

```
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    },{
      "pagePath": "pages/list/index",
      "text":"List"
    }],
    "backgroundColor": "#000000",
    "color": "#FFFFFF"
  },
```

**Notice:**
wx.navigateTo({})中的URL路径是不能tabBar中设置过的路径,不然navigateTo会失效.

# 页面窗口配置

常用属性:

-   navigationBarBackgroundColor:导航栏背景颜色
-   navigationBarTextStyle:当前页面导航栏标题颜色,仅支持black/white
-   navigationBarTittleText:当前页面导航栏标题文字内容
-   backgroundColor当前页面窗口的背景色
-   backgroundTextStyle:下拉刷新时的样式dark/light
-   enablePullDownRefresh:是否为当前页面开启下拉刷新的效果
-   onReachBottomDistance:页面下滑触底事件的距离,单位是px

# 数据请求

小程序对数据请求接口做出了限制,

-   只能请求Https类型
-   必须将接口的域名添加到信任列表中
