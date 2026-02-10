import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

type Phase = "header" | "subtext" | "fracture" | "complete";

const PARTICLE_COUNT = 60;

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<Phase>("header");
  const [dotOrigin, setDotOrigin] = useState<{ x: number; y: number } | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const fractureTriggeredRef = useRef(false);

  // Stable targets: offsets from dot so particles spread evenly in all directions (polar)
  const fractureTargets = useMemo(() => {
    if (typeof window === "undefined") return [];
    const maxDist = 0.55 * Math.min(window.innerWidth, window.innerHeight);
    return Array.from({ length: PARTICLE_COUNT }, () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 0.15 * maxDist + Math.random() * maxDist;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      };
    });
  }, [phase]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("subtext"), 1800);
    const t2 = setTimeout(() => {
      if (fractureTriggeredRef.current) return;
      fractureTriggeredRef.current = true;
      const el = dotRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        setDotOrigin({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
      setPhase("fracture");
    }, 4500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // When fracture starts, complete after the animation has played
  useEffect(() => {
    if (phase !== "fracture") return;
    const t = setTimeout(() => {
      setPhase("complete");
      onComplete();
    }, 2200);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  const handleScreenClick = () => {
    if (phase !== "subtext") return;
    fractureTriggeredRef.current = true;
    const el = dotRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      setDotOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setPhase("fracture");
  };

  const showSubtext = phase === "subtext" || phase === "fracture";

  return (
    <AnimatePresence>
      {phase !== "complete" && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-background ${phase === "subtext" ? "cursor-pointer" : ""}`}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onClick={handleScreenClick}
          role={phase === "subtext" ? "button" : undefined}
          tabIndex={phase === "subtext" ? 0 : undefined}
          aria-label={phase === "subtext" ? "Continue" : undefined}
          onKeyDown={(e) => {
            if (phase === "subtext" && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              handleScreenClick();
            }
          }}
        >
          {/* Fixed layout: header → subtext → dot (same arrangement always) */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-6">
            {/* Header: Skydda — clear reveal */}
            <motion.h1
              className="headline-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight"
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={
                phase === "header" || showSubtext
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 28, filter: "blur(8px)" }
              }
              transition={{
                duration: 1.1,
                ease: [0.22, 0.61, 0.36, 1],
                delay: phase === "header" ? 0.15 : 0,
              }}
            >
              Skydda
            </motion.h1>

            {/* Subtext: left-to-right character-by-character reveal + shiny sweep */}
            <motion.p
              className="text-sm tracking-[0.3em] uppercase text-center min-h-[2rem] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: showSubtext ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className={`inline-block font-medium whitespace-pre ${showSubtext ? "shiny-text" : "text-foreground"}`}
              >
                {"In Swedish, it means to protect."
                  .split("")
                  .map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ opacity: 0 }}
                      animate={
                        showSubtext
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                      transition={{
                        duration: 0.2,
                        delay: showSubtext ? i * 0.04 : 0,
                        ease: "easeOut",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
              </span>
            </motion.p>

            {/* Dot container: fixed slot; constellation triggered by click anywhere or auto at 4.5s */}
            <motion.div
              ref={dotRef}
              className="relative flex items-center justify-center shrink-0 w-4 h-12"
              initial={{ scale: 1, opacity: 0 }}
              animate={
                phase === "fracture"
                  ? { scale: 0, opacity: 0 }
                  : phase === "subtext"
                    ? { scale: 1, opacity: 1 }
                    : { scale: 1, opacity: 0 }
              }
              transition={
                phase === "fracture"
                  ? { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
                  : { duration: 0.5 }
              }
            >
              <div
                className={`w-4 h-4 rounded-full bg-primary ${phase === "subtext" ? "pulse-glow" : ""}`}
                style={{ backgroundColor: "hsl(var(--primary))" }}
              />
            </motion.div>
          </div>

          {/* Fracture: particles burst from the dot's position (dotOrigin), not viewport center */}
          <AnimatePresence>
            {phase === "fracture" && dotOrigin && fractureTargets.length > 0 && (
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                aria-hidden
              >
                <div
                  className="absolute w-0 h-0"
                  style={{
                    left: dotOrigin.x,
                    top: dotOrigin.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {fractureTargets.map((target, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-0 top-0 w-1.5 h-1.5 rounded-full bg-primary"
                      style={{
                        backgroundColor: "hsl(var(--primary))",
                        boxShadow: "0 0 6px hsl(var(--primary) / 0.8)",
                      }}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{
                        x: target.x,
                        y: target.y,
                        opacity: 0.4,
                        scale: 1,
                      }}
                      transition={{
                        duration: 1.4,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: i * 0.015,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
