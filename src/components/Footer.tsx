const Footer = () => (
  <footer className="w-full py-8 mt-16 text-center text-xs text-wedding-text-light border-t border-border bg-white/70">
    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
      <span>
        © {new Date().getFullYear()} С любовью для наших гостей
      </span>
      <span>
        Сайт создан с ❤️ &nbsp;—&nbsp; priglashenie.uz
      </span>
    </div>
  </footer>
);

export default Footer;
