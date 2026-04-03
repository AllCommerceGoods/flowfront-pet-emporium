import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getStaticProductByHandle } from "@/lib/staticProducts";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { NotifyMeModal } from "@/components/NotifyMeModal";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const product = getStaticProductByHandle(handle || "");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground text-lg mb-4">Product not found</p>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const images = product.images;
  const isAvailable = product.availableForSale;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Button asChild variant="ghost" className="mb-6 rounded-full">
            <Link to="/shop"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop</Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                {images[selectedImage] ? (
                  <img
                    src={images[selectedImage].url}
                    alt={images[selectedImage].altText || product.title}
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
                      <img src={img.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-foreground">{product.title}</h1>
                <p className="text-2xl font-extrabold text-primary mt-2">
                  ${parseFloat(product.price).toFixed(2)}
                </p>
              </div>

              {!isAvailable && (
                <Badge className="bg-destructive text-destructive-foreground">Sold Out</Badge>
              )}

              <Button
                size="lg"
                className="w-full rounded-full font-bold"
                disabled={!isAvailable}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {isAvailable ? "Add to Cart" : "Sold Out"}
              </Button>

              {!isAvailable && (
                <NotifyMeModal
                  productTitle={product.title}
                  trigger={
                    <Button variant="outline" size="lg" className="w-full rounded-full font-bold">
                      Notify Me When Available
                    </Button>
                  }
                />
              )}

              {product.description && (
                <div className="pt-6 border-t border-border">
                  <h2 className="text-lg font-bold text-foreground mb-3">Description</h2>
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
