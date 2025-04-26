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
            <div id="contentRouter">
                <div id="contentView">
                    <RouterView />
                </div>
                <div id="contentFooter">文章版权：© Xphost 2025<br>文章以 CC BY-NC 协议发布。</div>
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
    height: 100%;
    width: 100%;
    #contentLeft, #contentRight {
        width: 300px;
        height: calc(100% - 60px);
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
        min-width: 400px;
        flex: 1;
        #contentRouter {
            height: calc(100% - 60px);
            backdrop-filter: blur(3px);
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
                height: 60px;
            }
        }
        @media screen and (max-width: 768px) {
            min-width: 300px;
            #contentRouter {
                height: calc(100% - 80px);
            }
        }
    }
    @media screen and (max-width: 768px) {
        top: 80px;
    }
}
</style>