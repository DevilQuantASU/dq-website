import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Preload the Latin Lexend file so text renders in its final face sooner. The font is
// otherwise discovered only after the CSS loads, which delayed LCP (a text block) by
// ~0.8 s on throttled mobile. The file name is hashed, so it is read from the bundle.
const preloadLexend = () => ({
  name: 'preload-lexend',
  transformIndexHtml: {
    order: 'post',
    handler(html, ctx) {
      const font = ctx.bundle && Object.keys(ctx.bundle).find((f) => /lexend-latin-wght-normal-[\w-]+\.woff2$/.test(f))
      if (!font) return html
      return [{
        tag: 'link',
        attrs: { rel: 'preload', href: `./${font}`, as: 'font', type: 'font/woff2', crossorigin: '' },
        injectTo: 'head',
      }]
    },
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), preloadLexend()],
  base: './',
})
