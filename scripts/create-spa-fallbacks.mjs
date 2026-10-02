import fs from 'node:fs'

// GitHub Pages serves 404.html for any path without a matching file.
// The app uses HashRouter, so rewrite e.g. /about?x=1 to /#/about?x=1.
// If the URL already carries a hash route (/stale/path#/about), keep that.
// Paths with a real file in public/ (e.g. /discord/) never reach this.
const redirect = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DevilQuant</title>
    <script>
      var l = window.location
      l.replace(l.hash.indexOf('#/') === 0
        ? '/' + l.hash
        : '/#' + l.pathname.replace(/\\/+$/, '') + l.search)
    </script>
  </head>
  <body></body>
</html>
`

fs.writeFileSync('dist/404.html', redirect)
