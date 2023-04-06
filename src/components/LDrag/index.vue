<template>
    <div class="l-drag" @drop="drop" @dragover="dragover" @dragstart="dragstart">
        <div class="item" v-for="(item, index) in list" :key="item.id" draggable="true" :data-id="index">
            {{ item.title }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { withDefaults, defineEmits, onMounted, reactive } from "vue"
type LDragProps = {
    id: number
    title: string
}
const name = "LDrag"
const props = withDefaults(defineProps<{
    list: Array<LDragProps>
}>(), {
    list: () => {
        return [
            { id: 0, title: "title-0" },
            { id: 1, title: "title-1" },
            { id: 2, title: "title-2" },
            { id: 3, title: "title-3" },
        ]
    }
})
const emit = defineEmits(["update:list"])
const list = reactive(props.list)
const drop = (e: any) => {
    const startId = e.dataTransfer.getData("startId");
    const { id } = e.target.dataset
    const o = [...list].splice(startId, 1)
    const n = [...list].splice(id, 1)
    list.splice(id, 1, ...o)
    list.splice(startId, 1, ...n)
    emit("update:list", list)
}
const dragover = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
}
const dragstart = (e: any) => {
    const { id } = e.target.dataset
    e.dataTransfer.setData("startId", id);
    console.log("dragstart", id)
}
onMounted(() => {
    console.log(list)
})
</script>
<style></style>