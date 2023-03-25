import { createApp } from "vue";
import "./style.css";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import appHeader from "./components/common/appHeader.vue";
import bookMark from "./components/common/bookMarkList.vue";

const app = createApp(App);
app.component("appHeader", appHeader);
app.component("bookMark", bookMark);
app.use(router);
app.mount("#app");
