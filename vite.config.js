import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),
  tailwindcss()
  ],
  esbuild: {
    loader: 'jsx',
  },
  base: '.',
  resolve: {
    alias: {
      'runtime-config': `runtimeConfig.browser`,
  },
},
optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
