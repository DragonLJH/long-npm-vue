// package/compenents/XX/index.ts
import LCard from '../src/components/LCard/index.vue';
import HelloWord from '../src/compenents/HelloWord/index.vue';
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



