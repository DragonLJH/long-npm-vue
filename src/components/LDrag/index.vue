<template>
    <div class="l-drag" @drop="drop" @dragover="dragover" @dragstart="dragstart" @dragenter="dragenter">
        <div class="item" :class="activeIndex == index ? 'active' : ''" v-for="(item, index) in data.list" :key="item.id"
            draggable="true" :data-id="item.id" :data-index="index">
            {{ item.title }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { withDefaults, defineEmits, onMounted, reactive, ref } from "vue"
type LDragProps = {
    id: number
    title: string
}
const props = withDefaults(defineProps<{
    list: Array<LDragProps>
}>(), {
    list: () => {
        return [
            { id: 0, title: "" }
        ]
    }
})
const emit = defineEmits(["update:list"])

const activeIndex = ref(-1)
const dragenterIndex = ref(-1)
const data = reactive({ list: props.list })

const drop = (e: any) => {
    activeIndex.value = -1
    dragenterIndex.value = - 1
    // const startIndex = e.dataTransfer.getData("startIndex");
    // const { index } = e.target.dataset
    // const newList = [...props.list]
    // // const o = [...props.list].splice(startIndex, 1)
    // // const n = [...props.list].splice(index, 1)
    // // newList.splice(index, 1, ...o)
    // // newList.splice(startIndex, 1, ...n)
    // const o = [...props.list].splice(startIndex, 1)[0]
    // newList.splice(startIndex, 1)
    // newList.splice(index, 0, o) 
    emit("update:list", data.list)
}
const dragstart = (e: any) => {
    const { index, id } = e.target.dataset
    activeIndex.value = index
    e.dataTransfer.setData("startIndex", index);
    e.dataTransfer.setData("startId", id);
    console.log("dragstart", e.dataTransfer.getData("startIndex"))
}
const dragover = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
}
const dragenter = (e: any) => {
    const { index, id } = e.target.dataset
    // 解决频繁拖拽交换
    // 
    if (id !== dragenterIndex.value) { 
        const newList = [...data.list]
        const o = [...data.list].splice(activeIndex.value, 1)[0]
        newList.splice(activeIndex.value, 1)
        newList.splice(index, 0, o)
        data.list = newList
        activeIndex.value = index
        return
    }
    e.preventDefault();
    e.stopPropagation();
}
onMounted(() => {
    data.list = props.list
})
</script>
<style>
.item.active {
    background-color: #ccc;
}
</style>