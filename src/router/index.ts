import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MoviesHolder from '@/views/MoviesHolder.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/genre/All",
  },
  {
    path: "/genre/:id",
    component: MoviesHolder,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
