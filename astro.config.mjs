import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'
import UnoCSS from 'unocss/astro'
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS(), solidJs()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})
