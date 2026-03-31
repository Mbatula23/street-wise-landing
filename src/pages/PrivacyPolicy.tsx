const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 sm:px-16 lg:px-24 py-20 max-w-3xl mx-auto">
      <a
        href="/"
        className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 hover:text-foreground/70 transition-colors duration-500 font-medium"
      >
        ← Back
      </a>

      <h1
        className="text-3xl sm:text-4xl mt-12 mb-8 font-normal tracking-[0.02em]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Privacy Policy
      </h1>

      <div className="space-y-6 text-sm text-foreground/60 leading-relaxed">
        <p>
          Murphy Street Partners Limited ("we", "us", or "our") is committed to
          protecting your privacy. This policy explains how we collect, use, and
          safeguard your personal information.
        </p>

        <h2 className="text-foreground/80 text-base font-medium pt-4">Information We Collect</h2>
        <p>
          We may collect personal information you voluntarily provide when you
          contact us via email or through our website, including your name, email
          address, and any details included in your correspondence.
        </p>

        <h2 className="text-foreground/80 text-base font-medium pt-4">How We Use Your Information</h2>
        <p>
          We use personal information solely to respond to your enquiries and to
          provide our advisory services. We do not sell or share your data with
          third parties except where required by law.
        </p>

        <h2 className="text-foreground/80 text-base font-medium pt-4">Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfil the
          purposes for which it was collected, or as required by applicable law.
        </p>

        <h2 className="text-foreground/80 text-base font-medium pt-4">Contact</h2>
        <p>
          For any questions regarding this policy, please contact us at{" "}
          <a
            href="mailto:contact@murphy-street.com"
            className="text-foreground/80 underline hover:text-foreground transition-colors"
          >
            contact@murphy-street.com
          </a>.
        </p>

        <p className="text-foreground/30 text-xs pt-8">Last updated: March 2026</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
