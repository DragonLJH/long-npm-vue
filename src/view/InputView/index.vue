<template>
  <div class="input-view">
    <MyInput v-model="value" left-icon="iphone" clear />
    <MyInput v-model="valueP" type="password" left-icon="preview-close" />
    <button @click="asd">check</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const name = "input-view";
const value = ref("")
const valueP = ref("")
const asd = () => {
  const url = "http://localhost:8081/user/queryUserByPhone" + "?" + "userPhone=" + value.value
  fetch(url, {
    mode: "cors",
    credentials: "include"
  }).then(data => {
    console.log(data)
  }).catch(e => {
    console.error(e)
  })
}

</script>