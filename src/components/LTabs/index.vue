<template>
  <div class="l-tabs" :tabsType="props.tabsType">
    <div class="l-tabs-title">
      <div
        :class="index === active ? 'active' : ''"
        v-for="(item, index) in props.tabsData"
        :key="index"
        @click="tabC(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="l-tabs-main" ref="mainRef">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref, onMounted, reactive } from "vue";
type tabsDataProps = {
  to: string;
  path: string;
  title: string;
};

type tabsProps = {
  active: number;
  tabsType?: "default" | "card";
  tabsData: Array<tabsDataProps>;
};

const props = withDefaults(defineProps<tabsProps>(), {
  active: 0,
  tabsType: "card",
  tabsData: () => {
    return [];
  },
});

const active = ref(0);

const mainRef = ref();

const changeActive = () => {
  const { children } = mainRef.value;
  Array.from(children).forEach((item: HTMLDivElement, index: number) => {
    item.className = "";
    if (active.value === index) {
      item.className = "active";
    }
    console.log("item", item);
  });
};
const tabC = (num: number) => {
  active.value = num;
  changeActive();
  console.log(active.value);
};

onMounted(() => {
  active.value = props.active;
  changeActive();
});
</script>

<style scoped>
.l-tabs {
  width: 300px;
  height: 300px;
  border: solid 1px #ccc;
}
.l-tabs-title {
  height: 30px;
  line-height: 30px;
  padding: 0px 10px;
}
.l-tabs-title > div {
  display: inline-block;
  padding: 0px 5px;
  width: 40px;
  cursor: pointer;
  box-shadow: 1px 0px 2px #000, inset 1px 0px 2px #fff;
}

[tabstype="card"] .l-tabs-title {
  background-color: #ccc;
  border-top: solid 2px #ccc;
  height: 28px;
  line-height: 28px;
}
[tabstype="card"] .l-tabs-title > .active {
  background-color: #fff;
}

.l-tabs-main {
  width: 100%;
  height: calc(100% - 30px);
}

.l-tabs-main /deep/ div {
  display: none;
}
.l-tabs-main /deep/ div.active {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>