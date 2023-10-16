import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/Todo.vue')
    },
    {
      path: '/plan',
      name: 'plan',
      component: () => import('@/views/Plan.vue')
    }
  ]
})

export default router
