  <template>
    <el-card>
      <h2>mockapi測試<唯讀></h2>
      <h3>僅展示，互動功能已註解</h3>
      <el-table :data="menu" style="width: 100%" border>
        <el-table-column label="名稱">
          <template #default="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="描述">
          <template #default="scope">
            {{ scope.row.description }}
          </template>
        </el-table-column>
        <el-table-column label="價格">
          <template #default="scope">
            {{ scope.row.price }}
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </template>

  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { fetchMenu } from '../api/menuApi'

  const menu = ref([])
  const getMenu = async () => {
    const res = await fetchMenu()
    menu.value = res.data
  }

  onMounted(getMenu)
  </script>

<!-- 
<template>
  <el-card>
    <h2>mockapi測試</h2>

    <el-button type="primary" @click="addItem">新增項目</el-button>

    <el-table :data="menu" style="width: 100%" border>
      <el-table-column label="名稱">
        <template #default="scope">
          <template v-if="editingId === scope.row.id">
            <el-input v-model="editCache.name" size="small" />
          </template>
          <template v-else>
            {{ scope.row.name }}
          </template>
        </template>
      </el-table-column>
      <el-table-column label="描述">
        <template #default="scope">
          <template v-if="editingId === scope.row.id">
            <el-input v-model="editCache.description" size="small" />
          </template>
          <template v-else>
            {{ scope.row.description }}
          </template>
        </template>
      </el-table-column>
      <el-table-column label="價格">
        <template #default="scope">
          <template v-if="editingId === scope.row.id">
            <el-input v-model="editCache.price" size="small" type="number" />
          </template>
          <template v-else>
            {{ scope.row.price }}
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <template v-if="editingId === scope.row.id">
            <el-button type="success" size="small" @click="confirmEdit(scope.row.id)">確定</el-button>
            <el-button size="small" @click="cancelEdit">取消</el-button>
          </template>
          <template v-else>
            <el-button type="primary" size="small" @click="startEdit(scope.row)">編輯</el-button>
            <el-button type="danger" size="small" @click="deleteItem(scope.row.id)">刪除</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

const menu = ref([])
const apiUrl = 'https://684faa72e7c42cfd179568a8.mockapi.io/menu'

const fetchMenu = async () => {
  const res = await axios.get(apiUrl)
  menu.value = res.data
}

onMounted(fetchMenu)

// 新增資料（模擬用）
const addItem = async () => {
  const newItem = {
    name: '新菜名',
    description: '新描述',
    price: Math.floor(Math.random() * 100) + 50
  }
  await axios.post(apiUrl, newItem)
  ElMessage.success('新增成功')
  fetchMenu()
}

const editingId = ref<string | null>(null)
const editCache = ref({ name: '', description: '', price: 0 })

const startEdit = (row: any) => {
  editingId.value = row.id
  editCache.value = { name: row.name, description: row.description, price: row.price }
}

const cancelEdit = () => {
  editingId.value = null
}

const confirmEdit = async (id: string) => {
  await axios.put(`${apiUrl}/${id}`, { ...editCache.value })
  ElMessage.success('編輯成功')
  editingId.value = null
  fetchMenu()
}

// 刪除資料
const deleteItem = async (id: string) => {
  await ElMessageBox.confirm('確定要刪除嗎？', '提示', {
    type: 'warning'
  })
  await axios.delete(`${apiUrl}/${id}`)
  ElMessage.success('刪除成功')
  fetchMenu()
}
</script> -->
