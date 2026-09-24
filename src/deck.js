// Shared setup for every lecture deck. Each lecture's main.js collects its
// own slide files with import.meta.glob and passes them to startDeck.

import Reveal from 'reveal.js'
import RevealMath from 'reveal.js/plugin/math'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/white.css'
import './custom.css'

// Slides refer to images in public/ by root paths such as src="/cats.jpeg".
// The site is served under a base path (/math245a/ on GitHub Pages), and
// Vite does not rewrite paths inside HTML that is loaded as a raw string,
// so prefix the base here.
const base = import.meta.env.BASE_URL
function withBase(html) {
  return base === '/' ? html : html.replace(/\b(src|href)="\/(?!\/)/g, `$1="${base}`)
}

export function startDeck(modules) {
  const container = document.querySelector('.slides')
  for (const path of Object.keys(modules).sort()) {
    container.insertAdjacentHTML('beforeend', withBase(modules[path].default))
  }

  // Turn .sage-cell containers (injected above) into live SageMathCell
  // widgets. embedded_sagecell.js is loaded synchronously in index.html,
  // so the global is available by the time this module runs.
  if (window.sagecell) {
    window.sagecell.makeSagecell({
      inputLocation: '.sage-cell',
      languages: ['sage'],
      evalButtonText: 'Calculate',
    })
  }

  Reveal.initialize({
    hash: true,
    slideNumber: 'c/t',
    progress: true,
    controls: true,
    controlsTutorial: false,
    transition: 'slide',
    transitionSpeed: 'default',
    width: 960,
    height: 700,
    margin: 0.08,
    center: true,
    plugins: [RevealMath.KaTeX],
  })
}
