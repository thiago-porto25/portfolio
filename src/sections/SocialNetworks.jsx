import { useState } from "react";

import { socialsComponents } from "../utils/socials";

import { FadeUp } from "../components";

export default function SocialNetworks({ content }) {
  const [socials, setSocials] = useState([]);

  useState(() => {
    setSocials(socialsComponents);
  }, [socialsComponents]);

  return (
    <section className="section-base">
      <h3 className="text-type-title">
        <FadeUp>{content.title}</FadeUp>
      </h3>
      <FadeUp>
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
      </FadeUp>
    </section>
  );
}
