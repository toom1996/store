import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        redirect: '/index',
        children: [
            {
                path: '/styles',
                component: () => import('@/view/styles/Index.vue')
            }
        ]
    },
    {
        path: '/index',
        component: () => import('@/view/site/Index.vue')
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router