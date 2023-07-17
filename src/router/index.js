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
      path: '/movies',
      name: 'movies',
      component: () => import('../views/MoviesView.vue')
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
      props: (route) => ({ results: JSON.parse(route.query.results) })
    },
    {
      path: '/series',
      name: 'series',
      component: () => import('../views/SeriesView.vue')
    }
  ]
})

export default router
