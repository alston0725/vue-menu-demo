import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/vue-menu-demo/', // 打包時的資源前綴路徑
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // 將 '@' 指向 src 目錄
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://684faa72e7c42cfd179568a8.mockapi.io',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
