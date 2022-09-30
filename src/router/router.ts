import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/view/site/Index.vue')
    },
    {
        path: '/styles',
        component: () => import('@/layouts/MainLayout.vue'),
        redirect: '/styles/all',
        children: [
            {
                path: 'all',
                component: () => import('@/view/styles/Index.vue')
            }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router