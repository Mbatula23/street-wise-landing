import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const enquireHref = "mailto:contact@murphy-street.com?subject=Enquiry";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      {/* Fluid hero background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ animation: "slow-drift 30s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 sm:px-16 lg:px-24 py-8">
        {/* Monogram Logo */}
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 border border-foreground/20 flex items-center justify-center">
            <span
              className="text-foreground/80 text-sm font-medium tracking-wide"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              MS
            </span>
          </div>
          <span className="hidden sm:block text-foreground/50 tracking-[0.25em] uppercase text-[10px] font-medium">
            Murphy Street Partners
          </span>
        </div>
        <a
          href={enquireHref}
          className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 hover:text-foreground/70 transition-colors duration-500 font-medium"
        >
          Enquire
        </a>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex-1 flex items-center justify-center">
        <div
          className={`text-center px-6 transition-all duration-[1.6s] ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1
            className="text-[clamp(2.4rem,5.5vw,5rem)] font-normal tracking-[0.02em] text-foreground leading-[1.15]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Murphy Street Partners
          </h1>

          {/* Divider */}
          <div className="mx-auto my-10 w-16 h-px bg-foreground/20" />

          <p className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-light">
            Strategic Sports Advisory
          </p>

          <a
            href={enquireHref}
            className="inline-block mt-16 px-12 py-4 border border-foreground/15 text-foreground/50 text-[10px] tracking-[0.3em] uppercase font-medium hover:border-foreground/40 hover:text-foreground/80 transition-all duration-500"
          >
            Enquire
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`relative z-10 px-8 sm:px-16 lg:px-24 py-8 transition-all duration-[1.6s] delay-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="border-t border-foreground/8 pt-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-foreground/25 tracking-[0.18em] uppercase">
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
