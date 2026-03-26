import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Hourly",
    price: "2,500",
    unit: "/hour",
    features: ["1 Hour Session", "Any Sport", "Floodlights Included", "Up to 14 Players"],
    popular: false,
  },
  {
    name: "Half Day",
    price: "8,000",
    unit: "/4 hours",
    features: ["4 Hour Block", "Any Sport", "Floodlights Included", "Dedicated Ground", "Refreshments"],
    popular: true,
  },
  {
    name: "Full Day",
    price: "14,000",
    unit: "/8 hours",
    features: ["8 Hour Block", "Any Sport", "Floodlights Included", "Dedicated Ground", "Refreshments", "Changing Rooms"],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Pricing
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            Simple &amp; Transparent
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Affordable rates for everyone. All prices in PKR.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i }}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all hover:shadow-lg ${
                plan.popular
                  ? "border-primary bg-card shadow-md scale-105"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-black text-foreground">Rs {plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.unit}</span>
              </div>
              <ul className="mt-8 flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/923118327264?text=Hi%2C%20I%27d%20like%20to%20book%20a%20session!"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-lg py-3 text-center font-heading text-sm font-bold transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Book via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
