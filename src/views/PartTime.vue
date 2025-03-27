<template>
  <div class="part-time">
    <el-row>
      <el-col :span="24">
        <h2 class="page-title">兼职机会</h2>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="filter-card">
          <template #header>
            <div class="filter-header">
              <h3>筛选条件</h3>
            </div>
          </template>
          <el-form>
            <el-form-item label="工作类型">
              <el-select v-model="filterType" placeholder="选择类型" class="filter-select">
                <el-option label="家教" value="tutor" />
                <el-option label="程序开发" value="developer" />
                <el-option label="文案写作" value="writer" />
              </el-select>
            </el-form-item>
            <el-form-item label="工作时间">
              <el-radio-group v-model="filterTime">
                <el-radio label="weekend">周末</el-radio>
                <el-radio label="weekday">工作日</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <el-col :span="18">
        <el-card v-for="job in jobs" :key="job.id" class="job-card">
          <div class="job-header">
            <div class="job-title">
              <h3>{{ job.title }}</h3>
              <el-tag type="success">{{ job.salary }}</el-tag>
            </div>
            <div class="job-company">{{ job.company }}</div>
          </div>
          <p class="job-description">{{ job.description }}</p>
          <div class="job-tags">
            <el-tag v-for="tag in job.tags" :key="tag" size="small">{{ tag }}</el-tag>
          </div>
          <div class="job-footer">
            <span class="job-location">{{ job.location }}</span>
            <el-button type="primary" plain>申请</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const filterType = ref('')
const filterTime = ref('weekday')

const jobs = [
  {
    id: 1,
    title: '高中数学家教',
    company: '优学教育',
    salary: '150元/小时',
    description: '招聘在校大学生，辅导高中数学，工作时间灵活，地点可协商',
    location: '海淀区',
    tags: ['周末', '家教', '数学']
  },
  {
    id: 2,
    title: '网站开发助手',
    company: '科技有限公司',
    salary: '200元/天',
    description: '负责公司网站的日常维护和更新，要求熟悉HTML、CSS、JavaScript',
    location: '朝阳区',
    tags: ['工作日', '远程', '技术']
  },
  {
    id: 3,
    title: '新媒体运营',
    company: '创意工作室',
    salary: '100元/天',
    description: '负责公众号内容创作和运营，要求有较强的文字功底',
    location: '望京',
    tags: ['弹性', '文案', '运营']
  }
]
</script>

<style scoped>
.page-title {
  margin-bottom: 30px;
  color: #409EFF;
}

.filter-card {
  margin-bottom: 20px;
}

.filter-select {
  width: 100%;
}

.job-card {
  margin-bottom: 20px;
}

.job-header {
  margin-bottom: 15px;
}

.job-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.job-title h3 {
  margin: 0;
  font-size: 18px;
  color: #303133;
}

.job-company {
  font-size: 14px;
  color: #606266;
}

.job-description {
  margin: 10px 0;
  color: #606266;
  line-height: 1.6;
}

.job-tags {
  margin: 10px 0;
}

.job-tags .el-tag {
  margin-right: 8px;
}

.job-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.job-location {
  color: #909399;
}
</style>
