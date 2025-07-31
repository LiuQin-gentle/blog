/*
 * @Author: v_liuqin05
 * @Date: 2025-07-30 17:50:19
 * @LastEditors: v_liuqin05
 * @LastEditTime: 2025-07-31 16:14:16
 * @Description: 路由配置
 */
import { createMemoryHistory, createRouter } from 'vue-router';
export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home/index.vue')
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});
export default router;
