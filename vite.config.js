import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss()
  ],
  esbuild: {
    loader: 'jsx',
  },
  base: '/landing-react/',
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
