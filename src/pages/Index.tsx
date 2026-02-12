import { useEffect, useState } from "react";

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const enquireHref = "mailto:contact@murphy-street.com?subject=Enquiry";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-16 py-6">
        <span
          className="text-foreground/80 tracking-[0.3em] uppercase text-[11px] font-medium"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Murphy Street Partners
        </span>
        <a
          href={enquireHref}
          className="text-[11px] tracking-[0.2em] uppercase text-foreground/40 hover:text-foreground/80 transition-colors duration-500"
        >
          Enquire
        </a>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center">
        <div
          className={`text-center px-6 transition-all duration-[1.4s] ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <h1
            className="text-[clamp(2.2rem,6vw,5.5rem)] font-light tracking-[0.04em] text-foreground/90 leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Murphy Street
            <br />
            Partners
          </h1>

          {/* Subtle divider */}
          <div className="mx-auto my-8 sm:my-10 w-12 h-px bg-foreground/15" />

          <p className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-muted-foreground font-light">
            Strategic Sports Advisory
          </p>

          <a
            href={enquireHref}
            className="inline-block mt-14 sm:mt-18 px-10 py-3.5 border border-foreground/12 text-foreground/50 text-[10px] tracking-[0.3em] uppercase hover:border-foreground/30 hover:text-foreground/80 transition-all duration-500"
          >
            Enquire
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`px-8 sm:px-16 py-8 transition-all duration-[1.4s] delay-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-foreground/25 tracking-[0.15em]">
          <p>19 Grosvenor Gardens, Belgravia, London, SW1W 0BD</p>
          <div className="flex items-center gap-8">
            <span>© {new Date().getFullYear()} Murphy Street Partners</span>
            <a href="#" className="hover:text-foreground/50 transition-colors duration-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
