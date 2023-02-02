import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path : '/detail/:id',
      name : 'detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path : '/admin',
      name : 'admin',
      component: () => import('../views/admin/HomeView.vue')
    }
  ]
})

export default router