import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import type { App, Directive } from 'vue'
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)

//以下是为了做highlight的函数
const autoInsert: Directive = {
    async mounted(el: HTMLElement){
        //获取data，如果data是block的话，就给其添加highlight的标准样式
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
            let childSplit = childcode.innerHTML.split("\n")
            let lineNumber = document.createElement("ol")
            lineNumber.className = "hljs-line-number"
            for(let i = 0; i < childSplit.length; i++) {
                console.log(childSplit[i])
                let li = document.createElement("li")
                li.innerHTML = childSplit[i]
                lineNumber.insertAdjacentElement("beforeend", li)
            }
            childcode.innerHTML = lineNumber.outerHTML
        }
    },
}

const addTitleStyle = (app: App) => {
    app.directive('auto-insert', autoInsert)
}

export { hljs, hljsVuePlugin, addTitleStyle }
