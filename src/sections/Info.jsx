import { FadeUp } from "../components";

export default function Info({ content }) {
  return (
    <section aria-label="info section" className="section-base">
      <h2 className="text-5xl text-type-title">
        <span
          className="flex justify-center items-start pb-2 animate-spin-slow"
          aria-label="rotating atom emoji"
        >
          <FadeUp>{content.atom}</FadeUp>
        </span>
      </h2>

      <p className="px-8 w-full whitespace-pre-wrap md:px-0 md:w-3/6 text-type-base">
        <FadeUp>{content.text}</FadeUp>
      </p>
    </section>
  );
}
