export default function Footer({ content }) {
  return (
    <footer className="flex justify-center items-center w-full bg-black/30">
      <p className="p-4 text-sm text-center">
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
