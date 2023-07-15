import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import singleMovie from '../views/singleMovie.vue'
import SearchView from '../views/SearchView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/singleMovie/:id',
      name: 'singleMovie',
      component: singleMovie
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    }
   
  ]
})

export default router
