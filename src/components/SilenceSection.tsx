import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SilenceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-30%" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Chaos outer ring */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Chaotic particles on the edges */}
        {[...Array(40)].map((_, i) => {
          const isTop = i < 10;
          const isBottom = i >= 10 && i < 20;
          const isLeft = i >= 20 && i < 30;
          const isRight = i >= 30;

          let x, y;
          if (isTop) {
            x = Math.random() * 100;
            y = Math.random() * 20;
          } else if (isBottom) {
            x = Math.random() * 100;
            y = 80 + Math.random() * 20;
          } else if (isLeft) {
            x = Math.random() * 20;
            y = Math.random() * 100;
          } else {
            x = 80 + Math.random() * 20;
            y = Math.random() * 100;
          }

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40"
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{
                x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30],
                y: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </motion.div>

      {/* Calm center zone */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {/* Calm aura */}
        <div className="absolute inset-0 -m-24 rounded-full bg-gradient-radial from-background via-background/90 to-transparent blur-2xl" />

        <motion.h2
          className="headline-serif text-2xl md:text-3xl lg:text-4xl text-foreground/90 mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Silence is the ultimate luxury.
        </motion.h2>

        <motion.p
          className="verse text-base md:text-lg max-w-lg mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Let the machine carry the weight. Let the noise dissolve.
          <br />
          <span className="block mt-2">A future without it is no longer conceivable.</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SilenceSection;
