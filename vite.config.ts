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
        viewer: join(__dirname, 'src/page/index.html'),
        background: join(__dirname, 'src/background/index.tsx'),
      },
      output: {
        entryFileNames: 'assets/[name].js'
      },
    }
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src')
    }
  },
  plugins: [
    react(),
  ],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  optimizeDeps: {
    exclude: ['@sqlite.org/sqlite-wasm'],
  },
})
