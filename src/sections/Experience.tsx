import { FadeUp } from "../components";
import type { Content } from "../utils/content";

type Props = { content: Content["experience"] };

export default function Experience({ content }: Props) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-base scroll-mt-20"
    >
      <h2 id="experience-title" className="text-type-title text-panel">
        <FadeUp>{content.title}</FadeUp>
      </h2>

      <ol className="flex w-full max-w-3xl list-none flex-col gap-8 px-4">
        {content.jobs.map(job => (
          <li key={job.company} className="text-panel px-8 text-left">
            <FadeUp>
              <h3 className="text-xl text-gray-200">
                {job.role} · {job.company}
              </h3>
              <p className="text-base text-gray-300">{job.period} · Remote</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
                {job.bullets.map(bullet => (
                  <li key={bullet.lead}>
                    <strong className="font-semibold text-accent">
                      {bullet.lead}
                    </strong>
                    {" — "}
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </li>
        ))}
      </ol>
    </section>
  );
}
