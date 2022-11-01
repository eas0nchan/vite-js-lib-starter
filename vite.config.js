import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: './dist',
    lib: {
      entry: './src/index.js',
      formats: ['es', 'cjs']
    }
  }
})
