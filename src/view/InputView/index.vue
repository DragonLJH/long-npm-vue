<template>
  <div class="input-view">
    <MyCard>
      <MyInput v-model="value" left-icon="iphone" clear label="手机号" />
      <MyInput v-model="valueP" type="password" clear left-icon="preview-close" label="密码"/>
      <MyButton>登录</MyButton>
      <MyButton type="danger">重置</MyButton>
    </MyCard>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { getMergeUrl } from '@/utils/fetchUtils';

const name = "input-view";
const value = ref("")
const valueP = ref("")
const asd = async () => {
  let data = {
    userPhone: value.value
  }
  const url = getMergeUrl("http://localhost:8081/user/queryUserByPhone", data)
  console.log(url)
  let response = await fetch(url, {
    mode: "cors",
    credentials: "include"
  });
  for (let [key, value] of response.headers) {
    console.log(`${key} : ${value}`);
  }
  response.json().then(res => {
    console.log(res)
  })

}
</script>