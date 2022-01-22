export default function Info({ content }) {
  return (
    <section aria-label="info section" className="section-base">
      <h2 className="text-type-title">
        {content.title}{" "}
        <span aria-label="rotating atom emoji">{content.atom}</span>
      </h2>

      <p className="px-8 w-full md:px-0 md:w-3/6 text-type-base">
        {content.text}
      </p>
    </section>
  );
}
