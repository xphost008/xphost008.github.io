<script setup lang="ts">
import ArticleTemplate from '@/components/ArticleTemplate.vue'
const code1 = `npm install highlight.js
npm install @highlightjs/vue-plugin`
const code2 = `import './assets/main.css'
import 'highlight.js/styles/stackoverflow-dark.min.css' //这里替换成你喜欢的样式
import { createApp } from 'vue'
//以下几行都是导入highlight.js的插件
import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'
//这几行是导入你想高亮的语言名称，这里我填入TypeScript！
import typescript from 'highlight.js/lib/languages/typescript'
hljs.registerLanguage('typescript', typescript)
//以下是创建Vue实例，并且注册highlight.js插件
const app = createApp(App)
app.use(hljsVuePlugin)
app.mount('#app')`
const code3 = `<template>
    <div>
        <highlightjs language="TypeScript" :autodetect="false" :code="console.log('Hello World!')"></highlightjs>
    </div>
</template>`
const code4 = `//我们首先先将highlight.js的插件导入放到本类里。后续我们直接导出这两个类。
import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import typescript from 'highlight.js/lib/languages/typescript'
//以下是导入vue的一些类，有App、Directive两个。
import type { App, Directive } from 'vue'
import typescript from 'highlight.js/lib/languages/typescript'
hljs.registerLanguage('typescript', typescript)
//以下是为了做自动导入而写的函数
const autoInsert: Directive = {
    async mounted(el: HTMLElement){
    }
}
//以下可以把autoInsert函数注册到app实例中，这样就可以在template中使用v-auto-insert指令了！
const addTitleStyle = (app: App) => {
    app.directive('auto-insert', autoInsert)
}
//最后导出hljs、hljsVuePlugin、addTitleStyle三个类
export { hljs, hljsVuePlugin, addTitleStyle }`
const code5 = `import { addTitleStyle, hljsVuePlugin } from './logic/highlight'`
const code6 = `addTitleStyle(app)`
const code7 = `<div v-auto-insert data="block" lang="typescript">
    <highlightjs language="typescript" :autodetect="false" :code="console.log('Hello World!')" />
</div>`
const code8 = `//获取data，如果data是block的话，就给其添加highlight的标准样式
const dataValue = el.getAttribute("data")
const langValue = el.getAttribute("lang") || ""
if(dataValue === "block") {
    //添加红绿灯
    for(let i = 0; i < 3; i++) {
        let div = document.createElement('div')
        div.className = "hljs-style"
        div.style.left = (10 + i * 25) + "px"
        div.style.backgroundColor = i == 0 ? "red" : i == 1 ? "orange" : "green"
        el.insertAdjacentHTML("afterbegin", div.outerHTML)
    }
    //添加代码名称，这里使用了lang标识符
    let childcode = el.getElementsByTagName("pre")[0].getElementsByTagName("code")[0]
    let text = document.createElement("span")
    text.className = "hljs-lang"
    text.innerText = langValue //在这
    el.insertAdjacentHTML("afterbegin", text.outerHTML)
    //添加复制按钮。
    let button = document.createElement("button")
    button.className = "hljs-copy"
    //这里由于Button需要引入一个复制图标，因此使用了一个很长的svg标签。。
    //如果你只想实现一个纯文字的复制，也是可以的（
    button.innerHTML = '<svg role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" stroke="width" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"> <rect width="12" height="14" x="8" y="7"/> <polyline points="16 3 4 3 4 17"/> </svg>'
    //这里仅适配了Windows的复制，不知道MacOS、Linux是否适用，不过Android不适用。。
    button.onclick = () => {
        navigator.clipboard.writeText(childcode.innerText)
    }
    el.insertAdjacentElement("afterbegin", button)
    // 先执行高亮
    //为什么要先执行高亮？因为必须先执行高亮，里面才有span color标签高亮（
    if (hljs) {
        hljs.highlightElement(childcode);
    }
    //再为其加ol、li显示行号。
    let childSplit = childcode.innerHTML.split("\\n")
    let lineNumber = document.createElement("ol")
    lineNumber.className = "hljs-line-number"
    for(let i = 0; i < childSplit.length; i++) {
        console.log(childSplit[i])
        let li = document.createElement("li")
        li.innerHTML = childSplit[i]
        lineNumber.insertAdjacentElement("beforeend", li)
    }
    childcode.innerHTML = lineNumber.outerHTML
}`
const code9 = `/* 以下是把data=block的代码。属于是块状代码块 */
div[data="block"] {
    position: relative;
    padding-top: 30px;
    background-color: rgba(16, 16, 16, 0.6);
    border-radius: 15px;
}
div[data="block"] pre code {
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: rgba(16, 16, 16, 0.3);
    /* 使用Consolas字体，更好看~ */
    font-family: Consolas;
    padding-left: 30px;
}
/* 红绿灯 */
.hljs-style {
    position: absolute;
    top: 10px;
    border-radius: 50%;
    width: 13px;
    height: 13px;
}
/* 语言名称 */
.hljs-lang {
    position: absolute;
    font-weight: bold;
    color: white;
    top: 7px;
    right: 60px;
    font-size: 15px;
    font-family: Consolas;
    height: 13px;
}
/* 复制按钮 */
.hljs-copy {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 5px;
    background-color: transparent;
    border: none;
    stroke: white;
    color: white;
    font-size: 15px;
    width: 50px;
    height: 30px;
    cursor: pointer;
    transition: background-color 0.2s;
}
.hljs-copy:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
.hljs-copy svg {
    vertical-align: middle;
}
/* 行号，使用单独的数字，去除右下角的圆点 */
.hljs-line-number {
    list-style: none;
    counter-reset: my-counter;
    height: 100%;
    padding: 0 10px;
    margin-left: 10px;
    color: white;
    font-family: Consolas;
}
.hljs-line-number li {
    counter-increment: my-counter;
    position: relative;
    border-left: 2px solid gray;
    padding-left: 10px;
}
.hljs-line-number li::before {
    content: counter(my-counter);
    position: absolute;
    left: 0;
    top: 0;
    left: -60px;
    text-align: right;
    width: 50px;
}`
</script>
<template>
    <ArticleTemplate>
        <h1>如何使用Vue + TypeScript + HighlightJS进行代码高亮，并且拥有行号显示？</h1>
        <p>各位好！这里是焰龙嗷！今天给各位带来一篇短文，介绍如何使用Vue+TypeScript+HighlightJS进行代码高亮，并且拥有行号显示。</p>
        <p>首先，众所那么的周知，我们在码前端代码的时候，如果需要用到在前端展示一些代码，那么避免不了下载一个插件<code data="inline">Highlight.js</code>
        ，这门插件如何使用呢？其实非常简单。如果各位在使用npm的话，请按照如下提示做就好了！</p>
        <p>首先，用vue新建一个项目，使用<code data="inline">npm create vue@latest</code>创建一个新的vue脚手架吧！</p>
        <p>然后，请进入你创建的目录底下，直接cd进去即可。然后进入cmd，输入以下两行代码，安装highlight.js插件！</p>
        <div v-auto-insert data="block" lang="bash">
            <pre><code>{{code1}}</code></pre>
        </div>
        <p>接下来，请删掉src目录下的所有内容，然后跟着我来写！首先新建一个TypeScript类，文件名叫<code data="inline">main.ts</code>
        然后请键入以下TypeScript代码：</p>
        <div v-auto-insert data="block" lang="typescript">
            <highlightjs language="typescript" :autodetect="false" :code="code2" />
        </div>
        <p>OKOK，接下来就是在Vue中使用啦！我们可以这样写：</p>
        <div v-auto-insert data="block" lang="Vue">
            <highlightjs language="xml" :autodetect="false" :code="code3" />
        </div>
        <p>此时，见证奇迹的时候到了！我们可以看到在屏幕上出现了这样一句话：</p>
        <img src="@/assets/img/article/1.png" alt="1" />
        <p>如果看见了这串话，就说明我们的highlight.js插件就正式能用啦！</p>
        <p>可是，各位如果看我的博客，就一定知道事情远远没有那么简单！我博客的代码左上角有三个红绿灯，右上角有语言名称和复制按钮。并且左侧还有行号显示！这是怎么做出来的呢？</p>
        <p>很简单，我们在src目录下新建一个ts文件，文件名叫什么都好。放在什么目录都好。但是我还是建议各位放一个有标识性的目录，比如说<code data="inline">logic/highlight.ts</code>
        这个目录就挺不错。里面照我如下所示写：</p>
        <div v-auto-insert data="block" lang="typescript">
            <highlightjs language="typescript" :autodetect="false" :code="code4" />
        </div>
        <p>我们先暂时不急着写<code data="inline">mounted</code>里面的内容，我们先修改<code data="inline">main.ts</code>里的内容：将上述代码2中的第4-10行全部删掉，修改成以下代码：</p>
        <div v-auto-insert data="block" lang="typescript">
            <highlightjs language="typescript" :autodetect="false" :code="code5" />
        </div>
        <p>此时代码将会变成7行，我们再在<code data="inline">app.mount('#app')</code>的上面一行，添加一行如下代码：</p>
        <div v-auto-insert data="block" lang="typescript">
            <highlightjs language="typescript" :autodetect="false" :code="code6" />
        </div>
        <p>此时，我们就把highlightjs外部的一层div注册成组件包装形式了！那么我们应该怎么去使用呢？很简单，按照我博客的写法，应该是这么使用的：</p>
        <div v-auto-insert data="block" lang="Vue">
            <highlightjs language="xml" :autodetect="false" :code="code7" />
        </div>
        <p>在外部加上一个<code data="inline">v-auto-insert</code>即可使用了！里面的<code data="inline">data="block" lang="typescript"</code>其实只是一些注记符罢了！我们还是加上比较好吧。。</p>
        <p>由于此时我们并没有在第6个代码块里的mounted里写任何的东西，因此目前是并不会有任何效果的。那么我们应该如何写呢？很简单，请看如下：</p>
        <div v-auto-insert data="block" lang="typescript">
            <highlightjs language="typescript" :autodetect="false" :code="code8" />
        </div>
        <p>好了，现在终于写完了！但是此时你们可能会发现，我在ts代码里引入了许多的class，而这些class必须依赖外部的一个css样式，那么，css样式我们又该如何写呢？</p>
        <p>其实也还好啦！我们首先先新建一个css样式表，这里无论用什么文件名，放哪个路径都可以，但我还是建议有个标识性，比如说<code data="inline">styles/highlight.css</code>就挺不错的！</p>
        <p>OK，那么我们接下来就开始写代码吧！</p>
        <div v-auto-insert data="block" lang="css">
            <highlightjs language="css" :autodetect="false" :code="code9" />
        </div>
        <p>样式表其实非常容易就写好了，偷偷告诉你一句：我为了去除【ol、li左侧数字右下角的点，我查了deepseek喵】</p>
        <p>OK了，接下来就是使用了！各位应该可以轻松的书写一些可爱的小代码了在HTML里，并且样式与我上面的一摸一样了吧~</p>
        <p>如果你对本文的代码有疑惑，可以查阅我的github仓库中的<a href="https://github.com/xphost008/xphost008.github.io/blob/master/src/assets/highlight.scss" target="_blank">highlight.scss</a>文件，以及<a href="https://github.com/xphost008/xphost008.github.io/blob/master/src/logic/highlight.ts" target="_blank">highlight.ts</a>文件喵！</p>
        <p>如果你有任何的问题，欢迎来在我的<a href="https://github.com/xphost008/xphost008.github.io/issues" target="_blank">GitHub仓库</a>里提issue哦！</p>
        <p>如果你觉得本文写得好的，请进入我的<a href="https://afdian.com/a/xphost" target="_blank">afdian</a>为我赞助，秋梨膏，秋梨膏！秋梨膏！！！</p>
    </ArticleTemplate>
</template>
<style scoped lang="scss">
</style>