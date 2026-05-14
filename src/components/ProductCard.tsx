import { Link } from "react-router-dom";
import { StaticProduct } from "@/lib/staticProducts";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: StaticProduct;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const imageUrl = product.images[0]?.url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link to={`/product/${product.handle}`} className="group block">
        <div className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="aspect-square bg-white relative p-4 overflow-hidden">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={product.images[0]?.altText || product.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                No image
              </div>
            )}
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-card-foreground line-clamp-2 text-sm leading-snug group-hover:text-primary transition-colors duration-200">{product.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold text-foreground">
                ${parseFloat(product.price).toFixed(2)}
              </span>
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="h-8 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
