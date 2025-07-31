/*
 * @Author: v_liuqin05
 * @Date: 2025-07-28 10:48:38
 * @LastEditors: v_liuqin05
 * @LastEditTime: 2025-07-31 16:14:54
 * @Description: 项目入口文件
 */
import router from '@/routers/index.js';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount('#app');
