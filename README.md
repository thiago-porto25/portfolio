# Thiago Porto's Portfolio

Live: [www.thiagoportodev.me](https://www.thiagoportodev.me)

A 3D portfolio built with React, Three.js, Framer Motion and Tailwind CSS.

## Running locally

```bash
npm install
npm start      # dev server on http://localhost:3000
npm test       # unit tests
npm run lint
npm run build  # production build in ./build
```

## How it works

- `src/utils/content.js` holds all the text and links shown on the page.
- `src/components/Background.jsx` is the Three.js scene. It is lazy-loaded, follows the scroll position, pauses when the tab is hidden, and stays still when the user prefers reduced motion or WebGL is unavailable.
- `src/sections/*` are the page sections, composed in `src/pages/Home.jsx`.

## Deploy

Deployed on [Vercel](https://vercel.com) through its Git integration: every push to `main` builds and publishes automatically.

## License

[MIT](LICENSE)
