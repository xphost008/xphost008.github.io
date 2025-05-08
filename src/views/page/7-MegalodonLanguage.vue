<script setup lang="ts">
import ArticleTemplate from '@/components/ArticleTemplate.vue';
const code_FileTree = `└─bin
    ├─mglc.exe
    ├─mglp.exe
    └─mgld.exe`
const code_PkgTree = `├src
│   └─main.mgl
├.gitignore
└pkg.json`
const code_PkgJSON = `{
    "name": "My Tutorial Work",
    "main": "main.mgl",
    "version": "0.2.3",
    "description": "This is my Tutorial Work",
    "copyright": "Copyright © Megalodon Community 2025. MIT",
    "license": "MIT",
    "homepage": "https://github.com/Megalodon/MGLanguage",
    "author": "Megalodon",
    "version": "+0.4.6",
    "source": "https://github.com/Megalodon/MGLanguage",
    "dependencies": [
        {
            "name": "somepackage",
            "version": "1.0.0",
            "module": ["somemodule"],
            "global": false
        }
    ]
}`
</script>
<template>
    <ArticleTemplate>
        <h1>本篇文章将给各位介绍一下我最近构思（bushi）的一门编程语言！</h1>
        <p>本语言的语法比较简单，比<code data="inline">Rust、C++</code>那些要免去一丢丢的抽象概念。</p>
        <p>目前该语言已通过我自己写的<code data="inline">highlight</code>实现了语法高亮。</p>
        <p>啊呀，目前本编程语言暂时处于【构思】状态，连文件夹都没开始新建。于是各位就当作看个乐子得了~</p>
        <h2>语言前言</h2>
        <p>本语言的英文名叫：<code data="inline">Megalodon Language</code>，中文名叫：巨齿鲨语言，出自我比较喜欢的电影【巨齿鲨】</p>
        <p>本语言的后缀目前初步定义为：<code data="inline">mgl</code>。该语言目前的logo如下：（瞎画的）</p>
        <img src="@/assets/img/article/logo.png" alt="logo" width="100" height="100"/>
        <p>本语言的语法方面非常酷似<code data="inline">Java、Rust、Go</code>那种的编码风格。</p>
        <p>具体如何编写代码呢？请让我从头开始叙述~</p>
        <h2>开始新建</h2>
        <p>首先，本语言通过zip下载，下载之后解压，你会得到以下文件树，其中列出几个关键的东西：</p>
        <div v-auto-insert data="block" lang="fileTree">
            <highlightjs :autodetect="false" :code="code_FileTree"/>
        </div>
        <p>其中，<code data="inline">mglc</code>是编译一个普通类的东西，类似于你在桌面上新建一个<code data="inline">xxx.mgl</code>，然后直接用<code data="inline">mglc</code>可以直接运行这个文件。</p>
        <p><code data="inline">mglp</code>可就神奇了，它是一个创建和运行包的东西，你可以使用<code data="inline">mglp new mywork</code>来创建一个新的包。此时mglp会在你的当前目录下创建一个新的文件夹，名字为<code data="inline">mywork</code>，里面有一堆文件。这个待会说。此时，你再运行<code data="inline">mglp run mywork</code>，可以直接运行这个包。mglp会自动找到你的主类并加载的。</p>
        <p><code data="inline">mgld</code>是个好东西啊！它类似于是一个包管理器的东西，你可以上传和下载第三方包，使用<code data="inline">mgld install &lt;包的名字&gt;</code>来安装包，你也可以使用<code data="inline">mgld install &lt;包的名字&gt; mywork</code>来将包装到你的工作目录下。也可以使用<code data="inline">--global</code>参数来直接把包安装到全局目录下。使用<code data="inline">mgld publish mywork</code>进行发布第三方包。</p>
        <p>介绍了基本的文件树之后，下面我们就来看看如何新建一个包之后的文件树吧：</p>
        <div v-auto-insert data="block" lang="fileTree">
            <highlightjs :autodetect="false" :code="code_PkgTree"/>
        </div>
        <p>是的！就三个文件，<code data="inline">.gitignore</code>不用多说，其中<code data="inline">pkg.json</code>是存储第三方包的。我们可以在里面写一点键值，键值晚点说。</p>
        <p>然后就是<code data="inline">main.mgl</code>了！这个是我们的主文件！文件名可以是不同的，这个晚点可以在pkg.json里面定义。</p>
        <h2>工作空间简介</h2>
        <p>OK，接下来我们就可以去看pkg.json里面具体有什么内容了！</p>
        <div v-auto-insert data="block" lang="json">
            <highlightjs language="json" :code="code_PkgJSON"/>
        </div>
        <p>可以看到，在其中有着非常多的<code data="inline">元数据信息</code>，这些信息是用于发布到我们的官方仓库时需要的。【ps：我不会告诉你我借鉴了许多Rust Cargo.toml里的内容~】</p>
        <p>当你使用cmd进入了工作目录后，你可以使用<code data="inline">mgld install</code>直接安装pkg.json的<code data="inline">dependencies</code>键下的所有第三方包。当然，你也可以指定不同的安装过程，比如当<code data="inline">global</code>键值为<code data="inline">false</code>时安装到本地。为<code data="inline">true</code>时安装到全局。默认为false。</p>
        <p>其中，键值对的具体含义参见如下：</p>
        <table>
            <thead>
            <tr>
                <th>键名</th>
                <th>键值描述</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><code data="inline">name</code></td>
                <td>程序名字</td>
                <td>必填</td>
            </tr>
            <tr>
                <td><code data="inline">main</code></td>
                <td>主程序文件名（默认从src下找）</td>
                <td>main.mgl</td>
            </tr>
            <tr>
                <td><code data="inline">version</code></td>
                <td>程序版本</td>
                <td>空</td>
            </tr>
            <tr>
                <td><code data="inline">description</code></td>
                <td>程序描述</td>
                <td>空</td>
            </tr>
            <tr>
                <td><code data="inline">copyright</code></td>
                <td>程序版权</td>
                <td>空</td>
            </tr>
            <tr>
                <td><code data="inline">license</code></td>
                <td>程序许可证</td>
                <td>空</td>
            </tr>
            <tr>
                <td><code data="inline">homepage</code></td>
                <td>程序主页</td>
                <td>空</td>
            </tr>
            <tr>
                <td><code data="inline">author</code></td>
                <td>程序作者</td>
                <td>空</td>
            </tr>
            <tr>
                <td><code data="inline">version</code></td>
                <td>支持的mgl版本</td>
                <td>latest</td>
            </tr>
            <tr>
                <td><code data="inline">author</code></td>
                <td>程序作者</td>
                <td>空</td>
            </tr>
            <tr>
                <td><code data="inline">source</code></td>
                <td>源代码仓库</td>
                <td>空</td>
            </tr>
            <tr>
                <td><code data="inline">dependencies</code></td>
                <td>依赖</td>
                <td>空</td>
            </tr>
            </tbody>
            <thead>
            <tr>
                <th>依赖键名</th>
                <th>依赖描述</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><code data="inline">name</code></td>
                <td>依赖名称</td>
                <td>必填</td>
            </tr>
            <tr>
                <td><code data="inline">version</code></td>
                <td>依赖版本</td>
                <td>必填</td>
            </tr>
            <tr>
                <td><code data="inline">module</code></td>
                <td>依赖模块</td>
                <td>空数组</td>
            </tr>
            <tr>
                <td><code data="inline">global</code></td>
                <td>是否全局安装</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
        <p>这给予了开发者最大的宽限。如果各位要是下载了任意非本地的依赖的话，将会安装到<code data="inline">&lt;mgl安装目录&gt;/dependencies/&lt;依赖名&gt;/&lt;版本号&gt;</code></p>
        <p>当开发者填写了非本地的依赖的话，则会首先从全局路径中查询是否有该依赖名字，如果找到了，则会查询该插件的版本。如果没找到该版本，则会从网上下载该版本。</p>
        <p>但是，如果开发者填写了本地的依赖，则会安装到<code data="inline">&lt;文件目录&gt;/dependencies/&lt;依赖名&gt;</code>下。你可能会问为什么本地安装没有版本号？因为没有人会在dependencies下添加两个相同但是不同版本号的依赖。</p>
        <p>如果填写了本地依赖安装，则会校验每个依赖名的名称md5，如果有两个md5相同，则抛出报错。</p>
        <p>其中，你可能会发现version版本号有<code data="inline">+</code>和<code data="inline">-</code>两个字符。这两个字符分别代表着：最大支持或者最小支持。通常这个是用来做第三方库的时候用的。</p>
        <p>当我填入<code data="inline">+0.3.4</code>时，则代表了该程序将在mgl0.3.4及以上的版本中编译。</p>
        <p>当我填入<code data="inline">-0.4.6</code>时，则代表了该程序将在mgl0.4.6（不包含）以下的版本中编译。</p>
        <p>但是当你说我的依赖支持在所有的mgl中编译呢？请不要再写<code data="inline">+0.0.1</code>啦！你得用到<code data="inline">latest</code>这个语句了。这个语法代表了比当前发布的最高版本还要再高一个版本。我们可以用latest来表示支持所有版本。</p>
        <p>当你们使用加号和减号来声明版本时，请注意：减号后面不能跟<code data="inline">0.0.1</code>，否则会导致mgld publish失败。因为语言版本不可能发布0.0.0</p>
        <h4>可以看到，我写的json格式的代码非常简陋，不过不要在意这些小细节，我们未来可以逐步完善~</h4>
        <p>OK了！本期教程到此结束，感谢各位的观看，如果觉得我写得好的，请为我<a href="https://afdian.com/a/xphost">爱发电</a>吧~秋梨膏~~</p>
        <p>我语言的highlightjs还暂未搞好，不过可以期待一下！<a href="https://github.com/xphost008/xphost008.github.io/blob/master/src/logic/megalodon.js">点我进入highlight的源码</a>，欢迎各位来为我的语言提交你的建议！</p>
    </ArticleTemplate>
</template>
<style scoped lang="scss">
table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    overflow-x: auto;
    tr td, tr th {
        min-height: 40px;
        border: 1px solid black;
    }
    tr td:nth-child(1) {
        text-align: right;
    }
}
</style>