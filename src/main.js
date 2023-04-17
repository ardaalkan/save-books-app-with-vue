import { createApp } from "vue";
import "./style.css";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import appHeader from "./components/common/appHeader.vue";

const app = createApp(App);
app.component("appHeader", appHeader);
app.use(router);
app.use(store);
app.mount("#app");
