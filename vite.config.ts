import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Tailwind CSS and PostCSS enabled
export default defineConfig({
  plugins: [react()],
})
