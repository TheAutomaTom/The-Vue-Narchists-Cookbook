import App from "./App.vue";
import router from "./router/index";
import { createApp } from "vue";
import { createPinia } from "pinia";
import FontAwesomeIcon from "./FontAwesome.config";

const _app = createApp(App);
_app.use(router);
_app.use(createPinia());

_app.component("fa", FontAwesomeIcon);

_app.mount("#app");
