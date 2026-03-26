import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, ShieldCheck, Car, Coffee, Shirt, Wifi } from "lucide-react";

const features = [
  { icon: Lightbulb, title: "LED Floodlights", desc: "Stadium-quality lighting for perfect visibility day or night." },
  { icon: ShieldCheck, title: "Premium Turf", desc: "Professional-grade synthetic turf for top-notch playability." },
  { icon: Shirt, title: "Changing Rooms", desc: "Clean and spacious changing rooms with lockers." },
  { icon: Car, title: "Ample Parking", desc: "Convenient parking space right next to the facility." },
  { icon: Coffee, title: "Refreshments", desc: "On-site snack bar and beverages to keep you energized." },
  { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected with complimentary high-speed internet." },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Facilities
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            World-Class Amenities
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
