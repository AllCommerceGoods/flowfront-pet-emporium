import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getStaticProductByHandle } from "@/lib/staticProducts";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Truck, ShieldCheck, Star, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const BRANDS = ["RoudyBush", "PureBites", "Jolly Pets"];

function extractBrand(title: string): string {
  for (const brand of BRANDS) {
    if (title.startsWith(brand)) return brand;
  }
  return "";
}

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const product = getStaticProductByHandle(handle || "");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground text-lg mb-6">Product not found</p>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const images = product.images;
  const brand = extractBrand(product.title);
  const displayTitle = brand
    ? product.title.replace(brand, "").replace(/^[\s\-–]+/, "")
    : product.title;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <Button asChild variant="ghost" className="mb-8 rounded-full -ml-2 cursor-pointer">
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Main image */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-border p-6">
                {images[selectedImage] ? (
                  <img
                    src={images[selectedImage].url}
                    alt={images[selectedImage].altText || product.title}
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No image available
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 flex-wrap">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 rounded-xl overflow-hidden bg-white border-2 transition-all duration-200 cursor-pointer flex-shrink-0 p-1 ${
                        selectedImage === i
                          ? "border-primary shadow-md shadow-primary/20"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.altText || `${product.title} view ${i + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {brand && (
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary">{brand}</p>
              )}

              <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight tracking-tight">
                  {displayTitle}
                </h1>

                {/* Stars */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`h-4 w-4 ${s <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-200 text-amber-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">4.8 out of 5 · 124 reviews</span>
                </div>
              </div>

              <div className="text-3xl font-extrabold text-foreground">
                ${parseFloat(product.price).toFixed(2)}
              </div>

              {product.availableForSale ? (
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  In Stock – Ready to Ship
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground inline-block" />
                  Out of Stock
                </div>
              )}

              {/* Description */}
              <div className="border-t border-border pt-5">
                <p className="text-muted-foreground leading-relaxed text-sm">{product.description}</p>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full rounded-full font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  disabled={!product.availableForSale}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {product.availableForSale ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>

              {/* Trust signals */}
              <div className="border-t border-border pt-5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Truck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Free shipping</span> on orders over $75
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <RotateCcw className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">30-day returns</span> — hassle-free
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Quality guaranteed</span> — vet-approved brands
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
