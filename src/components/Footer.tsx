const socials = ["LinkedIn", "X (Twitter)", "TikTok", "Instagram", "YouTube", "Email"];

const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
              title={s}
            >
              {s}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} #######. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
