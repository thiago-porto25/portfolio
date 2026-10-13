import { FadeUp } from "../components";
import type { Content } from "../utils/content";

type Props = { content: Content["skills"] };

export default function Skills({ content }: Props) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-base scroll-mt-20"
    >
      <h2 id="skills-title" className="text-type-title text-panel">
        <FadeUp>{content.title}</FadeUp>
      </h2>

      <div className="flex w-full max-w-3xl flex-col gap-6 px-4">
        {content.groups.map(group => (
          <div key={group.name} className="text-panel px-8">
            <FadeUp>
              <h3 className="mb-3 text-center text-xl text-gray-200">
                {group.name}
              </h3>
              <ul className="flex list-none flex-wrap justify-center gap-2">
                {group.items.map(item => (
                  <li
                    key={item}
                    className="rounded-full border border-gray-500 px-3 py-1 text-sm text-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        ))}
      </div>
    </section>
  );
}
