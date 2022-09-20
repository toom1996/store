import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import MainLayout from "@/layouts/MainLayout.vue"

const routes:RouteRecordRaw[] = [
  {
    path: '/store',
    component: MainLayout,
    children: [
      {
        path: ':id',
        component: () => import('@/view/store/Goods.vue')
      }
    ]
  }, {
    path: '/',
    component: () => import('@/view/store/Goods.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router