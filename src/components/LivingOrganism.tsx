import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { colors } from "@/lib/colors";

const LivingOrganism = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* The Living Organism */}
      <motion.div
        className="relative w-64 h-64 md:w-96 md:h-96"
        style={{ scale, opacity: 0.8 }}
      >
        {/* Core */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-glow-secondary/10 organism-pulse"
          style={{ rotate }}
        />

        {/* Inner rings */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary/20"
            style={{
              inset: `${(i + 1) * 15}%`,
              rotate: useTransform(scrollYProgress, [0, 1], [0, (i + 1) * 90]),
            }}
          />
        ))}

        {/* Floating nodes */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 45;
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/60"
              style={{
                left: `${50 + Math.cos(angle) * radius}%`,
                top: `${50 + Math.sin(angle) * radius}%`,
                scale: useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [0.5, 1.5, 1]
                ),
              }}
              animate={{
                boxShadow: [
                  `0 0 10px ${colors.glowPrimary.hsla(0.3)}`,
                  `0 0 20px ${colors.glowPrimary.hsla(0.6)}`,
                  `0 0 10px ${colors.glowPrimary.hsla(0.3)}`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}

        {/* Center glow */}
        <div className="absolute inset-[35%] rounded-full bg-primary/30 blur-xl" />
        <div className="absolute inset-[40%] rounded-full bg-primary/50 blur-md" />
      </motion.div>

      {/* Text overlay */}
      <motion.div
        className="absolute text-center px-6"
        style={{ opacity: 0.8 }}
      >
        <h2 className="headline-serif text-5xl text-foreground mb-6 !leading-[1.25]">
        It learns. It evolves. It shields.
        </h2>
        <p 
          className="verse text-base md:text-xl max-w-md mx-auto text-foreground/90 !leading-[2]"
          style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)" }}
        >
          Static defenses die. This machine evolves. It does not merely observe your world. It masters it.
        </p>
      </motion.div>
    </section>
  );
};

export default LivingOrganism;
