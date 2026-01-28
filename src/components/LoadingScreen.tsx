import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"pulse" | "text" | "fracture" | "complete">("pulse");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("text"), 1500),
      setTimeout(() => setPhase("fracture"), 4000),
      setTimeout(() => {
        setPhase("complete");
        onComplete();
      }, 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "complete" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Central Pulse */}
          <motion.div
            className="absolute"
            initial={{ scale: 1 }}
            animate={
              phase === "fracture"
                ? { scale: 0, opacity: 0 }
                : { scale: [1, 1.2, 1] }
            }
            transition={
              phase === "fracture"
                ? { duration: 1 }
                : { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <div className="w-4 h-4 rounded-full bg-primary/80 pulse-glow" />
          </motion.div>

          {/* Fracturing particles */}
          {phase === "fracture" && (
            <>
              {Array.from({ length: 60 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary/60"
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{
                    x: (Math.random() - 0.5) * window.innerWidth,
                    y: (Math.random() - 0.5) * window.innerHeight,
                    opacity: 0.3,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: i * 0.01,
                  }}
                />
              ))}
            </>
          )}

          {/* Text reveal with fill animation */}
          <motion.p
            className="absolute bottom-1/3 text-sm tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "text" || phase === "fracture" ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              className="inline-block font-medium"
              style={{
                backgroundImage: "linear-gradient(to right, hsl(0, 0%, 92%) 0%, hsl(0, 0%, 92%) 50%, transparent 50%, transparent 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ backgroundPosition: "100% 0%" }}
              animate={{
                backgroundPosition:
                  phase === "text" || phase === "fracture"
                    ? "0% 0%"
                    : "100% 0%",
              }}
              transition={{
                duration: 2,
                delay: phase === "text" ? 0.5 : 0,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              In Swedish, it means to protect.
            </motion.span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
