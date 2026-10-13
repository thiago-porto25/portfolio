import type { Content } from "../utils/content";

type Props = { content: Content["nav"] };

export default function Navbar({ content }: Props) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-30 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        {content.skip}
      </a>
      <nav
        aria-label="Main"
        className="fixed inset-x-0 top-0 z-20 flex justify-center px-4 pt-4"
      >
        <ul className="flex list-none flex-wrap justify-center gap-x-4 gap-y-1 rounded-3xl bg-black/75 px-6 py-2 text-sm text-gray-300 backdrop-blur-sm sm:gap-x-6">
          {content.links.map(link => (
            <li key={link.href}>
              <a
                className="transition-colors hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
