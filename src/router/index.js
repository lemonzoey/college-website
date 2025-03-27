import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/learning',
      name: 'learning',
      component: () => import('@/views/Learning.vue')
    },
    {
      path: '/social',
      name: 'social',
      component: () => import('@/views/Social.vue')
    },
    {
      path: '/part-time',
      name: 'part-time',
      component: () => import('@/views/PartTime.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  if (to.name !== 'login' && !isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
