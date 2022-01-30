import { FadeUp } from "../components";

export default function Projects({ content }) {
  return (
    <section aria-label="projects section" className="section-base">
      <h2 className="text-type-title">
        <FadeUp>{content.title}</FadeUp>
      </h2>

      <FadeUp>
        <ul className="flex flex-col gap-6 list-none">
          {content.projectsList.map(project => (
            <li
              key={project.link}
              className="relative z-10 list-decimal text-gray-300 hover:text-gray-400 transition-all"
            >
              <a
                className="block text-2xl hover:animate-wiggle"
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
