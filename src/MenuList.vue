<template>
  <el-card>
    <h2>菜單展示</h2>
    <el-table :data="menu" style="width: 100%">
      <el-table-column prop="name" label="名稱" />
      <el-table-column prop="description" label="描述" />
      <el-table-column prop="price" label="價格" />
    </el-table>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const menu = ref([])

onMounted(async () => {
  // 這裡用一個假 API，之後可換成你自己的 API
  const res = await axios.get('https://mocki.io/v1/0a7e2e2e-2e2e-4e2e-8e2e-2e2e2e2e2e2e')
  menu.value = res.data
})
</script>