import GitHub from "../assets/icons/github.svg?react";
import LinkedIn from "../assets/icons/linkedin.svg?react";
import Mail from "../assets/icons/mail.svg?react";

export const socialsComponents = [
  {
    link: "https://github.com/thiago-porto25",
    component: <GitHub className="size-9" title="My Github profile" />,
  },
  {
    link: "https://www.linkedin.com/in/thiago-porto-675b8320a/",
    component: <LinkedIn className="size-9" title="My LinkedIn profile" />,
  },
  {
    link: "mailto:thiagoportodev@gmail.com",
    component: <Mail className="size-9" title="My e-mail address" />,
  },
];
