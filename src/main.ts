import { createApp } from "vue";
import createStore from "./store";
import "./style.css";
import App from "./App.vue";
import "video.js/dist/video-js.css";
import "./assets/css/var.css";

function createMain() {
  const app = createApp(App);
  const pinia = createStore();
  app.use(pinia);
  app.mount("#app");
}

createMain();
