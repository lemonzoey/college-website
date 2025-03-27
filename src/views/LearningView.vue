<template>
  <div class="learning">
    <el-row>
      <el-col :span="24">
        <h2 class="page-title">学习中心</h2>
      </el-col>
    </el-row>
    
    <el-row :gutter="20" class="course-list">
      <el-col v-for="course in courses" :key="course.id" :span="8">
        <el-card class="course-card">
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
          <el-tag>{{ course.category }}</el-tag>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const courses = [
  {
    id: 1,
    title: '计算机基础',
    description: '学习计算机科学的基本概念和原理',
    category: '计算机'
  },
  {
    id: 2,
    title: '英语口语',
    description: '提高英语口语交际能力',
    category: '语言'
  },
  {
    id: 3,
    title: '高等数学',
    description: '掌握高等数学的核心概念',
    category: '数学'
  }
]
</script>

<style scoped>
.page-title {
  margin-bottom: 30px;
  color: #409EFF;
}

.course-list {
  margin-top: 20px;
}

.course-card {
  height: 100%;
  margin-bottom: 20px;
}

.course-card h3 {
  margin-bottom: 10px;
  color: #303133;
}

.course-card p {
  margin-bottom: 15px;
  color: #606266;
}
</style>
