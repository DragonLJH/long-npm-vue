<template>
  <div class="tabs-view">
    <MyTabs>
      <template #header>
        <div path="path1">path1</div>
        <div path="path2">path2</div>
        <div path="path3">path3</div>
      </template>
      <template #main>
        <div main="main1">main1</div>
        <div main="main2">main2</div>
        <div main="main3">main3</div>
      </template>
    </MyTabs>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';

onMounted(() => {

})


</script>