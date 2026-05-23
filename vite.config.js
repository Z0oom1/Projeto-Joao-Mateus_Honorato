import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
  },
  build: {
    // Chunking estratégico
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('lenis')) {
              return 'lenis';
            }
          }
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
