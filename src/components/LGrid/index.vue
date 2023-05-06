<template>
    <div class="l-grid" :style="{ '--space': props.space.map(item => item + 'px').join(' ') }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    space?: Array<number>
}>(), {
    space: () => [10, 20],
})

</script>

<style scoped >
.l-grid {
    --space: 0px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

}

.l-grid /deep/ .item {
    display: inline-block;
    margin: var(--space); 
}
</style>