import { Link } from "react-router-dom";
import { ArrowRight, Dog, Cat, Bird, Fish, Rabbit } from "lucide-react";

const categories = [
  { name: "Dogs", icon: Dog, query: "product_type:Dog" },
  { name: "Cats", icon: Cat, query: "product_type:Cat" },
  { name: "Birds", icon: Bird, query: "product_type:Bird" },
  { name: "Aquatics", icon: Fish, query: "product_type:Aquatics" },
  { name: "Small Animals", icon: Rabbit, query: "product_type:Small Animal" },
];

export const CollectionsGrid = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                to="/shop"
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="font-medium text-card-foreground text-sm">{cat.name}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
