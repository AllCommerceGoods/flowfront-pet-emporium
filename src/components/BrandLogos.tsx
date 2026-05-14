import { motion } from "framer-motion";
import roudybushLogo from "@/assets/roudybush-logo.png";
import pureBitesLogo from "@/assets/purebites-logo.png";
import jollyPetsLogo from "@/assets/jolly-pets-logo.png";

const brands = [
  { src: roudybushLogo, alt: "Roudybush" },
  { src: pureBitesLogo, alt: "PureBites" },
  { src: jollyPetsLogo, alt: "Jolly Pets" },
];

export const BrandLogos = () => {
  return (
    <section className="py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-extrabold uppercase tracking-widest text-muted-foreground mb-6"
        >
          Brands We Carry
        </motion.h2>
        <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="w-[140px] md:w-[160px] h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
