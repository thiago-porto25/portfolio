import { useEffect, useState } from "react";

import type { Content } from "../utils/content";

type Props = { content: Content["nav"] };

export default function Navbar({ content }: Props) {
  // Hide on scroll down (more room on small screens), show on scroll up
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = content.links.map(l => l.href.slice(1));
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [content.links]);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        className={`fixed inset-x-0 top-0 z-20 flex justify-center px-2 pt-2 transition-transform duration-300 motion-reduce:transition-none sm:px-4 sm:pt-4 ${
          hidden ? "-translate-y-full focus-within:translate-y-0" : ""
        }`}
      >
        <ul className="flex list-none justify-center gap-x-3 rounded-3xl bg-black/75 px-4 py-2 text-xs text-gray-300 backdrop-blur-sm sm:gap-x-6 sm:px-6 sm:text-sm">
          {content.links.map(link => (
            <li key={link.href}>
              <a
                className={`transition-colors hover:text-white ${
                  active === link.href.slice(1) ? "text-accent" : ""
                }`}
                aria-current={
                  active === link.href.slice(1) ? "true" : undefined
                }
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
