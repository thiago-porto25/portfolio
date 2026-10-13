import { FadeUp } from "../components";
import Atom from "../components/Atom";
import type { Content } from "../utils/content";

type Props = { content: Content["info"] };

export default function Info({ content }: Props) {
  return (
    <section aria-label="info section" className="section-base">
      <h2 className="text-type-title text-5xl">
        <span
          className="flex animate-spin-slow items-start justify-center"
          aria-label="rotating atom emoji"
        >
          <FadeUp>
            <Atom />
          </FadeUp>
        </span>
      </h2>

      <div className="text-type-base w-full whitespace-pre-wrap px-8 md:w-3/6 md:px-0">
        <FadeUp>{content.text}</FadeUp>
      </div>

      <div className="text-type-base -mt-3 w-full px-8 md:w-3/6 md:px-0">
        <FadeUp>
          {content.cta}{" "}
          <a
            className="underline transition-colors hover:text-gray-400"
            href={content.ctaLink}
            target="_blank"
            rel="noreferrer"
          >
            {content.ctaAnchor}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
