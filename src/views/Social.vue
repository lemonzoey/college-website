<template>
  <div class="social-container">
    <div class="content">
      <div class="post-form section">
        <div class="form-header">
          <img :src="'https://picsum.photos/53'" alt="avatar" class="user-avatar" />
          <el-input
            v-model="newPost"
            type="textarea"
            :rows="3"
            placeholder="分享你的想法..."
            resize="none"
          />
        </div>
        <div class="form-footer">
          <div class="attachments">
            <el-button :icon="PictureRounded" plain>图片</el-button>
            <el-button :icon="VideoCamera" plain>视频</el-button>
            <el-button :icon="Link" plain>链接</el-button>
          </div>
          <el-button type="primary" @click="createPost" :loading="posting">
            发布
          </el-button>
        </div>
      </div>

      <div class="posts">
        <div v-for="post in posts" :key="post.id" class="post section">
          <div class="post-header">
            <div class="user-info">
              <img :src="post.avatar" alt="avatar" class="user-avatar" />
              <div class="post-meta">
                <h3>{{ post.username }}</h3>
                <span class="time">{{ post.time }}</span>
              </div>
            </div>
            <el-dropdown trigger="click">
              <el-icon class="more-actions"><MoreFilled /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>收藏</el-dropdown-item>
                  <el-dropdown-item>举报</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>

          <div class="post-content">
            <p>{{ post.content }}</p>
          </div>

          <div class="post-actions">
            <el-button :icon="StarFilled" plain @click="likePost(post.id)">
              点赞 ({{ post.likes }})
            </el-button>
            <el-button :icon="ChatRound" plain @click="commentPost(post.id)">
              评论 ({{ post.comments }})
            </el-button>
            <el-button :icon="Share" plain>
              分享
            </el-button>
          </div>
        </div>
      </div>

      <div v-if="loading" class="loading-more">
        <el-spinner />
      </div>
    </div>

    <div class="sidebar">
      <div class="trending section">
        <h3>热门话题</h3>
        <div class="trending-topics">
          <div v-for="topic in trendingTopics" :key="topic.id" class="topic">
            <span class="topic-name">#{{ topic.name }}</span>
            <span class="topic-count">{{ topic.count }}个讨论</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  PictureRounded,
  VideoCamera,
  Link,
  MoreFilled,
  StarFilled,
  ChatRound,
  Share
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { posts as mockPosts } from '@/mock'

const posts = ref(mockPosts)
const newPost = ref('')
const posting = ref(false)
const loading = ref(false)

const trendingTopics = ref([
  { id: 1, name: '期末复习', count: 1234 },
  { id: 2, name: '校园活动', count: 856 },
  { id: 3, name: '考研经验', count: 654 },
  { id: 4, name: '实习机会', count: 432 },
  { id: 5, name: '社团招新', count: 321 }
])

const createPost = () => {
  if (!newPost.value.trim()) {
    ElMessage.warning('请输入内容')
    return
  }
  
  posting.value = true
  setTimeout(() => {
    posts.value.unshift({
      id: Date.now(),
      username: '我',
      avatar: 'https://picsum.photos/53',
      content: newPost.value,
      time: '刚刚',
      likes: 0,
      comments: 0
    })
    newPost.value = ''
    posting.value = false
    ElMessage.success('发布成功')
  }, 500)
}

const likePost = (id) => {
  const post = posts.value.find(p => p.id === id)
  if (post) {
    post.likes++
  }
}

const commentPost = (id) => {
  ElMessage('评论功能开发中...')
}
</script>

<style scoped>
.social-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

.form-header {
  display: flex;
  gap: 1rem;
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.attachments {
  display: flex;
  gap: 0.5rem;
}

.post {
  margin-bottom: 1.5rem;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.post-meta h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.time {
  color: #999;
  font-size: 0.9rem;
}

.more-actions {
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: #666;
}

.post-content {
  margin: 1rem 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}

.post-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.trending {
  position: sticky;
  top: 90px;
}

.trending h3 {
  margin: 0 0 1rem 0;
  color: #333;
}

.topic {
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.topic:last-child {
  border-bottom: none;
}

.topic:hover {
  background: #f9f9f9;
}

.topic-name {
  display: block;
  color: var(--el-color-primary);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.topic-count {
  color: #999;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .social-container {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    display: none;
  }
}
</style>
