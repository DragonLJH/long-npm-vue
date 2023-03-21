<template>
    <span ref="iconDiv" :class="`l-icon ${props.className}`">
        <img :src="targetImg" alt="">
    </span>
</template>
<script setup lang="ts">
import { ref, onMounted, withDefaults, defineProps } from "vue";
type iconProps = {
    className?: string
}
let iconDiv = ref()
let targetImg = ref("")
const props = withDefaults(defineProps<iconProps>(), {
    className: "",
})
const svgsPath = require.context('./', true, /\.svg$/)
const imgs = svgsPath.keys()
for (let i = 0; i < imgs.length; i++) {
    if (props.className && imgs[i].indexOf("_" + props.className) !== -1) {
        targetImg.value = svgsPath(imgs[i]).default
        break
    }
}
onMounted(() => {
})
</script>

<style>
.l-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>