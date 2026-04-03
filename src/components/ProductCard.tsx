import { Link } from "react-router-dom";
import { StaticProduct } from "@/lib/staticProducts";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { NotifyMeModal } from "@/components/NotifyMeModal";

interface ProductCardProps {
  product: StaticProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const imageUrl = product.images[0]?.url;
  const isAvailable = product.availableForSale;

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
          {!isAvailable && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs font-semibold">
              Sold Out
            </Badge>
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
              disabled
              onClick={(e) => e.preventDefault()}
              className="h-8 rounded-full opacity-40"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
          {!isAvailable && (
            <div onClick={(e) => e.preventDefault()}>
              <NotifyMeModal productTitle={product.title} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
