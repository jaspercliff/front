import App from "./App.vue";
import { createApp } from 'vue'
import plugin from "@/plugin";
const app = createApp(App)
    app.mount("#root");
app.use(plugin)