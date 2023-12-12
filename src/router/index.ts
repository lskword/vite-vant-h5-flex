
import {createRouter, createWebHistory} from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: () => import('@/views/one/index.vue') },
        { path: '/two', name: 'two', component: () => import('@/views/two/index.vue') },
    ]
})
// 导出
export default router