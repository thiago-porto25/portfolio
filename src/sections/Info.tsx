import { FadeUp } from "../components";
import Atom from "../components/Atom";
import type { Content } from "../utils/content";

type Props = { content: Content["info"] };

export default function Info({ content }: Props) {
  return (
    <section
      id="about"
      aria-label="info section"
      className="section-base scroll-mt-20"
    >
      <h2 className="text-type-title text-5xl">
        <span
          className="flex animate-spin-slow items-start justify-center"
          role="img"
          aria-label="Rotating atom"
        >
          <FadeUp>
            <Atom />
          </FadeUp>
        </span>
      </h2>

      <div className="text-type-base text-panel w-full whitespace-pre-wrap px-8 md:w-3/6 md:px-6">
        <FadeUp>{content.text}</FadeUp>
      </div>
    </section>
  );
}
