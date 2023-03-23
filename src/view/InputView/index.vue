<template>
  <div class="input-view">
    <MyCard>
      <MyInput v-model="value" left-icon="iphone" clear label="手机号" />
      <MyInput v-model="valueP" type="password" clear left-icon="preview-close" label="密码" />
      <MyButton @click="login">登录</MyButton>
      <MyButton type="danger">重置</MyButton>
      <MyButton @click="cs">测试</MyButton>
    </MyCard>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { getMergeUrl } from '@/utils/fetchUtils';

const name = "input-view";
const value = ref("")
const valueP = ref("")
const login = async () => {
  let data = {
    userPhone: value.value,
    userPassword: valueP.value,
    
  }
  const url = getMergeUrl("http://localhost:8081/user/queryUserByPhone", data)
  console.log(url)
  let response = await fetch(url, {
    credentials: "include"
  });
  for (let [key, value] of response.headers) {
    console.log(`${key} : ${value}`);
  }
  response.json().then(res => {
    console.log(res)
  })

}
const cs = async () => {
  const url = "http://localhost:8081/user/queryAllUser"
  let response = await fetch(url, {
    mode: "cors",
    credentials: "include"
  });
  response.json().then(res => {
    console.log(res)
  })
}
</script>