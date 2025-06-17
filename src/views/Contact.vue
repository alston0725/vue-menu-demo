<template>
  <div class="contact-page">
    <h1>聯絡我們</h1>
    <div class="contact-content">
      <div class="contact-info">
        <h2>位址資訊</h2>
        <div class="info-item">
          <strong>地址：</strong>
          <span>高雄市三民區</span>
        </div>
        <div class="info-item">
          <strong>電話：</strong>
          <span>0970-329-750</span>
        </div>
        <div class="info-item">
          <strong>營業時間：</strong>
          <span>週一至週日 11:00-22:00</span>
        </div>
        <div class="info-item">
          <strong>Email：</strong>
          <span>a09703975@restaurant.com</span>
        </div>
      </div>
      
      <div class="contact-form">
        <h2>留言給我們</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">姓名：</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email：</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="message">訊息：</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">送出訊息</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // 這裡可以添加表單提交邏輯
  alert('感謝您的訊息！我們會盡快回覆您。')
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-page {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-page h1 {
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  font-size: 2.5rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.contact-info, .contact-form {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
}

.contact-info h2, .contact-form h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.info-item {
  margin-bottom: 15px;
  line-height: 1.6;
}

.info-item strong {
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style> 