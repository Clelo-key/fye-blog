---
title: vue 基础知识
category:
    - 前端
tag:
    - vue
    - out date
excerpt: 一些vue的入门笔记，方便日后查阅。
date: 2020-01-01
star: true
---

## Vue 的两个特性

1. 数据驱动视图:
    1. vue 会监听数据的变化,从而自动渲染页面的结构.
    2. 需注意,数据驱动视图是单向的数据绑定,永远都是数据去改变视图,视图不能改变数据.
2. 双向数据绑定:
    1. 在填写表单时,可以让开发者不操作 dom 的前提下,自动把用户填写的内容同步到数据源中.

## MVVM:

1. MVVM 是 Vue 实现数据驱动视图和双向数据绑定的核心原理,MVVM 是指:model(渲染当前页面所需的数据源),view(表示当前页面所渲染的 DOM 实例),和 ViewModel(表示 Vue 的实例,他是 MVVM 的核心)

## vue3

```
const { createApp } = Vue
createApp({
  data() {
    return {
      message: 'HEllo World'
    }
  }
}).mount('#app')

```

## Vue 指令:

1. 内容渲染指令:(contentRendering.html)
    1. v-tetx:会覆盖元素容器内的内容.
    2. {{}}:占位符,传递参数.并且可以对内容进行 JavaScript 的表达式运算
    3. v-html:会覆盖元素容器内的内容,并在元素容器内将数据以 html 格式渲染出来
    4. notice:插值表达式只能在容器里使用,不能在属性中使用
2. 属性绑定指令:(attributeRendering.html)
    1. v-bind:属性:给元素的属性动态地绑定值.
    2. v:bing:属性可以简写为:属性
    3. v:bind 绑定的是一个数组是，需要加上{}。如 <div :style={background:value,color:red}></div>
3. 事件绑定指令

    1. v-on:事件-:给元素绑定事件
    2. v-on:事件可以简写为@事件
    3. 我们在事件绑定中绑定函数时不带括号会有一个默认参数 e(PointerEvent),e.target 代表当前元素 ,当函数加上括号后,此参数会被覆盖,如果此时我们需要对当前元素进行操作可以使用$event 代表参数 e(PointerEvent)
    4. 事件修饰符:
        1. prevent:阻止默认事件
        2. .stop:阻止事件冒泡
        3. .capture:以捕获的方式触发当前的事件处理函数
        4. .once 绑定的事件只触发 1 次
        5. .self 只有在 event.target 是当前元素自身时触发事件处理函数
    5. 按键修饰符:

        1. 在监听键盘事件时,我们经常需要判断详细的按键,此时,可以为键盘相关的事件添加按键修饰符,如:

        ```
        <!-- 只有在'key'是'enter'时调用函数'clearInput()'-->
        <input type="text" @keyup.enter="clearInput" />
        <!-- 只有在'key'是'esc'时调用函数'clearInput()'-->
        <input type="text" @keyup.esc="clearInput" />


        ```

4. 双向绑定指令
    1. v-model:为表单元素进行双向数据绑定.只有 input,textarea,select 等表单元素才可以使用 v-modle
    2. v-model 修饰符:
        1. .number 自动将用户输入的值转换为数值类型
        2. .trim 自动过滤用户输入的首位空白字符
        3. .lazy 在'change'时而非'input'时更新(实时更新)
5. 条件渲染指令
    1. . v-if,v-else,v-else-if:条件性的渲染某元素,判定为 true 时渲染,否则不渲染.
    2. v-show:根据条件展示某元素,与 v-if 的区别在于切换的是 display 属性的值.源码底层依然会对元素进行渲染,并缓存.
6. 列表渲染指令

    1. v-for="(i,index) in list":
    2. 在使用 b-for 时,最好绑定一个 key
        1. key 的值只能是字符串或数字
        2. key 的值必须具有唯一性(key 的值不能重复)
        3. 建议将数据的 id 属性作为 key 的值,(因为 id 属性具有唯一性)
        4. 使用 index 的值作为 key 值,无意义,因为 index 不具有唯一性(不与数据产生联系).
        5. 建议使用 v-for 指令一定要指定 key 的值(提升性能,防止列表状态紊乱)

    ```

    <tr v-for="(i,index) in list" :key="i.id">
             <td>{{index+1}}</td>
             <td>{{i.id}}</td>
             <td>{{i.name}}</td>
    </tr>

    ```

## 过滤器(Vue2 特性,vue3 已弃用):

1. 概念: 过滤器是 Vue 开发者提供的功能,常用于文本格式化,过滤器可以用在两个地方:**插值表达式**和**V-bind**属性绑定.

    ```
    <!-- 插值表达式,通过管道符调用capitalize过滤器.对message的值进行格式化 -->

    <p>{{message | capitalize}}</p>

    <!-- v-bind管,通过管道符调用formatId过滤器,对rawId的值进行格式 -->

    <div v-bind:id="rawId | formatID"></div>

    ```

2. 过滤器函数可以自定义:过滤器函数需要放在 filters:{}节点下.过滤器函数必须要有 return 值.

```
<div id='app'>
   <p>{{ message | capi }}</p>
</div>

<script>
      new Vue({
        el: "#app",
        data() {
          return {};
        },
        methods: {},
        filters: {
         //自定义函数的形参'val'永远都是管道符前面的那个值
         capi(val){
            //charAt(index),取出字符串对应索引的值
            let first=val.charAt(0).toUpperCase()
            //slice()方法,截取索引后的所有字符
            let other=val.slice(1)
            return first+other
         }
        },
      });
</script>

```

3. 定义全局过滤器:

    1. 如果需要在多个 app 实例间共享过滤器,则可以安装以下格式定义全局过滤器:

        ```

        Vue.filter('函数名',(str)=>{
           return str.charAt(0).toUpperCase()+str.slice(1)+'~'
        })

        ```

4. 过滤器可以连续调用多个:

    ```
    //把messsage的值交给filterA处理
    //把filterA处理的结果在交给filterB处理
    //最终把filterB处理的对象,最为最终值渲染到页面上

    {{message | filterA | filterB}}

    ```

5. 过滤器本质是 JavaScript 函数,所以过滤器函数也可以接收参数.

    ```
    //arg1和arg2是传递给filterA参数
    <p>{{message | filterA(arg1,arg2)}}</p>
    //过滤器处理函数的形参列表中:
    //第一个参数永远是管道符前面的哪一个值.
    //第二给参数开始,才是调用过滤器时传递过来的arg1和arg2参数
    Vue.filter('filterA',(msg,arg1,arg2)=>{})

    ```

## 侦听器:

1. 概念:watch 侦听器允许开发者监听数据变化.从而针对数据的变化做特定的操作.
2. 具体操作:

    1. 监听器需要定义在 watch 节点下
       <br><br>
    2. 定义函数格式的侦听器
        1. 函数格式的侦听器缺点:
            1. 无法在刚开始进入页面时自动触发,(无法定义 immediate 属性)
            2. 如果监听的数据为某个对象,当对象中的属性发送变化时,不会触发监听器

    ```
    //定义函数格式的侦听器:
    new Vue({
       el:"#app",
       data:{
          username:''
       },
       watch:{
          //监听username的值:数据产生变化后自动执行代码里面的值
          username(newVal,oldVal){
             console.log(newVal,oldVal)
          }
       }
    })

    ```

    3. 定义对象格式的侦听器
        1. 优点:
            1. 可用通过 immediate 属性,让侦听器自动触发.
            2. 可用通过 deep 属性,让侦听器监听对象的每个属性

    ```
    //定义对象格式的侦听器.
    new Vue({
       el:"#app",
       data:{
          username:''
       },
       watch:{
          //监听username的值:数据产生变化后自动执行代码里面的值
          username{
             handler(newVal,oldVal){
                  console.log(newVal,oldVal)
             },
          },
       }
    })

    ```

3. 应用场景:
    1. 判断用户名是否被占用. 1. 使用 axios 将用户名传给数据库查询,如果能查询到值,那么说明该用户名已被占用.反之,则用户名可用.
       <br> <br> <br>
4. 对象格式的侦听器.

    1. 通过 immediate 选项,让侦听器自动触发一次.
    2. 通过 deep 选项,让侦听器深度监听

    ```
    //定义对象格式的侦听器.
    new Vue({
       el:"#app",
       data:{
          username:''
       },
       watch:{
          //创建username对象.
          username{
             handler(newVal,oldVal){
                  console.log(newVal,oldVal)
             },
             //immediate的默认值为false
             //immediate的作用的:控制监听器是否自动触发一次
             immediate:true,
             //设置深度监听,只要对象中任意一个属性产生变化,都会触发侦听器
             deep:true,
          },
       },
    })

    ```

5. 深度侦听:
    1. 如果需要监听对象中某一个确定的属性.那么我们可以这样写:使用单引号'object.property'来创建监听器.(既可以用函数格式侦听器,也可以用对象格式侦听器),如果使用对象格式侦听器,不需要 deep 属性
    ```
    watch: {
       //对象格式
           "info.username": {
             handler(newVal) {
               console.log("侦听器已触发");
             },
           },
        //函数格式
           //   "info.username"(newVal) {
           //     console.log(newVal);
           //   },
         },
    ```

## 计算属性:

1. 计算属性是经过一系列运算后得出的值,这个值可以被模板结果或 methods 方法使用
2. 所有的计算属性都需要定义在 computed 节点下.
3. 定义计算属性时，需要定义为**方法格式**且需要有返回值
4. 优点：

    1. 可用实现代码复用
    2. 当数据源更改后，计算属性也会更改

    ```
    new Vue({
         el: "#app",
         data() {
           return {
             r: 0,
             g: 0,
             b: 0,
             red: "red",
           };
         },
         methods: {},
         methods: {
           show() {
             console.log(this.rgb);
           },
         },
         computed: {
           rgb() {
             return `rgb(${this.r},${this.g},${this.b})`;
             },
          },
       });


    ```

## axios:

1. get 方法:

    ```
    <script>
       axios.get(url, params).then((res) => {
          console.log(res);
          }).catch((err) => {
             console.error(err);
          });
    </script>

    ```

2. post 方法:

    ```
    <script>
          axios.post(url,data)
          .then(res => {
          console.log(res)
          })
          .catch(err => {
          console.error(err);
          })
    </script>
    ```

3. 我们一般使用 params 来作为 url 连接内的参数,让 get 方法使用. data 作为请求体内的参数.让 post 方法使用.

4. 如果某个方法的返回值是 Promise,则前面可以添加 await 修饰符. await 只能用在被 async 修饰的方法中使用.

```
//使用await替换.then 的使用
async function sendpost() {
        let postValue = await axios.post(
          "http://www.liulongbin.top:3006/api/post",
          {
            name: "张三",
            age: "李四",
          }
        );
        //   .then((res) => {
        //     console.log(res);
        //   })
      }
      console.log(postValue.data);

```

## 解构赋值:

```

.querySelector("#btnPost")
   .addEventListener("click", async function () {
      //解构赋值,获取对象内的data属性,并将其重命名位res
      let {data:res} = await axios.post(
          "http://www.liulongbin.top:3006/api/post",
            {
              name: "张三",
              age: "李四",
            }
          );
          //   .then((res) => {
          //     console.log(res);
          //   })
   console.log(res);
});

```

## Vue-Cli

-   ### Vue-cli 基本操作

    1. 安装 Vue-Cli.
        1. npm install -g @vue/cli
    2. 创建 vue-Cli 项目（项目名不能用大写英文和中文）
        1. vue create projectname
    3. 运行 vue-Cli 项目
        1. npm run serve
    4. Vue-cli 项目 src 目录结构:
        1. assets: 存放项目中用到的静态资源文件,例如 css 样式,图片资源等
        2. components:程序员封装的可复用的组件.
        3. main.js:项目的入口文件,整个项目执行需要先执行 main.js
        4. app.vue 是项目的根组件。
    5. Vue-cli 项目的的运行过程: 1. 通过 main.js 内的 rander 函数 将 vue.app 中的内容渲染到 index.html 的指定区域(即替换 index.html 内的 指定 div)。

        ```
        import Vue from "vue";
        import App from "./App.vue";

         Vue.config.productionTip = false;

         new Vue({
         //指定被渲染的 div(index.html)
         el: "#app",
         //指定渲染源（app.vue）
         render: (h) => h(App),
         });

        ```

-   ### Vue-cli 组件

    -   私有组件：
        -   在 components 内创建的 vue 文件被叫做私有组件.
        -   使用私有组件每次使用都需要导入,如果该组件需要频繁使用,建议将组件改为全局组件.
    -   全局组件:
        -   在 main.js 入口文件处,通过 Vue.component()方法,可以注册全局组件.案例如下:

    ```
    //注册全局组件:
    //1.导入需要成为全局组件的组件.
    import Count from "@/components/Count.vue";
    //注册组件,mycount为全局组件名,Count为私有组件名.
    Vue.component("Mycount", Count);

    ```

    -   为组件声明 props 自定义属性.

        -   引用组件时可以通过 V-bind,对该属性进行更改.使得组件在不同引用时,出现不同的值.

        ```

        //count组件声明一个为count的props属性.
        export default {
          //props也可以为数组的形式,但不推荐那样做,因为使用数组,我们不能为值设置规则.  props:["id"]
          props: {
             count:{
                //default设置值的默认属性,当使用此组件未传递参数时,参数将使用默认值.
                default: 0,
                //type限制值的类型.
                type:Number
                //required,设置该属性为组件的必要参数.
                required:true
             }
          },
        };

        //在left组件引入count组件.并为其绑定自己的count值
        <template>
          <div class="left">
             <Counts v-bind:count="count"></Counts>
          </div>
        </template>

        //定义left组件的count值
         <script lang="ts">
            export default {
               name: "left",
               data() {
                  return {
                     count: 8,
                  };
               },
            };
          </script>

        ```

    -   组件样式冲突的解决方法.

        -   方法一: 引入组件时,为不同的组件添加 data-v-数字编号. 在写组件样式时,为组件样式添加编号,达到解决样式冲突的作用

        ```
        //样式设置
        h1[data-v-2] {
        color: red;
        margin: 10px 0 -5px 0;
        }
        ```

        -   方法二: 为当前组件的 style 标签添加 scoped 属性.这样当我们允许时,vue 会自动为标签添加 data-v-数字编号属性.

        ```
        <style lang="less" scoped>
          #app {
             font-family: Avenir, Helvetica, Arial, sans-serif;
             -webkit-font-smoothing: antialiased;
             -moz-osx-font-smoothing: grayscale;
             text-align: center;
             color: #2c3e50;
          }
          h1 {
             color: red;
             margin: 10px 0 -5px 0;
          }
        </style>
        ```

        scoped 缺点:当我们为子组件设置了 scoped 属性,我们就不能在父组件中操作子组件的样式.

        -   deep 属性样式穿透:

            -   我们可以使用 deep 属性来解决,scoped 的缺点,达到在父组件中操作子组件样式的目的(这样的场景在使用第三方框架时常常用到).

            ```
            <style lang="less" scoped>
               /deep/h5 {
                  color: white;
               }
            <style>
            ```

## Vue 生命周期:

1. **Vue 生命周期&生命周期函数:**

    - Vue 有八个常用生命周期,每到一个生命周期会自动执行一个生命周期函数.(被称为钩子)
    - 创建阶段

        1. beforeCreate: 创建前,(初始化 props,data,methods,此时各种数据不可访问)
        2. created: 创建后,(props,data,methods,可以访问数据).但是模板结构尚未生成不能操作 dom。
        3. beforeMount: 载入前,(用内存中编译好的数据与模板替换掉 el 指定的 Dom 元素)
        4. mounted: 挂载完成,(dom 结构渲染完成)

    - 运行阶段

        5. beforeUpdate: 更新前(数据更新时触发，拿到最新的数据，存储在内存中)
        6. updated: 更新后,(将内存中最新的数据,渲染到 dom 结构 中)

    - 销毁阶段

        7. beforeDestroy: 销毁前，(将要销毁组件，但组件仍在运行中，数据仍然存在)
        8. destroy: 销毁后,(组件被销毁，对应的 Dom 结构以及被完全移除)

    - 路由的生命周期:

        - activated(): 路由被激活使用
        - deactivated(): 路由失活时使用

    - vue所有生命周期:https://cn.vuejs.org/api/options-lifecycle.html#rendertriggered

2. **组件数据共享**

    1. 在组件中常见的组件关系为：父子关系，兄弟关系
    2. 父向子传值：需要使用自定义属性 props。注意：当我们传递对象时，传递的是引用地址
    3. 子向父传值：需要使用自定义事件；
    4. 兄弟组件传递值:(vue2.x)定义 EventBus

    ```
    // 创建eventBus.js模块,并向外共享一个Vue实例对象
    // 在数据发送方,调用bus.$emit('事件名称',要发送的数据)方法触发自定义事件
    // 在数据接收方,调用bus.$on('事件名称',事件处理函数)方法注册一个自定义事件

    ```

## ref 属性

-   ref 引用 DOM 元素

    1. 为组件元素标签定义 ref 引用属性.
    2. 调用 ref 属性, this.$refs.自定义的属性名

-   ref 引用组件实例

    1. 为组件标签定义 ref 标签
    2. 调用 ref 属性, this.$refs.自定义的属性名

-   ref 设置文本框自动获得焦点:

    -   this.$refs.自定义的属性名.focus().
    -   需注意:当数据更新后,页面仍未成功渲染 DOM 元素,此时调用 this.$refs.自定义的属性名,可能会得到 undefined 值.
    -   解决方法: 使用$nextTick 回调函数.在 dom 结构更新完成后调用.

        ```
        this.$nextTick(()=>{
          this.$refs.自定义的属性名.focus()
        })

        ```

## 复习数组方法:

### some 方法:

遍历数组,检查数组中是否有某个元素满足某个条件,返回一个 bolean

```
list.some((item,index)=>{
      return item=='10'
})

```

### every 方法:

判断中是否所有元素都满足某个要求.返回一个 bolean

```
list.every((item,index)=>{
   return item==10
})

```

### filter and forEach

```
let sum=0
list.filter((item)=>{
   item.staus=='true'
}).forEach((item)=>{
   sum+=item.price*item.count
})

```

### reduce

返回初始值的操作

```
list.filter((item)=>item.status=='true').reduce((sum,item)=>{
      return sum += item.price*item.count
   },0)

```

## 动态组件

动态切换页面上组件的显示和隐藏

-   通过\<component is="组件名词">\</component>标签, 引入组件
-   使用事件对 is 属性的值进行修改,实现组件的动态显示与隐藏

### 解决组件切换后,组件先前的数据消失的问题:

-   使用 Keep-alive 标签 对组件保活(将组件缓存).

    -   当组件被缓存时,会自动触发组件的 deactivate 生命周期函数
    -   当组件被激活时,会自动触发组件的 activated 生命周期函数

    ```
    <keep-alive>
       <component :is="hh"></component>
    </keep-alive>

    ```

    -   keep-alive 有 include 属性,设置只有名词匹配的组件会被缓存.多个组件名之间用英文的逗号分开.也可使用数组的形式

    ```
     <keep-alive include="HelloWorld,Compound">
        <component :is="hh"></component>
     </keep-alive>

      <keep-alive :include="['HelloWorld','Compound']">
        <component :is="hh"></component>
     </keep-alive>

    ```

    -   keep-alive 有 exclude 属性,设置指定组件不被缓存.多个组件名之间用英文的逗号分开.

    ```
     <keep-alive exclude="HelloWorld">
        <component :is="hh"></component>
     </keep-alive>

    ```

    -   notice: exclude 与 include 不能同时使用

## 插槽

插槽(Slot)是 vue 为组件封装者提供的能力.允许开发者在封装组件时,把不确定的,希望由用户指定的部分定义为插槽.

-   在组件中声明\<slot>\</slot>标签.当组件被引用时,客户可以在组件中自定义标签,该标签会被渲染
    -   \<slot>标签内有一个 name 属性.每个\<slot>标签都需要指定一个 name 属性的值, 不指定则使用默认值 default.
    -   如果组件自定义的 name 属性,这需要使用\<tenplate>标签来绑定 v-slot

插槽的术语.

1. 指定了插槽 name 属性的插槽叫**具名插槽**.
2. 指定了插槽 name 属性且定义了 msg 属性的值的插槽叫**作用域插槽**

-   具名插槽:

    ```
    <!-- 定义插槽,并设置name属性为 myslot.插槽内可设置默认值 -->
       <slot name="myslot"></slot>
    <!-- 使用组件,并指定插槽需要渲染的标签 -->
       <HelloWorld v-bind:msg="show" :time="time">
          <template v-slot:myslot> <p>this is myslot</p> </template>
       </HelloWorld>
       <!-- notice: v-slot 可以简写为# -->
       <HelloWorld v-bind:msg="show" :time="time">
          <template #myslot> <p>this is myslot</p> </template>
       </HelloWorld>
    ```

-   作用域插槽: 为 slot 标签 添加一个 自定义 属性,可以让父组件使用 该属性 的值.可定义多个属性

    v-slot 可以接收一个对象,对象的键为 slot 标签内的自定义名,值为指定的值: v-slot:myslot="obj".(obj 可以使用其他值代替)

    ```
    <!-- 定义插槽,并设置name属性为myslot. msg为"Hello World" -->
       <slot name="myslot" msg="Hello World"></slot>
    <!-- 使用组件,并指定插槽,并打印msg的信息 -->
       <HelloWorld v-bind:msg="show" :time="time">
          <template v-slot:myslot="obj">
          <p>this is myslot:通过插槽填充的内容</p>
          <!-- 渲染msg的内容 -->
          <p>{{ obj.msg }}</p>
          </template>
       </HelloWorld>

    ```

-   插槽的解构赋值:
    在引用主键时,通过结构赋值,解构出 slot 标签传递的对象.并直接调用

    ```

    <!-- 使用组件,并指定插槽,并打印msg的信息 -->
       <HelloWorld v-bind:msg="show" :time="time">
          <template v-slot:myslot="{ msg,user }">
             <p>this is myslot:通过插槽填充的内容</p>
             <!-- 渲染msg的内容 -->
             <p>{{ msg }},{{ user }}</p>
          </template>
       </HelloWorld>


    ```

## 自定义指令

### 私有自定义指令

-   在每个 Vue 组件下,可以在 directives 节点中声明私有自定义指定.

    -   使用 v-指令名称 进行指令绑定
    -   bind 函数,当指令绑定到元素上时执行,只会执行一次.
    -   update 函数,当 Dom 更新时,update 函数就会被调用一次.

    ```
    directives: {
     //设置指令名称为color
     color: {
       //为绑定到的html元素设置红色的文字
       bind(el) {
         //el是绑定了此指令的原生dom对象
         el.style.color = "red";
       },
       update(el){
        console.log("Dom节点更新完成")
       }
     },
    },


    ```

-   自定义指令加参数

    -   在 bing 函数中添加第二个参数,官方推荐名称为(binding)该参数为一个对象.
    -   bingding 对象的 expression 属性:该属性为绑定 v-指令名时 指定的值.该值可为变量,可为表达式.
    -   bingding 对象的 value 属性: 该属性为 expression 表达式,变量 计算或指定后的值.
    -   如下例

    ```
    //给v-color指定一个字符串green,
    <p v-color="1>2?'green':'red'">this is myslot:通过插槽填充的内容</p>

    //此时binging对象为:
    {
     name: 'color',
     rawName: 'v-color',
     value: 'green',
     expression: "1 > 2 ? 'red' : 'green'",
     }
    ```

    update 与 bind 函数使用方法一致,只是生命周期不同.

    -   如果 update 与 bind 函数的代码逻辑相同那么可可以使用简写形式: 将指令改为函数形式.

    ```
    directives: {
      color(el, binding){
          el.style.color = binding.value;
      },
    },
    ```

### 全局自定义指令

-   在 main.js 中定义 过滤器

```
//简写形式
Vue.directive('color',function(el,binging){
   el.style.color=bindging.value
})
//使用对象形式
Vue.directive('color',{
   bind(el,binding){el.style.color=binding.value
   }
})

```

## Eslint

概念: 可组装的 javaSacript 和 JSX 检查工具,用来约束,规范代码.

语法规则与相关操作:http://eslint.cn/docs/rules/

-   .prettierrc文件内容
    1. "trailingComma": "none",
    2. "semi": false,
    3. "singleQuote": true,
    4. "arrowParens": "avoid",
    5. "printWidth": 300,
-   settings.json 设置

```
 // pretter风格规范
  "prettier.configPath": "C:\\Users\\17723\\.prettierrc",
  "eslint.alwaysShowStatus": true,
  // "prettier.trailingComma": "none",
  // "prettier.semi": false,
  // "prettier.singleQuote": true,
  // "prettier.arrowParens": "avoid",
  // "prettier.printWidth": 300,
  // 设置 .vue 文件中，HTML代码的格式化插件
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.ignoreProjectWarning": true,
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "trailingComma": "none",
      "singleQuote": true,
      "semi": false,
      "arrowParens": "avoid",
      "printWidth": 300
    },
    "js-beautify-html": {
      "wrap_attributes": false
    }
  },
  //解决pretter无法在函数后添加空格
  "[json]":{
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace",
    "editor.defaultFormatter":"esbenp.prettier-vscode",
  },

  "[vue]": {
    "editor.defaultFormatter":  "rvest.vs-code-prettier-eslint",
  },

  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,

  // eslint修复
  // "editor.codeActionsOnSave": {
  //   "source.fixAll": true
  // },


```

## Axios

-   解决axios文件需要多次导入的问题.
    -   在main.js 中导入axios文件,并在Vue的原型对象中添加axios属性. 配置后不用导入axios文件,只需调用this.axios.get()就能使用
    ```
     import axios from 'axios'
     Vue.prototype.axios = axios
    ```
-   解决请求的url耦合度过高的问题,设置全局请求根路径
    -   axios.defaults.baseURL='http://www.liulongbin.top:3006'
    -   设置baseURL后,url参数只需到使用子路径.
    ```
     async getinfo () {
       const { data: res } = await this.axios.get(
         '/api/get'
       )
       console.log(res)
     }
    ```
-   将axios注入Vue原型对象有一个缺点: 无法实现api接口的复用.

-   # 路由

    前端路由指的是hash地址与组件间的对应关系. (不同的组件对应不同的hash地址)工作原理使用:window.onhashchange事件,监听hash值的变化.

    -   前端路由的工作方式:

    1. 用户点击路由连接
    2. 导致URL导航栏中的Hash值发生变化
    3. 前端路由监听到Hash值的变化
    4. 前端路径把与Hash值对应的组件渲染到页面中

-   ## vue2安装VueRouter的步骤

1. npm i vue-router@3.5.2 -S
2. 在src目录下创建router文件夹,并在router下创建index.js文件.

```
//index.js文件内容
import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装VueRouter为Vue的插件
Vue.use(VueRouter)

// 创建 路由实例对象,routers定义hash与组件的对应关系,path:hash,component:组件
const router = new VueRouter({
  routes: [
    { path: '/home', component: InHome },
    { path: '/movie', component: InMovie },
    { path: '/about', component: InAbout }
  ]
})

// 向外暴露路由对象
export default router

```

3. 在main.js中挂载VueRouter对象

```
import router from './router/index.js'
new Vue({
  render: h => h(App),
  // 将router挂载为实例对象
  // 属性名与属性值相同可以简写
  // router: router
  router
}).$mount('#app')

```

4. template中 使用router-view渲染组件,router-link来进行导航

```
  <div id="app">
    <div>
      <h1>APP路由渲染</h1>
      <hr />
      <router-link to="/home">首页</router-link>
      <router-link to="/movie">电影</router-link>
      <router-link to="/about">关于</router-link>

      <!-- <a href="#/home">首页</a>
      <a href="#/movie">电影</a>
      <a href="#/about">关于</a> -->
    </div>
    <!-- <component :is="ConName"></component> -->
    <router-view></router-view>
  </div>
```

5. 路由重定向
    - 重定向规则:在index中的routers节点下 {path:用户访问路径,redirect:重定向路径}
6. notice: 在进行模块化导入的时候,如果给定的是文件夹,则默认导入文件夹下的indexj.s文件

-   ## 嵌套路由,
-   通过路由来实现组件的嵌套展示. 路由中嵌套子级路由.

    ```
    <!-- About组件 -->
    <div id="app">
      <div>
        <h1>About</h1>
        <router-link to="/about/table1">table1</router-link>
        <router-link to="/about/table2">tablb2</router-link>
      </div>
      <hr />

      <router-view></router-view>
    </div>

    ```

-   index.js 中在routes节点下通过children属性实现
    ```
    const router = new VueRouter({
    routes: [
       // 重定向规则
       { path: '/', redirect: '/about' },
       // 路由规则
       { path: '/home', component: InHome },
       { path: '/movie', component: InMovie },
       {
          path: '/about',
          component: InAbout,
          // notice:父节点的path需要 "/" 子节点的path可以不用 "/".
          children: [
          { path: 'table1', component: InTable1 },
          { path: 'table2', component: InTable2 }
          ]
       }
    ]
    })
    ```
-   默认子路由

    -   与children同级的,还有redirect属性,该属性为重定向路径.(可以利用它设置"默认子路由"). 严格来说这一种方法并非默认子路由,只是能达到默认子路由的效果

    ```
    {
       path: '/about',
       // 重定向设置"默认子路由"
       redirect: '/about/table1',
       component: InAbout,
       // 子路由
       children: [
          { path: 'table1', component: InTable1 },
          { path: 'table2', component: InTable2 }
       ]
    }
    ```

    -   我们可以将子路由中,指定组件的path属性设置为空.这样当我们访问其父组件时,也会显示子路由.达到设置默认子路由的效果.(使用这种方法需要将router-link指向的hash值 改为子路由的上级路由)
    -   template

    ```
    <div id="app">
     <div>
       <h1>About</h1>
       <router-link to="/about">table1</router-link>
       <router-link to="/about/table2">tablb2</router-link>
     </div>
     <hr />

     <router-view></router-view>
    </div>
    ```

    -   index.js

    ```
    {
       path: '/about',
       component: InAbout,
       // 子路由
       children: [
          // path 设置默认子路由
          { path: '', component: InTable1 },
          { path: 'table2', component: InTable2 }
       ]
    }
    ```

-   动态路由: 将Hash地址中可变的部分定义为参数项, 从而提高路由规则的复用性.
    在vue-router中使用英文的( : )来定义路由的参数项.

    ```
    // 路由中的动态参数以( : )声明, 冒号后面是动态参数的名称
    {path: '/movie/:id',compoent: Movie}

    ```

    -   在组件中拿到 动态参数的值:
        -   使用 $route.params 可以得到当前url的动态参数对象.
        -   notice: this.$route 是路由的 "参数对象". this. $router 是路由的 "导航对象"
    -   在组件中拿到 动态参数的值(方法二), 给当前路由规则开启props传参:

        -   定义路由规则

        ```
         { path: '/movie/:id', component: InMovie, props: true },
        ```

        -   组件中使用 proprs 接收 index 传入的 参数. 两者的名称需保持一致. 接收后可以直接调用参数名使用.

    -   知识补充:

        -   在hash地址中, / 后面的参数项,叫做 "路径参数".
        -   在url连接中, ? 后面的参数 叫做 "查询参数".
        -   在路由"参数对象"中,需要使用 this.$route.params 来访问 "路径参数".
        -   在路由"参数对象"中,需要使用 this.$route.query 来访问 "查询参数".
        -   router:
            -   $route.query :获取 "查询参数".
            -   $route.params:获取 "路径参数"
            -   $route.path :获取 部分hash地址. "/movie/2"
            -   $route.fullPath :获取 包含查询参数的hash地址 "/movie/2?name=zhangsan&age=18"

    -   ### router-link的属性:
        -   :to: 跳转链接,等同于a标签的href. 可使用query向this.$route.params传递参数
            ```
            <router-link :to="{ path:'/test',query: {name: id} }"
            ```
        -   replace 属 性,替换当前浏览记录,即不留下历史记录.
            ```
            <router-link :to="/home" replace></router-link>
            ```
        -   tag属性: 将链接渲染为响应的标签
            ```
            <!-- 将router-link渲染为li列表标签 -->
            <router-link :to="/home" tag="li">Home</router-link>
            <!-- 渲染结果 -->
            <li>Home</li>
            ```
        -   active-class属性: 当该链接被点击时,激活指定的css属性.可以在router.js中设置该css样式.具体百度
            ```
            <router-link :to="/home" active-class="u-link--Active">Home</router-link>
            ```
        -   exact属性:开启router-link的严格模式,必须完全匹配to属性指定的链接,才能激活active-class属性
            ```
            <router-link :to="/" exact>home</router-link>
            ```

---

-   ## 声明式导航 & 编程式导航

---

-   在浏览器中,点击链接实现导航的方式,叫做声明式导航. a标签
-   在浏览器中,使用api方法实现导航的方式, 叫做编程式导航. location.href

-   ## vue中常见的编程式导航

    1. this.$router.push("hash地址") 跳转到指定地址,并增加一条历史记录,方便用户回退
    2. this.$router.replace("hash地址") 跳转到指定地址,替换当前的历史记录,不可回退
    3. this.$router.go("数值 n") 可以在历史记录中前进和后退. 正数前进,负数后退
    4. this.$router.back() 在历史记录中后退一层.
    5. this.$router.forward() 在历史记录中前进一层
    6.

-   ### 导航守卫
    -   导航守卫可以控制路由的访问权限.
-   ### 全局前置守卫

    -   初始化时被调用,每次路由切换之前被调用
    -   每次发生路由的导航跳转时, 都会触发全局前置守卫. 因此,在全局前置守卫中,程序员可以对每个路由进行访问权限的控制.
    -   通过beforeEach设置全局前置守卫.

    ```
    // 创建路由对象
    const router = new VueRouter({})
    //调用路由对象的beforeEach方法, 声明"全局前置守卫"
    // 每次发送路由导航跳转时, 都会触发 fn 这个"回调函数"
    router.beforeEach(function(){})

    ```

    -   beforeEach回调函数的参数:

        -   to 将要访问的路由的信息对象
        -   from
        -   next 是一个函数, 调用next() 表示放行,允许这次路由导航
            -   next函数的多种调用方式.
            -   next() 直接放行
            -   next("/login") 前置跳转到指定url
            -   next(false) 不允许跳转

        ```
           router.beforeEach((to,from,next)=>{
              next()
           })

        ```

-   ### 路由原信息, this.$route.meta
    -   为路由设置原信息,方便守卫判断
        ```
        const router = new VueRouter({
        routes: [
              { path: '/home', component: InHome ,meta:{isAuth:false} },
           ]
        })
        ```
    -   在路由守卫中进行判断:
        ```
        router.beforeEach((to,from,next)=>{
           <!-- 对路由原信息进行判断,快速识别URL -->
              if(to.meta.isAuth){
                 next()
              }
           })
        ```
-   ## 全局后置守卫
-   初始化时被调用,每次路由切换之后被调用
-   通过router.afterEach((to,from)=>{})设置全局后置守卫

-   ## 独享守卫:独享守卫只有前置
    -   独享前置后卫:beforEnter((to,from,next)=>{})
        ```
        const router = new VueRouter({
        routes: [
                {
                   path: '/home',
                   component: InHome ,
                   meta:{isAuth:false}.
                   beforEnter((to,from,next)=>{})
                },
             ]
        })
        ```
-   ## 组件守卫:

    -   beforeRouteEnter((to,from,next)=>{}): 通过路由规则进入该组件被调用
    -   beforeRouterLeave((to,from,next)=>{}): 通过路由规则离开该组件被调用

-   ## 路由mode属性:
    -   history: 浏览器完整地址会传递给服务器,兼容性略差. 简易正式上线使用
    -   hash: 使用hash模式,浏览器完整地址不会传递给服务器,兼容性好
    ```
     const router = new VueRouter({
       mode:'history'
     routes: [
             {
                path: '/home',
                component: InHome ,
                meta:{isAuth:false}.
                beforEnter((to,from,next)=>{})
             },
          ]
     })
    ```
    -   路由的生命周期:
    -   activated(): 路由被激活使用
    -   deactivated(): 路由失活时使用
    -   以上两个生命周期 常常配合定时器使用

vue.config.js中的publicPath:配置为空字符串或者./ 使用文件协议.配置为/使用http协议
