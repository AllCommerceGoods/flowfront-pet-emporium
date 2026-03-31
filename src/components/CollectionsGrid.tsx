import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import dogImg from "@/assets/category-dog.jpg";
import catImg from "@/assets/category-cat.jpg";
import birdImg from "@/assets/category-bird.jpg";
import fishImg from "@/assets/category-fish.jpg";
import rabbitImg from "@/assets/category-rabbit.jpg";

const categories = [
  { name: "Dogs", image: dogImg, query: "product_type:Dog" },
  { name: "Cats", image: catImg, query: "product_type:Cat" },
  { name: "Birds", image: birdImg, query: "product_type:Bird" },
  { name: "Aquatics", image: fishImg, query: "product_type:Aquatics" },
  { name: "Small Animals", image: rabbitImg, query: "product_type:Small Animal" },
];

export const CollectionsGrid = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center tracking-tight">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/shop"
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all overflow-hidden"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <div className="flex items-center gap-2 pb-4">
                <span className="font-bold text-card-foreground text-sm">{cat.name}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
