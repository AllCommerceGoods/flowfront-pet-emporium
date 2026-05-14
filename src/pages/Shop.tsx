import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { staticProducts } from "@/lib/staticProducts";
import { PackageOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = ["All", "Dogs", "Cats", "Birds", "Aquatics", "Small Animals", "Horses"];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const filteredProducts =
    activeCategory === "All"
      ? staticProducts
      : staticProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page header */}
        <div className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-widest text-primary mb-2"
            >
              Our Products
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
            >
              {activeCategory === "All" ? "Shop All Products" : activeCategory}
            </motion.h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <Link
                key={cat}
                to={cat === "All" ? "/shop" : `/shop?category=${encodeURIComponent(cat)}`}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </Link>
            ))}
          </motion.div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 space-y-4"
            >
              <PackageOpen className="h-16 w-16 text-muted-foreground mx-auto" />
              <p className="text-foreground font-semibold text-lg">No products in {activeCategory}</p>
              <p className="text-sm text-muted-foreground">
                We're adding new products regularly — check back soon.
              </p>
              <Link
                to="/shop"
                className="inline-block mt-4 px-7 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-sm shadow-md hover:bg-primary/90 transition-colors cursor-pointer"
              >
                View All Products
              </Link>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
