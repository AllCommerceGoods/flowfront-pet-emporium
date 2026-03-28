import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { PackageOpen } from "lucide-react";

const Shop = () => {
  const { data: products, isLoading, error } = useProducts(50);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Shop All Products</h1>

          {isLoading && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-square w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-center text-destructive py-12">Failed to load products. Please try again later.</p>
          )}

          {!isLoading && !error && products && products.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          )}

          {!isLoading && !error && products && products.length === 0 && (
            <div className="text-center py-16 space-y-4">
              <PackageOpen className="h-16 w-16 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground text-lg">No products found</p>
              <p className="text-sm text-muted-foreground">Products will appear here once they're added to the store.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
