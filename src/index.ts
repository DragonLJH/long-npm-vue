import './index.css'
import App from './app.vue';
import router from "./router/index"
import { createApp } from 'vue';
import install from '@/components/index';
// import install from './index-components';
// import install from "long-npm-vue"

createApp(App).use(router).use(install).mount("#app")
