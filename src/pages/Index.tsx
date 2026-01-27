import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleField from "@/components/ParticleField";
import HeroSection from "@/components/HeroSection";
import NarrativeSection from "@/components/NarrativeSection";
import LivingOrganism from "@/components/LivingOrganism";
import SilenceSection from "@/components/SilenceSection";
import FooterGate from "@/components/FooterGate";
import EasterEgg from "@/components/EasterEgg";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <motion.main
        className="relative bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        {/* Particle field background */}
        <ParticleField mousePosition={mousePosition} scrollProgress={scrollProgress} />

        {/* Hero */}
        <HeroSection />

        {/* Action Section */}
        <NarrativeSection
          headline={
            <>
              <span className="font-black">A</span>ttention is all you need.{" "} <span className="font-black">I</span>ntelligence follows.
            </>
          }
          verses={[
            "To see everything is to see nothing.",
            "The human eye must narrow to focus.",
            "The machine eye widens.",
            "We pay the price of infinite attention.",
            "You reap the luxury of silence.",
          ]}
          index={0}
        />

        {/* Shadow Origin */}
        <NarrativeSection
          headline="Born in the Shadows."
          verses={[
            "We did not build this in a lab.",
            "It was forged by those who have lived in the dark.",
            "Veterans of the shadow world. Defenders of nations.",
            "We taught it what we know. Now, it knows more.",
          ]}
          index={0}
        />

        {/* Living Organism */}
        <LivingOrganism />

        {/* The Silence */}
        <SilenceSection />

        {/* Footer Gate */}
        <FooterGate />

        {/* Easter Egg - appears after 30s idle */}
        <EasterEgg />
      </motion.main>
    </>
  );
};

export default Index;
