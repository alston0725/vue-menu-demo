<template>
  <nav class="top-navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">
          <h1>美食餐廳</h1>
        </router-link>
      </div>
      
      <div class="nav-menu">
        <router-link to="/" class="nav-link" active-class="active">
          菜單
        </router-link>
        <router-link to="/about" class="nav-link" active-class="active">
          關於我們
        </router-link>
        <router-link to="/news" class="nav-link" active-class="active">
          最新消息
        </router-link>
        <router-link to="/contact" class="nav-link" active-class="active">
          聯絡我們
        </router-link>
      </div>
      
      <div class="nav-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
    <!-- 手機版遮罩 -->
    <div v-if="isMobileMenuOpen" class="mobile-menu-overlay" @click="closeMobileMenu"></div>
    <!-- 手機版側邊選單 -->
    <div class="mobile-side-menu" :class="{ 'active': isMobileMenuOpen }">
      <div class="side-menu-header">
        <span class="brand-title">美食餐廳</span>
        <button class="close-btn" @click="closeMobileMenu">✕</button>
      </div>
      <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">
        菜單
      </router-link>
      <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">
        關於我們
      </router-link>
      <router-link to="/news" class="mobile-nav-link" @click="closeMobileMenu">
        最新消息
      </router-link>
      <router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu">
        聯絡我們
      </router-link>
    </div>
  </nav>

  <!-- 新增：右下角Line按鈕 -->
  <template v-if="true">
    <a
      href="https://line.me/ti/p/0snVxtdKin" 
      class="line-float-btn" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="加入Line"
    >
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#06C755"/>
        <path d="M18 8C12.2 8 7.5 11.87 7.5 16.44c0 2.6 1.8 4.9 4.6 6.36-.2.7-.7 2.3-.8 2.7 0 0-.01.09.04.13.05.04.12.01.12.01.16-.02 2.3-1.5 3.2-2.1.8.12 1.6.18 2.4.18 5.8 0 10.5-3.87 10.5-8.44S23.8 8 18 8zM14.1 17.7h-1.1c-.13 0-.24-.1-.24-.23v-3.1c0-.13.11-.23.24-.23h1.1c.13 0 .24.1.24.23v3.1c0 .13-.11.23-.24.23zm2.7 0h-1.1c-.13 0-.24-.1-.24-.23v-3.1c0-.13.11-.23.24-.23h1.1c.13 0 .24.1.24.23v3.1c0 .13-.11.23-.24.23zm2.7 0h-1.1c-.13 0-.24-.1-.24-.23v-3.1c0-.13.11-.23.24-.23h1.1c.13 0 .24.1.24.23v3.1c0 .13-.11.23-.24.23z" fill="#fff"/>
      </svg>
    </a>
  </template>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.top-navigation {
  background-color: #2c3e50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-brand .brand-link {
  text-decoration: none;
  color: white;
}

.nav-brand h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 10px 0;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: #3498db;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3498db;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
}

/* 新增：手機版遮罩 */
.mobile-menu-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1999;
}
/* 新增：手機側邊選單 */
.mobile-side-menu {
  position: fixed;
  top: 0; left: 0;
  width: 80vw; max-width: 320px; height: 100vh;
  background: #2c3e50;
  z-index: 2000;
  transform: translateX(-100%);
  transition: transform 0.3s;
  display: flex; flex-direction: column;
  padding: 0;
}
.mobile-side-menu.active {
  transform: translateX(0);
}
.side-menu-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px;
  border-bottom: 1px solid #34495e;
}
.brand-title {
  color: #ffd04b;
  font-size: 1.3rem;
  font-weight: bold;
}
.close-btn {
  background: none; border: none; color: #fff; font-size: 2rem; cursor: pointer;
}

.mobile-nav-link {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 18px 24px;
  border-bottom: 1px solid #34495e;
}

.mobile-nav-link:hover {
  color: #ffd04b;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  .nav-toggle {
    display: flex;
  }
  .mobile-side-menu {
    display: flex;
  }
  .mobile-side-menu.active {
    display: flex;
  }
  .nav-brand h1 {
    font-size: 1.5rem;
  }
}

.line-float-btn {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 3000;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #06C755;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  transition: box-shadow 0.2s, transform 0.2s;
}
.line-float-btn:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.28);
  transform: scale(1.08);
}
</style> 