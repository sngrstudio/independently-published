// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/sngrcreative': 'https://sngrcreative.pages.dev'
  },

  image: {
    experimentalLayout: 'responsive'
  },

  vite: {
    plugins: [tailwindcss(), icons({ compiler: 'astro' })]
  },

  experimental: {
    responsiveImages: true,
    svg: true
  }
})
