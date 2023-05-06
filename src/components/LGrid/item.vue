<template>
    <div class="item" :style="{ '--w': w }">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { computed } from "vue"

const props = withDefaults(defineProps<{
    span: number
}>(), {
    span: 1,
})
console.log("span:",props.span)
const w = computed(() => (props.span / 24 * 100) + "%") 
</script>
<style scoped>
.item {
    --w: 0%;
    width: var(--w);
}
</style>