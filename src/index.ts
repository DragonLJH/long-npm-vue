import './index.css'
import App from './app.vue';
import router from "./router/index"
import { createApp } from 'vue';


createApp(App).use(router).mount("#app")
