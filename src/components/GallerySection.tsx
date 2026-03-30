// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const images = [
//   { alt: "Indoor cricket pitch", bg: "hsl(145 63% 32% / .15)" },
//   { alt: "Football turf", bg: "hsl(145 63% 38% / .12)" },
//   { alt: "Floodlights", bg: "hsl(145 63% 28% / .18)" },
//   { alt: "Players in action", bg: "hsl(145 50% 35% / .14)" },
//   { alt: "Facility exterior", bg: "hsl(145 63% 40% / .1)" },
//   { alt: "Changing rooms", bg: "hsl(145 45% 30% / .16)" },
// ];

// const GallerySection = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="gallery" className="py-24 bg-background">
//       <div className="container mx-auto px-4" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="text-center"
//         >
//           <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
//             Gallery
//           </span>
//           <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
//             See Our Arena
//           </h2>
//         </motion.div>

//         <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {images.map((img, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.5, delay: 0.08 * i }}
//               className="group relative aspect-video overflow-hidden rounded-xl border border-border"
//               style={{ backgroundColor: img.bg }}
//             >
//               <div className="flex h-full items-center justify-center">
//                 <span className="font-heading text-sm font-semibold text-foreground/40 group-hover:text-primary transition-colors">
//                   {img.alt}
//                 </span>
//               </div>
//               <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/5" />
//             </motion.div>
//           ))}
//         </div>
//         <p className="mt-6 text-center text-sm text-muted-foreground">
          
//         </p>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  { alt: "Indoor cricket pitch", src: "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Indoor-cricket-in-Dubai-Cover-13-06.jpg" },
  { alt: "Football turf", src: "https://www.integralspor.com/uploads/sports-facilities/high-quality-lighting-system.webp" },
  { alt: "Floodlights", src: "https://5.imimg.com/data5/SELLER/Default/2025/9/542334991/CR/NQ/SF/104707241/70w-back-chowk-ac-led-flood-light-500x500.jpeg" },
  { alt: "Padel", src: "https://skypadel.com/wp-content/uploads/2023/05/pista-pro-padel-league-2-1.jpg" },
  { alt: "Facility exterior", src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwern1tk4P5VQS_UDyr1Ge7iWu6uVS-JBjD_UGz10WSRRyWNmW9_hzD5UCs97QMm_11H_j7k4YNFHqH7NG9QJT0doWSN9DEBzNAjPYb5oGEmzzkSjJpsyr5PNVlaVQLuN35Wpx3spow=s680-w680-h510-rw" },
  { alt: "Cricket Nets", src: "https://dailymagazine.com.pk/wp-content/uploads/2024/11/Indoor-Cricket.jpg" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        
        {/* Heading */}
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

        {/* Images Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative aspect-video overflow-hidden rounded-xl border border-border"
            >
              
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold text-sm">
                  {img.alt}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Optional Text */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Experience premium indoor sports facilities with top-class turf and lighting.
        </p>

      </div>
    </section>
  );
};

export default GallerySection;