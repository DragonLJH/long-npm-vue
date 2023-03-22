<template>
  <div class="l-button" :widthAuto="props.widthAuto" :type="props.type">
    <slot>button</slot>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

type buttonProps = {
  widthAuto?: boolean
  type?: "default" | "danger"
}

const props = withDefaults(defineProps<buttonProps>(), {
  type: "default"
})

</script>

<style scoped>
.l-button {
  text-align: center;
  background-color: #44b9f3;
  color: #fff;
  padding: 5px 10px;
  margin: 5px 10px;
  box-shadow: 2px 2px 2px #999,
    inset 2px 2px 2px #eee,
    inset -1px -1px 1px #000;
  cursor: pointer;

}

.l-button:hover {
  background-color: #fff;
  color: #44b9f3;
  box-shadow: 2px 2px 2px #999,
    inset 2px 2px 2px #999,
    inset -1px -1px 1px #000;
}

.l-button[type=danger] {
  background-color: #d6221b;
}

.l-button[type=danger]:hover {
  background-color: #fff;
  color: #d6221b;
}

.l-button[widthAuto=true] {
  display: inline-block;
  width: auto;
}
</style>