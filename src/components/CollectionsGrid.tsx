import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import dogImg from "@/assets/category-dog.jpg";
import catImg from "@/assets/category-cat.jpg";
import birdImg from "@/assets/category-bird.jpg";
import fishImg from "@/assets/category-fish.jpg";
import rabbitImg from "@/assets/category-rabbit.jpg";

const categories = [
  { name: "Dogs", image: dogImg, category: "Dogs" },
  { name: "Cats", image: catImg, category: "Cats" },
  { name: "Birds", image: birdImg, category: "Birds" },
  { name: "Aquatics", image: fishImg, category: "Aquatics" },
  { name: "Small Animals", image: rabbitImg, category: "Small Animals" },
];

export const CollectionsGrid = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-center tracking-tight"
        >
          Shop by Category
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/shop?category=${encodeURIComponent(cat.category)}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                </div>
                <div className="flex items-center gap-2 pb-4">
                  <span className="font-bold text-card-foreground text-sm">{cat.name}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
