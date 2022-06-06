import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home-page.vue";
import About from "@/views/About-page.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
