import { Link } from "react-router-dom";
import { StaticProduct } from "@/lib/staticProducts";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useLocalCartStore } from "@/stores/localCartStore";
import { useToast } from "@/hooks/use-toast";
import { StarRating } from "@/components/StarRating";

interface ProductCardProps {
  product: StaticProduct;
  index?: number;
}

const BRANDS = ["RoudyBush", "PureBites", "Jolly Pets", "Horse Amour"];

function extractBrand(product: StaticProduct): string {
  if (product.brand) return product.brand;
  for (const brand of BRANDS) {
    if (product.title.startsWith(brand)) return brand;
  }
  return "";
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const imageUrl = product.images[0]?.url;
  const brand = extractBrand(product);
  const displayTitle = brand
    ? product.title.replace(brand, "").replace(/^[\s\-–]+/, "")
    : product.title;
  const addItem = useLocalCartStore((s) => s.addItem);
  const { toast } = useToast();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      handle: product.handle,
      title: product.title,
      price: product.price,
      image: imageUrl,
      imageAlt: product.images[0]?.altText ?? undefined,
    });
    toast({ title: "Added to cart", description: product.title, duration: 2000 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/product/${product.handle}`} className="group block cursor-pointer">
        <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/25 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300">
          {/* Image area */}
          <div className="aspect-square bg-white relative overflow-hidden">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={product.images[0]?.altText || product.title}
                className="absolute inset-0 w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                No image
              </div>
            )}

            {/* Quick add slide-up */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <button
                onClick={handleQuickAdd}
                className="w-full bg-primary text-primary-foreground py-3 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors cursor-pointer"
              >
                <ShoppingCart className="h-3.5 w-3.5" />
                Quick Add
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="p-4 space-y-2">
            {brand && (
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-primary">{brand}</p>
            )}
            <h3 className="font-semibold text-card-foreground line-clamp-2 text-sm leading-snug group-hover:text-primary transition-colors duration-200">
              {displayTitle}
            </h3>

            {/* Stars */}
            {product.rating != null && (
              <StarRating rating={product.rating} size="sm" />
            )}

            <div className="flex items-center justify-between pt-1">
              <span className="text-lg font-extrabold text-foreground">
                ${parseFloat(product.price).toFixed(2)}
              </span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                In Stock
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
