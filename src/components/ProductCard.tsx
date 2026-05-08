import { Link } from "react-router-dom";
import { StaticProduct } from "@/lib/staticProducts";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: StaticProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const imageUrl = product.images[0]?.url;

  return (
    <Link to={`/product/${product.handle}`} className="group block">
      <div className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all duration-200">
        <div className="aspect-square bg-white relative p-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.images[0]?.altText || product.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              No image
            </div>
          )}
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-card-foreground line-clamp-2 text-sm leading-snug">{product.title}</h3>
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
              className="h-8 rounded-full"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
