import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductByHandle, ShopifyProduct } from '@/lib/shopify';

export function useProducts(first = 50, queryFilter?: string) {
  return useQuery<ShopifyProduct[]>({
    queryKey: ['products', first, queryFilter],
    queryFn: () => fetchProducts(first, queryFilter),
  });
}

export function useProductByHandle(handle: string) {
  return useQuery({
    queryKey: ['product', handle],
    queryFn: () => fetchProductByHandle(handle),
    enabled: !!handle,
  });
}
