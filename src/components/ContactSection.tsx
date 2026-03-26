import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid gap-8 lg:grid-cols-2"
        >
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">Address</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  SPORTS ARENA, Main Road<br />
                  Your City, Pakistan
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">Phone / WhatsApp</h3>
                <p className="mt-1 text-sm text-muted-foreground">+92 311 832 7264</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">Email</h3>
                <p className="mt-1 text-sm text-muted-foreground">info@sportsarena.pk</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">Operating Hours</h3>
                <p className="mt-1 text-sm text-muted-foreground">Daily: 6:00 AM – 12:00 AM</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="overflow-hidden rounded-xl border border-border bg-muted">
            <div className="flex h-80 items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-muted-foreground/40" />
                <p className="mt-3 font-heading text-sm font-semibold text-muted-foreground">
                  Add your Google Maps embed here
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Replace this with an iframe from Google Maps
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
