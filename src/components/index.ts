// package/compenents/XX/index.ts
import LCard from './LCard/index.vue';
import HelloWord from './HelloWord/index.vue';
import type { App } from 'vue';

export const MyCard = {
    install: function (app: App) {
        app.component("MyCard", LCard);
    }
}
export const MyHelloWord = {
    install: function (app: App) {
        app.component("MyHelloWord", HelloWord);
    }
}


const install = (app: App) => {
    app.component("MyCard", LCard);
    app.component("MyHelloWord", HelloWord);
}

export default install
