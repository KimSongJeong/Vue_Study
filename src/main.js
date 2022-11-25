import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixin from "@/mixin";
import store from './store'

createApp(App).use(store).use(router).mixin(mixin).mount("#app");
