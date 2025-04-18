import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as a,a as n,t as p,b as t,n as d,o as r}from"./app-DnaXiwX4.js";const c={};function u(i,s){return r(),l("div",null,[s[9]||(s[9]=a(`<h2 id="vue-的两个特性" tabindex="-1"><a class="header-anchor" href="#vue-的两个特性"><span>Vue 的两个特性</span></a></h2><ol><li>数据驱动视图: <ol><li>vue 会监听数据的变化,从而自动渲染页面的结构.</li><li>需注意,数据驱动视图是单向的数据绑定,永远都是数据去改变视图,视图不能改变数据.</li></ol></li><li>双向数据绑定: <ol><li>在填写表单时,可以让开发者不操作 dom 的前提下,自动把用户填写的内容同步到数据源中.</li></ol></li></ol><h2 id="mvvm" tabindex="-1"><a class="header-anchor" href="#mvvm"><span>MVVM:</span></a></h2><ol><li>MVVM 是 Vue 实现数据驱动视图和双向数据绑定的核心原理,MVVM 是指:model(渲染当前页面所需的数据源),view(表示当前页面所渲染的 DOM 实例),和 ViewModel(表示 Vue 的实例,他是 MVVM 的核心)</li></ol><h2 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3"><span>vue3</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const { createApp } = Vue</span></span>
<span class="line"><span>createApp({</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      message: &#39;HEllo World&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}).mount(&#39;#app&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-指令" tabindex="-1"><a class="header-anchor" href="#vue-指令"><span>Vue 指令:</span></a></h2>`,7)),n("ol",null,[n("li",null,[s[3]||(s[3]=n("p",null,"内容渲染指令:(contentRendering.html)",-1)),n("ol",null,[s[0]||(s[0]=n("li",null,"v-tetx:会覆盖元素容器内的内容.",-1)),n("li",null,p()+":占位符,传递参数.并且可以对内容进行 JavaScript 的表达式运算",1),s[1]||(s[1]=n("li",null,"v-html:会覆盖元素容器内的内容,并在元素容器内将数据以 html 格式渲染出来",-1)),s[2]||(s[2]=n("li",null,"notice:插值表达式只能在容器里使用,不能在属性中使用",-1))])]),n("li",null,[s[7]||(s[7]=n("p",null,"属性绑定指令:(attributeRendering.html)",-1)),n("ol",null,[s[5]||(s[5]=n("li",null,"v-bind:属性:给元素的属性动态地绑定值.",-1)),s[6]||(s[6]=n("li",null,"v:bing:属性可以简写为:属性",-1)),n("li",null,[s[4]||(s[4]=t("v:bind 绑定的是一个数组是，需要加上{}。如 ")),n("div",{style:d({background:i.value,color:i.red})},null,4)])])]),s[8]||(s[8]=a(`<li><p>事件绑定指令</p><ol><li><p>v-on:事件-:给元素绑定事件</p></li><li><p>v-on:事件可以简写为@事件</p></li><li><p>我们在事件绑定中绑定函数时不带括号会有一个默认参数 e(PointerEvent),e.target 代表当前元素 ,当函数加上括号后,此参数会被覆盖,如果此时我们需要对当前元素进行操作可以使用$event 代表参数 e(PointerEvent)</p></li><li><p>事件修饰符:</p><ol><li>prevent:阻止默认事件</li><li>.stop:阻止事件冒泡</li><li>.capture:以捕获的方式触发当前的事件处理函数</li><li>.once 绑定的事件只触发 1 次</li><li>.self 只有在 event.target 是当前元素自身时触发事件处理函数</li></ol></li><li><p>按键修饰符:</p><ol><li>在监听键盘事件时,我们经常需要判断详细的按键,此时,可以为键盘相关的事件添加按键修饰符,如:</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 只有在&#39;key&#39;是&#39;enter&#39;时调用函数&#39;clearInput()&#39;--&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;text&quot; @keyup.enter=&quot;clearInput&quot; /&gt;</span></span>
<span class="line"><span>&lt;!-- 只有在&#39;key&#39;是&#39;esc&#39;时调用函数&#39;clearInput()&#39;--&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;text&quot; @keyup.esc=&quot;clearInput&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>双向绑定指令</p><ol><li>v-model:为表单元素进行双向数据绑定.只有 input,textarea,select 等表单元素才可以使用 v-modle</li><li>v-model 修饰符: <ol><li>.number 自动将用户输入的值转换为数值类型</li><li>.trim 自动过滤用户输入的首位空白字符</li><li>.lazy 在&#39;change&#39;时而非&#39;input&#39;时更新(实时更新)</li></ol></li></ol></li><li><p>条件渲染指令</p><ol><li>. v-if,v-else,v-else-if:条件性的渲染某元素,判定为 true 时渲染,否则不渲染.</li><li>v-show:根据条件展示某元素,与 v-if 的区别在于切换的是 display 属性的值.源码底层依然会对元素进行渲染,并缓存.</li></ol></li><li><p>列表渲染指令</p><ol><li>v-for=&quot;(i,index) in list&quot;:</li><li>在使用 b-for 时,最好绑定一个 key <ol><li>key 的值只能是字符串或数字</li><li>key 的值必须具有唯一性(key 的值不能重复)</li><li>建议将数据的 id 属性作为 key 的值,(因为 id 属性具有唯一性)</li><li>使用 index 的值作为 key 值,无意义,因为 index 不具有唯一性(不与数据产生联系).</li><li>建议使用 v-for 指令一定要指定 key 的值(提升性能,防止列表状态紊乱)</li></ol></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;tr v-for=&quot;(i,index) in list&quot; :key=&quot;i.id&quot;&gt;</span></span>
<span class="line"><span>         &lt;td&gt;{{index+1}}&lt;/td&gt;</span></span>
<span class="line"><span>         &lt;td&gt;{{i.id}}&lt;/td&gt;</span></span>
<span class="line"><span>         &lt;td&gt;{{i.name}}&lt;/td&gt;</span></span>
<span class="line"><span>&lt;/tr&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,4))]),s[10]||(s[10]=a(`<h2 id="过滤器-vue2-特性-vue3-已弃用" tabindex="-1"><a class="header-anchor" href="#过滤器-vue2-特性-vue3-已弃用"><span>过滤器(Vue2 特性,vue3 已弃用):</span></a></h2><ol><li><p>概念: 过滤器是 Vue 开发者提供的功能,常用于文本格式化,过滤器可以用在两个地方:<strong>插值表达式</strong>和<strong>V-bind</strong>属性绑定.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 插值表达式,通过管道符调用capitalize过滤器.对message的值进行格式化 --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;{{message | capitalize}}&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- v-bind管,通过管道符调用formatId过滤器,对rawId的值进行格式 --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div v-bind:id=&quot;rawId | formatID&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>过滤器函数可以自定义:过滤器函数需要放在 filters:{}节点下.过滤器函数必须要有 return 值.</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div id=&#39;app&#39;&gt;</span></span>
<span class="line"><span>   &lt;p&gt;{{ message | capi }}&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>      new Vue({</span></span>
<span class="line"><span>        el: &quot;#app&quot;,</span></span>
<span class="line"><span>        data() {</span></span>
<span class="line"><span>          return {};</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        methods: {},</span></span>
<span class="line"><span>        filters: {</span></span>
<span class="line"><span>         //自定义函数的形参&#39;val&#39;永远都是管道符前面的那个值</span></span>
<span class="line"><span>         capi(val){</span></span>
<span class="line"><span>            //charAt(index),取出字符串对应索引的值</span></span>
<span class="line"><span>            let first=val.charAt(0).toUpperCase()</span></span>
<span class="line"><span>            //slice()方法,截取索引后的所有字符</span></span>
<span class="line"><span>            let other=val.slice(1)</span></span>
<span class="line"><span>            return first+other</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>定义全局过滤器:</p><ol><li><p>如果需要在多个 app 实例间共享过滤器,则可以安装以下格式定义全局过滤器:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>Vue.filter(&#39;函数名&#39;,(str)=&gt;{</span></span>
<span class="line"><span>   return str.charAt(0).toUpperCase()+str.slice(1)+&#39;~&#39;</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>过滤器可以连续调用多个:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//把messsage的值交给filterA处理</span></span>
<span class="line"><span>//把filterA处理的结果在交给filterB处理</span></span>
<span class="line"><span>//最终把filterB处理的对象,最为最终值渲染到页面上</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{{message | filterA | filterB}}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>过滤器本质是 JavaScript 函数,所以过滤器函数也可以接收参数.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//arg1和arg2是传递给filterA参数</span></span>
<span class="line"><span>&lt;p&gt;{{message | filterA(arg1,arg2)}}&lt;/p&gt;</span></span>
<span class="line"><span>//过滤器处理函数的形参列表中:</span></span>
<span class="line"><span>//第一个参数永远是管道符前面的哪一个值.</span></span>
<span class="line"><span>//第二给参数开始,才是调用过滤器时传递过来的arg1和arg2参数</span></span>
<span class="line"><span>Vue.filter(&#39;filterA&#39;,(msg,arg1,arg2)=&gt;{})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="侦听器" tabindex="-1"><a class="header-anchor" href="#侦听器"><span>侦听器:</span></a></h2><ol><li><p>概念:watch 侦听器允许开发者监听数据变化.从而针对数据的变化做特定的操作.</p></li><li><p>具体操作:</p><ol><li>监听器需要定义在 watch 节点下 <br><br></li><li>定义函数格式的侦听器 <ol><li>函数格式的侦听器缺点: <ol><li>无法在刚开始进入页面时自动触发,(无法定义 immediate 属性)</li><li>如果监听的数据为某个对象,当对象中的属性发送变化时,不会触发监听器</li></ol></li></ol></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//定义函数格式的侦听器:</span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>   el:&quot;#app&quot;,</span></span>
<span class="line"><span>   data:{</span></span>
<span class="line"><span>      username:&#39;&#39;</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   watch:{</span></span>
<span class="line"><span>      //监听username的值:数据产生变化后自动执行代码里面的值</span></span>
<span class="line"><span>      username(newVal,oldVal){</span></span>
<span class="line"><span>         console.log(newVal,oldVal)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>定义对象格式的侦听器 <ol><li>优点: <ol><li>可用通过 immediate 属性,让侦听器自动触发.</li><li>可用通过 deep 属性,让侦听器监听对象的每个属性</li></ol></li></ol></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//定义对象格式的侦听器.</span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>   el:&quot;#app&quot;,</span></span>
<span class="line"><span>   data:{</span></span>
<span class="line"><span>      username:&#39;&#39;</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   watch:{</span></span>
<span class="line"><span>      //监听username的值:数据产生变化后自动执行代码里面的值</span></span>
<span class="line"><span>      username{</span></span>
<span class="line"><span>         handler(newVal,oldVal){</span></span>
<span class="line"><span>              console.log(newVal,oldVal)</span></span>
<span class="line"><span>         },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>应用场景:</p><ol><li>判断用户名是否被占用. 1. 使用 axios 将用户名传给数据库查询,如果能查询到值,那么说明该用户名已被占用.反之,则用户名可用. <br> <br> <br></li></ol></li><li><p>对象格式的侦听器.</p><ol><li>通过 immediate 选项,让侦听器自动触发一次.</li><li>通过 deep 选项,让侦听器深度监听</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//定义对象格式的侦听器.</span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>   el:&quot;#app&quot;,</span></span>
<span class="line"><span>   data:{</span></span>
<span class="line"><span>      username:&#39;&#39;</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   watch:{</span></span>
<span class="line"><span>      //创建username对象.</span></span>
<span class="line"><span>      username{</span></span>
<span class="line"><span>         handler(newVal,oldVal){</span></span>
<span class="line"><span>              console.log(newVal,oldVal)</span></span>
<span class="line"><span>         },</span></span>
<span class="line"><span>         //immediate的默认值为false</span></span>
<span class="line"><span>         //immediate的作用的:控制监听器是否自动触发一次</span></span>
<span class="line"><span>         immediate:true,</span></span>
<span class="line"><span>         //设置深度监听,只要对象中任意一个属性产生变化,都会触发侦听器</span></span>
<span class="line"><span>         deep:true,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>深度侦听:</p><ol><li>如果需要监听对象中某一个确定的属性.那么我们可以这样写:使用单引号&#39;object.property&#39;来创建监听器.(既可以用函数格式侦听器,也可以用对象格式侦听器),如果使用对象格式侦听器,不需要 deep 属性</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>watch: {</span></span>
<span class="line"><span>   //对象格式</span></span>
<span class="line"><span>       &quot;info.username&quot;: {</span></span>
<span class="line"><span>         handler(newVal) {</span></span>
<span class="line"><span>           console.log(&quot;侦听器已触发&quot;);</span></span>
<span class="line"><span>         },</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>    //函数格式</span></span>
<span class="line"><span>       //   &quot;info.username&quot;(newVal) {</span></span>
<span class="line"><span>       //     console.log(newVal);</span></span>
<span class="line"><span>       //   },</span></span>
<span class="line"><span>     },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性"><span>计算属性:</span></a></h2><ol><li><p>计算属性是经过一系列运算后得出的值,这个值可以被模板结果或 methods 方法使用</p></li><li><p>所有的计算属性都需要定义在 computed 节点下.</p></li><li><p>定义计算属性时，需要定义为<strong>方法格式</strong>且需要有返回值</p></li><li><p>优点：</p><ol><li>可用实现代码复用</li><li>当数据源更改后，计算属性也会更改</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>new Vue({</span></span>
<span class="line"><span>     el: &quot;#app&quot;,</span></span>
<span class="line"><span>     data() {</span></span>
<span class="line"><span>       return {</span></span>
<span class="line"><span>         r: 0,</span></span>
<span class="line"><span>         g: 0,</span></span>
<span class="line"><span>         b: 0,</span></span>
<span class="line"><span>         red: &quot;red&quot;,</span></span>
<span class="line"><span>       };</span></span>
<span class="line"><span>     },</span></span>
<span class="line"><span>     methods: {},</span></span>
<span class="line"><span>     methods: {</span></span>
<span class="line"><span>       show() {</span></span>
<span class="line"><span>         console.log(this.rgb);</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>     },</span></span>
<span class="line"><span>     computed: {</span></span>
<span class="line"><span>       rgb() {</span></span>
<span class="line"><span>         return \`rgb(\${this.r},\${this.g},\${this.b})\`;</span></span>
<span class="line"><span>         },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>   });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios"><span>axios:</span></a></h2><ol><li><p>get 方法:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>   axios.get(url, params).then((res) =&gt; {</span></span>
<span class="line"><span>      console.log(res);</span></span>
<span class="line"><span>      }).catch((err) =&gt; {</span></span>
<span class="line"><span>         console.error(err);</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>post 方法:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>      axios.post(url,data)</span></span>
<span class="line"><span>      .then(res =&gt; {</span></span>
<span class="line"><span>      console.log(res)</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      .catch(err =&gt; {</span></span>
<span class="line"><span>      console.error(err);</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>我们一般使用 params 来作为 url 连接内的参数,让 get 方法使用. data 作为请求体内的参数.让 post 方法使用.</p></li><li><p>如果某个方法的返回值是 Promise,则前面可以添加 await 修饰符. await 只能用在被 async 修饰的方法中使用.</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//使用await替换.then 的使用</span></span>
<span class="line"><span>async function sendpost() {</span></span>
<span class="line"><span>        let postValue = await axios.post(</span></span>
<span class="line"><span>          &quot;http://www.liulongbin.top:3006/api/post&quot;,</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            name: &quot;张三&quot;,</span></span>
<span class="line"><span>            age: &quot;李四&quot;,</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        //   .then((res) =&gt; {</span></span>
<span class="line"><span>        //     console.log(res);</span></span>
<span class="line"><span>        //   })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      console.log(postValue.data);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值"><span>解构赋值:</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>.querySelector(&quot;#btnPost&quot;)</span></span>
<span class="line"><span>   .addEventListener(&quot;click&quot;, async function () {</span></span>
<span class="line"><span>      //解构赋值,获取对象内的data属性,并将其重命名位res</span></span>
<span class="line"><span>      let {data:res} = await axios.post(</span></span>
<span class="line"><span>          &quot;http://www.liulongbin.top:3006/api/post&quot;,</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              name: &quot;张三&quot;,</span></span>
<span class="line"><span>              age: &quot;李四&quot;,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          );</span></span>
<span class="line"><span>          //   .then((res) =&gt; {</span></span>
<span class="line"><span>          //     console.log(res);</span></span>
<span class="line"><span>          //   })</span></span>
<span class="line"><span>   console.log(res);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli"><span>Vue-Cli</span></a></h2><ul><li><h3 id="vue-cli-基本操作" tabindex="-1"><a class="header-anchor" href="#vue-cli-基本操作"><span>Vue-cli 基本操作</span></a></h3><ol><li><p>安装 Vue-Cli.</p><ol><li>npm install -g @vue/cli</li></ol></li><li><p>创建 vue-Cli 项目（项目名不能用大写英文和中文）</p><ol><li>vue create projectname</li></ol></li><li><p>运行 vue-Cli 项目</p><ol><li>npm run serve</li></ol></li><li><p>Vue-cli 项目 src 目录结构:</p><ol><li>assets: 存放项目中用到的静态资源文件,例如 css 样式,图片资源等</li><li>components:程序员封装的可复用的组件.</li><li>main.js:项目的入口文件,整个项目执行需要先执行 main.js</li><li>app.vue 是项目的根组件。</li></ol></li><li><p>Vue-cli 项目的的运行过程: 1. 通过 main.js 内的 rander 函数 将 vue.app 中的内容渲染到 index.html 的指定区域(即替换 index.html 内的 指定 div)。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import Vue from &quot;vue&quot;;</span></span>
<span class="line"><span>import App from &quot;./App.vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Vue.config.productionTip = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> new Vue({</span></span>
<span class="line"><span> //指定被渲染的 div(index.html)</span></span>
<span class="line"><span> el: &quot;#app&quot;,</span></span>
<span class="line"><span> //指定渲染源（app.vue）</span></span>
<span class="line"><span> render: (h) =&gt; h(App),</span></span>
<span class="line"><span> });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><h3 id="vue-cli-组件" tabindex="-1"><a class="header-anchor" href="#vue-cli-组件"><span>Vue-cli 组件</span></a></h3><ul><li>私有组件： <ul><li>在 components 内创建的 vue 文件被叫做私有组件.</li><li>使用私有组件每次使用都需要导入,如果该组件需要频繁使用,建议将组件改为全局组件.</li></ul></li><li>全局组件: <ul><li>在 main.js 入口文件处,通过 Vue.component()方法,可以注册全局组件.案例如下:</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//注册全局组件:</span></span>
<span class="line"><span>//1.导入需要成为全局组件的组件.</span></span>
<span class="line"><span>import Count from &quot;@/components/Count.vue&quot;;</span></span>
<span class="line"><span>//注册组件,mycount为全局组件名,Count为私有组件名.</span></span>
<span class="line"><span>Vue.component(&quot;Mycount&quot;, Count);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>为组件声明 props 自定义属性.</p><ul><li>引用组件时可以通过 V-bind,对该属性进行更改.使得组件在不同引用时,出现不同的值.</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>//count组件声明一个为count的props属性.</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  //props也可以为数组的形式,但不推荐那样做,因为使用数组,我们不能为值设置规则.  props:[&quot;id&quot;]</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>     count:{</span></span>
<span class="line"><span>        //default设置值的默认属性,当使用此组件未传递参数时,参数将使用默认值.</span></span>
<span class="line"><span>        default: 0,</span></span>
<span class="line"><span>        //type限制值的类型.</span></span>
<span class="line"><span>        type:Number</span></span>
<span class="line"><span>        //required,设置该属性为组件的必要参数.</span></span>
<span class="line"><span>        required:true</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//在left组件引入count组件.并为其绑定自己的count值</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;left&quot;&gt;</span></span>
<span class="line"><span>     &lt;Counts v-bind:count=&quot;count&quot;&gt;&lt;/Counts&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//定义left组件的count值</span></span>
<span class="line"><span> &lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>    export default {</span></span>
<span class="line"><span>       name: &quot;left&quot;,</span></span>
<span class="line"><span>       data() {</span></span>
<span class="line"><span>          return {</span></span>
<span class="line"><span>             count: 8,</span></span>
<span class="line"><span>          };</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件样式冲突的解决方法.</p><ul><li>方法一: 引入组件时,为不同的组件添加 data-v-数字编号. 在写组件样式时,为组件样式添加编号,达到解决样式冲突的作用</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//样式设置</span></span>
<span class="line"><span>h1[data-v-2] {</span></span>
<span class="line"><span>color: red;</span></span>
<span class="line"><span>margin: 10px 0 -5px 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法二: 为当前组件的 style 标签添加 scoped 属性.这样当我们允许时,vue 会自动为标签添加 data-v-数字编号属性.</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>  #app {</span></span>
<span class="line"><span>     font-family: Avenir, Helvetica, Arial, sans-serif;</span></span>
<span class="line"><span>     -webkit-font-smoothing: antialiased;</span></span>
<span class="line"><span>     -moz-osx-font-smoothing: grayscale;</span></span>
<span class="line"><span>     text-align: center;</span></span>
<span class="line"><span>     color: #2c3e50;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  h1 {</span></span>
<span class="line"><span>     color: red;</span></span>
<span class="line"><span>     margin: 10px 0 -5px 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scoped 缺点:当我们为子组件设置了 scoped 属性,我们就不能在父组件中操作子组件的样式.</p><ul><li><p>deep 属性样式穿透:</p><ul><li>我们可以使用 deep 属性来解决,scoped 的缺点,达到在父组件中操作子组件样式的目的(这样的场景在使用第三方框架时常常用到).</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>   /deep/h5 {</span></span>
<span class="line"><span>      color: white;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>&lt;style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li></ul><h2 id="vue-生命周期" tabindex="-1"><a class="header-anchor" href="#vue-生命周期"><span>Vue 生命周期:</span></a></h2><ol><li><p><strong>Vue 生命周期&amp;生命周期函数:</strong></p><ul><li><p>Vue 有八个常用生命周期,每到一个生命周期会自动执行一个生命周期函数.(被称为钩子)</p></li><li><p>创建阶段</p><ol><li>beforeCreate: 创建前,(初始化 props,data,methods,此时各种数据不可访问)</li><li>created: 创建后,(props,data,methods,可以访问数据).但是模板结构尚未生成不能操作 dom。</li><li>beforeMount: 载入前,(用内存中编译好的数据与模板替换掉 el 指定的 Dom 元素)</li><li>mounted: 挂载完成,(dom 结构渲染完成)</li></ol></li><li><p>运行阶段</p><ol start="5"><li>beforeUpdate: 更新前(数据更新时触发，拿到最新的数据，存储在内存中)</li><li>updated: 更新后,(将内存中最新的数据,渲染到 dom 结构 中)</li></ol></li><li><p>销毁阶段</p><ol start="7"><li>beforeDestroy: 销毁前，(将要销毁组件，但组件仍在运行中，数据仍然存在)</li><li>destroy: 销毁后,(组件被销毁，对应的 Dom 结构以及被完全移除)</li></ol></li><li><p>路由的生命周期:</p><ul><li>activated(): 路由被激活使用</li><li>deactivated(): 路由失活时使用</li></ul></li><li><p>vue所有生命周期:https://cn.vuejs.org/api/options-lifecycle.html#rendertriggered</p></li></ul></li><li><p><strong>组件数据共享</strong></p><ol><li>在组件中常见的组件关系为：父子关系，兄弟关系</li><li>父向子传值：需要使用自定义属性 props。注意：当我们传递对象时，传递的是引用地址</li><li>子向父传值：需要使用自定义事件；</li><li>兄弟组件传递值:(vue2.x)定义 EventBus</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建eventBus.js模块,并向外共享一个Vue实例对象</span></span>
<span class="line"><span>// 在数据发送方,调用bus.$emit(&#39;事件名称&#39;,要发送的数据)方法触发自定义事件</span></span>
<span class="line"><span>// 在数据接收方,调用bus.$on(&#39;事件名称&#39;,事件处理函数)方法注册一个自定义事件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="ref-属性" tabindex="-1"><a class="header-anchor" href="#ref-属性"><span>ref 属性</span></a></h2><ul><li><p>ref 引用 DOM 元素</p><ol><li>为组件元素标签定义 ref 引用属性.</li><li>调用 ref 属性, this.$refs.自定义的属性名</li></ol></li><li><p>ref 引用组件实例</p><ol><li>为组件标签定义 ref 标签</li><li>调用 ref 属性, this.$refs.自定义的属性名</li></ol></li><li><p>ref 设置文本框自动获得焦点:</p><ul><li><p>this.$refs.自定义的属性名.focus().</p></li><li><p>需注意:当数据更新后,页面仍未成功渲染 DOM 元素,此时调用 this.$refs.自定义的属性名,可能会得到 undefined 值.</p></li><li><p>解决方法: 使用$nextTick 回调函数.在 dom 结构更新完成后调用.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>this.$nextTick(()=&gt;{</span></span>
<span class="line"><span>  this.$refs.自定义的属性名.focus()</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="复习数组方法" tabindex="-1"><a class="header-anchor" href="#复习数组方法"><span>复习数组方法:</span></a></h2><h3 id="some-方法" tabindex="-1"><a class="header-anchor" href="#some-方法"><span>some 方法:</span></a></h3><p>遍历数组,检查数组中是否有某个元素满足某个条件,返回一个 bolean</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>list.some((item,index)=&gt;{</span></span>
<span class="line"><span>      return item==&#39;10&#39;</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="every-方法" tabindex="-1"><a class="header-anchor" href="#every-方法"><span>every 方法:</span></a></h3><p>判断中是否所有元素都满足某个要求.返回一个 bolean</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>list.every((item,index)=&gt;{</span></span>
<span class="line"><span>   return item==10</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter-and-foreach" tabindex="-1"><a class="header-anchor" href="#filter-and-foreach"><span>filter and forEach</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let sum=0</span></span>
<span class="line"><span>list.filter((item)=&gt;{</span></span>
<span class="line"><span>   item.staus==&#39;true&#39;</span></span>
<span class="line"><span>}).forEach((item)=&gt;{</span></span>
<span class="line"><span>   sum+=item.price*item.count</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce"><span>reduce</span></a></h3><p>返回初始值的操作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>list.filter((item)=&gt;item.status==&#39;true&#39;).reduce((sum,item)=&gt;{</span></span>
<span class="line"><span>      return sum += item.price*item.count</span></span>
<span class="line"><span>   },0)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态组件" tabindex="-1"><a class="header-anchor" href="#动态组件"><span>动态组件</span></a></h2><p>动态切换页面上组件的显示和隐藏</p><ul><li>通过&lt;component is=&quot;组件名词&quot;&gt;&lt;/component&gt;标签, 引入组件</li><li>使用事件对 is 属性的值进行修改,实现组件的动态显示与隐藏</li></ul><h3 id="解决组件切换后-组件先前的数据消失的问题" tabindex="-1"><a class="header-anchor" href="#解决组件切换后-组件先前的数据消失的问题"><span>解决组件切换后,组件先前的数据消失的问题:</span></a></h3><ul><li><p>使用 Keep-alive 标签 对组件保活(将组件缓存).</p><ul><li>当组件被缓存时,会自动触发组件的 deactivate 生命周期函数</li><li>当组件被激活时,会自动触发组件的 activated 生命周期函数</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;keep-alive&gt;</span></span>
<span class="line"><span>   &lt;component :is=&quot;hh&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span>&lt;/keep-alive&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>keep-alive 有 include 属性,设置只有名词匹配的组件会被缓存.多个组件名之间用英文的逗号分开.也可使用数组的形式</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> &lt;keep-alive include=&quot;HelloWorld,Compound&quot;&gt;</span></span>
<span class="line"><span>    &lt;component :is=&quot;hh&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span> &lt;/keep-alive&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;keep-alive :include=&quot;[&#39;HelloWorld&#39;,&#39;Compound&#39;]&quot;&gt;</span></span>
<span class="line"><span>    &lt;component :is=&quot;hh&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span> &lt;/keep-alive&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>keep-alive 有 exclude 属性,设置指定组件不被缓存.多个组件名之间用英文的逗号分开.</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> &lt;keep-alive exclude=&quot;HelloWorld&quot;&gt;</span></span>
<span class="line"><span>    &lt;component :is=&quot;hh&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span> &lt;/keep-alive&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>notice: exclude 与 include 不能同时使用</li></ul></li></ul><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽"><span>插槽</span></a></h2><p>插槽(Slot)是 vue 为组件封装者提供的能力.允许开发者在封装组件时,把不确定的,希望由用户指定的部分定义为插槽.</p><ul><li>在组件中声明&lt;slot&gt;&lt;/slot&gt;标签.当组件被引用时,客户可以在组件中自定义标签,该标签会被渲染 <ul><li>&lt;slot&gt;标签内有一个 name 属性.每个&lt;slot&gt;标签都需要指定一个 name 属性的值, 不指定则使用默认值 default.</li><li>如果组件自定义的 name 属性,这需要使用&lt;tenplate&gt;标签来绑定 v-slot</li></ul></li></ul><p>插槽的术语.</p><ol><li>指定了插槽 name 属性的插槽叫<strong>具名插槽</strong>.</li><li>指定了插槽 name 属性且定义了 msg 属性的值的插槽叫<strong>作用域插槽</strong></li></ol><ul><li><p>具名插槽:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 定义插槽,并设置name属性为 myslot.插槽内可设置默认值 --&gt;</span></span>
<span class="line"><span>   &lt;slot name=&quot;myslot&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>&lt;!-- 使用组件,并指定插槽需要渲染的标签 --&gt;</span></span>
<span class="line"><span>   &lt;HelloWorld v-bind:msg=&quot;show&quot; :time=&quot;time&quot;&gt;</span></span>
<span class="line"><span>      &lt;template v-slot:myslot&gt; &lt;p&gt;this is myslot&lt;/p&gt; &lt;/template&gt;</span></span>
<span class="line"><span>   &lt;/HelloWorld&gt;</span></span>
<span class="line"><span>   &lt;!-- notice: v-slot 可以简写为# --&gt;</span></span>
<span class="line"><span>   &lt;HelloWorld v-bind:msg=&quot;show&quot; :time=&quot;time&quot;&gt;</span></span>
<span class="line"><span>      &lt;template #myslot&gt; &lt;p&gt;this is myslot&lt;/p&gt; &lt;/template&gt;</span></span>
<span class="line"><span>   &lt;/HelloWorld&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>作用域插槽: 为 slot 标签 添加一个 自定义 属性,可以让父组件使用 该属性 的值.可定义多个属性</p><p>v-slot 可以接收一个对象,对象的键为 slot 标签内的自定义名,值为指定的值: v-slot:myslot=&quot;obj&quot;.(obj 可以使用其他值代替)</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 定义插槽,并设置name属性为myslot. msg为&quot;Hello World&quot; --&gt;</span></span>
<span class="line"><span>   &lt;slot name=&quot;myslot&quot; msg=&quot;Hello World&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>&lt;!-- 使用组件,并指定插槽,并打印msg的信息 --&gt;</span></span>
<span class="line"><span>   &lt;HelloWorld v-bind:msg=&quot;show&quot; :time=&quot;time&quot;&gt;</span></span>
<span class="line"><span>      &lt;template v-slot:myslot=&quot;obj&quot;&gt;</span></span>
<span class="line"><span>      &lt;p&gt;this is myslot:通过插槽填充的内容&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;!-- 渲染msg的内容 --&gt;</span></span>
<span class="line"><span>      &lt;p&gt;{{ obj.msg }}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>   &lt;/HelloWorld&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>插槽的解构赋值: 在引用主键时,通过结构赋值,解构出 slot 标签传递的对象.并直接调用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 使用组件,并指定插槽,并打印msg的信息 --&gt;</span></span>
<span class="line"><span>   &lt;HelloWorld v-bind:msg=&quot;show&quot; :time=&quot;time&quot;&gt;</span></span>
<span class="line"><span>      &lt;template v-slot:myslot=&quot;{ msg,user }&quot;&gt;</span></span>
<span class="line"><span>         &lt;p&gt;this is myslot:通过插槽填充的内容&lt;/p&gt;</span></span>
<span class="line"><span>         &lt;!-- 渲染msg的内容 --&gt;</span></span>
<span class="line"><span>         &lt;p&gt;{{ msg }},{{ user }}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>   &lt;/HelloWorld&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令"><span>自定义指令</span></a></h2><h3 id="私有自定义指令" tabindex="-1"><a class="header-anchor" href="#私有自定义指令"><span>私有自定义指令</span></a></h3><ul><li><p>在每个 Vue 组件下,可以在 directives 节点中声明私有自定义指定.</p><ul><li>使用 v-指令名称 进行指令绑定</li><li>bind 函数,当指令绑定到元素上时执行,只会执行一次.</li><li>update 函数,当 Dom 更新时,update 函数就会被调用一次.</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>directives: {</span></span>
<span class="line"><span> //设置指令名称为color</span></span>
<span class="line"><span> color: {</span></span>
<span class="line"><span>   //为绑定到的html元素设置红色的文字</span></span>
<span class="line"><span>   bind(el) {</span></span>
<span class="line"><span>     //el是绑定了此指令的原生dom对象</span></span>
<span class="line"><span>     el.style.color = &quot;red&quot;;</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span>   update(el){</span></span>
<span class="line"><span>    console.log(&quot;Dom节点更新完成&quot;)</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> },</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义指令加参数</p><ul><li>在 bing 函数中添加第二个参数,官方推荐名称为(binding)该参数为一个对象.</li><li>bingding 对象的 expression 属性:该属性为绑定 v-指令名时 指定的值.该值可为变量,可为表达式.</li><li>bingding 对象的 value 属性: 该属性为 expression 表达式,变量 计算或指定后的值.</li><li>如下例</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//给v-color指定一个字符串green,</span></span>
<span class="line"><span>&lt;p v-color=&quot;1&gt;2?&#39;green&#39;:&#39;red&#39;&quot;&gt;this is myslot:通过插槽填充的内容&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//此时binging对象为:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> name: &#39;color&#39;,</span></span>
<span class="line"><span> rawName: &#39;v-color&#39;,</span></span>
<span class="line"><span> value: &#39;green&#39;,</span></span>
<span class="line"><span> expression: &quot;1 &gt; 2 ? &#39;red&#39; : &#39;green&#39;&quot;,</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>update 与 bind 函数使用方法一致,只是生命周期不同.</p><ul><li>如果 update 与 bind 函数的代码逻辑相同那么可可以使用简写形式: 将指令改为函数形式.</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>directives: {</span></span>
<span class="line"><span>  color(el, binding){</span></span>
<span class="line"><span>      el.style.color = binding.value;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="全局自定义指令" tabindex="-1"><a class="header-anchor" href="#全局自定义指令"><span>全局自定义指令</span></a></h3><ul><li>在 main.js 中定义 过滤器</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//简写形式</span></span>
<span class="line"><span>Vue.directive(&#39;color&#39;,function(el,binging){</span></span>
<span class="line"><span>   el.style.color=bindging.value</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>//使用对象形式</span></span>
<span class="line"><span>Vue.directive(&#39;color&#39;,{</span></span>
<span class="line"><span>   bind(el,binding){el.style.color=binding.value</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint"><span>Eslint</span></a></h2><p>概念: 可组装的 javaSacript 和 JSX 检查工具,用来约束,规范代码.</p><p>语法规则与相关操作:http://eslint.cn/docs/rules/</p><ul><li>.prettierrc文件内容 <ol><li>&quot;trailingComma&quot;: &quot;none&quot;,</li><li>&quot;semi&quot;: false,</li><li>&quot;singleQuote&quot;: true,</li><li>&quot;arrowParens&quot;: &quot;avoid&quot;,</li><li>&quot;printWidth&quot;: 300,</li></ol></li><li>settings.json 设置</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> // pretter风格规范</span></span>
<span class="line"><span>  &quot;prettier.configPath&quot;: &quot;C:\\\\Users\\\\17723\\\\.prettierrc&quot;,</span></span>
<span class="line"><span>  &quot;eslint.alwaysShowStatus&quot;: true,</span></span>
<span class="line"><span>  // &quot;prettier.trailingComma&quot;: &quot;none&quot;,</span></span>
<span class="line"><span>  // &quot;prettier.semi&quot;: false,</span></span>
<span class="line"><span>  // &quot;prettier.singleQuote&quot;: true,</span></span>
<span class="line"><span>  // &quot;prettier.arrowParens&quot;: &quot;avoid&quot;,</span></span>
<span class="line"><span>  // &quot;prettier.printWidth&quot;: 300,</span></span>
<span class="line"><span>  // 设置 .vue 文件中，HTML代码的格式化插件</span></span>
<span class="line"><span>  &quot;vetur.format.defaultFormatter.html&quot;: &quot;js-beautify-html&quot;,</span></span>
<span class="line"><span>  &quot;vetur.ignoreProjectWarning&quot;: true,</span></span>
<span class="line"><span>  &quot;vetur.format.defaultFormatter.js&quot;: &quot;prettier-eslint&quot;,</span></span>
<span class="line"><span>  &quot;vetur.format.defaultFormatterOptions&quot;: {</span></span>
<span class="line"><span>    &quot;prettier&quot;: {</span></span>
<span class="line"><span>      &quot;trailingComma&quot;: &quot;none&quot;,</span></span>
<span class="line"><span>      &quot;singleQuote&quot;: true,</span></span>
<span class="line"><span>      &quot;semi&quot;: false,</span></span>
<span class="line"><span>      &quot;arrowParens&quot;: &quot;avoid&quot;,</span></span>
<span class="line"><span>      &quot;printWidth&quot;: 300</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;js-beautify-html&quot;: {</span></span>
<span class="line"><span>      &quot;wrap_attributes&quot;: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  //解决pretter无法在函数后添加空格</span></span>
<span class="line"><span>  &quot;[json]&quot;:{</span></span>
<span class="line"><span>    &quot;editor.quickSuggestions&quot;: {</span></span>
<span class="line"><span>      &quot;strings&quot;: true</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;editor.suggest.insertMode&quot;: &quot;replace&quot;,</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;:&quot;esbenp.prettier-vscode&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &quot;[vue]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;:  &quot;rvest.vs-code-prettier-eslint&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &quot;javascript.format.insertSpaceBeforeFunctionParenthesis&quot;: true,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // eslint修复</span></span>
<span class="line"><span>  // &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>  //   &quot;source.fixAll&quot;: true</span></span>
<span class="line"><span>  // },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios-1" tabindex="-1"><a class="header-anchor" href="#axios-1"><span>Axios</span></a></h2><ul><li><p>解决axios文件需要多次导入的问题.</p><ul><li>在main.js 中导入axios文件,并在Vue的原型对象中添加axios属性. 配置后不用导入axios文件,只需调用this.axios.get()就能使用</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> import axios from &#39;axios&#39;</span></span>
<span class="line"><span> Vue.prototype.axios = axios</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解决请求的url耦合度过高的问题,设置全局请求根路径</p><ul><li>axios.defaults.baseURL=&#39;http://www.liulongbin.top:3006&#39;</li><li>设置baseURL后,url参数只需到使用子路径.</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> async getinfo () {</span></span>
<span class="line"><span>   const { data: res } = await this.axios.get(</span></span>
<span class="line"><span>     &#39;/api/get&#39;</span></span>
<span class="line"><span>   )</span></span>
<span class="line"><span>   console.log(res)</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将axios注入Vue原型对象有一个缺点: 无法实现api接口的复用.</p></li><li><h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h1><p>前端路由指的是hash地址与组件间的对应关系. (不同的组件对应不同的hash地址)工作原理使用:window.onhashchange事件,监听hash值的变化.</p><ul><li>前端路由的工作方式:</li></ul><ol><li>用户点击路由连接</li><li>导致URL导航栏中的Hash值发生变化</li><li>前端路由监听到Hash值的变化</li><li>前端路径把与Hash值对应的组件渲染到页面中</li></ol></li><li><h2 id="vue2安装vuerouter的步骤" tabindex="-1"><a class="header-anchor" href="#vue2安装vuerouter的步骤"><span>vue2安装VueRouter的步骤</span></a></h2></li></ul><ol><li>npm i vue-router@3.5.2 -S</li><li>在src目录下创建router文件夹,并在router下创建index.js文件.</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//index.js文件内容</span></span>
<span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import VueRouter from &#39;vue-router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 安装VueRouter为Vue的插件</span></span>
<span class="line"><span>Vue.use(VueRouter)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建 路由实例对象,routers定义hash与组件的对应关系,path:hash,component:组件</span></span>
<span class="line"><span>const router = new VueRouter({</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    { path: &#39;/home&#39;, component: InHome },</span></span>
<span class="line"><span>    { path: &#39;/movie&#39;, component: InMovie },</span></span>
<span class="line"><span>    { path: &#39;/about&#39;, component: InAbout }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 向外暴露路由对象</span></span>
<span class="line"><span>export default router</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在main.js中挂载VueRouter对象</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import router from &#39;./router/index.js&#39;</span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>  render: h =&gt; h(App),</span></span>
<span class="line"><span>  // 将router挂载为实例对象</span></span>
<span class="line"><span>  // 属性名与属性值相同可以简写</span></span>
<span class="line"><span>  // router: router</span></span>
<span class="line"><span>  router</span></span>
<span class="line"><span>}).$mount(&#39;#app&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>template中 使用router-view渲染组件,router-link来进行导航</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;APP路由渲染&lt;/h1&gt;</span></span>
<span class="line"><span>      &lt;hr /&gt;</span></span>
<span class="line"><span>      &lt;router-link to=&quot;/home&quot;&gt;首页&lt;/router-link&gt;</span></span>
<span class="line"><span>      &lt;router-link to=&quot;/movie&quot;&gt;电影&lt;/router-link&gt;</span></span>
<span class="line"><span>      &lt;router-link to=&quot;/about&quot;&gt;关于&lt;/router-link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;!-- &lt;a href=&quot;#/home&quot;&gt;首页&lt;/a&gt;</span></span>
<span class="line"><span>      &lt;a href=&quot;#/movie&quot;&gt;电影&lt;/a&gt;</span></span>
<span class="line"><span>      &lt;a href=&quot;#/about&quot;&gt;关于&lt;/a&gt; --&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;!-- &lt;component :is=&quot;ConName&quot;&gt;&lt;/component&gt; --&gt;</span></span>
<span class="line"><span>    &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>路由重定向 <ul><li>重定向规则:在index中的routers节点下 {path:用户访问路径,redirect:重定向路径}</li></ul></li><li>notice: 在进行模块化导入的时候,如果给定的是文件夹,则默认导入文件夹下的indexj.s文件</li></ol><ul><li><h2 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由"><span>嵌套路由,</span></a></h2></li><li><p>通过路由来实现组件的嵌套展示. 路由中嵌套子级路由.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- About组件 --&gt;</span></span>
<span class="line"><span>&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;About&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;router-link to=&quot;/about/table1&quot;&gt;table1&lt;/router-link&gt;</span></span>
<span class="line"><span>    &lt;router-link to=&quot;/about/table2&quot;&gt;tablb2&lt;/router-link&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;hr /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>index.js 中在routes节点下通过children属性实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const router = new VueRouter({</span></span>
<span class="line"><span>routes: [</span></span>
<span class="line"><span>   // 重定向规则</span></span>
<span class="line"><span>   { path: &#39;/&#39;, redirect: &#39;/about&#39; },</span></span>
<span class="line"><span>   // 路由规则</span></span>
<span class="line"><span>   { path: &#39;/home&#39;, component: InHome },</span></span>
<span class="line"><span>   { path: &#39;/movie&#39;, component: InMovie },</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      path: &#39;/about&#39;,</span></span>
<span class="line"><span>      component: InAbout,</span></span>
<span class="line"><span>      // notice:父节点的path需要 &quot;/&quot; 子节点的path可以不用 &quot;/&quot;.</span></span>
<span class="line"><span>      children: [</span></span>
<span class="line"><span>      { path: &#39;table1&#39;, component: InTable1 },</span></span>
<span class="line"><span>      { path: &#39;table2&#39;, component: InTable2 }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认子路由</p><ul><li>与children同级的,还有redirect属性,该属性为重定向路径.(可以利用它设置&quot;默认子路由&quot;). 严格来说这一种方法并非默认子路由,只是能达到默认子路由的效果</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>   path: &#39;/about&#39;,</span></span>
<span class="line"><span>   // 重定向设置&quot;默认子路由&quot;</span></span>
<span class="line"><span>   redirect: &#39;/about/table1&#39;,</span></span>
<span class="line"><span>   component: InAbout,</span></span>
<span class="line"><span>   // 子路由</span></span>
<span class="line"><span>   children: [</span></span>
<span class="line"><span>      { path: &#39;table1&#39;, component: InTable1 },</span></span>
<span class="line"><span>      { path: &#39;table2&#39;, component: InTable2 }</span></span>
<span class="line"><span>   ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>我们可以将子路由中,指定组件的path属性设置为空.这样当我们访问其父组件时,也会显示子路由.达到设置默认子路由的效果.(使用这种方法需要将router-link指向的hash值 改为子路由的上级路由)</li><li>template</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span> &lt;div&gt;</span></span>
<span class="line"><span>   &lt;h1&gt;About&lt;/h1&gt;</span></span>
<span class="line"><span>   &lt;router-link to=&quot;/about&quot;&gt;table1&lt;/router-link&gt;</span></span>
<span class="line"><span>   &lt;router-link to=&quot;/about/table2&quot;&gt;tablb2&lt;/router-link&gt;</span></span>
<span class="line"><span> &lt;/div&gt;</span></span>
<span class="line"><span> &lt;hr /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>index.js</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>   path: &#39;/about&#39;,</span></span>
<span class="line"><span>   component: InAbout,</span></span>
<span class="line"><span>   // 子路由</span></span>
<span class="line"><span>   children: [</span></span>
<span class="line"><span>      // path 设置默认子路由</span></span>
<span class="line"><span>      { path: &#39;&#39;, component: InTable1 },</span></span>
<span class="line"><span>      { path: &#39;table2&#39;, component: InTable2 }</span></span>
<span class="line"><span>   ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>动态路由: 将Hash地址中可变的部分定义为参数项, 从而提高路由规则的复用性. 在vue-router中使用英文的( : )来定义路由的参数项.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 路由中的动态参数以( : )声明, 冒号后面是动态参数的名称</span></span>
<span class="line"><span>{path: &#39;/movie/:id&#39;,compoent: Movie}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>在组件中拿到 动态参数的值:</p><ul><li>使用 $route.params 可以得到当前url的动态参数对象.</li><li>notice: this.$route 是路由的 &quot;参数对象&quot;. this. $router 是路由的 &quot;导航对象&quot;</li></ul></li><li><p>在组件中拿到 动态参数的值(方法二), 给当前路由规则开启props传参:</p><ul><li>定义路由规则</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> { path: &#39;/movie/:id&#39;, component: InMovie, props: true },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>组件中使用 proprs 接收 index 传入的 参数. 两者的名称需保持一致. 接收后可以直接调用参数名使用.</li></ul></li><li><p>知识补充:</p><ul><li>在hash地址中, / 后面的参数项,叫做 &quot;路径参数&quot;.</li><li>在url连接中, ? 后面的参数 叫做 &quot;查询参数&quot;.</li><li>在路由&quot;参数对象&quot;中,需要使用 this.$route.params 来访问 &quot;路径参数&quot;.</li><li>在路由&quot;参数对象&quot;中,需要使用 this.$route.query 来访问 &quot;查询参数&quot;.</li><li>router: <ul><li>$route.query :获取 &quot;查询参数&quot;.</li><li>$route.params:获取 &quot;路径参数&quot;</li><li>$route.path :获取 部分hash地址. &quot;/movie/2&quot;</li><li>$route.fullPath :获取 包含查询参数的hash地址 &quot;/movie/2?name=zhangsan&amp;age=18&quot;</li></ul></li></ul></li><li><h3 id="router-link的属性" tabindex="-1"><a class="header-anchor" href="#router-link的属性"><span>router-link的属性:</span></a></h3><ul><li>:to: 跳转链接,等同于a标签的href. 可使用query向this.$route.params传递参数<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;router-link :to=&quot;{ path:&#39;/test&#39;,query: {name: id} }&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>replace 属 性,替换当前浏览记录,即不留下历史记录.<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;router-link :to=&quot;/home&quot; replace&gt;&lt;/router-link&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>tag属性: 将链接渲染为响应的标签<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 将router-link渲染为li列表标签 --&gt;</span></span>
<span class="line"><span>&lt;router-link :to=&quot;/home&quot; tag=&quot;li&quot;&gt;Home&lt;/router-link&gt;</span></span>
<span class="line"><span>&lt;!-- 渲染结果 --&gt;</span></span>
<span class="line"><span>&lt;li&gt;Home&lt;/li&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>active-class属性: 当该链接被点击时,激活指定的css属性.可以在router.js中设置该css样式.具体百度<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;router-link :to=&quot;/home&quot; active-class=&quot;u-link--Active&quot;&gt;Home&lt;/router-link&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>exact属性:开启router-link的严格模式,必须完全匹配to属性指定的链接,才能激活active-class属性<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;router-link :to=&quot;/&quot; exact&gt;home&lt;/router-link&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li></ul></li></ul><hr><ul><li><h2 id="声明式导航-编程式导航" tabindex="-1"><a class="header-anchor" href="#声明式导航-编程式导航"><span>声明式导航 &amp; 编程式导航</span></a></h2></li></ul><hr><ul><li><p>在浏览器中,点击链接实现导航的方式,叫做声明式导航. a标签</p></li><li><p>在浏览器中,使用api方法实现导航的方式, 叫做编程式导航. location.href</p></li><li><h2 id="vue中常见的编程式导航" tabindex="-1"><a class="header-anchor" href="#vue中常见的编程式导航"><span>vue中常见的编程式导航</span></a></h2><ol><li>this.$router.push(&quot;hash地址&quot;) 跳转到指定地址,并增加一条历史记录,方便用户回退</li><li>this.$router.replace(&quot;hash地址&quot;) 跳转到指定地址,替换当前的历史记录,不可回退</li><li>this.$router.go(&quot;数值 n&quot;) 可以在历史记录中前进和后退. 正数前进,负数后退</li><li>this.$router.back() 在历史记录中后退一层.</li><li>this.$router.forward() 在历史记录中前进一层</li><li></li></ol></li><li><h3 id="导航守卫" tabindex="-1"><a class="header-anchor" href="#导航守卫"><span>导航守卫</span></a></h3><ul><li>导航守卫可以控制路由的访问权限.</li></ul></li><li><h3 id="全局前置守卫" tabindex="-1"><a class="header-anchor" href="#全局前置守卫"><span>全局前置守卫</span></a></h3><ul><li>初始化时被调用,每次路由切换之前被调用</li><li>每次发生路由的导航跳转时, 都会触发全局前置守卫. 因此,在全局前置守卫中,程序员可以对每个路由进行访问权限的控制.</li><li>通过beforeEach设置全局前置守卫.</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建路由对象</span></span>
<span class="line"><span>const router = new VueRouter({})</span></span>
<span class="line"><span>//调用路由对象的beforeEach方法, 声明&quot;全局前置守卫&quot;</span></span>
<span class="line"><span>// 每次发送路由导航跳转时, 都会触发 fn 这个&quot;回调函数&quot;</span></span>
<span class="line"><span>router.beforeEach(function(){})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>beforeEach回调函数的参数:</p><ul><li>to 将要访问的路由的信息对象</li><li>from</li><li>next 是一个函数, 调用next() 表示放行,允许这次路由导航 <ul><li>next函数的多种调用方式.</li><li>next() 直接放行</li><li>next(&quot;/login&quot;) 前置跳转到指定url</li><li>next(false) 不允许跳转</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>   router.beforeEach((to,from,next)=&gt;{</span></span>
<span class="line"><span>      next()</span></span>
<span class="line"><span>   })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><h3 id="路由原信息-this-route-meta" tabindex="-1"><a class="header-anchor" href="#路由原信息-this-route-meta"><span>路由原信息, this.$route.meta</span></a></h3><ul><li>为路由设置原信息,方便守卫判断<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const router = new VueRouter({</span></span>
<span class="line"><span>routes: [</span></span>
<span class="line"><span>      { path: &#39;/home&#39;, component: InHome ,meta:{isAuth:false} },</span></span>
<span class="line"><span>   ]</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>在路由守卫中进行判断:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>router.beforeEach((to,from,next)=&gt;{</span></span>
<span class="line"><span>   &lt;!-- 对路由原信息进行判断,快速识别URL --&gt;</span></span>
<span class="line"><span>      if(to.meta.isAuth){</span></span>
<span class="line"><span>         next()</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><h2 id="全局后置守卫" tabindex="-1"><a class="header-anchor" href="#全局后置守卫"><span>全局后置守卫</span></a></h2></li><li><p>初始化时被调用,每次路由切换之后被调用</p></li><li><p>通过router.afterEach((to,from)=&gt;{})设置全局后置守卫</p></li><li><h2 id="独享守卫-独享守卫只有前置" tabindex="-1"><a class="header-anchor" href="#独享守卫-独享守卫只有前置"><span>独享守卫:独享守卫只有前置</span></a></h2><ul><li>独享前置后卫:beforEnter((to,from,next)=&gt;{})<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const router = new VueRouter({</span></span>
<span class="line"><span>routes: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>           path: &#39;/home&#39;,</span></span>
<span class="line"><span>           component: InHome ,</span></span>
<span class="line"><span>           meta:{isAuth:false}.</span></span>
<span class="line"><span>           beforEnter((to,from,next)=&gt;{})</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>     ]</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><h2 id="组件守卫" tabindex="-1"><a class="header-anchor" href="#组件守卫"><span>组件守卫:</span></a></h2><ul><li>beforeRouteEnter((to,from,next)=&gt;{}): 通过路由规则进入该组件被调用</li><li>beforeRouterLeave((to,from,next)=&gt;{}): 通过路由规则离开该组件被调用</li></ul></li><li><h2 id="路由mode属性" tabindex="-1"><a class="header-anchor" href="#路由mode属性"><span>路由mode属性:</span></a></h2><ul><li>history: 浏览器完整地址会传递给服务器,兼容性略差. 简易正式上线使用</li><li>hash: 使用hash模式,浏览器完整地址不会传递给服务器,兼容性好</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> const router = new VueRouter({</span></span>
<span class="line"><span>   mode:&#39;history&#39;</span></span>
<span class="line"><span> routes: [</span></span>
<span class="line"><span>         {</span></span>
<span class="line"><span>            path: &#39;/home&#39;,</span></span>
<span class="line"><span>            component: InHome ,</span></span>
<span class="line"><span>            meta:{isAuth:false}.</span></span>
<span class="line"><span>            beforEnter((to,from,next)=&gt;{})</span></span>
<span class="line"><span>         },</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span> })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>路由的生命周期:</li><li>activated(): 路由被激活使用</li><li>deactivated(): 路由失活时使用</li><li>以上两个生命周期 常常配合定时器使用</li></ul></li></ul><p>vue.config.js中的publicPath:配置为空字符串或者./ 使用文件协议.配置为/使用http协议</p>`,68))])}const h=e(c,[["render",u],["__file","vue.html.vue"]]),b=JSON.parse('{"path":"/posts/vue/vue.html","title":"vue 基础知识","lang":"zh-CN","frontmatter":{"title":"vue 基础知识","category":["前端"],"tag":["vue","out date"],"excerpt":"一些vue的入门笔记，方便日后查阅。","date":"2020-01-01T00:00:00.000Z","star":true},"headers":[{"level":2,"title":"Vue 的两个特性","slug":"vue-的两个特性","link":"#vue-的两个特性","children":[]},{"level":2,"title":"MVVM:","slug":"mvvm","link":"#mvvm","children":[]},{"level":2,"title":"vue3","slug":"vue3","link":"#vue3","children":[]},{"level":2,"title":"Vue 指令:","slug":"vue-指令","link":"#vue-指令","children":[]},{"level":2,"title":"过滤器(Vue2 特性,vue3 已弃用):","slug":"过滤器-vue2-特性-vue3-已弃用","link":"#过滤器-vue2-特性-vue3-已弃用","children":[]},{"level":2,"title":"侦听器:","slug":"侦听器","link":"#侦听器","children":[]},{"level":2,"title":"计算属性:","slug":"计算属性","link":"#计算属性","children":[]},{"level":2,"title":"axios:","slug":"axios","link":"#axios","children":[]},{"level":2,"title":"解构赋值:","slug":"解构赋值","link":"#解构赋值","children":[]},{"level":2,"title":"Vue-Cli","slug":"vue-cli","link":"#vue-cli","children":[]},{"level":2,"title":"Vue 生命周期:","slug":"vue-生命周期","link":"#vue-生命周期","children":[]},{"level":2,"title":"ref 属性","slug":"ref-属性","link":"#ref-属性","children":[]},{"level":2,"title":"复习数组方法:","slug":"复习数组方法","link":"#复习数组方法","children":[{"level":3,"title":"some 方法:","slug":"some-方法","link":"#some-方法","children":[]},{"level":3,"title":"every 方法:","slug":"every-方法","link":"#every-方法","children":[]},{"level":3,"title":"filter and forEach","slug":"filter-and-foreach","link":"#filter-and-foreach","children":[]},{"level":3,"title":"reduce","slug":"reduce","link":"#reduce","children":[]}]},{"level":2,"title":"动态组件","slug":"动态组件","link":"#动态组件","children":[{"level":3,"title":"解决组件切换后,组件先前的数据消失的问题:","slug":"解决组件切换后-组件先前的数据消失的问题","link":"#解决组件切换后-组件先前的数据消失的问题","children":[]}]},{"level":2,"title":"插槽","slug":"插槽","link":"#插槽","children":[]},{"level":2,"title":"自定义指令","slug":"自定义指令","link":"#自定义指令","children":[{"level":3,"title":"私有自定义指令","slug":"私有自定义指令","link":"#私有自定义指令","children":[]},{"level":3,"title":"全局自定义指令","slug":"全局自定义指令","link":"#全局自定义指令","children":[]}]},{"level":2,"title":"Eslint","slug":"eslint","link":"#eslint","children":[]},{"level":2,"title":"Axios","slug":"axios-1","link":"#axios-1","children":[]}],"git":{"createdTime":1739106576000,"updatedTime":1739982802000,"contributors":[{"name":"周悦","username":"周悦","email":"17723471643@163.com","commits":2,"url":"https://github.com/周悦"}]},"readingTime":{"minutes":25.3,"words":7590},"filePathRelative":"posts/vue/vue.md","localizedDate":"2020年1月1日"}');export{h as comp,b as data};
