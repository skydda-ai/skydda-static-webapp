import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface NarrativeSectionProps {
  headline: React.ReactNode;
  verses: string[];
  index: number;
}

const NarrativeSection = ({ headline, verses, index }: NarrativeSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="headline-serif text-2xl md:text-3xl lg:text-4xl text-foreground/85 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {headline}
        </motion.h2>

        <div className="space-y-6">
          {verses.map((verse, i) => (
            <motion.p
              key={i}
              className="verse text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
            >
              {verse}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
