import { Link } from "react-router-dom";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { node } = product;
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const firstVariant = node.variants.edges[0]?.node;
  const imageUrl = node.images.edges[0]?.node.url;
  const price = node.priceRange.minVariantPrice;
  const isAvailable = firstVariant?.availableForSale ?? false;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!firstVariant || !isAvailable) return;
    await addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    });
    toast.success(`${node.title} added to cart`, { position: "top-center" });
  };

  return (
    <Link to={`/product/${node.handle}`} className="group block">
      <div className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
        <div className="aspect-square bg-muted relative overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={node.images.edges[0]?.node.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              No image
            </div>
          )}
          {!isAvailable && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
              Sold Out
            </Badge>
          )}
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-medium text-card-foreground line-clamp-2 text-sm">{node.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-foreground">
              ${parseFloat(price.amount).toFixed(2)}
            </span>
            <Button
              size="sm"
              variant={isAvailable ? "default" : "secondary"}
              disabled={!isAvailable || isLoading}
              onClick={handleAddToCart}
              className="h-8"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShoppingCart className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
