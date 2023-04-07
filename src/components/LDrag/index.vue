<template>
    <div class="l-drag" @drop="drop" @dragover="dragover" @dragstart="dragstart" @dragenter="dragenter">
        <div class="item" :class="activeId == index ? 'active' : ''" v-for="(item, index) in data.list" :key="item.id"
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

const activeId = ref(-1)
const startIndex = ref(-1)
const data = reactive({ list: props.list })

const drop = (e: any) => {
    activeId.value = -1
    const startIndex = e.dataTransfer.getData("startIndex");
    const { index } = e.target.dataset
    const newList = [...props.list]
    // const o = [...props.list].splice(startIndex, 1)
    // const n = [...props.list].splice(index, 1)
    // newList.splice(index, 1, ...o)
    // newList.splice(startIndex, 1, ...n)
    const o = [...props.list].splice(startIndex, 1)[0]
    newList.splice(startIndex, 1)
    newList.splice(index, 0, o)
    console.log("newList", newList)
    // emit("update:list", newList)
}
const dragstart = (e: any) => {
    const { index, id } = e.target.dataset
    activeId.value = index
    e.dataTransfer.setData("startIndex", index);
    e.dataTransfer.setData("startId", id);
    console.log("dragstart", e.dataTransfer.getData("startIndex"))
}
const dragover = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
}
const dragenter = (e: any) => {
    const startIndex = e.dataTransfer.getData("startIndex");
    const { index } = e.target.dataset
    const newList = [...data.list]
    let o = newList[index]
    newList.splice(startIndex, 1, o)
    console.log(newList)
    data.list = newList
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