export default function Footer({ content }) {
  return (
    <footer className="flex justify-center items-center w-full h-10 bg-black/30">
      <p className="text-sm">
        <a
          className="hover:text-gray-200 transition-colors"
          href={content.link}
          title="Send me an email"
        >
          {content.linkText}
        </a>{" "}
        {content.text}
      </p>
    </footer>
  );
}
