<!--
 * @Author: v_liuqin05
 * @Date: 2025-07-30 16:58:57
 * @LastEditors: v_liuqin05
 * @LastEditTime: 2025-07-31 15:12:58
 * @Description: 首页
-->
<script setup>
import Header from '@/layouts/Header/index.vue';
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header style="border: 1px solid #e4e7ed"><Header /></el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main style="height: calc(100vh - 60px)">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped></style>
