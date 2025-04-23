<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const LeftPage = defineAsyncComponent(() => import('./Left.vue'))
const RightPage = defineAsyncComponent(() => import('./Right.vue'))
</script>
<template>
    <div id="content">
        <div id="contentLeft">
            <LeftPage />
        </div>
        <div id="contentCenter">
            <div id="sidebarButton">
                <RouterLink to="/left"><el-button text class="left"><el-icon size="40" color="white"><ArrowLeftBold /></el-icon></el-button></RouterLink>
                <RouterLink to="/"><el-button text class="center"><el-icon size="40" color="white"><DCaret /></el-icon></el-button></RouterLink>
                <RouterLink to="/right"><el-button text class="right"><el-icon size="40" color="white"><ArrowRightBold /></el-icon></el-button></RouterLink>
            </div>
            <div id="contentRouter">
                <div id="contentView">
                    <RouterView />
                </div>
                <div id="contentFooter">
                    文章版权：© Xphost 2025<br>
                    文章以 CC BY-NC 协议发布。
                </div>
            </div>
        </div>
        <div id="contentRight">
            <RightPage />
        </div>
    </div>
</template>
<style scoped lang="scss">
#content {
    position: fixed;
    top: 60px;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: calc(100% - 60px);
    width: 100%;
    #contentLeft, #contentRight {
        width: 300px;
        height: 100%;
        backdrop-filter: blur(4px);
        background-color: rgba(255, 255, 255, 0.6);
        margin: 0 30px;
        border-radius: 30px;
        max-width: 300px;
        min-width: 300px;
        transition: max-width 0.2s;
        overflow: auto;
        @media screen and (max-width: 768px) {
            max-width: 0;
            min-width: 0;
            margin: 0;
        }
    }
    #contentCenter {
        width: 100%;
        min-width: 300px;
        flex: 1;
        #contentRouter {
            height: calc(100%);
            backdrop-filter: blur(4px);
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 30px;
            display: flex;
            flex-direction: column;
            overflow: auto;
            #contentView {
                flex: 1;
            }
            #contentFooter {
                flex-shrink: 0;
                background-color: rgba(0, 0, 0, 0.4);
                height: 60px;
                width: 100%;
                text-align: center;
                color: white;
            }
        }
        #sidebarButton {
            max-height: 0;
            overflow: hidden;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            transition: max-height 0.3s ease-in-out;
            .el-button {
                font-size: 40px;
                width: 120px;
                height: 60px;
                &:hover {
                    background-color: rgba(0, 0, 0, 0.4);
                }
            }
        }
        @media screen and (max-width: 768px) {
            #sidebarButton {
                max-height: 60px;
            }
            #contentRouter {
                height: calc(100% - 60px);
            }
        }
    }
    @media screen and (max-width: 768px) {
        top: 100px;
        height: calc(100% - 100px);
    }
}
</style>