import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "@/routers/index.js";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount("#app");
