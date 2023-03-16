import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: "/", component: () => import("../view/HomeView/index.vue") }
]

const router = createRouter({
    history: createWebHistory(), routes
})


export default router