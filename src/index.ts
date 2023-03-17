import './index.css'
import App from './app.vue';
import router from "./router/index"
import { createApp } from 'vue';
// import { MyCard } from '@/components/index';
// import { MyCard } from './index-components';
// import { MyCard } from "long-npm-vue"

createApp(App).use(router).mount("#app")
