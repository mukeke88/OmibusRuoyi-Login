import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from "./router";
import store from "./store"; // Import the Vuex store

const app = createApp(App);
app.use(router);
app.use(store); // Use the Vuex store
app.use(ElementPlus);
app.mount("#app");