<template>
  <div class="tabs-view">
    <MyTabs :active="tabList.active" :tabsType="tabList.tabsType" :tabsData="tabList.tabsData">
      <div class="active" path="path1">path1</div>
      <div path="path2">path2</div>
      <div path="path3">path3</div>
    </MyTabs>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
const tabList = {
  active: 1,
  tabsType: "card",
  tabsData: [
    {
      to: "path1",
      path: "path1",
      title: "to1",
    },
    {
      to: "path2",
      path: "path2",
      title: "to2",
    },
    {
      to: "path3",
      path: "path3",
      title: "to3",
    },
  ],
};

onMounted(() => {});
</script>