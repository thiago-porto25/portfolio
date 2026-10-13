# Plano de UI/UX do portfólio (para validação)

Status: **proposta, nada implementado**. Marque o que aprova em "Decisões" no fim.

## 1. Como o site está hoje (revisão visual, desktop 1920×966 e mobile 390px)

**O que funciona**
- O 3D de fundo é um diferencial real para um frontend engineer e já tem fallback, `prefers-reduced-motion` e pausa fora da aba.
- Hero limpo, com cargo e dois CTAs. Navbar com âncoras. Painéis escuros deixaram o texto legível.
- Conteúdo agora tem experiência, skills e projetos. Lighthouse: A11y/BP/SEO 100, LCP 1,6 s.

**Problemas que vi**

| # | Problema | Evidência |
|---|----------|-----------|
| 1 | **Muito espaço morto**: cada seção tem `py-80` (640 px vazios) | página tem ~7000 px no desktop e ~8100 px no mobile; entre seções há telas inteiras só com estrelas |
| 2 | **Experiência vira uma parede de texto**: Igma tem 6 bullets de 2 linhas, sem hierarquia | o recrutador precisa ler tudo para achar o impacto |
| 3 | **Impacto não salta aos olhos**: 70%, 85%, 90% estão escondidos no meio das frases | nenhum destaque visual |
| 4 | **Navbar no mobile quebra em 2 linhas** e cobre ~10% da tela | `nav` com 5 links em `flex-wrap` |
| 5 | **Painéis colados nas bordas no mobile** (hero e textos sem margem lateral) | screenshots a 390 px |
| 6 | **Formas 3D enormes no mobile**, competem com o texto | pentágono ocupa a largura toda |
| 7 | **Paleta 100% cinza**: sem cor de destaque; links, CTAs e tags parecem iguais | só o 3D tem cor (magenta/roxo) |
| 8 | **Metadados pequenos e de baixo contraste** ("Jan 2025 – Present · Remote" em `gray-400` e `text-sm`) | difícil de ler sobre o fundo |
| 9 | **Seção de contato fraca**: título "Find me online" + 3 ícones pequenos num grande vazio | o CTA final é o ponto de conversão do site |
| 10 | **Nav sem estado ativo**: não indica em qual seção você está | só há hover |
| 11 | **Projetos ainda são uma lista de links** (S5 pendente) | sem imagem, descrição ou stack |

## 2. Benchmark (o que as referências recomendam)

- **Recrutadores escaneiam em menos de 1 minuto** e procuram impacto quantificado, não lista de tecnologias; portfólio bom diz quem você é e o que faz em segundos, mostra 3–5 projetos fortes e é rápido, acessível e responsivo, porque o próprio site é uma demo de frontend ([Fueler](https://www.fueler.io/blog/what-recruiters-actually-want-to-see-in-a-backend-developer-portfolio), [DEV Community](https://dev.to/siddheshcodes/frontend-developer-portfolio-tips-for-2025-build-a-stunning-site-that-gets-you-hired-3hga), [Cake](https://www.cake.me/resources/portfolio/front-end-developer-portfolio)).
- **Cases escaneáveis**: abrir com papel, objetivo e resultado mensurável; deixar explícito o que foi sua contribuição vs. do time; qualidade acima de quantidade (2–5 casos) ([UX Planet](https://uxplanet.org/how-to-build-a-ui-ux-portfolio-that-will-stand-out-to-hiring-managers-9b060dea7f1e), [Medium](https://medium.com/@maxrichy/how-to-structure-a-ux-case-study-that-hiring-managers-notice-4f0e9bf45fa4)). *(Fontes são de design/UX; a aplicação a devs é adaptação nossa.)*
- **Referências de dev**: Bruno Simon vence por interação memorável (funciona bem para roles criativas/front); Brittany Chiang vence por clareza, com fundo escuro, navegação lateral fixa e experiência/projetos em destaque, cada projeto com stack e link do código ([catalins.tech](https://catalins.tech/14-best-web-developer-portfolios-to-get-inspiration/), [Elementor](https://elementor.com/blog/inspiring-web-developer-portfolio-examples/)). Nosso site já está no campo "Simon"; falta a clareza de "Chiang".
- **3D com responsabilidade**: manter o texto sobre o 3D legível, construir o conteúdo em HTML semântico e tratar o WebGL como melhoria progressiva, limitar pixel ratio, pausar fora da tela e simplificar no mobile/dispositivos fracos ([svilenkovic](https://www.svilenkovic.com/3d/3d-website-best-practices), [Q42](https://engineering.q42.nl/oculi-mundi/), [sahad.is-a.dev](https://sahad.is-a.dev/blog/fast-3d-hero-on-mobile)). Já fazemos quase tudo isso; falta o mobile.
- **Tendências 2026**: dark mode como direção de design (com contraste AA), tipografia grande e expressiva, scroll animations com restrição, espaço em branco intencional ([Line25](https://line25.com/articles/web-design-trends-2026/), [Spread Simple](https://spreadsimple.com/blog/best-web-design-trends-2026-that-actually-work/)).

*Observação: a maioria das fontes é de blogs de carreira/design, não pesquisa com recrutadores; trate como boas práticas, não como regra.*

## 3. Proposta

### Prioridade 1: clareza e credibilidade
1. **Faixa de impacto logo após o hero** com 3 números seus: "70% faster AI-assisted delivery", "90% test coverage (unit + E2E)", "Used by thousands of agriculture companies". Ataca o problema 3.
2. **Cortar o espaço morto**: `py-80` → ~`py-24`. A página cai de ~7000 px para ~4500 px. A câmera 3D já é normalizada pelo progresso, então o visual da jornada não muda. Problema 1.
3. **Experiência escaneável**: layout em timeline (período à esquerda no desktop), 3–4 bullets por empresa com **abertura em negrito** ("Comgás Virtual —", "Sírio-Libanês —", "Agriness —"), e o Igma agrupado por projeto. Metadados maiores e com mais contraste. Problemas 2 e 8.
4. **Projetos (S5)** como cards: imagem, papel, 1–2 linhas de problema → resultado, stack em tags e link. 3 destaques + lista secundária. Problema 11.
5. **Contato como fechamento forte**: bloco com "Have a project or an opportunity in mind?", botão de e-mail com copiar, LinkedIn e GitHub com rótulo (não só ícones). Problema 9.

### Prioridade 2: mobile e acabamento
6. **Navbar mobile compacta**: 1 linha (rótulos curtos ou scroll horizontal) e esconder ao rolar para baixo/mostrar ao subir. Problema 4.
7. **Margens laterais e escala no mobile**: painéis com `mx-4`; hero com tipografia fluida; reduzir o tamanho das formas 3D e o número de estrelas em telas pequenas, com cena estática em dispositivo fraco. Problemas 5 e 6.
8. **Cor de destaque** puxada das formas 3D (magenta/roxo) para CTAs, links, tags e item ativo da nav, mantendo AA. Problema 7.
9. **Item ativo na navbar** (`aria-current`) conforme a seção visível. Problema 10.
10. **Footer** com "Built with React, TypeScript and Three.js · source on GitHub". Recrutadores técnicos gostam disso.

### Prioridade 3: opcional
11. **Parallax sutil do 3D com o mouse** (mostra domínio de WebGL; desligado com reduced-motion).
12. **Prova social**: 1–2 recomendações do LinkedIn (precisa de autorização das pessoas).
13. **Página de case por projeto** (só depois do S5, se houver conteúdo).

### Não recomendo
- Mudar para tema claro ou dark/light toggle: baixo retorno.
- Redesenhar para o layout "sidebar fixa" da Brittany Chiang: perderia a identidade 3D que diferencia você.
- Tipografia cinética e animações pesadas: aumentam risco de acessibilidade e performance.

## 4. Ordem de execução sugerida
1. Itens 2, 3 e 1 (espaço, experiência, faixa de impacto): maior ganho, só código.
2. Itens 6, 7 e 5 (mobile e contato).
3. **S5** (projetos, quando você mandar os dados) e item 8 (cor).
4. Itens 9, 10 e depois os opcionais.

Cada bloco vira um commit separado e eu valido no navegador (desktop e mobile) antes de seguir.

## 5. Decisões para você

1. **Direção visual**: manter o dark + 3D atual refinado (recomendado) ou outra?
2. **Faixa de impacto** (item 1): sim/não, e confirma os 3 números acima como os que você quer destacar?
3. **Cor de destaque** (item 8): sim/não. Se sim, magenta ou roxo (as cores das formas)?
4. **Espaçamento** (item 2): aprova reduzir as seções para ~1/3?
5. **Mobile 3D** (item 7): aprova simplificar a cena em telas pequenas?
6. **Itens opcionais** (11–13): algum interessa?
