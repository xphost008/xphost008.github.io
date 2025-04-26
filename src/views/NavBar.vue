<script setup lang="ts">
import { ref } from 'vue';
const navMaxHeight = ref('0');
const menuButtonSize = ref("22")
function getMaxWidth() {
    return window.innerWidth < 768 ? '300px' : '120px';
}
function getMenuButton() {
    return window.innerWidth < 768 ? '26' : '20';
}
function menuClick() {
    navMaxHeight.value = navMaxHeight.value == '0' ? getMaxWidth() : '0'
    menuButtonSize.value = getMenuButton()
}
</script>
<template>
    <div id="navbar">
        <el-button class="menu" text @click="menuClick"><el-icon size="50" color="white"><Menu /></el-icon></el-button>
            <el-text class="text" size="large" type="primary">X P H O S T ' s  B l o g !</el-text>
        <div class="afdian"></div>
    </div>
    <div id="navmenu">
        <router-link to="/"><el-button text><el-icon :size="menuButtonSize" color="white"><House /></el-icon>&nbsp;<span style="color: white">主页</span></el-button></router-link><br>
        <router-link to="/about"><el-button text><el-icon :size="menuButtonSize" color="white"><Avatar /></el-icon>&nbsp;<span style="color: white">关于</span></el-button></router-link><br>
        <router-link to="/tags"><el-button text><el-icon :size="menuButtonSize" color="white"><List /></el-icon>&nbsp;<span style="color: white">标签</span></el-button></router-link>
        <router-link to="/left"><el-button text><el-icon :size="menuButtonSize" color="white"><ArrowLeftBold /></el-icon>&nbsp;<span style="color: white">大纲</span></el-button></router-link><br>
        <router-link to="/right"><el-button text><el-icon :size="menuButtonSize" color="white"><ArrowRightBold /></el-icon>&nbsp;<span style="color: white">联系/友链</span></el-button></router-link><br>
    </div>
</template>
<style scoped lang="scss">
#navbar {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid gray;
    box-shadow: 0 0 2px 2px gray;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    .el-button {
        width: 100px;
        height: 60px;
        &:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
    .menu {
        float: left;
    }
    .text {
        font-size: 20px;
        font-weight: bold;
        color: white;
        font-family: Arkipelago;
    }
    .afdian {
        float: right;
        width: 50px;
        height: 50px;
        border-radius: 10px;
    }
}
#navmenu {
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    top: 60px;
    max-height: v-bind(navMaxHeight);
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    box-shadow: 0 0 2px 2px gray;
    z-index: 999;
    .el-button {
        width: 100vw;
        height: 40px;
        font-size: 20px;
        font-weight: bold;
        &:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
}
@media screen and (max-width: 768px) {
    #navbar {
        width: 100%;
        height: 80px;
        .el-button {
            width: 80px;
            height: 80px;
        }
        .text {
            font-size: 24px;
        }
    }
    #navmenu {
        top: 80px;
        .el-button {
            height: 60px;
            font-size: 26px;
        }
    }
}
</style>