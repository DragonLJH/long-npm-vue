<template>
  <div class="l-tabs" type="default">
    <div class="l-tabs-title" ref="headerRef">
      <slot name="header"></slot>
    </div>
    <div class="l-tabs-main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref, onMounted, reactive } from 'vue';
type tabsProps = {
  string: string
}

const props = withDefaults(defineProps<tabsProps>(), {
  string: ""
})

const headerRef = ref()
const active = ref(0)

const changeActive = () => {
  const { children } = headerRef.value
  Array.from(children).forEach((item: any, index) => {
    console.log(item)
  })
}
const clearActive = () => {
  const { children } = headerRef.value
  Array.from(children).forEach((item: any, index) => {
    console.log(item)
  })
}

onMounted(() => {
  changeActive()
})

</script>

<style scoped>
.l-tabs {
  width: 300px;
  height: 300px;
  border: solid 1px #ccc;
}

.l-tabs-title {
  /* display: flex; */
}

.l-tabs-title /deep/ div {}

[type=default] .l-tabs-title /deep/ div {
  display: inline-block;
  width: 50px;
  padding: 5px;
}
</style>