import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  { alt: "Indoor cricket pitch", bg: "hsl(145 63% 32% / .15)" },
  { alt: "Football turf", bg: "hsl(145 63% 38% / .12)" },
  { alt: "Floodlights", bg: "hsl(145 63% 28% / .18)" },
  { alt: "Players in action", bg: "hsl(145 50% 35% / .14)" },
  { alt: "Facility exterior", bg: "hsl(145 63% 40% / .1)" },
  { alt: "Changing rooms", bg: "hsl(145 45% 30% / .16)" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Gallery
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            See Our Arena
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative aspect-video overflow-hidden rounded-xl border border-border"
              style={{ backgroundColor: img.bg }}
            >
              <div className="flex h-full items-center justify-center">
                <span className="font-heading text-sm font-semibold text-foreground/40 group-hover:text-primary transition-colors">
                  {img.alt}
                </span>
              </div>
              <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/5" />
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
