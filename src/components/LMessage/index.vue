<template>
    <div :class="`l-message ${props.show ? 'active' : ''}`">
        <div class="l-message-main">
            <div class="l-message-main-title">
                <div class="left">{{ props.title }}</div>
                <div class="right cursor" @click="emits('close', false)">X </div>
            </div>
            <div class="l-message-main-msg">
                {{ props.msg }}
            </div>
            <div class="l-message-main-footer">
                <div class="cursor" @click="emits('close', false)">
                    关闭
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, onMounted, ref, computed, defineEmits } from 'vue'
type messageProps = {
    show: boolean
    title: string
    msg: string
}
const isShow = computed(() => props.show)

const props = withDefaults(defineProps<messageProps>(), {
    show: false,
    title: "title",
    msg: "msg",
})
const emits = defineEmits(["close"])

onMounted(() => {
})

</script>

<style scoped>
.l-message.active {
    display: block;
}

.l-message .cursor {
    cursor: pointer;
}

.l-message {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

.l-message-main {
    width: 300px;
    height: 200px;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    box-shadow: 5px 5px 5px #000, inset -1px -1px 10px -5px #000;

    border-radius: 15px;
    overflow: hidden;
}

.l-message-main-title {
    height: 25px;
    line-height: 25px;
    border-bottom: solid 1px #000;
    box-shadow: 0px 4px 4px #000;
    margin-bottom: 4px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
}

.l-message-main-msg {
    height: calc(100% - 60px);
}

.l-message-main-footer {
    height: 30px;
    float: right;
    padding: 0px 10px;
}

.l-message-main-footer>div {
    display: inline-block;
    border: solid 1px #ccc;
    padding: 2px 3px;
    margin: 0px 5px;
    box-shadow: 2px 2px 2px #ccc;
}

.l-message-main-footer>div:hover {}
</style>