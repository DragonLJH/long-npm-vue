<template>
  <div class="icon-view">
    <div v-for="(item, index) in list" :key="index">
      <MyIcon :className="item" />
    </div>
    <div v-for="(item, index) in iconArr" :key="index">
      <div class="icon" :class="item" ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, inject } from 'vue';
const iconArr = inject('iconArr')
console.log("iconArr", iconArr)
const svgDiv = ref()
onMounted(() => {
})

const list = ["iphone", "user", "preview-open", "preview-close"]

</script>