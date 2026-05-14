import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface LocalCartItem {
  id: string;
  handle: string;
  title: string;
  price: string;
  quantity: number;
  image?: string;
  imageAlt?: string;
}

interface LocalCartStore {
  items: LocalCartItem[];
  addItem: (item: Omit<LocalCartItem, 'quantity'> & { quantity?: number }) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useLocalCartStore = create<LocalCartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const qty = item.quantity ?? 1;
        const existing = get().items.find(i => i.id === item.id);
        if (existing) {
          set({ items: get().items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + qty } : i) });
        } else {
          set({ items: [...get().items, { ...item, quantity: qty }] });
        }
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set({ items: get().items.map(i => i.id === id ? { ...i, quantity } : i) });
      },

      removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'local-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
