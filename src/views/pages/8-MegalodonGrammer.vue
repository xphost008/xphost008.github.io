<script setup lang="ts">
import ArticleTemplate from '@/components/ArticleTemplate.vue';
const mglHello = `pkg "@:/"

pub func main() {
    Console.put("Hello World!");
}`
const mglRawHello = `pkg "@:/"

uses (
    "mgl:/mgl/standard/*",
);

pub func main() {
    Console.put("Hello World!");
}`
const mglNewHello = `pkg "@:/"

uses (
    "mgl:/mgl/standard/Console.put",
    // "mgl:/mgl/standard/Console.*", //引入所有方法、类、常量等。
);

pub func main() {
    put("Hello World!");
}`
const mglComment = `pkg "@:/"
///
* 
* 引入第三方包
* 有三种方式：
* 1. 直接导入对应文件，然后再下面写文件名.方法或类
* 2. 导入对应文件内的某个函数，或者直接全部导入。此时可以在程序里面直接写函数。
* 
///
uses (
    "mgl:/mgl/standard/Console.put",
    // "mgl:/mgl/standard/Console.*", //引入所有方法、类、常量等。
);

pub func main() {
    put("Hello World!");
}`
</script>
<template>
    <ArticleTemplate>
        <h1>终于到了喜闻乐见的语法介绍环节啦！</h1>
        <h2>第一集：Hello World!</h2>
        <p>首先，让我们进入我们的<code data="inline">main.mgl</code>文件吧！里面有什么东西呢？很明显，是<code data="inline">main</code>函数以及<code data="inline">Hello World</code>啦！！</p>
        <p>我们可以看到语法大致如下所示：</p>
        <div v-auto-insert data="block" lang="mgl">
            <highlightjs language="mgl" :code="mglHello"/>
        </div>
        <p>此时，我们可以使用<code data="inline">mglp run mywork</code>直接运行本项目。或者如果你的目录本身就在该文件夹里的话，也可以直接不要后面的mywork也可以！</p>
        <p>此时，如果环境没错的话，它会在控制台输出<code data="inline">Hello World!</code>字样啦！</p>
        <p>下面我们将逐步拆解语法规则：</p>
        <p>首先是文件一开头的<code data="inline">pkg</code>语句，这个语句如果你直接使用的<code data="inline">mglc</code>去编译运行，是不用写这一行语法的。但是我们这个是包呀，包是需要的嗷！</p>
        <p><code data="inline">pkg</code>语句声明了这个的包名字和包路径。如果你这个写的是主程序，你就可以写<code data="inline">@</code>符号。如果是其他的第三方包，那么<code data="inline">@</code>符号就应该是你的第三方包名字。</p>
        <p>然后是<code data="inline">@</code>符号后面的语句，其实后面就是跟了一个<code data="inline">:/</code>两个。其中，冒号的意思是包名与路径的分割。后面跟着的是路径。如果是<code data="inline">src</code>根路径下，则就是<code data="inline">/</code>符号</p>
        <p>紧接着，就是我们的<code data="inline">main</code>函数啦！这个函数使用<code data="inline">pub</code>修饰，函数定义使用<code data="inline">func</code>定义，后面使用<code data="inline">main</code>声明函数名字。参数为空。使用大括号进行分隔。</p>
        <p>再然后，我们来看看函数体里面的内容：<code data="inline">Console.put("Hello World!");</code>，这个的意思很简单，就是控制台->输出字符串</p>
        <p>那么，我们的<code data="inline">Console</code>这个文件或者类是哪里来的呢？很明显，是<code data="inline">mgl标准库</code>里面提供的一个类体。</p>
        <p>既然是标准库提供的，那么我们为什么不用<code data="inline">uses</code>一下这个类呢？很明显，我们的mgl语言给我们提供了一个自动uses的方式。类似于<code data="inline">Java</code>里面的<code data="inline">import java.lang.*;</code>吧。</p>
        <p>让我们还原一下这个的原始文件吧：</p>
        <div v-auto-insert data="block" lang="mgl">
            <highlightjs language="mgl" :code="mglRawHello"/>
        </div>
        <p>那么，其中的<code data="inline">uses</code>就是引入包的语法了！我们可以看到，引入包的语句其实就是引入一个第三方包的包路径，这里使用的<code data="inline">mgl</code>就是标准库中的某个包啦！我们默认导入<code data="inline">/mgl/standard/*</code>下的所有文件。其中，不同于Java，这些其实并不算类，而是一个个文件。我们的<code data="inline">Console</code>就是标准库下的一个文件。</p>
        <p>我们的<code data="inline">standard</code>里面包括了许多的标准包，比如说【线程、文件IO、网络库等等一系列的库】。我们引入仅仅只是引入了这个包下的所有文件。如果我们的<code data="inline">Console</code>下面有一个类呢？很简单，我们只需要写<code data="inline">Console.xxx.new()</code>即可创建一个类对象！</p>
        <p>当然，我们不仅可以这么写，我们还可以这么写<code data="inline">Hello World!</code>：</p>
        <div v-auto-insert data="block" lang="mgl">
            <highlightjs language="mgl" :code="mglNewHello"/>
        </div>
        <p>以上代码表示引入该单独类中的所有方法。当然，如果只写某个函数，则就只引入某个函数啦~此时我们就不需要在下面写Console啦！</p>
        <h2>第二集：注释与文档注释</h2>
        <p>上面初步看了看注释的语法，其实单行注释的语法和别的语言都差不多，但是我下面要着重介绍多行注释！</p>
        <p>在mgl里面，多行注释并不是用<code data="inline">/**/</code>进行注释的，而是使用三个斜线，类似于这样：<code data="inline">///</code>进行注释。</p>
        <p>请看下列代码：</p>
        <div v-auto-insert data="block" lang="mgl">
            <highlightjs language="mgl" :code="mglComment"/>
        </div>
        <p>以上代码为多行注释的文档注释，使用<code data="inline">///</code>包裹住，并且使用<code data="inline">*</code>号在里面进行Markdown标记~请注意，mgl里面不支持在<code data="inline">///</code>里面嵌套注释块。因为mgl自上从下查询。如果发现了<code data="inline">///</code>则默认结束了多行注释。</p>
        <p>好了！说了这么多，接下来我们就来介绍一下mgl里面所有的关键字了！请参考如下表格：</p>
        <table>
            <thead>
            <tr>
                <th>功能相关</th>
                <th>名称</th>
                <th>功能</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td rowspan="5">类相关</td>
                <td><code data="inline">class</code></td>
                <td>创建一个类</td>
            </tr>
            <tr>
                <td><code data="inline">enum</code></td>
                <td>创建一个枚举</td>
            </tr>
            <tr>
                <td><code data="inline">error</code></td>
                <td>创建一个异常</td>
            </tr>
            <tr>
                <td><code data="inline">annotation</code></td>
                <td>创建一个注解</td>
            </tr>
            <tr>
                <td><code data="inline">constructor</code></td>
                <td>类的构造函数</td>
            </tr>
            <tr>
                <td>访问权限</td>
                <td><code data="inline">pub</code></td>
                <td>将该方法、类、全局变量、全局常量等标记成公共的</td>
            </tr>
            <tr>
                <td rowspan="2">函数声明</td>
                <td><code data="inline">virtual</code></td>
                <td>声明一个虚函数，或者将该类标记成虚类。</td>
            </tr>
            <tr>
                <td><code data="inline">func</code></td>
                <td>声明一个普通函数</td>
            </tr>
            <tr>
                <td rowspan="11">类型</td>
                <td><code data="inline">i8</code></td>
                <td>8位整型</td>
            </tr>
            <tr>
                <td><code data="inline">u8</code></td>
                <td>8位无符号整型</td>
            </tr>
            <tr>
                <td><code data="inline">i16</code></td>
                <td>16位整型</td>
            </tr>
            <tr>
                <td><code data="inline">u16</code></td>
                <td>16位无符号整型</td>
            </tr>
            <tr>
                <td><code data="inline">i32</code></td>
                <td>32位整型</td>
            </tr>
            <tr>
                <td><code data="inline">u32</code></td>
                <td>32位无符号整型</td>
            </tr>
            <tr>
                <td><code data="inline">i64</code></td>
                <td>64位整型</td>
            </tr>
            <tr>
                <td><code data="inline">u64</code></td>
                <td>64位无符号整型</td>
            </tr>
            <tr>
                <td><code data="inline">char</code></td>
                <td>字符型</td>
            </tr>
            <tr>
                <td><code data="inline">bool</code></td>
                <td>布尔型</td>
            </tr>
            <tr>
                <td><code data="inline">str</code></td>
                <td>字符串型</td>
            </tr>
            <tr>
                <td rowspan="7">条件控制</td>
                <td><code data="inline">if</code></td>
                <td>条件判断</td>
            </tr>
            <tr>
                <td><code data="inline">else</code></td>
                <td>条件判断</td>
            </tr>
            <tr>
                <td><code data="inline">case</code></td>
                <td>条件判断</td>
            </tr>
            <tr>
                <td><code data="inline">for</code></td>
                <td>循环</td>
            </tr>
            <tr>
                <td><code data="inline">loop</code></td>
                <td>循环（类似于do while）</td>
            </tr>
            <tr>
                <td><code data="inline">break</code></td>
                <td>跳出循环</td>
            </tr>
            <tr>
                <td><code data="inline">continue</code></td>
                <td>继续循环</td>
            </tr>
            <tr>
                <td rowspan="2">布尔值</td>
                <td><code data="inline">true</code></td>
                <td>真</td>
            </tr>
            <tr>
                <td><code data="inline">false</code></td>
                <td>假</td>
            </tr>
            <tr>
                <td rowspan="3">异常处理</td>
                <td><code data="inline">nul</code></td>
                <td>空值</td>
            </tr>
            <tr>
                <td><code data="inline">eof</code></td>
                <td>末尾指针</td>
            </tr>
            <tr>
                <td><code data="inline">raise</code></td>
                <td>主动抛出异常</td>
            </tr>
            <tr>
                <td rowspan="8">其他</td>
                <td><code data="inline">result</code></td>
                <td>返回值</td>
            </tr>
            <tr>
                <td><code data="inline">alw</code></td>
                <td>定义一个变量</td>
            </tr>
            <tr>
                <td><code data="inline">as</code></td>
                <td>类型转换</td>
            </tr>
            <tr>
                <td><code data="inline">async</code></td>
                <td>生成异步</td>
            </tr>
            <tr>
                <td><code data="inline">await</code></td>
                <td>阻止异步</td>
            </tr>
            <tr>
                <td><code data="inline">self</code></td>
                <td>代表本类</td>
            </tr>
            <tr>
                <td><code data="inline">pkg</code></td>
                <td>声明一个包</td>
            </tr>
            <tr>
                <td><code data="inline">uses</code></td>
                <td>引用一个包</td>
            </tr>
            </tbody>
        </table>
        <p>以上大概是mgl的所有关键字一览啦！下一章节我将教各位每个关键字具体的作用喵！</p>
        <p>说实话，也没人规定我未来不能新增或者删除某些关键字哈~~</p>
        <p>目前highlightjs还非常不完善，各位可以来帮帮我吗（秋梨膏~~~</p>
    </ArticleTemplate>
</template>
<style scoped lang="scss">
table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    overflow-x: auto;
    tr th:nth-child(1) {
        width: 90px;
    }
    tr td, tr th {
        min-height: 40px;
        border: 1px solid black;
        text-align: center;
        padding: 10px 0 10px 0;
        font-size: 20px;
    }
}
</style>