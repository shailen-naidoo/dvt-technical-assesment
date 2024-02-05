import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Index.vue'),
    },
    {
      path: '/cart',
      component: () => import('@/pages/cart/Index.vue'),
    },
  ],
})

export default router
