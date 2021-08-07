import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./pages/index.vue";
import About from "./pages/about.vue";
import "./index.css";

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { path: "/:query?", component: Home },
    { path: "/about", component: About },
  ],
});

createApp(App).use(router).mount("#app");
