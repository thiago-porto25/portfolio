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
  },
  experience: {
    title: "Experience",
    jobs: [
      {
        role: "Frontend Engineer",
        company: "NTConsult",
        period: "Jan 2025 – Present",
        bullets: [
          {
            lead: "Agriness",
            text: "Led the frontend team on a platform used by thousands of agriculture companies, setting the standards for best practices and code quality.",
          },
          {
            lead: "Internationalization",
            text: "Made the product available in multiple languages.",
          },
          {
            lead: "AI workflow",
            text: "Created the AI Skills and CLAUDE.md that guide agents in the codebase, making frontend deliveries with AI 70% faster.",
          },
          {
            lead: "Flagship rebuild",
            text: "Delivered the new version of the company's flagship software, rebuilt from scratch with React and its ecosystem, raising user satisfaction by 85% over the outdated, bug-prone legacy version.",
          },
        ],
      },
      {
        role: "Frontend Engineer",
        company: "Igma",
        period: "Dec 2022 – Jan 2025",
        bullets: [
          {
            lead: "Comgás Virtual",
            text: "Led the frontend implementation of the gas contracting flow, a key funnel for converting visitors into new customers.",
          },
          {
            lead: "Sírio-Libanês · OTA",
            text: "Introduced over-the-air deployments to the React Native patient app: bug fixes and JavaScript-only features now reach users without waiting on slow app store review cycles.",
          },
          {
            lead: "Sírio-Libanês · Indoor routing",
            text: "Built a native bridge to the Meridian SDK, so patients can easily find their way around the hospital.",
          },
          {
            lead: "Sírio-Libanês · Scheduling",
            text: "Delivered scheduling for exams, appointments and telemedicine, adding a new revenue channel for the hospital.",
          },
          {
            lead: "Mentoring",
            text: "Mentored other frontend developers and guided architectural decisions.",
          },
          {
            lead: "Testing",
            text: "Built a testing culture with unit and E2E tests (Detox, Gherkin), raising coverage to 85% and making releases more reliable.",
          },
        ],
      },
      {
        role: "Frontend Engineer",
        company: "D3 Company",
        period: "Dec 2021 – Dec 2022",
        bullets: [
          {
            lead: "Website rebuild",
            text: "Rebuilt the company website from scratch with React and microfrontends, delivered in 3 months.",
          },
          {
            lead: "Testing",
            text: "Introduced automated E2E tests with Cypress and Cucumber, with scenarios written in plain language, and raised unit and E2E test coverage to 90%.",
          },
          {
            lead: "Redux refactor",
            text: "Led a refactor of state management, improving performance and predictability.",
          },
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
    title: "Let's talk!",
    text: "Have a project or an opportunity in mind? My inbox is open.",
    email: "thiagoportodev@gmail.com",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/thiago-porto-675b8320a/",
      },
      { label: "GitHub", href: "https://github.com/thiago-porto25" },
    ],
  },
  footer: {
    text: "© Thiago Porto. All Rights Reserved.",
    built: "Built with React, TypeScript and Three.js ·",
    source: "source on GitHub",
    sourceLink: "https://github.com/thiago-porto25/portfolio",
  },
};

export type Content = typeof content;
