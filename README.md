# Math 245A: Topics in algebraic geometry

Hodge Theory and Algebraic K-Theory, Stanford, Autumn 2026. Course page and lecture slides, served by GitHub Pages at https://rosie-0525.github.io/math245a/.

## Layout

- `index.html`: the course page (info, lecture list, course plan, references). It uses the personal website's stylesheet.
- `lectures/NN/`: one [reveal.js](https://revealjs.com) deck per lecture.
  - `slides/`: the slides, one `<section>` per file, shown in order of their file paths. Subfolders such as `01-part1/` are fine.
  - `index.html` and `main.js`: the page that loads them. These are the same for every lecture apart from the title.
  - `archive/`: slides that were cut (optional; not shown).
- `lectures/_template/`: a blank lecture to copy.
- `src/deck.js`: shared reveal.js setup (KaTeX math, SageMathCell). `src/custom.css`: shared styles.
- `public/`: images for all lectures. Reference them as `src="/name.png"`.
- `public/notes/`: lecture notes (PDFs), linked from the course page as `notes/<name>.pdf`.
- `syllabus.md`: source text for the course page and the first lecture.
- `sage.html`: a standalone SageMathCell example (not part of the site).

## Adding a lecture

1. Copy `lectures/_template` to `lectures/NN` (e.g. `02`) and change the `<title>` in its `index.html`.
2. Write slides in `lectures/NN/slides/`.
3. Add a line for it under "Lectures" in `index.html`.
4. Commit and push. The GitHub Action builds and publishes the site.

For a lecture with notes instead of slides, put the PDF in `public/notes/`, link it from its line under "Lectures" as `notes/<name>.pdf`, and commit and push.

No build configuration needs to change: `vite.config.js` picks up every folder in `lectures/` except `_template`.

## Working locally

```bash
npm install
npm run dev       # http://localhost:5173/ (course page); lectures at /lectures/NN/
npm run build     # writes dist/, as deployed
npm run preview   # serves dist/ at http://localhost:4173/math245a/
```
