<template>
  <div class="card-view">
    <div>card-view</div>
    <LCard shadow="hover">123</LCard>
    <LCard shadow="always">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </LCard>
  </div>
</template>
<script lang="ts" setup>
import LCard from '@/components/LCard/index.vue';
</script>