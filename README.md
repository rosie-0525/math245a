# Math 245A: Topics in algebraic geometry

Course page and lecture slides for Math 245A (Stanford), taught by Wanchun Shen.

Served by GitHub Pages at https://rosie-0525.github.io/math245a/.

## Layout

- `index.html`: the course page (general info and the list of lectures). It uses the stylesheet of the personal website.
- `slides/NN.html`: one [reveal.js](https://revealjs.com) deck per lecture. Images go in `slides/figures/`.
- `slides/_template.html`: a blank deck to copy for each new lecture.
- `theme.css`: slide styles (Newsreader font, site colours, definition/theorem boxes).
- `reveal/`, `katex/`, `fonts/`: bundled copies of reveal.js 6.0.2, KaTeX 0.16.22 and Newsreader, so the slides work offline.

## Adding a lecture

1. Copy `slides/_template.html` to `slides/NN.html` and write the slides.
2. Add a line for it under "Lectures" in `index.html`.
3. Commit and push.

## Writing slides

- Each `<section>` is one slide.
- Math: `$…$` inline, `$$…$$` displayed (KaTeX). Write `&lt;` and `&gt;` for `<` and `>`.
- Boxes: `<div class="defn">`, `<div class="thm">`, `<div class="ex">`.
- `class="fragment"` reveals an element on the next click.
- `<aside class="notes">` holds speaker notes. Press `S` during a talk to open the speaker view.
- Other keys: `F` for full screen, `Esc` for the slide overview.

The slides open directly from disk (double-click the file); no server is needed.
