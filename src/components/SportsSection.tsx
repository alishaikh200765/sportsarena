import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sports = [
  {
    title: "Indoor Cricket",
    description:
      "Play on professional-grade matting with full-length pitches, side netting, and top-class floodlights. Perfect for practice sessions, matches, and tournaments.",
    emoji: "🏏",
  },
  {
    title: "Indoor Football",
    description:
      "Enjoy fast-paced futsal on premium synthetic turf. Ideal for 5-a-side and 7-a-side games with professional goals, markings, and LED scoreboards.",
    emoji: "⚽",
  },
];

const SportsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sports" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Our Sports
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            Play Your Favourite Sport
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {sports.map((sport, i) => (
            <motion.div
              key={sport.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * (i + 1) }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-sm transition-all hover:shadow-lg hover:border-primary/30"
            >
              <span className="text-6xl">{sport.emoji}</span>
              <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">{sport.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{sport.description}</p>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
