<template>
  <div class="social">
    <el-row>
      <el-col :span="24">
        <h2 class="page-title">社交圈</h2>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="16">
        <div class="post-form">
          <el-input
            v-model="newPost"
            type="textarea"
            rows="3"
            placeholder="分享你的想法..."
          />
          <el-button type="primary" class="post-btn">发布</el-button>
        </div>

        <div class="posts">
          <el-card v-for="post in posts" :key="post.id" class="post-card">
            <div class="post-header">
              <el-avatar :size="40">{{ post.author.charAt(0) }}</el-avatar>
              <div class="post-info">
                <h3>{{ post.author }}</h3>
                <span class="time">{{ post.time }}</span>
              </div>
            </div>
            <p class="post-content">{{ post.content }}</p>
            <div class="post-actions">
              <el-button text>点赞</el-button>
              <el-button text>评论</el-button>
              <el-button text>分享</el-button>
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="8">
        <el-card class="trending-card">
          <template #header>
            <div class="trending-header">
              <h3>热门话题</h3>
            </div>
          </template>
          <el-tag v-for="topic in trendingTopics" 
            :key="topic"
            class="trending-topic"
          >
            {{ topic }}
          </el-tag>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newPost = ref('')

const posts = [
  {
    id: 1,
    author: '小明',
    time: '10分钟前',
    content: '今天图书馆学习真是收获满满！'
  },
  {
    id: 2,
    author: '小红',
    time: '30分钟前',
    content: '有人周末要去参加社团活动吗？'
  },
  {
    id: 3,
    author: '小华',
    time: '1小时前',
    content: '分享一个学习编程的好方法：多动手实践！'
  }
]

const trendingTopics = [
  '#期末考试',
  '#社团招新',
  '#校园活动',
  '#求职经验',
  '#考研交流'
]
</script>

<style scoped>
.page-title {
  margin-bottom: 30px;
  color: #409EFF;
}

.post-form {
  margin-bottom: 20px;
}

.post-btn {
  margin-top: 10px;
  float: right;
}

.post-card {
  margin-bottom: 20px;
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.post-info {
  margin-left: 10px;
}

.post-info h3 {
  margin: 0;
  font-size: 16px;
}

.time {
  font-size: 12px;
  color: #909399;
}

.post-content {
  margin: 15px 0;
}

.post-actions {
  border-top: 1px solid #EBEEF5;
  padding-top: 10px;
  margin-top: 10px;
}

.trending-card {
  position: sticky;
  top: 20px;
}

.trending-topic {
  margin: 0 10px 10px 0;
}
</style>
