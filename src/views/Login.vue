<template>
  <div class="login-container">
    <div class="animated-bg"></div>
    <div class="login-box">
      <div class="login-header">
        <img src="@/assets/logo.svg" alt="logo" class="logo" />
        <h2>大学生个人空间</h2>
        <p class="subtitle">学习、社交、兼职，尽在掌握</p>
      </div>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <el-input
            v-model="username"
            placeholder="用户名（默认：test）"
            :prefix-icon="UserFilled"
          />
        </div>
        <div class="form-group">
          <el-input
            v-model="password"
            type="password"
            placeholder="密码（默认：123456）"
            :prefix-icon="Lock"
            show-password
          />
        </div>
        <div class="form-options">
          <el-checkbox v-model="rememberMe">记住我</el-checkbox>
          <a href="#" class="forgot-password">忘记密码？</a>
        </div>
        <el-button type="primary" native-type="submit" :loading="loading" class="login-button">
          登录
        </el-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { UserFilled, Lock } from '@element-plus/icons-vue'
import { users } from '@/mock'

const router = useRouter()
const username = ref('test')
const password = ref('123456')
const rememberMe = ref(false)
const loading = ref(false)

const handleLogin = () => {
  loading.value = true
  
  // 模拟登录延迟
  setTimeout(() => {
    const user = users.find(u => u.username === username.value && u.password === password.value)
    
    if (user) {
      localStorage.setItem('isLoggedIn', 'true')
      if (rememberMe.value) {
        localStorage.setItem('username', username.value)
      }
      router.push('/')
      ElMessage.success('登录成功！')
    } else {
      ElMessage.error('用户名或密码错误')
    }
    loading.value = false
  }, 1000)
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    #2196F3,
    #4CAF50,
    #00BCD4,
    #3F51B5,
    #2196F3
  );
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  z-index: 0;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.login-box {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  padding: 2.5rem;
  position: relative;
  z-index: 1;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

h2 {
  color: #333;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  position: relative;
}

:deep(.el-input__inner) {
  height: 48px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
}

:deep(.el-input__prefix) {
  font-size: 1.2rem;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forgot-password {
  color: var(--el-color-primary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.forgot-password:hover {
  color: var(--el-color-primary-dark-2);
  text-decoration: underline;
}

.login-button {
  width: 100%;
  height: 48px;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: transform 0.2s;
}

.login-button:hover {
  transform: translateY(-2px);
}

:deep(.el-checkbox__label) {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 480px) {
  .login-box {
    margin: 1rem;
    padding: 2rem;
  }
}
</style>
