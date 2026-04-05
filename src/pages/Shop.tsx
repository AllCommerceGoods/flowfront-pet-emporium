import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { staticProducts } from "@/lib/staticProducts";
import { PackageOpen } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Dogs", "Cats", "Birds", "Aquatics", "Small Animals"];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const filteredProducts = activeCategory === "All"
    ? staticProducts
    : staticProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 tracking-tight">
            {activeCategory === "All" ? "Shop All Products" : activeCategory}
          </h1>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={cat === "All" ? "/shop" : `/shop?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <PackageOpen className="h-16 w-16 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground text-lg">No products found in {activeCategory}</p>
              <p className="text-sm text-muted-foreground">Check back soon — we're adding new products regularly.</p>
              <Link to="/shop" className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold text-sm">
                View All Products
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
