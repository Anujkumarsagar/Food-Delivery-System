import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default {
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
};

