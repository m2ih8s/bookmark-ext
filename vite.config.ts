import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join, resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        popup: join(__dirname, 'src/popup/index.html'),
        manager: join(__dirname, 'src/manager/index.html'),
      },
      output: {
        entryFileNames: 'asset/[name].js'
      },
    }
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src')
    }
  },
  plugins: [react()],
})
