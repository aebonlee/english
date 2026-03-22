import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { writeFileSync, copyFileSync } from 'fs'

const copy404Plugin = () => ({
  name: 'copy-404',
  closeBundle() {
    try {
      copyFileSync(
        resolve(__dirname, 'dist/index.html'),
        resolve(__dirname, 'dist/404.html')
      )
      console.log('✅ 404.html copied from index.html')
    } catch (e) {
      console.warn('⚠️ Could not copy 404.html:', e.message)
    }
  }
})

export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
