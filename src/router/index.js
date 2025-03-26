import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Learning from '../views/Learning.vue'
import Social from '../views/Social.vue'
import PartTime from '../views/PartTime.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/learning',
      name: 'learning',
      component: Learning,
      meta: { requiresAuth: true }
    },
    {
      path: '/social',
      name: 'social',
      component: Social,
      meta: { requiresAuth: true }
    },
    {
      path: '/part-time',
      name: 'part-time',
      component: PartTime,
      meta: { requiresAuth: true }
    }
  ]
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true'
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated) {
    next('/home')
  } else {
    next()
  }
})

export default router
