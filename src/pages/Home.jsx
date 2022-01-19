import { Info, Intro, Projects, SocialNetworks } from "../sections";
import { Footer } from "../components";

import { content } from "../utils/content";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-neutral-900">
      <main>
        <Intro content={content.intro} />
        <Info content={content.info} />
        <Projects content={content.projects} />
        <SocialNetworks content={content.social} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
