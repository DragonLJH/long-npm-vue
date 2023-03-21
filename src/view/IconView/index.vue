<template>
  <div class="icon-view">
    <div v-for="(item, index) in list" :key="index">
      <MyIcon :className="item" />
    </div>

  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const svgDiv = ref()
onMounted(() => {

})

const list = ["iphone", "user", "preview-open", "preview-close"]

</script>