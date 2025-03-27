import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/learning',
      name: 'learning',
      component: () => import('@/views/LearningView.vue')
    },
    {
      path: '/social',
      name: 'social',
      component: () => import('@/views/SocialView.vue')
    },
    {
      path: '/part-time',
      name: 'part-time',
      component: () => import('@/views/PartTimeView.vue')
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
