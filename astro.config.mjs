// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  image: {
    experimentalLayout: 'responsive',
    domains: ['astro.badg.es']
  },

  vite: {
    plugins: [tailwindcss(), icons({ compiler: 'astro' })]
  },

  experimental: {
    responsiveImages: true,
    svg: true
  }
})
