import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import glsl from 'vite-plugin-glsl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    glsl()],
  server:{
    watch: {
      usePolling: true, // Helps in some environments like WSL or Docker
    },
    hmr:true,
    port: 3000,
    open:true,
  },
})
