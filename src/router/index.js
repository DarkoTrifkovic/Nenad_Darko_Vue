import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Movies from '@/components/Movies.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/all-movies',
    name: 'allMovies',
    component: Movies,
  },
  {
    path: '/crime-movies',
    name: 'crimeMovies',
    component: Movies,
  },
]

const router = new VueRouter({
  routes
})


export default router
