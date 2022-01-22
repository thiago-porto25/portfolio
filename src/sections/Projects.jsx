export default function Projects({ content }) {
  return (
    <section aria-label="projects section" className="section-base">
      <h2 className="text-type-title">{content.title}</h2>

      <ul className="flex flex-col gap-6 list-none">
        {content.projectsList.map(project => (
          <li
            key={project.link}
            className="list-decimal text-gray-300 hover:text-gray-400 transition-all"
          >
            <a
              className="text-2xl"
              rel="noopener noreferrer"
              href={project.link}
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
