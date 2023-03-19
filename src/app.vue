<template>
    <div>
        <span v-for="(item, index) in routesPath" :key="index">
            <router-link :to="item.path">{{ item.title }}</router-link>
        </span>
    </div>
    <router-view></router-view>
</template>
<script  lang="ts" setup>
import { routesPath } from "@/router/index";



const name = "app";
console.log(routesPath)
</script>