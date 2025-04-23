<script setup lang="ts">
import { articles, type ArticlesType } from '@/logic/MyLogic'
import { reactive, onBeforeMount, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const articleFilter = reactive<ArticlesType[]>([])
function updateArticle() {
    articleFilter.length = 0
    articles.forEach((article) => {
        if( (route.query.tags == null || article.tags.includes(route.query.tags as string)) &&
            (route.query.search == null || article.title.indexOf(route.query.search as string) >= 0)) {
            articleFilter.push(article)
        }
    })
}
onBeforeMount(() => {
    updateArticle()
})
watch(() => route.query, () => {
    updateArticle()
}, {deep: true})
</script>

<template>
    <div id="home">
        <template v-for="(article, index) in articleFilter" :key="index">
            <router-link :to="'/article/' + (article.id)">
                <div class="article">
                    <p class="article-title">{{article.title}}</p>
                    <p class="article-date">{{article.date}}</p><br><br>
                    <p class="article-tag"><el-icon size="30" color="black" style="vertical-align: middle"><List /></el-icon>&nbsp;&nbsp;<span v-for="tag in article.tags" :key="tag" class="inline-code" style="vertical-align: middle">{{tag}}</span></p>
                </div>
            </router-link>
            <br v-if="index != articleFilter.length - 1">
        </template>
    </div>
</template>

<style scoped lang="scss">
#home {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    a {
        text-decoration: none;
        color: black;
        transition: all 0.2s;
        &:hover {
            box-shadow: 0 0 10px pink;
            transform: scale(1.02);
        }
    }
    .article {
        width: calc(100% - 50px);
        min-height: 150px;
        flex-shrink: 0;
        border-radius: 20px;
        padding: 25px;
        background: linear-gradient(to right bottom, rgba(234, 125, 35, 0.3), rgba(154, 87, 222, 0.4));
        font-family: ljzpt;
        .article-title {
            width: 100%;
            font-size: 40px;
        }
        .article-date {
            width: 100%;
            font-size: 30px;
        }
        .article-tag {
            width: 100%;
            font-size: 30px;
        }
    }
}
</style>
