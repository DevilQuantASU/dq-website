// Offline checks for internal dead links. Run with `npm run check-links`.
// External URLs are checked separately by .github/workflows/links.yml.
import fs from 'node:fs'
import path from 'node:path'
import { allGuides } from '../src/data/guides/index.js'
import * as links from '../src/data/links.js'

const errors = []
const read = (file) => fs.readFileSync(file, 'utf8')
const lineOf = (text, index) => text.slice(0, index).split('\n').length

const sourceFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return sourceFiles(full)
    return /\.(jsx?|json)$/.test(entry.name) ? [full] : []
  })

const visibleSlugs = new Set(allGuides.map((guide) => guide.slug))

for (const file of sourceFiles('src')) {
  const text = read(file)

  // 1. Plain <a href="/path"> skips HashRouter and lands on 404.html, unless
  //    public/<path>/index.html exists (the static redirect pages).
  for (const match of text.matchAll(/<a\s[^>]*href="(\/[^"#]*)"/g)) {
    const route = match[1].split('?')[0].replace(/^\/|\/$/g, '')
    if (!fs.existsSync(path.join('public', route, 'index.html'))) {
      errors.push(`${file}:${lineOf(text, match.index)} plain href "${match[1]}" — use <Link to="${match[1]}">`)
    }
  }

  // 2. ?guide=<slug> must name a visible guide, or Resources silently shows the first one.
  for (const match of text.matchAll(/[?&]guide=([a-z0-9-]+)/g)) {
    if (!visibleSlugs.has(match[1])) {
      errors.push(`${file}:${lineOf(text, match.index)} guide "${match[1]}" does not exist or is hidden`)
    }
  }
}

// 3. In-guide anchors (href="#id") must match a section id in the same guide.
for (const guide of allGuides) {
  const ids = new Set(guide.sections.map((section) => section.id))
  for (const section of guide.sections) {
    for (const match of section.content.matchAll(/href="#([^"]+)"/g)) {
      if (!ids.has(match[1])) errors.push(`guide "${guide.slug}": anchor #${match[1]} has no matching section`)
    }
  }
}

// 4. Static redirect pages in public/ must match src/data/links.js.
for (const [name, constant] of [['discord', 'DISCORD_URL'], ['linkedin', 'LINKEDIN_URL'], ['sundevilcentral', 'SUNDEVILCENTRAL_URL']]) {
  const file = path.join('public', name, 'index.html')
  const urls = [...read(file).matchAll(/https?:\/\/[^"\s<]+/g)].map((match) => match[0])
  const stale = urls.filter((url) => url !== links[constant])
  if (urls.length === 0 || stale.length) {
    errors.push(`${file} must redirect to ${constant} (${links[constant]}), found: ${stale.join(', ') || 'no URL'}`)
  }
}

// 5. Headshot filenames in leaders.json must exist in src/assets/Headshots.
const leaders = JSON.parse(read('src/data/leaders.json'))
for (const [year, people] of Object.entries(leaders)) {
  for (const { name, image } of people) {
    if (image && !image.startsWith('http') && !fs.existsSync(path.join('src/assets/Headshots', image))) {
      errors.push(`leaders.json ${year} "${name}": headshot "${image}" not found in src/assets/Headshots`)
    }
  }
}

if (errors.length) {
  console.error(`check-links: ${errors.length} problem(s)\n` + errors.map((error) => `  - ${error}`).join('\n'))
  process.exit(1)
}
console.log('check-links: no internal dead links found')
