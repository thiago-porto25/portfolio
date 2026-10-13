import type { Content } from "../utils/content";

type Props = { content: Content["footer"] };

export default function Footer({ content }: Props) {
  return (
    <footer className="flex w-full items-center justify-center bg-black">
      <p className="p-4 text-center text-sm">{content.text}</p>
    </footer>
  );
}
