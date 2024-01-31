import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    open: true,
    port: 8080
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: './', // 空字符串或 `./`（用于嵌入形式的开发）
  build: {
    outDir: '../dist/', // 打包目录
    assetsDir: 'static',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/main.js',
        entryFileNames: 'static/js/main.js',
        assetFileNames: 'static/[ext]/main.[ext]'
      },
    },
  },
})
