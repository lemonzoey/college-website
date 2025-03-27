<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="welcome-card">
          <h1>{{ welcome.title }}</h1>
          <p>{{ welcome.description }}</p>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="feature-cards">
      <el-col :span="8" v-for="feature in features" :key="feature.title">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>{{ feature.icon }} {{ feature.title }}</span>
            </div>
          </template>
          <p>{{ feature.description }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
const welcome = {
  title: '欢迎来到大学生个人空间',
  description: '在这里，你可以学习、交友、找到合适的兼职机会'
}

const features = [
  {
    icon: '📚',
    title: '学习资源',
    description: '浏览课程资源，提升学习效率'
  },
  {
    icon: '👥',
    title: '社交圈',
    description: '结识新朋友，分享生活点滴'
  },
  {
    icon: '💼',
    title: '兼职机会',
    description: '发现适合你的兼职工作'
  }
]
</script>

<style scoped>
.home {
  padding: 20px 0;
}

.welcome-card {
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #409EFF, #36cfc9);
  color: white;
}

.welcome-card h1 {
  margin-bottom: 10px;
  font-size: 2rem;
}

.feature-cards {
  margin-top: 20px;
}

.card-header {
  font-size: 1.2rem;
  font-weight: bold;
}

.el-card {
  height: 100%;
  transition: transform 0.3s;
  transform: translateY(-5px);
}
</style>
