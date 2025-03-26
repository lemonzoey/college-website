<template>
  <nav class="nav-container">
    <div class="nav-content">
      <router-link to="/" class="logo">
        大学生空间
      </router-link>
      <div class="nav-links">
        <router-link to="/home" class="nav-link">
          首页
        </router-link>
        <router-link to="/learning" class="nav-link">
          学习
        </router-link>
        <router-link to="/social" class="nav-link">
          社交
        </router-link>
        <router-link to="/part-time" class="nav-link">
          兼职
        </router-link>
      </div>
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

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #f5f5f5;
  color: #4CAF50;
}

.nav-link.router-link-active {
  color: #4CAF50;
  background-color: #f5f5f5;
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
