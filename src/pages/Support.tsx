import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

const Support = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Background Particle Field */}
      <ParticleField mousePosition={mousePosition} scrollProgress={0} />

      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12"
          >
            {/* <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary transition-colors group mb-12"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.3em] uppercase">Back</span>
            </Link> */}

            <h1 className="headline-serif text-6xl md:text-8xl text-foreground tracking-tighter mb-4">
              Skydda.
            </h1>
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
              THE SHIELD THAT THINKS.
            </p>
          </motion.div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 80, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent mx-auto mb-12"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="space-y-10"
          >
            <p className="verse text-lg md:text-xl italic text-muted-foreground leading-relaxed">
              For support enquiries
            </p>

            <motion.a
              href="mailto:support@skydda.ai"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-5 rounded-none font-medium hover:brightness-110 transition-all group relative"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span className="tracking-[0.25em] uppercase text-[11px] font-bold">support@skydda.ai</span>
            </motion.a>
          </motion.div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Support;
