import { staticProducts } from "@/lib/staticProducts";
import { ProductCard } from "@/components/ProductCard";
import { PackageOpen } from "lucide-react";

export const FeaturedProducts = () => {
  const products = staticProducts;

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 text-center tracking-tight">
          Featured Products
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 space-y-4">
            <PackageOpen className="h-16 w-16 text-muted-foreground mx-auto" />
            <p className="text-muted-foreground text-lg">No products found</p>
          </div>
        )}
      </div>
    </section>
  );
};
