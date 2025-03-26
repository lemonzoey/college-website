<template>
  <div class="learning-container">
    <div class="header section">
      <h1>学习中心</h1>
      <div class="stats">
        <div class="stat-item">
          <h3>{{ activeCourses }}</h3>
          <p>进行中的课程</p>
        </div>
        <div class="stat-item">
          <h3>{{ averageProgress }}%</h3>
          <p>平均完成度</p>
        </div>
      </div>
    </div>

    <div class="courses section">
      <div class="section-header">
        <h2>我的课程</h2>
        <el-input
          v-model="searchQuery"
          placeholder="搜索课程..."
          :prefix-icon="Search"
          class="search-input"
        />
      </div>
      
      <div class="course-grid">
        <div v-for="course in filteredCourses" :key="course.id" class="course-card">
          <div class="course-header">
            <h3>{{ course.name }}</h3>
            <el-tag size="small" type="success">进行中</el-tag>
          </div>
          
          <div class="course-info">
            <p><el-icon><User /></el-icon> {{ course.instructor }}</p>
            <p><el-icon><Timer /></el-icon> {{ course.duration }}</p>
            <p><el-icon><Calendar /></el-icon> {{ course.schedule }}</p>
          </div>
          
          <div class="course-progress">
            <span class="progress-text">学习进度</span>
            <el-progress 
              :percentage="course.progress"
              :color="getProgressColor(course.progress)"
            />
          </div>
          
          <div class="course-actions">
            <el-button type="primary">继续学习</el-button>
            <el-button plain>课程详情</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search, User, Timer, Calendar } from '@element-plus/icons-vue'
import { courses } from '@/mock'

const searchQuery = ref('')

const filteredCourses = computed(() => {
  return courses.filter(course => 
    course.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const activeCourses = computed(() => courses.length)
const averageProgress = computed(() => {
  const total = courses.reduce((sum, course) => sum + course.progress, 0)
  return Math.round(total / courses.length)
})

const getProgressColor = (percentage) => {
  if (percentage < 30) return '#909399'
  if (percentage < 70) return '#e6a23c'
  return '#67c23a'
}
</script>

<style scoped>
.learning-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  margin-bottom: 2rem;
}

.stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.stat-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  flex: 1;
}

.stat-item h3 {
  color: var(--el-color-primary);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.stat-item p {
  color: #666;
  margin: 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.search-input {
  width: 300px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.course-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #eee;
  transition: transform 0.2s, box-shadow 0.2s;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.course-header h3 {
  margin: 0;
  color: #333;
  font-size: 1.2rem;
}

.course-info {
  margin-bottom: 1.5rem;
}

.course-info p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  margin: 0.5rem 0;
}

.course-progress {
  margin-bottom: 1.5rem;
}

.progress-text {
  display: block;
  color: #666;
  margin-bottom: 0.5rem;
}

.course-actions {
  display: flex;
  gap: 1rem;
}

.course-actions button {
  flex: 1;
}

:deep(.el-progress-bar__inner) {
  transition: all 0.3s ease;
}

h1 {
  color: #333;
  margin: 0;
}

h2 {
  color: #333;
  margin: 0;
}
</style>
