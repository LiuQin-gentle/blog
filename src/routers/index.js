import { createMemoryHistory, createRouter } from "vue-router";
export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/index.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
