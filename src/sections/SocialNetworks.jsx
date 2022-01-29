import { useState } from "react";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
import { ReactComponent as UpWork } from "../assets/icons/upwork.svg";

export default function SocialNetworks({ content }) {
  const [socials] = useState([
    {
      link: "https://github.com/thiago-porto25",
      component: <GitHub className="w-9 h-9" title="My Github profile" />,
    },
    {
      link: "https://www.linkedin.com/in/thiago-porto-675b8320a/",
      component: <LinkedIn className="w-9 h-9" title="My LinkedIn profile" />,
    },
    {
      link: "mailto:thiagoportodev@gmail.com",
      component: <Mail className="w-9 h-9" title="My e-mail address" />,
    },
    {
      link: "https://www.upwork.com/freelancers/~0121ea51217c88aaa1",
      component: <UpWork className="w-9 h-9" title="My UpWork profile" />,
    },
  ]);

  return (
    <section className="section-base">
      <h3 className="text-type-title">{content.title}</h3>
      <ul
        className="flex gap-10 list-none"
        aria-label="Social Network links list"
      >
        {socials.map(logo => (
          <li
            className="transition-transform hover:-translate-y-2"
            key={logo.link.slice(-10)}
          >
            <a
              className="transition-all fill-gray-300 hover:fill-gray-400 text-type-base"
              href={logo.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {logo.component}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
