// package/compenents/XX/index.ts
import LCard from './LCard/index.vue';
import HelloWord from './HelloWord/index.vue';
import LInput from './LInput/index.vue';
import LIcon from './LIcon/index.vue';
import LButton from './LButton/index.vue';
import LTabs from './LTabs/index.vue';
import type { App } from 'vue';
const install = function (app: App) {
    app.component("MyInput", LInput);
    app.component("MyCard", LCard);
    app.component("MyHelloWord", HelloWord);
    app.component("MyIcon", LIcon);
    app.component("MyButton", LButton);
    app.component("MyTabs", LTabs);
}


export default install

