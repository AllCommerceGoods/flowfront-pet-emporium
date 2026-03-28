import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useProductByHandle } from "@/hooks/useProducts";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, Loader2, ArrowLeft, Minus, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data: product, isLoading, error } = useProductByHandle(handle || "");
  const addItem = useCartStore((s) => s.addItem);
  const cartLoading = useCartStore((s) => s.isLoading);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="aspect-square rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground text-lg mb-4">Product not found</p>
          <Button asChild variant="outline">
            <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const variants = product.variants.edges;
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const images = product.images.edges;
  const isAvailable = selectedVariant?.availableForSale ?? false;

  const handleAddToCart = async () => {
    if (!selectedVariant || !isAvailable) return;
    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success(`${product.title} added to cart`, { position: "top-center" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop</Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                {images[selectedImage]?.node ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                        i === selectedImage ? "border-primary" : "border-border"
                      }`}
                    >
                      <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">{product.title}</h1>
                <p className="text-2xl font-bold text-primary mt-2">
                  ${parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
                </p>
              </div>

              {!isAvailable && (
                <Badge className="bg-destructive text-destructive-foreground">Sold Out</Badge>
              )}

              {/* Variant selection */}
              {product.options.map((option, optIndex) => (
                option.values.length > 1 && (
                  <div key={option.name} className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{option.name}</label>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => {
                        const variantIndex = variants.findIndex(
                          (v) => v.node.selectedOptions[optIndex]?.value === value
                        );
                        return (
                          <button
                            key={value}
                            onClick={() => variantIndex >= 0 && setSelectedVariantIndex(variantIndex)}
                            className={`px-4 py-2 rounded-md border text-sm transition-colors ${
                              selectedVariant?.selectedOptions[optIndex]?.value === value
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border text-foreground hover:border-primary/50"
                            }`}
                          >
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )
              ))}

              {/* Quantity */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full"
                disabled={!isAvailable || cartLoading}
                onClick={handleAddToCart}
              >
                {cartLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <ShoppingCart className="w-4 h-4 mr-2" />
                )}
                {isAvailable ? "Add to Cart" : "Sold Out"}
              </Button>

              {product.description && (
                <div className="pt-6 border-t border-border">
                  <h2 className="text-lg font-semibold text-foreground mb-3">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
