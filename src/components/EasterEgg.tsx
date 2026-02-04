import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const EasterEgg = () => {
  const [showSecret, setShowSecret] = useState(false);
  const [idleTime, setIdleTime] = useState(0);

  useEffect(() => {
    let idleTimer: ReturnType<typeof setInterval>;
    let lastActivity = Date.now();

    const resetTimer = () => {
      lastActivity = Date.now();
      setShowSecret(false);
    };

    const checkIdle = () => {
      const elapsed = (Date.now() - lastActivity) / 1000;
      setIdleTime(elapsed);
      if (elapsed >= 30) {
        setShowSecret(true);
      }
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("scroll", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    idleTimer = setInterval(checkIdle, 1000);

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      clearInterval(idleTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showSecret && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="text-center max-w-lg px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <p className="headline-serif italic text-xl md:text-2xl text-primary/80 leading-relaxed">
              "One alert is a whisper. Thousands are noise.
              <br />
              <span className="block mt-4">We make them a shield."</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
