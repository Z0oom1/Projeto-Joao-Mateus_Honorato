import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
  },
  build: {
    // Otimizações para reduzir tamanho do bundle
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Chunking estratégico
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'lenis': ['lenis'],
        },
      },
    },
    // Reduz o tamanho do CSS
    cssCodeSplit: true,
    // Ativa compressão gzip
    reportCompressedSize: true,
    // Aumenta o limite de aviso de tamanho
    chunkSizeWarningLimit: 500,
  },
  // Otimizações de dependências
  optimizeDeps: {
    include: ['react', 'react-dom', 'lenis'],
  },
})
