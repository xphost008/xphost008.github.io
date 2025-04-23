<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { articles } from '@/logic/MyLogic';
import { useRoute } from 'vue-router';
const route = useRoute();
const title = ref("")
const date = ref("")
const tags = reactive<string[]>([])
onMounted(() => {
    const id = Number(route.path.substring(route.path.lastIndexOf('/') + 1)) || -1 // 获取URL中的id
    articles.forEach(article => {
        if (article.id === id) {
            title.value = article.title;
            date.value = article.date;
            Object.assign(tags, article.tags)
        }
    })
})
</script>
<template>
    <div id="ArticleAll">
        <div id="ArticleTitle">
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="bdt">{{ title }}</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="bdt">{{ date }}</span><br>
            <el-icon size="30" color="black" style="vertical-align: middle"><List /></el-icon><router-link style="color: black; text-decoration: none;" v-for="tag in tags" :key="tag" :to="'/?tags=' + tag"><span class="inline-code">{{ tag }}</span></router-link>
        </div>
        <div id="ArticleContent">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
.bdt {
    border-bottom: 1px dashed black;
}
#ArticleAll {
    padding: 20px;
    width: calc(100% - 40px);
    #ArticleTitle {
        font-size: 30px;
        margin-bottom: 80px;
    }
    #ArticleContent {
        padding: 0 10px;
        @media screen and (max-width: 768px) {
            padding: 0 5px;
        }
    }
}
</style>