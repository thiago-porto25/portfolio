import { lazy, Suspense } from "react";
import { ClientOnly } from "vite-react-ssg/single-page";

import {
  Experience,
  Info,
  Intro,
  Projects,
  Skills,
  SocialNetworks,
} from "../sections";
import { Footer, Navbar } from "../components";

import { content } from "../utils/content";

// Three.js is heavy; keep it out of the initial bundle
const Background = lazy(() => import("../components/Background"));

export default function Home() {
  return (
    <>
      <ClientOnly>
        {() => (
          <Suspense fallback={null}>
            <Background />
          </Suspense>
        )}
      </ClientOnly>
      <Navbar content={content.nav} />
      <main id="main" className="absolute z-10">
        <Intro content={content.intro} />
        <Info content={content.info} />
        <Experience content={content.experience} />
        <Skills content={content.skills} />
        <Projects content={content.projects} />
        <SocialNetworks content={content.social} />
        <Footer content={content.footer} />
      </main>
    </>
  );
}
