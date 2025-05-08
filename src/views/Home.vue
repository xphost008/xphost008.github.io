<script setup lang="ts">
import { articles, type ArticlesType } from '@/logic/MyLogic'
import { ref, reactive, onBeforeMount, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router'
const route = useRoute()
const articleFilter = reactive<ArticlesType[]>([])
const page = ref(0)
function updateArticle() {
    page.value = (Number(route.query.page) || 1) - 1
    articleFilter.length = 0
    let start = page.value * 10;
    let end = Math.min(start + 9, articles.length - 1);
    for(let i = start; i <= end; i++) {
        if(i >= articles.length) {
            break
        }
        let article = articles[i]
        if((route.query.tags == null || article.tags.includes(route.query.tag as string)) &&
            (route.query.search == null || article.title.indexOf(route.query.search as string) >= 0)) {
            articleFilter.push(article)
        }
    }
}
function previousPage() {
    if(page.value <= 0) return
    router.push("/?page=" + (page.value))
}
function nextPage() {
    if(page.value >= Math.ceil(articles.length / 10) - 1) return
    router.push("/?page=" + (page.value + 2))
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
        <div id="pages">
            <button @click="previousPage"><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                    <path
                    d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"/>
                </svg></button>
            <span>{{page + 1}}</span>
            <button @click="nextPage"><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                    <path
                    d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/>
                </svg></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
#home {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
    a {
        text-decoration: none;
        color: black;
        transition: all 0.2s;
        width: 100%;
        &:hover {
            box-shadow: 0 0 10px pink;
            transform: scale(1.02);
        }
    }
    .article {
        width: calc(100% - 50px);
        min-height: 200px;
        flex-shrink: 0;
        border-radius: 20px;
        padding: 25px;
        background: linear-gradient(to right bottom, rgba(234, 125, 35, 0.3), rgba(154, 87, 222, 0.4));
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
        @media screen and (max-width: 768px) {
            min-height: 150px;
            .article-title {
                font-size: 30px;
            }
            .article-date {
                font-size: 20px;
            }
            .article-tag {
                font-size: 20px;
            }
        }
    }
    #pages {
        margin-top: 20px;
        width: 300px;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        span {
            width: 120px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            font-size: 40px;
            font-family: Consolas-local;
        }
        button {
            background-color: transparent;
            border: 0;
            cursor: pointer;
            transition: all 0.2s;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            &:first-child {
                margin-right: 10px;
            }
            &:last-child {
                margin-left: 10px;
            }
            &:hover {
                background-color: rgba(0, 0, 0, 0.3);
            }
        }
    }
}
</style>
