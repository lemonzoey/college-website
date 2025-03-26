<template>
  <div class="parttime-container">
    <div class="header section">
      <h1>兼职机会</h1>
      <div class="filters">
        <el-select v-model="selectedType" class="filter-item" placeholder="工作类型">
          <el-option label="所有类型" value="" />
          <el-option
            v-for="type in jobTypes"
            :key="type"
            :label="type"
            :value="type"
          />
        </el-select>
        <el-select v-model="selectedTime" class="filter-item" placeholder="工作时间">
          <el-option label="所有时间" value="" />
          <el-option label="周末" value="周末" />
          <el-option label="工作日" value="工作日" />
          <el-option label="时间灵活" value="时间灵活" />
        </el-select>
        <el-select v-model="selectedLocation" class="filter-item" placeholder="工作地点">
          <el-option label="所有地点" value="" />
          <el-option label="线下" value="线下" />
          <el-option label="远程" value="远程" />
        </el-select>
      </div>
    </div>

    <div class="jobs-grid">
      <el-card v-for="job in filteredJobs" :key="job.id" class="job-card" shadow="hover">
        <div class="job-header">
          <div class="company-info">
            <el-avatar :src="job.companyLogo" :size="50" />
            <div class="company-details">
              <h3>{{ job.title }}</h3>
              <p>{{ job.company }}</p>
            </div>
          </div>
          <div class="salary">{{ job.salary }}</div>
        </div>

        <div class="job-tags">
          <el-tag size="small" type="success">{{ job.type }}</el-tag>
          <el-tag size="small" type="warning">{{ job.time }}</el-tag>
          <el-tag size="small" type="info">{{ job.location }}</el-tag>
        </div>

        <p class="job-description">{{ job.description }}</p>

        <div class="job-requirements">
          <h4>任职要求：</h4>
          <ul>
            <li v-for="(req, index) in job.requirements" :key="index">
              {{ req }}
            </li>
          </ul>
        </div>

        <div class="job-benefits">
          <h4>工作福利：</h4>
          <div class="benefits-tags">
            <el-tag
              v-for="(benefit, index) in job.benefits"
              :key="index"
              size="small"
              effect="plain"
              class="benefit-tag"
            >
              {{ benefit }}
            </el-tag>
          </div>
        </div>

        <div class="job-actions">
          <el-button type="primary" @click="applyJob(job.id)">立即申请</el-button>
          <el-button plain @click="saveJob(job.id)">收藏职位</el-button>
        </div>
      </el-card>
    </div>

    <el-backtop />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { jobs } from '@/mock'

const selectedType = ref('')
const selectedTime = ref('')
const selectedLocation = ref('')

// 获取所有工作类型
const jobTypes = computed(() => {
  return [...new Set(jobs.map(job => job.type))]
})

// 过滤职位
const filteredJobs = computed(() => {
  return jobs.filter(job => {
    if (selectedType.value && job.type !== selectedType.value) return false
    if (selectedTime.value && job.time !== selectedTime.value) return false
    if (selectedLocation.value && job.location !== selectedLocation.value) return false
    return true
  })
})

const applyJob = (jobId) => {
  ElMessage({
    message: '申请已提交，请等待企业联系',
    type: 'success'
  })
}

const saveJob = (jobId) => {
  ElMessage({
    message: '职位已收藏',
    type: 'success'
  })
}
</script>

<style scoped>
.parttime-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  margin-bottom: 2rem;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.filter-item {
  width: 200px;
}

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.job-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.company-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.company-details h3 {
  margin: 0 0 0.25rem 0;
  color: #333;
}

.company-details p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.salary {
  color: #ff6b6b;
  font-weight: bold;
  font-size: 1.1rem;
}

.job-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.job-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.job-requirements {
  margin-bottom: 1rem;
}

.job-requirements h4,
.job-benefits h4 {
  color: #333;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.job-requirements ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.job-requirements li {
  color: #666;
  margin-bottom: 0.25rem;
  padding-left: 1rem;
  position: relative;
}

.job-requirements li::before {
  content: "•";
  color: var(--el-color-primary);
  position: absolute;
  left: 0;
}

.benefits-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.benefit-tag {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.job-actions {
  margin-top: auto;
  display: flex;
  gap: 1rem;
}

.job-actions button {
  flex: 1;
}

@media (max-width: 768px) {
  .filter-item {
    width: 100%;
  }

  .jobs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
