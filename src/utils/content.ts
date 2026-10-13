export const content = {
  intro: {
    title: "Hi! I'm Thiago Porto!",
    subtitle: "Frontend Engineer",
  },
  info: {
    text: "I'm a Front-end Developer specialized in the React ecosystem. I build responsive, mobile-first, performant and SEO-friendly applications for the web and for mobile.\n\nMy day-to-day is React and React Native, with Redux for state, Storybook for component libraries, Microfrontends to scale across teams, and Jest and Cypress to keep it all tested.\n\nI also work with AI agents as part of my development workflow: they speed up the repetitive parts while I stay in charge of architecture, tests and code review.\n\nI like turning designs into fast, polished interfaces.",
    cta: "Have a project or an opportunity in mind?",
    ctaAnchor: "Let's talk!",
    ctaLink: "mailto:thiagoportodev@gmail.com",
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
    linkText: "thiagoportodev@gmail.com",
    link: "mailto:thiagoportodev@gmail.com",
  },
};

export type Content = typeof content;
