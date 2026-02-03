import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto z-10">
        {/* Main Headline */}
        <motion.h1
          className="headline-serif text-3xl md:text-4xl lg:text-5xl text-foreground/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          The world is louder than you think.
        </motion.h1>

        {/* Sub-text */}
        <div className="relative h-32">
          <p className="verse text-lg md:text-xl leading-relaxed absolute inset-0 opacity-100">
          Attackers move at machine speed, hiding in the roar of the static.
            <br />
            <span className="block mt-2">While you sleep, the noise becomes their shield; while you blink, they adapt.</span>
          </p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 2, duration: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
