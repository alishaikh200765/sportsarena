import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Clock, label: "Open Daily", value: "6 AM – 12 AM" },
  { icon: Users, label: "Happy Players", value: "5,000+" },
  { icon: Trophy, label: "Tournaments", value: "50+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            About Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            More Than Just a Ground
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            SPORTS ARENA is a state-of-the-art indoor sports facility designed for
            cricket and football enthusiasts. Our premium turf, professional lighting,
            and climate-controlled environment ensure the perfect game every time — rain or shine.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-3"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-4 font-heading text-2xl font-black text-foreground">{s.value}</span>
              <span className="mt-1 text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
