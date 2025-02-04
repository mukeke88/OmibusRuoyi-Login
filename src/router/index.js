import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue"; // Import the Login component

const routes = [
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;