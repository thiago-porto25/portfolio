import { Info, Intro, Projects, SocialNetworks } from "../sections";
import { Footer, Background } from "../components";

import { content } from "../utils/content";

export default function Home() {
  return (
    <>
      <Background />
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
