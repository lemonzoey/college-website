<template>
  <nav class="nav-container">
    <div class="nav-content">
      <router-link to="/" class="logo">
        大学生空间
      </router-link>
      <el-menu 
        class="nav-menu" 
        mode="horizontal" 
        router 
        :ellipsis="false"
        background-color="transparent"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/learning">学习</el-menu-item>
        <el-menu-item index="/social">社交</el-menu-item>
        <el-menu-item index="/part-time">兼职</el-menu-item>
      </el-menu>
      <div class="user-actions">
        <button @click="handleLogout" class="logout-btn">
          退出登录
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ElMenu, ElMenuItem } from 'element-plus'

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('isLoggedIn')
  router.push('/login')
}
</script>

<style scoped>
.nav-container {
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4CAF50;
  text-decoration: none;
}

.nav-menu {
  flex: 1;
  justify-content: flex-start;
  border: none;
  margin-left: 2rem;
}

:deep(.el-menu) {
  border-bottom: none !important;
}

.nav-menu :deep(.el-menu-item) {
  font-weight: 500;
  height: 50px;
  line-height: 50px;
  color: #666;
  padding: 0 2rem;
  border-bottom: none !important;
}

.nav-menu :deep(.el-menu-item:hover) {
  color: #4CAF50;
  background-color: #f5f5f5;
}

.nav-menu :deep(.el-menu-item.is-active) {
  color: #4CAF50;
  background-color: #f5f5f5;
}

.nav-menu :deep(.el-menu--horizontal) {
  border-bottom: none;
}

.user-actions {
  display: flex;
  align-items: center;
}

.logout-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ff4444;
  background: transparent;
  color: #ff4444;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.logout-btn:hover {
  background: #ff4444;
  color: white;
}
</style>
