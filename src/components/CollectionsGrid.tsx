import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import dogImg from "@/assets/category-dog.jpg";
import catImg from "@/assets/category-cat.jpg";
import birdImg from "@/assets/category-bird.jpg";
import fishImg from "@/assets/category-fish.jpg";
import rabbitImg from "@/assets/category-rabbit.jpg";

const categories = [
  { name: "Dogs", image: dogImg, category: "Dogs", gradient: "from-amber-900/70" },
  { name: "Cats", image: catImg, category: "Cats", gradient: "from-slate-900/70" },
  { name: "Birds", image: birdImg, category: "Birds", gradient: "from-sky-900/65" },
  { name: "Aquatics", image: fishImg, category: "Aquatics", gradient: "from-blue-900/70" },
  { name: "Small Animals", image: rabbitImg, category: "Small Animals", gradient: "from-stone-900/65" },
];

export const CollectionsGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Collections</p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            >
              Shop by Pet
            </motion.h2>
          </div>
          <Link
            to="/shop"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group cursor-pointer"
          >
            View All <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                to={`/shop?category=${encodeURIComponent(cat.category)}`}
                className="group relative block rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                  width={512}
                  height={682}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="block font-extrabold text-white text-base tracking-tight leading-tight">
                    {cat.name}
                  </span>
                  <span className="block text-white/65 text-xs mt-1 font-semibold group-hover:text-white/90 transition-colors duration-300">
                    Shop Now
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
