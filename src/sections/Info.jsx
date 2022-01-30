import { FadeUp } from "../components";
import Atom from "../components/Atom";

export default function Info({ content }) {
  return (
    <section aria-label="info section" className="section-base">
      <h2 className="text-5xl text-type-title">
        <span
          className="flex justify-center items-start animate-spin-slow"
          aria-label="rotating atom emoji"
        >
          <FadeUp>
            <Atom />
          </FadeUp>
        </span>
      </h2>

      <p className="px-8 w-full whitespace-pre-wrap md:px-0 md:w-3/6 text-type-base">
        <FadeUp>{content.text}</FadeUp>
      </p>

      <p className="px-8 -mt-3 w-full md:px-0 md:w-3/6 text-type-base">
        <FadeUp>
          {content.cta}{" "}
          <a
            className="hover:text-gray-400 transition-colors"
            href={content.ctaLink}
          >
            {content.ctaAnchor}
          </a>
        </FadeUp>
      </p>
    </section>
  );
}
