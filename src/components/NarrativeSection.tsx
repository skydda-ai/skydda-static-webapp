import { motion } from "framer-motion";

interface NarrativeSectionProps {
  headline: React.ReactNode;
  verses: string[];
  index: number;
}

const NarrativeSection = ({ headline, verses, index }: NarrativeSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl mx-auto z-10">
        {/* Main Headline */}
        <h2 className="headline-serif text-2xl md:text-3xl lg:text-4xl text-foreground/90 mb-6 !leading-[1.5]">
          {headline}
        </h2>

        {/* Verses */}
        <div className="">
          {verses.map((verse, i) => (
            <p
              key={i}
              className="headline-serif italic text-foreground/70 text-base md:text-xl !leading-[2]"
            >
              {verse}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
