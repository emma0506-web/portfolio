import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' 让构建产物使用相对路径，兼容 GitHub Pages（子路径）与 Vercel（根路径）
export default defineConfig({
  plugins: [react()],
  base: './',
})
