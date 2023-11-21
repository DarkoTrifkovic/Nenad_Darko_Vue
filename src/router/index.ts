import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MoviesHolder from "@/views/MoviesHolder.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/genre/All",
  },
  {
    path: "/genre/:id",
    component: MoviesHolder,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
