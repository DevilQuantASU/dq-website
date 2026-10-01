// Lighthouse CI: performance budgets checked on every PR and push to main
// (.github/workflows/ci.yml) and locally with `npm run perf`.
// Mobile preset, 3 runs per page, judged on the median run.
//
// Budgets match the current About page (old design: heavy animated decorations,
// ~1.2 s blocking time) with headroom for CI noise. They catch large regressions
// such as heavy media returning to the bundle; tighten them as pages get faster.
module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      // Lighthouse CI groups runs by URL without the #hash, so a ?page= query keeps
      // each hash route separate; HashRouter ignores the query.
      url: ['http://localhost/index.html?page=home#/', 'http://localhost/index.html?page=about#/about'],
      numberOfRuns: 3,
      settings: { onlyCategories: ['performance'] },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.6, aggregationMethod: 'median' }],
        'largest-contentful-paint': ['error', { maxNumericValue: 3500, aggregationMethod: 'median' }],
        'total-blocking-time': ['error', { maxNumericValue: 2500, aggregationMethod: 'median' }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1, aggregationMethod: 'median' }],
        'total-byte-weight': ['error', { maxNumericValue: 1000000, aggregationMethod: 'median' }],
      },
    },
    upload: { target: 'filesystem', outputDir: './.lighthouseci' },
  },
};
