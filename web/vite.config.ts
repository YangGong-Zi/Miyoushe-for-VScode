import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: true,
    port: 8090, // 启动端口
    // 设置代理
    proxy: {
      '/api': {
        target: 'https://bbs-api.miyoushe.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('/api'), ''),
        headers: {
          "Referer": "https://www.miyoushe.com/",
        }
      }
    }
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
