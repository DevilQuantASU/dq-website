// Lighthouse CI: performance budgets checked on every PR and push to main
// (.github/workflows/ci.yml) and locally with `npm run perf`.
// Mobile preset, 3 runs per page, judged on the median run.
//
// Budgets sit just above the redesigned site (measured locally: Home 98 / About 96,
// LCP 2.1 / 2.6 s, TBT < 150 ms, 197 / 388 KB), with headroom for slower CI runners.
// A PR that breaks one makes the site measurably slower; fix it or justify a change here.
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
        'categories:performance': ['error', { minScore: 0.85, aggregationMethod: 'median' }],
        'largest-contentful-paint': ['error', { maxNumericValue: 3000, aggregationMethod: 'median' }],
        'total-blocking-time': ['error', { maxNumericValue: 400, aggregationMethod: 'median' }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.05, aggregationMethod: 'median' }],
        'total-byte-weight': ['error', { maxNumericValue: 600000, aggregationMethod: 'median' }],
      },
    },
    upload: { target: 'filesystem', outputDir: './.lighthouseci' },
  },
};
