<script setup>
import TopNavigation from './components/TopNavigation.vue';
import VerticalMenu from './components/VerticalMenu.vue';
</script>

<template>
  <div class="app-container">
    <TopNavigation />
    <div class="main-layout">
      <VerticalMenu class="sidebar" />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
}

.main-layout {
  display: flex;
  margin-top: 70px; /* 為頂部導覽列留出空間 */
}

/* 左側導覽列 */
.sidebar {
  width: 240px; 
  background-color: #444;
  height: calc(100vh - 70px);
  position: fixed;
  left: 0;
  overflow-y: auto;
}

/* 右側內容區 */
.main-content {
  margin-left: 240px; /* 避開 sidebar 寬度 */
  padding: 40px;
  flex: 1;
  background-color: #fff;
  overflow-y: auto;
  min-height: calc(100vh - 70px);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .sidebar {
    display: none; /* 在手機版隱藏側邊欄 */
  }
  
  .main-content {
    margin-left: 0;
    padding: 20px;
  }
}
</style>
