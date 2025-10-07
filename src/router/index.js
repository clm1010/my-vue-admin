import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * @description 公开路由表
 */
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
