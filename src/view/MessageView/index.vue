<template>
  <div class="message-view">
    <button @click="openMsg">open</button>
    <MyMessage :title="obj.title" :msg="obj.msg" :show="obj.show" @close="closeMsg" />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { getCurrentInstance } from "vue";
const showMsg = getCurrentInstance()?.appContext.config.globalProperties.$showMsg

const obj = reactive({
  title: "MyMessage-title", msg: "MyMessage-msg", show: false
})

const openMsg = () => {
  obj.show = true
  console.log(obj)
  showMsg({ title: "asd-title", msg: "asd-msg" }, (close: Function) => {
    close()
  })
}

const closeMsg = (closeData: boolean) => {
  obj.show = closeData
  console.log("closeMsg:", closeData)
}
onMounted(() => {

})


</script>