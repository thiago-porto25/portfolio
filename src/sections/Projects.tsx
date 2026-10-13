import { FadeUp } from "../components";
import type { Content } from "../utils/content";

type Props = { content: Content["projects"] };

export default function Projects({ content }: Props) {
  return (
    <section aria-label="projects section" className="section-base">
      <h2 className="text-type-title text-panel">
        <FadeUp>{content.title}</FadeUp>
      </h2>

      <FadeUp>
        <ul className="text-panel flex list-none flex-col gap-6 px-12">
          {content.projectsList.map(project => (
            <li
              key={project.link}
              className="relative z-10 list-decimal text-gray-300 transition-all hover:text-gray-400"
            >
              <a
                className="block text-2xl hover:animate-wiggle motion-reduce:hover:animate-none"
                rel="noopener noreferrer"
                href={project.link}
                target="_blank"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  );
}
