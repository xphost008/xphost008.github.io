<script setup lang="ts">
import { articles } from "@/logic/MyLogic"
import { reactive, onBeforeMount } from 'vue'
const tags = reactive<string[]>([])
onBeforeMount(() => {
    articles.forEach((article) => {
        article.tags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    })
})
</script>
<template>
    <div id="tags">
        <h1>所有标签</h1>
        <div id="tags-list">
            <router-link v-for="tag in tags" :key="tag" :to="'/?tags=' + tag"><div class="tag inline-code">{{tag}}</div></router-link>
        </div>
    </div>
</template>
<style scoped lang="scss">
#tags {
    padding: 20px;
    font-family: ljzpt;
    font-size: 24px;
    #tags-list {
        display: flex;
        flex-wrap: wrap;
        a {
            text-decoration: none;
            color: black;
        }
    }
}
</style>