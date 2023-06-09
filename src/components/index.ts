// package/compenents/XX/index.ts
import LCard from './LCard/index.vue';
import HelloWord from './HelloWord/index.vue';
import LInput from './LInput/index.vue';
import LIcon from './LIcon/index.vue';
import LButton from './LButton/index.vue';
import LTabs from './LTabs/index.vue';
import LMessage from './LMessage/index.vue';
import LDrag from './LDrag/index.vue';
import LGrid from './LGrid/index.vue';
import LGridItem from './LGrid/item.vue';
import { showMsg } from './LMessage/indexM';
import { svgStyle, initSvg, arr } from './LIcon/indexS';
import type { App } from 'vue';
const install = function (app: App) {
    initSvg()
    app.component("MyInput", LInput);
    app.component("MyCard", LCard);
    app.component("MyHelloWord", HelloWord);
    app.component("MyIcon", LIcon);
    app.component("MyButton", LButton);
    app.component("MyTabs", LTabs);
    app.component("MyMessage", LMessage);
    app.component("MyDrag", LDrag);
    app.component("MyGrid", LGrid);
    app.component("MyGridItem", LGridItem);
    app.config.globalProperties.$showMsg = showMsg
    app.provide("iconArr", arr)
}


export default install

