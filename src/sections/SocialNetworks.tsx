import { useState } from "react";

import { FadeUp } from "../components";
import type { Content } from "../utils/content";

type Props = { content: Content["social"] };

const button =
  "rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-200 transition-colors hover:border-white hover:text-white";

export default function SocialNetworks({ content }: Props) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard
      .writeText(content.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      // clipboard blocked: the mailto button still works
      .catch(() => undefined);
  };

  return (
    <section id="contact" className="section-base scroll-mt-20">
      <FadeUp>
        <div className="text-panel flex flex-col items-center gap-4 px-8 text-center">
          <h2 className="text-type-title text-4xl font-semibold text-gray-200">
            {content.title}
          </h2>
          <p className="text-type-base">{content.text}</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`mailto:${content.email}`}
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              {content.email}
            </a>
            <button type="button" onClick={copyEmail} className={button}>
              <span aria-live="polite">
                {copied ? "Copied!" : "Copy email"}
              </span>
            </button>
          </div>
          <div className="flex gap-3">
            {content.links.map(link => (
              <a
                key={link.href}
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                className={button}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
