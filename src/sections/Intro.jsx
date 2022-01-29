import { Arrow } from "../components";

export default function Intro({ content }) {
  return (
    <section
      aria-label="Intro Section"
      className="flex relative justify-center items-center h-screen"
    >
      <h1 className="px-4 pb-8 h-fit text-4xl font-semibold text-center md:text-5xl text-type-title">
        {content.title}
      </h1>

      <div className=" absolute bottom-5 left-2/4 -ml-3 animate-bounce">
        <div aria-label="Scroll down to see more" className="rotate-90">
          <Arrow />
        </div>
      </div>
    </section>
  );
}
