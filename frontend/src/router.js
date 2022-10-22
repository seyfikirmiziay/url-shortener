import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/appHome"),
  },
  {
    name: "ResultPage",
    path: "/result",
    component: () => import("@/views/appResult"),
  },
  {
    name: "RouterPage",
    path: "/:code",
    component: () => import("@/views/appRouter"),
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
