<template>
  <div class="vertical-menu">
    <div class="menu-header">
      <h3>菜單分類</h3>
    </div>
    
    <nav class="menu-nav">
      <!-- 主菜單項目 -->
      <div class="menu-section">
        <div class="menu-title">熱門推薦</div>
        <ul class="menu-list">
          <li 
            v-for="item in hotItems" 
            :key="item.id"
            class="menu-item"
            :class="{ active: activeItem === item.id }"
            @click="selectItem(item.id)"
          >
            <div class="menu-icon">
              <span v-html="item.icon"></span>
            </div>
            <span class="menu-text">{{ item.name }}</span>
          </li>
        </ul>
      </div>

      <!-- 分類選單 -->
      <div class="menu-section">
        <div class="menu-title">菜單分類</div>
        <ul class="menu-list">
          <li v-for="category in categories" :key="category.id">
            <div
              class="menu-item category-item"
              :class="{ active: activeItem === category.id, expanded: expandedCategories.includes(category.id) }"
              @click="toggleCategory(category.id)"
            >
              <div class="menu-icon">
                <span v-html="category.icon"></span>
              </div>
              <span class="menu-text">{{ category.name }}</span>
              <div class="expand-icon" :class="{ expanded: expandedCategories.includes(category.id) }">
                ▼
              </div>
            </div>
            <!-- 子選單只在該分類下方展開 -->
            <transition name="submenu-fade">
              <ul v-if="expandedCategories.includes(category.id)" class="submenu-list expanded">
                <li 
                  v-for="subItem in category.subItems" 
                  :key="subItem.id"
                  class="submenu-item"
                  :class="{ active: activeItem === subItem.id }"
                  @click.stop="selectItem(subItem.id)"
                >
                  <span class="submenu-text">{{ subItem.name }}</span>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>

      <!-- 其他選項 -->
      <div class="menu-section">
        <div class="menu-title">其他</div>
        <ul class="menu-list">
          <li 
            v-for="item in otherItems" 
            :key="item.id"
            class="menu-item"
            :class="{ active: activeItem === item.id }"
            @click="selectItem(item.id)"
          >
            <div class="menu-icon">
              <span v-html="item.icon"></span>
            </div>
            <span class="menu-text">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 響應式數據
const activeItem = ref('hot-1')
const expandedCategories = ref<string[]>([])

// 熱門推薦項目
const hotItems = ref([
  {
    id: 'hot-1',
    name: '今日特餐',
    icon: '🔥'
  },
  {
    id: 'hot-2',
    name: '人氣排行',
    icon: '⭐'
  },
  {
    id: 'hot-3',
    name: '新品上市',
    icon: '🆕'
  }
])

// 分類項目
const categories = ref([
  {
    id: 'category-1',
    name: '主餐',
    icon: '🍽️',
    subItems: [
      { id: 'main-1', name: '牛排類' },
      { id: 'main-2', name: '義大利麵' },
      { id: 'main-3', name: '燉飯類' },
      { id: 'main-4', name: '漢堡類' }
    ]
  },
  {
    id: 'category-2',
    name: '前菜',
    icon: '🥗',
    subItems: [
      { id: 'appetizer-1', name: '沙拉' },
      { id: 'appetizer-2', name: '湯品' },
      { id: 'appetizer-3', name: '小菜' }
    ]
  },
  {
    id: 'category-3',
    name: '飲品',
    icon: '🥤',
    subItems: [
      { id: 'drink-1', name: '咖啡' },
      { id: 'drink-2', name: '茶類' },
      { id: 'drink-3', name: '果汁' },
      { id: 'drink-4', name: '酒精飲料' }
    ]
  },
  {
    id: 'category-4',
    name: '甜點',
    icon: '🍰',
    subItems: [
      { id: 'dessert-1', name: '蛋糕' },
      { id: 'dessert-2', name: '冰淇淋' },
      { id: 'dessert-3', name: '布丁' }
    ]
  }
])

// 其他項目
const otherItems = ref([
  {
    id: 'other-1',
    name: '素食專區',
    icon: '🌱'
  },
  {
    id: 'other-2',
    name: '兒童餐',
    icon: '👶'
  },
  {
    id: 'other-3',
    name: '季節限定',
    icon: '🌸'
  }
])

// 方法
const selectItem = (itemId: string) => {
  activeItem.value = itemId
  console.log('選擇項目:', itemId)
}

const toggleCategory = (categoryId: string) => {
  const index = expandedCategories.value.indexOf(categoryId)
  if (index > -1) {
    expandedCategories.value.splice(index, 1)
  } else {
    expandedCategories.value.push(categoryId)
  }
}
</script>

<style scoped>
.vertical-menu {
  height: 100%;
  background-color: #1b1b1d;
  color: #fff;
  overflow-y: auto;
  /* 自訂細長滾輪 */
  scrollbar-width: thin;
  scrollbar-color: #999 #e0e0e0;
}
.vertical-menu::-webkit-scrollbar {
  width: 12px;
  background: #e0e0e0;
  border-radius: 8px;
}
.vertical-menu::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 8px;
  border: 3px solid #e0e0e0;
}
.vertical-menu::-webkit-scrollbar-thumb:hover {
  background: #666;
}

.menu-header {
  padding: 20px 16px 16px;
  border-bottom: 1px solid #333;
}
.menu-header h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffd04b;
}
.menu-nav {
  padding: 16px 0;
}
.menu-section {
  margin-bottom: 24px;
}
.menu-title {
  padding: 0 16px 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}
.menu-item:hover {
  background-color: #2a2a2c;
}
.menu-item.active {
  background-color: #ffd04b;
  color: #1b1b1d;
}
.menu-item.active .menu-icon {
  color: #1b1b1d;
}
.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}
.menu-text {
  flex: 1;
  font-size: 0.95rem;
  font-weight: 500;
}
.category-item {
  position: relative;
}
.expand-icon {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  color: #888;
}
.expand-icon.expanded {
  transform: rotate(180deg);
  color: #ffd04b;
}
.menu-item.active .expand-icon {
  color: #1b1b1d;
}
/* 子選單樣式 */
.submenu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #151517;
  overflow: hidden;
  border-radius: 0 0 8px 8px;
}
.submenu-item {
  padding: 10px 16px 10px 48px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  color: #ccc;
}
.submenu-item:hover {
  background-color: #2a2a2c;
  color: #fff;
}
.submenu-item.active {
  background-color: #ffd04b;
  color: #1b1b1d;
}
.submenu-text {
  font-weight: 400;
}
/* 子選單展開動畫 */
.submenu-fade-enter-active, .submenu-fade-leave-active {
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.submenu-fade-enter-from, .submenu-fade-leave-to {
  opacity: 0;
  max-height: 0;
}
.submenu-fade-enter-to, .submenu-fade-leave-from {
  opacity: 1;
  max-height: 200px;
}
/* 滾動條樣式 */
.vertical-menu::-webkit-scrollbar-track {
  background: #e0e0e0;
  border-radius: 8px;
}
/* 響應式設計 */
@media (max-width: 768px) {
  .vertical-menu {
    width: 100%;
    height: auto;
  }
  .menu-item {
    padding: 16px;
  }
  .submenu-item {
    padding: 12px 16px 12px 48px;
  }
}
</style>
