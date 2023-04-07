<template>
  <div class="drag-view">
    <LDrag v-model:list="data.list" />
  </div>
</template>
<script lang="ts" setup>
import LDrag from '@/components/LDrag/index.vue'
import { reactive } from 'vue';
let data = reactive({
  list: [
    { id: 0, title: "title-0" },
    { id: 1, title: "title-1" },
    { id: 2, title: "title-2" },
    { id: 3, title: "title-3" },
  ]
})

</script>