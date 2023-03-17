import { createRouter, createWebHashHistory } from 'vue-router'


const pages = require.context('@/view/', true, /\.ts$/)
const indexInformationPath = require.context('@/view/', true, /\.vue$/)
const routes = pages.keys().map((item: string) => {
    let path = item.replace(".", "").replace("/page.ts", "")
    let name = item.replace("./", "").replace("/page.ts", "")
    let indexPath = item.replace("/page.ts", "/index.vue")
    let component = indexInformationPath(indexPath).default
    let meta = pages(item).default
    return {
        path,
        name,
        component,
        meta
    }
})
export const routesPath = routes.map((item) => {
    return {
        path: item.path,
        title: item.meta.title
    }
})
console.log("routes", routes)
// const routes = [
//     { path: "/", component: () => import("../view/HomeView/index.vue") }
// ]

const router = createRouter({
    history: createWebHashHistory(), routes: [
        ...routes
    ]
})
router.beforeEach((to, from) => {
    if (to.path === "/") { return { name: 'HomeView' } }
})


export default router