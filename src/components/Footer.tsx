import type { Content } from "../utils/content";

type Props = { content: Content["footer"] };

export default function Footer({ content }: Props) {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-black p-4 text-center text-sm">
      <p>
        {content.built}{" "}
        <a
          className="text-accent underline"
          href={content.sourceLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          {content.source}
        </a>
      </p>
      <p>{content.text}</p>
    </footer>
  );
}
