<template>
  <div class="l-tabs" :tabsType="props.tabsType">
    <div class="l-tabs-title">
      <div :class="item.to === active ? 'active' : ''" v-for="(item, index) in props.tabsData" :key="index"
        @click="tabC(item.to)">
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
  active: string;
  tabsType?: "default" | "flex" | "card" | "pop-up-card";
  tabsData: Array<tabsDataProps>;
};

const props = withDefaults(defineProps<tabsProps>(), {
  active: "",
  tabsType: "card",
  tabsData: () => {
    return [];
  },
});

const active = ref("");

const mainRef = ref();

const changeActive = () => {
  const { children } = mainRef.value;
  Array.from(children).forEach((item: HTMLDivElement, index: number) => {
    item.className = "";
    if (active.value === item.attributes.getNamedItem("path").value) {
      item.className = "active";
    }
  });
};
const tabC = (to: string) => {
  active.value = to;
  changeActive();
};

onMounted(() => {
  active.value = props.active;
  changeActive();
});
</script>

<style scoped> .l-tabs {
   width: 300px;
   height: 300px;
   border: solid 1px #ccc;
 }

 .l-tabs-title {
   height: 30px;
   line-height: 30px;
   padding: 0px 10px;
 }

 .l-tabs-title>div {
   display: inline-block;
   padding: 0px 5px;
   width: 40px;
   cursor: pointer;
   text-align: center;
 }

 [tabstype="flex"] .l-tabs-title {
   display: flex;
 }

 [tabstype="flex"] .l-tabs-title>div {
   padding: 0px 5px;
   flex: 1;
 }

 [tabstype="flex"] .l-tabs-title {
   border-bottom: solid 1px #ccc;
   height: 29px;
   line-height: 29px;
 }

 [tabstype="flex"] .l-tabs-title>div:hover,
 [tabstype="flex"] .l-tabs-title>.active {
   color: #1a93ea;
   border-bottom: solid 2px #1a93ea;
 }


 [tabstype="card"] .l-tabs-title {
   background-color: #ccc;
   border-top: solid 3px #ccc;
   height: 27px;
   line-height: 27px;
 }

 [tabstype="card"] .l-tabs-title>div:hover,
 [tabstype="card"] .l-tabs-title>.active {
   background-color: #fff;
   box-shadow: -1px -1px 2px #fff, inset 1px 2px 1px #000;
 }

 [tabstype="pop-up-card"] .l-tabs-title>div {
   box-shadow: 1px 0px 2px #000, inset 1px 0px 2px #fff;
 }

 [tabstype="pop-up-card"] .l-tabs-title {
   background-color: #ccc;
   border-top: solid 2px #ccc;
   height: 28px;
   line-height: 28px;
 }

 [tabstype="pop-up-card"] .l-tabs-title>div:hover,
 [tabstype="pop-up-card"] .l-tabs-title>.active {
   background-color: #fff;
   box-shadow: 0px 0px 2px #fff, inset 0px 0px 2px #000;
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