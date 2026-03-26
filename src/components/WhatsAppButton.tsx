import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "923118327264";
const MESSAGE = "Hi, I'd like to inquire about booking at SPORTS ARENA!";

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(145,63%,32%)] shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 .004 7.176.004 16c0 3.5 1.132 6.744 3.054 9.378L1.052 31.2l6.072-1.946A15.913 15.913 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.612c-.39 1.1-1.932 2.012-3.182 2.278-.856.178-1.972.32-5.73-1.232-4.81-1.984-7.904-6.876-8.142-7.194-.228-.318-1.926-2.566-1.926-4.892s1.218-3.472 1.65-3.946c.432-.474.946-.592 1.26-.592.314 0 .63.002.904.016.29.014.68-.11 1.064.812.39.946 1.332 3.254 1.45 3.49.118.238.196.514.04.83-.158.318-.236.514-.472.792-.236.278-.498.62-.71.832-.236.236-.482.494-.208.968.276.474 1.224 2.018 2.63 3.268 1.808 1.606 3.332 2.104 3.806 2.34.474.236.75.198 1.026-.118.276-.318 1.184-1.38 1.5-1.854.316-.474.632-.394 1.064-.236.432.158 2.738 1.292 3.21 1.528.472.236.788.354.904.55.118.196.118 1.136-.272 2.234z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
