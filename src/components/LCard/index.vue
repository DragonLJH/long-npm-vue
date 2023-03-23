<template>
  <div class="l-card" :shadow="props.shadow" :type="props.type" :style="style">
    <div class="l-card-main">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, onMounted, reactive } from 'vue';
const style = reactive({ "--width": "", "--height": "" });
type cardProps = {
  width: number,
  height: number,
  type?: "default" | "various"
  shadow?: "always" | "hover"
}

const props = withDefaults(defineProps<cardProps>(), {
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
.l-card {
  width: var(--width);
  height: var(--height);
  border: solid 1px #ccc;
  position: relative;
  background-color: #fff;
  overflow: hidden;
}

.l-card[shadow=always] {
  box-shadow: 5px 5px 5px #000,
    inset 0px 0px 1px;
}

.l-card[shadow=hover]:hover {
  box-shadow: 5px 5px 5px #000,
    inset 0px 0px 1px;

}

.l-card[type=various]::after {
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

.l-card[type=various]::before {
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

.l-card-main {
  position: absolute;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border: solid 1px #ccc;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: #fff;
  z-index: 2;
}
</style>