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
  const res = await axios.get('https://684faa72e7c42cfd179568a8.mockapi.io/menu')
  menu.value = res.data
})

</script>