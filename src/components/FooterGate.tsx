import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const FooterGate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <footer
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Brand */}
        <motion.h2
          className="headline-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Skydda.
        </motion.h2>

        <motion.p
          className="text-whisper text-sm tracking-[0.2em] uppercase mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          The Shield That Thinks.
        </motion.p>

        {/* Mystery stat */}
        <motion.p
          className="text-muted-foreground/60 text-sm mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          We are currently protecting{" "}
          <span className="text-primary/70">[Redacted]</span> enterprises.
        </motion.p>

        <motion.p
          className="headline-serif italic text-lg text-foreground/70 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Are you ready to evolve?
        </motion.p>

        {/* The Gate */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1 }}
        >
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
              <motion.button
                type="submit"
                className="mt-8 text-xs tracking-[0.3em] uppercase text-primary/70 hover:text-primary transition-colors duration-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Invitation
              </motion.button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-primary/80 text-sm tracking-wide"
            >
              The gate has opened. We will reach you.
            </motion.div>
          )}
        </motion.form>

        {/* Subtle brand mark at bottom */}
        <motion.div
          className="mt-24 opacity-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-8 h-8 mx-auto rounded-full border border-primary/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary/50" />
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default FooterGate;
