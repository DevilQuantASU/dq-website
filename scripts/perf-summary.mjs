// Summarize Lighthouse CI results (.lighthouseci/lhr-*.json) as a Markdown table of
// per-page medians. Writes to the GitHub job summary in CI, stdout otherwise.
import fs from 'node:fs'
import path from 'node:path'

const dir = '.lighthouseci'
const reports = fs.existsSync(dir)
  ? fs.readdirSync(dir).filter((f) => /^lhr-.*\.json$/.test(f)).map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')))
  : []

if (reports.length === 0) {
  console.error('perf-summary: no Lighthouse reports found in .lighthouseci/')
  process.exit(1)
}

const median = (values) => values.slice().sort((a, b) => a - b)[Math.floor(values.length / 2)]
const byPage = new Map()
for (const lhr of reports) {
  const page = new URL(lhr.requestedUrl).hash || '#/'
  if (!byPage.has(page)) byPage.set(page, [])
  byPage.get(page).push(lhr)
}

const rows = [...byPage].map(([page, runs]) => {
  const audit = (id) => median(runs.map((r) => r.audits[id].numericValue))
  return [
    `\`${page}\``,
    Math.round(median(runs.map((r) => r.categories.performance.score)) * 100),
    `${(audit('first-contentful-paint') / 1000).toFixed(2)} s`,
    `${(audit('largest-contentful-paint') / 1000).toFixed(2)} s`,
    `${Math.round(audit('total-blocking-time'))} ms`,
    audit('cumulative-layout-shift').toFixed(3),
    `${Math.round(audit('total-byte-weight') / 1024)} KB`,
    runs.length,
  ]
})

const table = [
  '### Performance (Lighthouse, mobile, median)',
  '',
  '| Page | Score | FCP | LCP | TBT | CLS | Weight | Runs |',
  '|---|---|---|---|---|---|---|---|',
  ...rows.map((r) => `| ${r.join(' | ')} |`),
  '',
  'Budgets are enforced by `lighthouserc.cjs`; see the uploaded `lighthouse-reports` artifact for full reports.',
  '',
].join('\n')

if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, table)
console.log(table)
