<!--
 * @Author: v_liuqin05
 * @Date: 2025-07-30 16:58:57
 * @LastEditors: v_liuqin05
 * @LastEditTime: 2025-07-30 17:11:21
 * @Description: 首页
-->
<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>{{ msg }}</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main style="height: calc(100vh - 60px)">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
