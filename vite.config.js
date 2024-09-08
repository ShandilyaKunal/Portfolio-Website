import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [vue()],
  
  // Base URL for GitHub Pages deployment
  base: '/Portfolio-Website/',  // Add your GitHub repo name here

  // PostCSS configuration for Tailwind CSS and autoprefixer
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
})
