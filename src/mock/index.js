// Mock user data
export const users = [
  {
    username: 'test',
    password: '123456'
  }
]

// Mock home data
export const homeData = {
  hero: {
    title: '欢迎来到大学生个人空间',
    description: '在这里，你可以学习、交友、找到合适的兼职机会'
  },
  quickAccess: [
    {
      icon: '📚',
      title: '学习中心',
      description: '浏览课程资源，提升学习效率',
      path: '/learning'
    },
    {
      icon: '👥',
      title: '社交圈',
      description: '结识新朋友，分享生活点滴',
      path: '/social'
    },
    {
      icon: '💼',
      title: '兼职机会',
      description: '发现适合你的兼职工作',
      path: '/part-time'
    }
  ]
}

// Mock learning data
export const courses = [
  {
    id: 1,
    name: '高等数学',
    description: '微积分与数学分析基础课程',
    instructor: '张教授',
    duration: '16周',
    schedule: '周一、周三 14:00-15:30',
    progress: 65
  },
  {
    id: 2,
    name: '计算机基础',
    description: '计算机科学与技术入门课程',
    instructor: '李教授',
    duration: '12周',
    schedule: '周二、周四 10:00-11:30',
    progress: 45
  },
  {
    id: 3,
    name: '英语写作',
    description: '学术英语写作与表达技巧',
    instructor: '王教授',
    duration: '8周',
    schedule: '周五 15:00-17:00',
    progress: 80
  }
]

// Mock social posts
export const posts = [
  {
    id: 1,
    username: '张同学',
    avatar: 'https://picsum.photos/50',
    content: '今天的高数课收获满满！教授讲解得特别清晰，终于理解了难点。',
    time: '10分钟前',
    likes: 15,
    comments: 3
  },
  {
    id: 2,
    username: '李同学',
    avatar: 'https://picsum.photos/51',
    content: '有人周末想一起去图书馆复习吗？准备组个小组一起学习。',
    time: '30分钟前',
    likes: 8,
    comments: 5
  },
  {
    id: 3,
    username: '王同学',
    avatar: 'https://picsum.photos/52',
    content: '分享一个学习方法：番茄工作法真的很有效，大家可以试试。',
    time: '1小时前',
    likes: 20,
    comments: 7
  }
]

// Mock part-time jobs
export const jobs = [
  {
    id: 1,
    title: '初中数学家教',
    salary: '150元/小时',
    type: '教育',
    time: '周末',
    location: '线下',
    description: '招聘在校大学生，辅导初中数学，要求耐心细致，数学基础扎实。',
    company: '优学教育',
    companyLogo: 'https://picsum.photos/40',
    requirements: ['大二及以上', '数学相关专业优先', '有家教经验优先'],
    benefits: ['时间灵活', '福利补贴', '带薪培训']
  },
  {
    id: 2,
    title: '新媒体文案',
    salary: '100元/篇',
    type: '文案',
    time: '时间灵活',
    location: '远程',
    description: '负责撰写公众号文章，题材不限，要求文笔流畅，有创意。',
    company: '创意文化传媒',
    companyLogo: 'https://picsum.photos/41',
    requirements: ['中文相关专业优先', '有写作经验', '熟悉新媒体运营'],
    benefits: ['远程办公', '稿费奖励', '实习证明']
  },
  {
    id: 3,
    title: '客服专员',
    salary: '30元/小时',
    type: '客服',
    time: '工作日',
    location: '远程',
    description: '负责在线解答客户问题，处理售后事宜，要求沟通能力强。',
    company: '智慧商城',
    companyLogo: 'https://picsum.photos/42',
    requirements: ['普通话标准', '性格开朗', '熟悉办公软件'],
    benefits: ['五险一金', '带薪年假', '节日福利']
  }
]

// Mock announcements
export const announcements = [
  {
    id: 1,
    title: '平台更新通知',
    content: '新增兼职模块，提供更多工作机会，欢迎同学们积极参与。',
    date: '2025-03-26',
    type: 'system'
  },
  {
    id: 2,
    title: '学习资源更新',
    content: '上线新的在线课程资源，包括编程、设计等热门课程，欢迎查看使用。',
    date: '2025-03-25',
    type: 'learning'
  },
  {
    id: 3,
    title: '社区指南更新',
    content: '请遵守社区规则，共同维护良好的交流环境。',
    date: '2025-03-24',
    type: 'social'
  }
]
