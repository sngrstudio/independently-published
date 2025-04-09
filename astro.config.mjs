// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/sngrcreative': 'https://sngrcreative.pages.dev'
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
