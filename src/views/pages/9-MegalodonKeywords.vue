<script setup lang="ts">
import ArticleTemplate from '@/components/ArticleTemplate.vue';
const cls = `//定义一个类
class Hello {
    pub func say() {
        Console.put("Hello World!!");
    }
}
//以下将会输出Hello World!!
pub func main() {
    Hello hello = Hello.new();
    hello.say();
}`
</script>
<template>
    <ArticleTemplate>
        <h1>这里是巨齿鲨语言的所有关键字特性！各位可以看看！</h1>
        <h2>class</h2>
        <p>定义一个类，参见如下示例</p>
        <div v-auto-insert data="block" lang="mgl">
            <highlightjs language="mgl" :autodetect="false" :code="cls" />
        </div>
    </ArticleTemplate>
</template>
<style scoped lang="scss">
</style>