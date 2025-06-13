import { createApp } from 'vue'
import App from './App.vue'

// 新增這兩行
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus) // 新增這行
app.mount('#app')