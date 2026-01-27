import { useState, useEffect } from "react";

const FooterGate = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <footer className="min-h-screen flex items-center justify-center px-6 relative z-10">
      <div className="text-center max-w-md mx-auto">
        {/* Brand */}
        <h2 className="headline-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
          Skydda.
        </h2>

        <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-16">
          The Shield That Thinks.
        </p>

        {/* Mystery stat */}
        <p className="text-muted-foreground text-sm mb-2">
          We are currently protecting{" "}
          <span className="text-primary">[Redacted]</span> enterprises.
        </p>

        <p className="headline-serif italic text-[20px] text-foreground mb-12">
          Are you ready to evolve?
        </p>

        {/* The Gate */}
        <form onSubmit={handleSubmit}>
          {!isSubmitted ? (
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="gate-input text-center"
                required
              />
              <button
                type="submit"
                className="mt-8 bg-primary text-black text-xs tracking-[0.3em] uppercase font-medium py-4 px-8 rounded-none hover:bg-primary/90 transition-colors duration-300"
              >
                Request Invitation
              </button>
            </div>
          ) : (
            <div className="text-primary text-sm tracking-wide">
              The gate has opened. We will reach you.
            </div>
          )}
        </form>
      </div>

      {/* Scroll to top - Fixed on right side */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-6 bottom-12 md:right-12 md:bottom-24 z-50 flex flex-row items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 cursor-pointer ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <div className="w-10 h-10 rounded-full border-[1px] border-current flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </div>
        <span className="text-xs tracking-[0.2em] uppercase">Scroll to top</span>
      </button>
    </footer>
  );
};

export default FooterGate;
