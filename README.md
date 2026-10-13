# Thiago Porto's Portfolio

[![CI](https://github.com/thiago-porto25/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/thiago-porto25/portfolio/actions/workflows/ci.yml)

Live: [www.thiagoportodev.me](https://www.thiagoportodev.me)

A 3D portfolio built with React, TypeScript, Vite, Three.js, Framer Motion and Tailwind CSS. The page is pre-rendered to static HTML at build time (`vite-react-ssg`) and hydrated on the client.

## Running locally

```bash
npm install
npm run dev        # dev server on http://localhost:5173
npm test           # unit tests (Vitest)
npm run lint
npm run typecheck
npm run build      # pre-rendered static build in ./dist
npm run preview    # serve ./dist locally
```

## How it works

- `src/utils/content.ts` holds all the text and links shown on the page.
- `src/components/Background.tsx` is the Three.js scene. It is lazy-loaded, follows the scroll position, pauses when the tab is hidden, and stays still when the user prefers reduced motion or WebGL is unavailable.
- `src/sections/*` are the page sections, composed in `src/pages/Home.jsx`.

## CI

`.github/workflows/ci.yml` runs lint, typecheck, tests and the build on every PR and push to `main`, then Lighthouse CI (`lighthouserc.json`) against `dist/`. Accessibility, best practices and SEO must score ≥ 95; performance only warns because headless CI renders WebGL in software.

## Deploy

Deployed on [Vercel](https://vercel.com) through its Git integration: every push to `main` builds (`npm run build`) and publishes `dist/` automatically.

## License

[MIT](LICENSE)
