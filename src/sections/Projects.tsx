import { FadeUp } from "../components";
import type { Content } from "../utils/content";

type Props = { content: Content["projects"] };

export default function Projects({ content }: Props) {
  return (
    <section
      id="projects"
      aria-label="projects section"
      className="section-base scroll-mt-20"
    >
      <h2 className="text-type-title text-panel">
        <FadeUp>{content.title}</FadeUp>
      </h2>

      <ul className="grid w-full max-w-6xl list-none gap-6 lg:grid-cols-3">
        {content.featured.map(project => (
          <li
            key={project.name}
            className="text-panel relative flex flex-col overflow-hidden !py-0 focus-within:ring-2 focus-within:ring-accent"
          >
            <FadeUp>
              <img
                src={project.image}
                alt={project.alt}
                width={960}
                height={540}
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
              <div className="flex flex-col gap-3 p-6 text-left">
                <h3 className="text-xl text-gray-200">
                  {/* stretched link: the whole card is clickable */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} — ${project.linkLabel}`}
                    className="text-accent after:absolute after:inset-0 hover:underline focus:outline-none"
                  >
                    {project.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-400">{project.role}</p>
                <p className="text-gray-300">{project.description}</p>
                <ul className="flex list-none flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <li
                      key={tech}
                      className="rounded-full border border-accent/50 px-3 py-1 text-sm text-gray-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </li>
        ))}
      </ul>

      <div className="text-panel px-12">
        <h3 className="mb-4 text-center text-xl text-gray-200">
          {content.moreTitle}
        </h3>
        <ul className="flex list-none flex-wrap justify-center gap-x-8 gap-y-3">
          {content.projectsList.map(project => (
            <li key={project.link}>
              <a
                className="text-lg text-gray-300 underline transition-colors hover:text-accent"
                rel="noopener noreferrer"
                href={project.link}
                target="_blank"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
