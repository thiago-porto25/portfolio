import { FadeUp } from "../components";
import type { Content } from "../utils/content";

type Props = { content: Content["impact"] };

export default function Impact({ content }: Props) {
  return (
    <section
      aria-label="Impact highlights"
      className="flex justify-center px-4"
    >
      <FadeUp>
        <ul className="text-panel flex list-none flex-col gap-6 px-8 md:flex-row md:gap-12">
          {content.map(item => (
            <li key={item.value} className="text-center">
              <p className="text-4xl font-semibold text-gray-100">
                {item.value}
              </p>
              <p className="max-w-48 text-sm text-gray-300">{item.label}</p>
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  );
}
