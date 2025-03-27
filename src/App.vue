<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/" class="logo">大学生空间</router-link>
      <el-menu mode="horizontal" router class="menu">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/learning">学习</el-menu-item>
        <el-menu-item index="/social">社交</el-menu-item>
        <el-menu-item index="/part-time">兼职</el-menu-item>
      </el-menu>
      <el-button type="danger" plain @click="logout">退出</el-button>
    </nav>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  router.push('/login')
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  line-height: 1.6;
  background: #f5f5f5;
}

#app {
  min-height: 100vh;
}

.nav {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
  color: #409EFF;
  text-decoration: none;
  margin-right: 20px;
}

.menu {
  flex: 1;
  border: none;
}

.menu :deep(.el-menu-item) {
  height: 56px;
  line-height: 56px;
}

.main {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 4px;
  min-height: calc(100vh - 96px);
}
</style>
