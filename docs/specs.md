# Specs de melhorias do portfólio

Domínio: `https://www.thiagoportodev.me` (deploy: Vercel, build automático no push para `main`).
Cada spec é independente e tem critérios de aceite. Ordem sugerida = ordem do documento (S1 → S7).
Itens marcados **[INPUT]** dependem de conteúdo que só o Thiago tem.

## Visão geral

| # | Spec | Esforço | Depende de |
|---|------|---------|------------|
| S1 | Correções rápidas (metadados, teste, README, licença) | ~1 dia | — |
| S2 | Background 3D: cleanup, resize, reduced-motion, lazy-load | ~1 dia | — |
| S3 | Migração CRA → Vite + TypeScript + React 18 | ~2 dias | S1, S2 |
| S4 | Conteúdo: hero, sobre, experiência, skills, currículo | ~2 dias | **[INPUT]** |
| S5 | Projetos: cards com imagem, descrição, stack, links | ~2 dias | **[INPUT]**, S4 |
| S6 | SEO: canonical, JSON-LD, sitemap, OG image | ~0,5 dia | S1 |
| S7 | CI (GitHub Actions) + Lighthouse + auditoria a11y | ~1 dia | S3 |

---

## S1 — Correções rápidas

**Problema:** metadados quebrados/desatualizados, teste falhando, README genérico, sem licença.

**Tarefas**
1. `public/index.html`:
   - `og:url`, `og:site_name`, `twitter:url` → `https://www.thiagoportodev.me` / `thiagoportodev.me`.
   - Remover `msapplication-TileImage` (arquivo `logo156.png` não existe) ou apontar para `logo152.png`.
   - Remover `<link rel="shortcut-icon">` (inválido).
   - Reduzir favicons a: `favicon.ico`, `logo192.png` (`icon`), `logo180.png` (`apple-touch-icon`). Espelhar em `manifest.json`.
   - `apple-touch-icon` 120x120 não deve apontar para arquivo de 128px.
   - Mover `eslint-plugin-jest-dom` e `@testing-library/*` para `devDependencies`.
2. `src/App.test.js`: trocar o teste "learn react" por smoke test que renderiza `<App />` e verifica o `h1` ("Hi! I'm Thiago Porto!"). Mockar `three` se o jsdom reclamar de WebGL.
3. `README.md`: reescrever com screenshot, link do site, stack, como rodar (`npm i && npm start`), como o deploy funciona (Vercel via Git), decisões técnicas. Remover as explicações copiadas de React/Three/Tailwind.
4. Adicionar `LICENSE` (MIT).

**Aceite:** `npm test` passa; `npm run lint` sem erros; nenhuma URL do domínio antigo no repo (`grep thiagoporto.tech`); nenhum link de ícone retornando 404.

---

## S2 — Background 3D (`src/components/Background.jsx`)

**Problema:** vazamento de loop/listener, sem resize, câmera dependente da frequência de eventos de scroll, sem acessibilidade de movimento, Three carregado no bundle principal.

**Tarefas**
1. Usar `useRef` para o canvas (remover `document.querySelector("canvas")`).
2. Retornar cleanup no `useEffect`: `cancelAnimationFrame`, remover listeners, `renderer.dispose()` e dispose de geometrias/materiais.
3. Trocar `document.body.onscroll` por `window.addEventListener("scroll", ..., { passive: true })`.
4. Handler de `resize`: atualizar `renderer.setSize`, `camera.aspect` e `camera.updateProjectionMatrix()`.
5. `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`.
6. Posição da câmera derivada do `scrollY` absoluto (função pura de `top`), não acumulada com `+=` por evento. Manter o visual atual (valores calibrados nas faixas 0 / -1000 / -1900).
7. `prefers-reduced-motion: reduce`: não animar rotações nem mover câmera no scroll (renderizar frame estático). Aplicar o mesmo em `animate-bounce`/`hover:animate-wiggle`/`FadeUp` via `motion-reduce:` do Tailwind e `useReducedMotion` do framer-motion.
8. Fallback: se `WebGLRenderer` lançar erro, não renderizar o canvas e deixar o fundo preto sólido.
9. Lazy-load: `React.lazy(() => import("./Background"))` com `Suspense fallback={null}`; trocar `import * as THREE` por imports nomeados.
10. Pausar o loop quando a aba estiver oculta (`document.visibilitychange`).

**Aceite:** navegar/desmontar não deixa rAF rodando (verificar no Performance do DevTools); redimensionar e girar o celular mantém proporção; com reduced-motion ativo nada se move; bundle inicial menor que o atual (comparar `build` antes/depois); site utilizável com WebGL desativado.

---

## S3 — Migração para Vite + TypeScript + React 18

**Problema:** CRA descontinuado, React 17, Three 0.136, JS puro.

**Decisão:** Vite + React 18 + TS. (Alternativa Astro/Next só se quiser HTML pré-renderizado do corpo; para este site o conteúdo SEO crítico fica em `index.html` — ver S6.)

**Tarefas**
1. Criar config do Vite (`vite.config.ts`), mover `public/index.html` → `index.html` na raiz (com `<script type="module" src="/src/main.tsx">`), trocar `%PUBLIC_URL%` se houver.
2. Remover `react-scripts`; scripts `dev`, `build`, `preview`, `lint`, `test`.
3. Testes: Vitest + Testing Library (manter os testes existentes de S1).
4. Renomear `.js/.jsx` → `.ts/.tsx`, tipar props (`content`), tipar `content.ts` (`as const` ou interfaces) e `socials`.
5. SVGs como componente: `vite-plugin-svgr` (hoje `ReactComponent` do CRA).
6. Atualizar: `react`/`react-dom` 18 (usar `createRoot`), `three` + `@types/three`, `framer-motion`, `tailwindcss`.
7. Config do Tailwind: ajustar `content` para `index.html` e `src/**/*.{ts,tsx}`; manter plugins/animação `wiggle`/`initial`.
8. ESLint: manter airbnb + prettier, adicionar `@typescript-eslint`.
9. Vercel: framework preset **Vite**, output `dist` (confirmar no painel; sem `vercel.json` se detectar sozinho).
10. `.gitignore`: `dist`.

**Aceite:** `npm run dev`, `build`, `preview`, `test`, `lint` funcionam; `tsc --noEmit` sem erros; deploy de preview na Vercel idêntico visualmente ao atual; sem dependência `react-scripts`.

---

## S4 — Conteúdo principal **[INPUT]**

**Problema:** primeira tela não diz o que o Thiago faz; texto genérico; sem sobre, experiência, skills ou currículo.

**Inputs necessários:** foto (opcional), cidade/disponibilidade (CLT/PJ/remoto), 2–4 empresas com cargo e período, 2–3 conquistas mensuráveis por empresa, lista de skills, PDF do currículo, 

**Tarefas**
1. **Hero:** nome + "Front-end Engineer · React / TypeScript" + 2 botões ("Ver projetos" → `#projects`, "Contato" → `#contact`). Manter o 3D ao fundo.
2. **Navbar** simples com âncoras (Sobre, Projetos, Contato) e `scroll-behavior: smooth` (respeitando reduced-motion). Skip link "Pular para o conteúdo".
3. **Sobre:** texto curto e factual (sem "performant, scalable, SEO friendly" genérico), localização, disponibilidade, foto se houver.
4. **Experiência:** lista cronológica (empresa, cargo, período, 2–3 bullets com impacto).
5. **Skills:** grid agrupado (Linguagens, Frameworks, Testes, Ferramentas) com tags/ícones em vez de parágrafo.
6. **Currículo:** botão "Baixar CV (PDF)" com arquivo em `public/`.
7. **Contato:** uma única seção `#contact` (e-mail, LinkedIn, GitHub). Remover duplicação do e-mail (hoje em info, footer e social).
8. Todo texto em `content.ts` (já é o padrão do repo).

**Aceite:** um visitante entende cargo, stack e como contatar sem rolar; navegação por teclado funciona nas âncoras; PDF baixa; e-mail aparece em um único lugar.

---

## S5 — Projetos **[INPUT]**

**Problema:** hoje é só nome + link (`content.projects.projectsList`).

**Destaques (decidido):** Sírio-Libanês, Comgás e Agriness **[INPUT: dados do Agriness]**. Minim-ui, ChatRandom, D3 e Postr ficam numa lista secundária (só nome + link, como hoje). Para cada destaque: screenshot/GIF (WebP, ≤ 150 KB), 1–2 linhas (problema → o que fez → resultado/métrica), papel do Thiago, stack, link ao vivo, link do repo (se público). Projetos menores podem ficar numa lista secundária.

**Tarefas**
1. Novo tipo `Project` `{ name, description, role, stack: string[], image, alt, link, repo? }` em `content.ts`.
2. Componente `ProjectCard` (imagem com `width/height` e `loading="lazy"`, `alt` descritivo, tags de stack, links com `rel="noopener noreferrer"`).
3. Grid responsivo (1 col mobile, 2 col ≥ md). Cards inteiros com foco visível.
4. Projetos privados/corporativos (Sírio-Libanês, Comgás): descrever contribuição sem expor dados sensíveis; checar se há restrição de divulgação.
5. Manter `FadeUp` respeitando reduced-motion (S2).

**Aceite:** cada projeto em destaque mostra imagem, descrição, stack e link; sem layout shift (dimensões fixas); Lighthouse CLS < 0,1.

---

## S6 — SEO e compartilhamento

**Tarefas**
1. `<link rel="canonical" href="https://www.thiagoportodev.me/">`.
2. OG/Twitter: `og:image` com URL absoluta, `og:image:width=1200`, `og:image:height=630`, `og:image:alt`, `og:locale`.
3. Nova `ogImage.png` 1200x630 (nome, cargo, captura do site) **[INPUT: aprovar arte]**.
4. JSON-LD `Person` em `index.html` (`name`, `jobTitle`, `url`, `sameAs`: GitHub, LinkedIn).
5. `public/sitemap.xml` com a home; `robots.txt` com `Sitemap: https://www.thiagoportodev.me/sitemap.xml`.
6. `<noscript>` com nome, cargo e links de contato (hoje só avisa para habilitar JS).
7. Texto principal (hero + sobre) presente no HTML inicial: se S3 não pré-renderizar, replicar o essencial no `index.html` ou adotar pré-render (`vite-plugin-ssr`/Astro) — decidir após S3.
8. Definir no painel da Vercel o domínio primário (`www`) e manter o apex redirecionando para ele.

**Aceite:** Rich Results Test valida o `Person`; preview correto no LinkedIn Post Inspector e opengraph.xyz; `view-source` mostra o nome e o cargo.

---

## S7 — CI, performance e acessibilidade

**Tarefas**
1. `.github/workflows/ci.yml`: em PR e push para `main` → `npm ci`, `lint`, `tsc --noEmit`, `test`, `build`. (O deploy continua na Vercel.)
2. Lighthouse CI (`treosh/lighthouse-ci-action`) contra o preview, com asserts: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
3. Auditoria a11y manual com axe: contraste do `text-gray-300/400` sobre o 3D (WCAG AA 4.5:1), foco visível, ordem de tab, `aria-label` dos ícones sociais e do indicador de scroll.
4. Fonte Montagu Slab em self-host (`@fontsource/montagu-slab`), removendo preconnect ao Google Fonts.
5. Badge de CI/Lighthouse no README.

**Aceite:** CI verde em PR; metas do Lighthouse atingidas em mobile; zero violações críticas no axe.

---

## Fora de escopo (por ora)
Modo claro/escuro, transições de página, blog, formulário de contato com backend. Reavaliar depois de S1–S7.

## Decisões
1. Idioma: **só EN** (decidido).
2. Pré-render: tentar `vite-react-ssg` no fim da S3; se der atrito, fallback para metadados + `<noscript>` (ver S6.7).
3. Destaques: **Sírio-Libanês, Comgás, Agriness** (decidido). Pendente: dados do Agriness e checar restrições de divulgação dos projetos corporativos.
