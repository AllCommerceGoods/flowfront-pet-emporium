import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { PackageOpen } from "lucide-react";

export const FeaturedProducts = () => {
  const { data: products, isLoading, error } = useProducts(8);

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Featured Products
        </h2>

        {isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-square w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-destructive">Failed to load products. Please try again later.</p>
        )}

        {!isLoading && !error && products && products.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}

        {!isLoading && !error && products && products.length === 0 && (
          <div className="text-center py-12 space-y-4">
            <PackageOpen className="h-16 w-16 text-muted-foreground mx-auto" />
            <p className="text-muted-foreground text-lg">No products found</p>
            <p className="text-sm text-muted-foreground">Products will appear here once they're added to the store.</p>
          </div>
        )}
      </div>
    </section>
  );
};
