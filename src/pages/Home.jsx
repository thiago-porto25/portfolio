import { lazy, Suspense } from "react";

import { Info, Intro, Projects, SocialNetworks } from "../sections";
import { Footer } from "../components";

import { content } from "../utils/content";

// Three.js is heavy; keep it out of the initial bundle
const Background = lazy(() => import("../components/Background"));

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <main className="absolute z-10">
        <Intro content={content.intro} />
        <Info content={content.info} />
        <Projects content={content.projects} />
        <SocialNetworks content={content.social} />
        <Footer content={content.footer} />
      </main>
    </>
  );
}
