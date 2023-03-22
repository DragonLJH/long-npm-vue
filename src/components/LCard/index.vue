<template>
  <div class="l-card">
    <div class="l-card-various" :style="style">
      <div class="l-card-various-item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, onMounted, reactive } from 'vue';
const style = reactive({ "--width": "", "--height": "" });
type buttonProps = {
  widthAuto?: boolean,
  width: number,
  height: number,
  type?: "default" | "danger"
}

const props = withDefaults(defineProps<buttonProps>(), {
  type: "default",
  width: 400,
  height: 300
})
onMounted(() => {
  style["--width"] = props.width + "px"
  style["--height"] = props.height + "px"

})
</script>

<style scoped>
.l-card-various {
  width: var(--width);
  height: var(--height);
  border: solid 1px #ccc;
  position: relative;
  background-color: #eee;
  overflow: hidden;
}

.l-card-various::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  background-color: #f00;
  transform: rotate(0deg) translateY(-50%);
  animation: rotateRed 5s infinite linear;
}

.l-card-various::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  background-color: blue;
  transform: rotate(0deg) translateY(50%);
  animation: rotateBlue 5s infinite linear;
}

@keyframes rotateRed {
  0% {
    transform: rotate(0deg) translateY(-50%);
  }

  100% {
    transform: rotate(360deg) translateY(-50%);
  }
}

@keyframes rotateBlue {
  0% {
    transform: rotate(0deg) translateY(50%);
  }

  100% {
    transform: rotate(360deg) translateY(50%);
  }
}

.l-card-various-item {
  position: absolute;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border: solid 1px #ccc;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: #ccc;
  z-index: 2;
}
</style>