import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  return {
    plugins: [react()],
    base: isDev ? '/' : '/pickle-pro/floorplan/',
    build: {
      outDir: 'dist/floorplan',
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index-react.html')
        },
        output: {
          entryFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  }
})
