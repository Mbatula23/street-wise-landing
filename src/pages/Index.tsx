import { useEffect, useState } from "react";
import londonVideo from "@/assets/london-video.mp4";


const straplines = [
  "Strategic Sports Advisory",
  "Trusted by Industry Leaders",
  "Precision. Discretion. Results.",
];

const Index = () => {
  const [visible, setVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [lineVisible, setLineVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineVisible(false);
      setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % straplines.length);
        setLineVisible(true);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const enquireHref = "mailto:contact@murphy-street.com?subject=Enquiry";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-16 lg:px-24 py-8">
        <span className="text-foreground/50 tracking-[0.25em] uppercase text-[10px] font-medium">
          Murphy Street Partners
        </span>
        <a
          href={enquireHref}
          className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 hover:text-foreground/70 transition-colors duration-500 font-medium"
        >
          Enquire
        </a>
      </nav>

      {/* Hero text */}
      <main className="pt-40 sm:pt-48 pb-16 flex-shrink-0">
        <div
          className={`text-center px-6 transition-all duration-[1.6s] ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-normal tracking-[0.02em] text-foreground leading-[1.15]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Murphy Street Partners
          </h1>

          <div className="mx-auto my-8 w-16 h-px bg-foreground/20" />

          <p
            className={`text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-light h-5 transition-all duration-500 ease-in-out ${
              lineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {straplines[currentLine]}
          </p>

          <a
            href={enquireHref}
            className="inline-block mt-12 px-12 py-4 border border-foreground/15 text-foreground/50 text-[10px] tracking-[0.3em] uppercase font-medium hover:border-foreground/40 hover:text-foreground/80 transition-all duration-500"
          >
            Enquire
          </a>
        </div>
      </main>

      {/* London cinematic video strip */}
      <div
        className={`flex-1 min-h-[30vh] relative overflow-hidden transition-opacity duration-[2s] delay-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          src={londonVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Footer */}
      <footer
        className={`px-8 sm:px-16 lg:px-24 py-8 transition-all duration-[1.6s] delay-700 ${
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
