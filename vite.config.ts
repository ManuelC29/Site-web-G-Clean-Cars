import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/G-Clean-Cars',
  server: { port: 5173 },
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
