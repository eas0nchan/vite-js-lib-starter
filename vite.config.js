import { defineConfig } from 'vite'

export default defineConfig({
  test: { environment: 'node' },
  build: {
    outDir: './dist',
    lib: {
      entry: './src/index.js',
      formats: ['es', 'cjs']
    }
  }
})
