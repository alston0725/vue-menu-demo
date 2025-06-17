<template>
  <div class="news-page">
    <h1>最新消息</h1>
    <div class="news-list">
      <div class="news-item" v-for="news in newsItems" :key="news.id">
        <div class="news-date">{{ news.date }}</div>
        <div class="news-title">{{ news.title }}</div>
        <div class="news-content">{{ news.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newsItems = ref([
  {
    id: 1,
    date: '2024-01-15',
    title: '新菜單上市',
    content: '我們推出了全新的春季菜單，包含多道季節性特色料理，歡迎品嚐！'
  },
  {
    id: 2,
    date: '2024-01-10',
    title: '營業時間調整',
    content: '即日起，我們的營業時間調整為週一至週日 11:00-22:00，歡迎光臨！'
  },
  {
    id: 3,
    date: '2024-01-05',
    title: '年終優惠活動',
    content: '為感謝顧客支持，即日起至月底推出年終優惠活動，全館餐點享9折優惠！'
  }
])
</script>

<style scoped>
.news-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.news-page h1 {
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  font-size: 2.5rem;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.news-item {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #fafafa;
  transition: transform 0.2s ease;
}

.news-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.news-date {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.news-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.news-content {
  color: #666;
  line-height: 1.6;
}
</style> 