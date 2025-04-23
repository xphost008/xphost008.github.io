<script setup lang="ts">
import { articles } from '@/logic/MyLogic'
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import router from '@/router'
const searchText = ref("")
function search() {
    if (searchText.value == "")
        return
    else 
        router.push('/?search=' + searchText.value)
}
</script>
<template>
    <div id="left">
        <h1 id="left-title">最新文章</h1>
        <!--麻了个蛋的，神经HTML。。设置了一点点css样式之后，hr分割线不给我自动展开了（-->
        <div style="width: calc(100% - 40px); border-bottom: 3px solid gray;"></div>
        <div id="articles">
            <router-link :to="'/article/' + (articles.length)">
                <div class="article">
                    <ul>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;{{articles[articles.length - 1].title}}</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;{{articles[articles.length - 1].date}}</li>
                        <li><el-icon size="30" color="black" style="vertical-align: middle"><List /></el-icon>&nbsp;&nbsp;<span v-for="tag in articles[articles.length - 1].tags" :key="tag" class="inline-code" style="vertical-align: middle">{{tag}}</span></li>
                    </ul>
                </div>
            </router-link>
        </div>
        <div style="width: calc(100% - 40px); border-bottom: 3px solid gray;"></div>
        <div id="searchBox">
            <el-input v-model="searchText" placeholder="搜索文章">
            <template #append>
                <el-button :icon="Search" @click="search" />
            </template>
            </el-input>
        </div>
        <div style="width: calc(100% - 40px); border-bottom: 3px solid gray;"></div>
        <h3 id="left-footer">这里本来应该有点东西，但是我没有写（）</h3>
    </div>
</template>
<style scoped lang="scss">
#left {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    overflow: auto;
    #left-title {
        margin: 20px 0;
        font-size: 40px;
    }
    #articles {
        margin: 10px 0;
        width: calc(100% - 80px);
        display: flex;
        flex-direction: column;
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
            display: flex;
            flex-direction: column;
            align-items: center;
            background: linear-gradient(to right bottom, rgba(234, 125, 35, 0.2), rgba(154, 87, 222, 0.3));
            min-height: 100px;
            border-radius: 10px;
            font-size: 20px;
            ul {
                list-style: none;
            }
        }
    }
    #left-footer {
        padding: 20px;
    }
    #searchBox {
        width: calc(100% - 80px);
        margin: 20px 0;
    }
}
</style>