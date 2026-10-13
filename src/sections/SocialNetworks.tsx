import { socialsComponents } from "../utils/socials";

import { FadeUp } from "../components";
import type { Content } from "../utils/content";

type Props = { content: Content["social"] };

export default function SocialNetworks({ content }: Props) {
  return (
    <section id="contact" className="section-base scroll-mt-20">
      <h2 className="text-type-title text-panel">
        <FadeUp>{content.title}</FadeUp>
      </h2>
      <FadeUp>
        <ul
          className="text-panel flex list-none gap-10 px-12"
          aria-label="Social Network links list"
        >
          {socialsComponents.map(logo => (
            <li
              className="transition-transform hover:-translate-y-2"
              key={logo.link.slice(-10)}
            >
              <a
                className="text-type-base fill-gray-300 transition-all hover:fill-gray-400"
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
