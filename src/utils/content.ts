export const content = {
  nav: {
    skip: "Skip to content",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  intro: {
    title: "Hi! I'm Thiago Porto!",
    subtitle: "Frontend Engineer",
    ctas: [
      { label: "View projects", href: "#projects" },
      { label: "Contact me", href: "#contact" },
    ],
  },
  info: {
    text: "I'm a Frontend Engineer specialized in the React ecosystem. I build responsive, mobile-first, performant and SEO-friendly applications for the web and for mobile.\n\nMy day-to-day is React, TypeScript and Next.js, plus React Native for mobile, with Redux for state, Storybook for component libraries, Microfrontends to scale across teams, and Jest and Cypress to keep it all tested.\n\nI also work with AI agents as part of my development workflow: they speed up the repetitive parts while I stay in charge of architecture, tests and code review.\n\nI like turning designs into fast, polished interfaces.",
    cta: "Have a project or an opportunity in mind?",
    ctaAnchor: "Let's talk!",
    ctaLink: "mailto:thiagoportodev@gmail.com",
  },
  experience: {
    title: "Experience",
    jobs: [
      {
        role: "Frontend Engineer",
        company: "NTConsult",
        period: "Jan 2025 – Present",
        bullets: [
          "The frontend reference for the team, setting the bar for best practices and code quality.",
          "Delivered the first release of a new corporate website, recognized for its performance and scalability.",
        ],
      },
      {
        role: "Frontend Engineer",
        company: "Igma",
        period: "Dec 2022 – Jan 2025",
        bullets: [
          "Took the technical lead on frontend: mentored other developers and guided architectural decisions.",
          "Built a testing culture with unit and E2E tests (Detox, Gherkin), raising coverage to 85% and making releases more reliable.",
        ],
      },
      {
        role: "Frontend Engineer",
        company: "D3 Company",
        period: "Dec 2021 – Dec 2022",
        bullets: [
          "Rebuilt the company website from scratch with React and microfrontends.",
          "Introduced automated E2E tests with Cypress and Cucumber, so scenarios are written in plain language.",
          "Led a Redux refactor of state management, improving performance and predictability.",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      {
        name: "Frontend",
        items: [
          "React",
          "React Native",
          "Next.js",
          "TypeScript",
          "Redux",
          "Storybook",
          "Microfrontends",
        ],
      },
      {
        name: "Testing",
        items: [
          "Jest",
          "Cypress",
          "Cucumber / Gherkin",
          "Detox",
          "Unit & E2E testing",
        ],
      },
      {
        name: "Practices",
        items: [
          "Agile",
          "Responsive design",
          "Accessibility",
          "Mentorship",
          "Code review",
          "AI-assisted development",
        ],
      },
    ],
  },
  projects: {
    title: "Selected Projects",
    projectsList: [
      {
        name: "Paciente Sírio-Libanês",
        link: "https://play.google.com/store/apps/details?id=br.org.hsl.siriolibanes",
      },
      {
        name: "Minim-ui",
        link: "https://www.npmjs.com/package/@thiagoporto/minim-ui",
      },
      { name: "ChatRandom", link: "https://chat-random.vercel.app/" },
      {
        name: "Comgás Virtual",
        link: "https://virtual.comgas.com.br/contratecasas",
      },
      { name: "D3", link: "https://history.d3.do/" },
      { name: "Postr", link: "https://postr-react-app.web.app/" },
    ],
  },
  social: {
    title: "Find me online",
  },
  footer: {
    text: "© Thiago Porto. All Rights Reserved.",
  },
};

export type Content = typeof content;
