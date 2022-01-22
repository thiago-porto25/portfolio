export default function Intro({ content }) {
  return (
    <section
      aria-label="hero"
      className="flex justify-center items-center h-screen bg-slate-600"
    >
      <h1 className="px-4 pb-8 h-fit text-4xl font-semibold text-center md:text-5xl text-type-title">
        {content.title}
      </h1>
    </section>
  );
}
