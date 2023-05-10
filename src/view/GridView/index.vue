<template>
  <div class="grid-view">
    <div>grid-view</div>
    <MyGrid :space="[10]">
      <MyGridItem v-for="(item, index) in 24" :key="index" :span="randomNum()">
        {{ item }}
      </MyGridItem>
    </MyGrid>

  </div>
</template>
<script lang="ts" setup>

const randomNum = () => {
  let num = parseInt((Math.random() * 24).toFixed(0))
  console.log(num)
  return num
}
</script>