import { Arrow } from "../components";
import type { Content } from "../utils/content";

type Props = { content: Content["intro"] };

export default function Intro({ content }: Props) {
  return (
    <section
      aria-label="Intro Section"
      className="relative flex h-screen items-center justify-center"
    >
      <div className="text-panel mx-4 flex flex-col items-center gap-4 px-8">
        <h1 className="text-type-title h-fit text-center text-4xl font-semibold md:text-5xl">
          {content.title}
        </h1>
        <p className="text-type-base">{content.subtitle}</p>
        <div className="flex gap-3 pt-2">
          {content.ctas.map((cta, i) => (
            <a
              key={cta.href}
              href={cta.href}
              className={
                i === 0
                  ? "rounded-full bg-wine px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  : "rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-200 transition-colors hover:border-white hover:text-white"
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      <div className=" absolute bottom-5 left-2/4 -ml-3 animate-bounce motion-reduce:animate-none">
        <div
          role="img"
          aria-label="Scroll down to see more"
          className="rotate-90"
        >
          <Arrow />
        </div>
      </div>
    </section>
  );
}
