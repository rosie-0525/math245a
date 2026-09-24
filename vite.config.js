import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// Every folder in lectures/ (except _template) is one deck, built to
// lectures/<name>/index.html alongside the course page.
const lectures = readdirSync('lectures', { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
  .map((d) => d.name)

export default defineConfig(({ command }) => ({
  // Served at https://rosie-0525.github.io/math245a/
  base: command === 'build' ? '/math245a/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        ...Object.fromEntries(lectures.map((n) => [n, resolve('lectures', n, 'index.html')])),
      },
    },
  },
}))
