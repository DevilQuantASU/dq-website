import fs from 'node:fs'

fs.copyFileSync('dist/index.html', 'dist/404.html')
fs.mkdirSync('dist/about', { recursive: true })
fs.copyFileSync('dist/index.html', 'dist/about/index.html')
