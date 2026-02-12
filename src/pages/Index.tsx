import { useEffect, useState } from "react";

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const enquireHref = "mailto:contact@murphy-street.com?subject=Enquiry";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border/40">
        <a
          href="/"
          className="text-foreground tracking-[0.25em] uppercase text-sm font-medium"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Murphy Street Partners
        </a>
        <a
          href={enquireHref}
          className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          Enquire
        </a>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Subtle radial gradient background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, hsl(222 47% 12%) 0%, hsl(222 47% 6%) 70%)",
          }}
        />

        <div
          className={`relative z-10 text-center px-6 transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.06em] text-foreground leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Murphy Street Partners
          </h1>

          {/* Gold divider */}
          <div className="mx-auto my-6 sm:my-8 w-16 h-px bg-primary" />

          <p
            className="text-sm sm:text-base tracking-[0.3em] uppercase text-muted-foreground font-light"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Strategic Sports Advisory
          </p>

          <a
            href={enquireHref}
            className="inline-block mt-10 sm:mt-14 px-8 py-3 border border-primary/60 text-primary text-xs tracking-[0.25em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Enquire
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`border-t border-border/40 px-6 sm:px-12 py-8 transition-all duration-1000 delay-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-wide">
          <p>19 Grosvenor Gardens, Belgravia, London, SW1W 0BD</p>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Murphy Street Partners</span>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
