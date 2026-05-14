import { Link } from "react-router-dom";
import { StaticProduct } from "@/lib/staticProducts";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: StaticProduct;
  index?: number;
}

const BRANDS = ["RoudyBush", "PureBites", "Jolly Pets"];

function extractBrand(title: string): string {
  for (const brand of BRANDS) {
    if (title.startsWith(brand)) return brand;
  }
  return "";
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const imageUrl = product.images[0]?.url;
  const brand = extractBrand(product.title);
  const displayTitle = brand
    ? product.title.replace(brand, "").replace(/^[\s\-–]+/, "")
    : product.title;

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
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
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
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`h-3 w-3 ${s <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-200 text-amber-200"}`}
                />
              ))}
              <span className="text-[10px] text-muted-foreground ml-1 font-medium">(4.8)</span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-lg font-extrabold text-foreground">
                ${parseFloat(product.price).toFixed(2)}
              </span>
              {product.availableForSale && (
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                  In Stock
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
