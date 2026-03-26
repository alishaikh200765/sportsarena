import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-foreground"
  >
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 25% 25%, hsl(145 63% 32% / .3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(145 63% 42% / .2) 0%, transparent 50%)"
      }} />
    </div>

    <div className="container relative z-10 mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-primary">
          Cricket &amp; Football
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mx-auto max-w-4xl font-heading text-4xl font-black leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-7xl"
      >
        Your Premier{" "}
        <span className="text-primary">Indoor Sports</span>{" "}
        Destination
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70"
      >
        Experience world-class indoor cricket and football at SPORTS ARENA.
        Professional-grade turf, state-of-the-art facilities, and unbeatable atmosphere.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <a
          href="https://wa.me/923118327264?text=Hi%2C%20I%27d%20like%20to%20book%20a%20session!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
        >
          Book Your Slot <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-8 py-4 font-heading text-sm font-bold text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10"
        >
          Learn More
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
        <div className="h-2 w-1 rounded-full bg-primary" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
