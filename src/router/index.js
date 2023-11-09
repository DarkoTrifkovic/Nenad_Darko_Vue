import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Movies from "@/components/Movies.vue";
import Movie from "@/components/Movie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/genre",
  },
  {
    path: "/genre/:id",
    component: Movies,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
