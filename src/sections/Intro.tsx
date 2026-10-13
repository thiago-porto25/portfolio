import { Arrow } from "../components";
import type { Content } from "../utils/content";

type Props = { content: Content["intro"] };

export default function Intro({ content }: Props) {
  return (
    <section
      aria-label="Intro Section"
      className="relative flex h-screen animate-initial items-center justify-center motion-reduce:animate-none"
    >
      <h1 className="text-type-title h-fit px-4 pb-8 text-center text-4xl font-semibold md:text-5xl">
        {content.title}
      </h1>

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
