<template>
  <div class="home-container">
    <div class="hero section">
      <h1>欢迎来到大学生个人空间</h1>
      <p>在这里，你可以学习、交友、找到合适的兼职机会</p>
    </div>
    <div class="quick-access section">
      <h2>快速访问</h2>
      <div class="cards">
        <router-link to="/learning" class="card">
          <h3>📚 学习中心</h3>
          <p>浏览课程资源，提升学习效率</p>
        </router-link>
        <router-link to="/social" class="card">
          <h3>👥 社交圈</h3>
          <p>结识新朋友，分享生活点滴</p>
        </router-link>
        <router-link to="/part-time" class="card">
          <h3>💼 兼职机会</h3>
          <p>发现适合你的兼职工作</p>
        </router-link>
      </div>
    </div>
    <div class="announcements section">
      <h2>最新公告</h2>
      <div class="announcement-list">
        <div v-for="announcement in announcements" :key="announcement.id" class="announcement">
          <span class="date">{{ announcement.date }}</span>
          <h4>{{ announcement.title }}</h4>
          <p>{{ announcement.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const announcements = ref([
  {
    id: 1,
    date: '2025-03-26',
    title: '平台更新通知',
    content: '新增兼职模块，提供更多工作机会。'
  },
  {
    id: 2,
    date: '2025-03-25',
    title: '学习资源更新',
    content: '上线新的在线课程资源，欢迎查看使用。'
  },
  {
    id: 3,
    date: '2025-03-24',
    title: '社区指南',
    content: '请遵守社区规则，营造良好的交流环境。'
  }
])
</script>

<style scoped>
.home-container {
  padding: 2rem;
}

.section {
  max-width: 1200px;
  margin: 0 auto 2rem;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.hero {
  text-align: center;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
}

.hero h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.card {
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card h3 {
  color: #4CAF50;
  margin-bottom: 0.5rem;
}

.card p {
  color: #666;
  margin: 0;
}

h2 {
  color: #333;
  margin-bottom: 1.5rem;
}

.announcement-list {
  display: grid;
  gap: 1rem;
}

.announcement {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.date {
  color: #999;
  font-size: 0.9rem;
}

.announcement h4 {
  margin: 0.5rem 0;
  color: #333;
}

.announcement p {
  margin: 0;
  color: #666;
}
</style>
