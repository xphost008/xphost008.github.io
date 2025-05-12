<script setup lang="ts">
import { friendlinks } from '@/logic/MyLogic';
import { ref } from 'vue';
const ava = ref<HTMLImageElement | null>(null);
let isSpinning = false;
let currentRotation = 0;
function getTargerDegree(){
    const randomStop = Math.floor(Math.random() * 360);
    return currentRotation + randomStop;
}
function rotateImg() {
    if(isSpinning) return;
    isSpinning = true;
    const targetDegree = getTargerDegree();
    ava.value!.style.transition = 'none'
    ava.value!.style.transform = `rotate(${currentRotation % 360}deg)`;
    void ava.value!.offsetWidth;
    ava.value!.style.transition = `transform ${Math.random()}s cubic-bezier(0.25, 0.1, 0.25, 1)`
    ava.value!.style.transform = `rotate(${targetDegree}deg)`;
    currentRotation = targetDegree % 360;
}
function imgTransitionEnd() {
    isSpinning = false;
}
</script>
<template>
    <div id="right">
        <img id="avatar" ref="ava" @click="rotateImg" @transitionend="imgTransitionEnd" src="@/assets/img/avatar.jpg" alt="avatar">
        <div id="across">
            <a href="https://github.com/xphost008" target="_blank"><img src="@/assets/img/github.svg" alt="github"></a>
            <a href="https://afdian.com/a/xphost" target="_blank"><img src="@/assets/img/afdian.ico" alt="爱发电"></a>
            <a href="https://space.bilibili.com/3546639830616204" target="_blank"><img src="@/assets/img/bilibili.ico" alt="bilibili"></a>
        </div>
        <div id="personal">
            <p>我爱这个世界，正如这个世界爱我一样</p>
            <p><b>Location: Wuhan Hubei. China</b></p>
        </div>
        <h1 style="color: darkgreen">我的友链</h1>
        <div id="friendlinks">
            <template v-for="(friendlink, index) in friendlinks" :key="index">
                <a :href="friendlink.url" target="_blank">
                    <div class="friendlink">
                        <img :src="friendlink.avatar" :alt="friendlink.name">
                        <div class="friendContent">
                            <p>{{friendlink.name}}</p>
                            <p>{{friendlink.description}}</p>
                        </div>
                    </div>
                </a>
                <br v-if="index != friendlinks.length - 1" />
            </template>
        </div>
    </div>
</template>
<style scoped lang="scss">
#right {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    overflow: auto;
    #avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 30px;
    }
    #across {
        display: flex;
        justify-content: center;
        width: 100px;
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin: 0 5px;
        }
    }
    #personal {
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #friendlinks {
        display: flex;
        flex-direction: column;
        width: calc(100% - 40px);
        margin: 10px 0;
        a {
            text-decoration: none;
        }
        .friendlink {
            border-radius: 10px;
            background: linear-gradient(to right bottom, rgba(234, 125, 35, 0.2), rgba(154, 87, 222, 0.3));
            display: flex;
            flex-shrink: 0;
            color: rgb(32, 32, 32);
            transition: all 0.2s;
            &:hover {
                transform: scale(1.02);
                box-shadow: 0 0 10px pink;
            }
            img {
                border-radius: 50%;
                width: 80px;
                height: 80px;
                padding: 10px;
            }
            .friendContent {
                display: flex;
                flex-direction: column;
                justify-content: center;
                p {
                    &:nth-child(1) {
                        margin: 10px;
                        font-size: 18px;
                        font-weight: bold;
                    }
                    &:nth-child(2) {
                        margin: 0 10px 10px 10px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        #avatar {
            width: 100px;
            height: 100px;
            margin: 50px;
        }
    }
}
</style>