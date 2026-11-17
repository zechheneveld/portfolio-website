# Portfolio website

Personal portfolio and consulting site for Zech Heneveld. Plain HTML, CSS and a little JavaScript: no build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Edit

- **Projects, services, process:** `index.html` (each project is one `<article class="project">`; `data-tags` drives the filter chips)
- **Look and feel:** `styles.css` (colours are variables at the top)
- **Contact links:** the `#contact` section of `index.html`

## Deploy

Any static host works. Easiest options:

- **GitHub Pages:** repo **Settings → Pages → Deploy from branch → `main` / root**
- **Vercel / Netlify:** import the repo; no build command, output directory is the root
