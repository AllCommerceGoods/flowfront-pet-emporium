import { Link } from "react-router-dom";
import { staticProducts } from "@/lib/staticProducts";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, PackageOpen } from "lucide-react";
import { motion } from "framer-motion";

export const FeaturedProducts = () => {
  const products = staticProducts;

  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Handpicked for Your Pets</p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            >
              Featured Products
            </motion.h2>
          </div>
          <Link
            to="/shop"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group cursor-pointer"
          >
            View All <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-4">
            <PackageOpen className="h-16 w-16 text-muted-foreground mx-auto" />
            <p className="text-muted-foreground text-lg">No products found</p>
          </div>
        )}
      </div>
    </section>
  );
};
