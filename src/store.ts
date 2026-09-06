import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Product = {
  id: string;
  name: string;
  category: string;
  collection: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  rating: number;
  sizes: string[];
};

export type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

type Store = {
  items: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCart = create<Store>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product, size) => set((state) => {
        const existing = state.items.find((item) => item.product.id === product.id && item.size === size);
        if (existing) {
          return { items: state.items.map((item) => item === existing ? { ...item, quantity: item.quantity + 1 } : item) };
        }
        return { items: [...state.items, { product, size, quantity: 1 }] };
      }),
      removeItem: (id, size) => set((state) => ({ items: state.items.filter((item) => !(item.product.id === id && item.size === size)) })),
      updateQuantity: (id, size, quantity) => set((state) => ({
        items: quantity < 1
          ? state.items.filter((item) => !(item.product.id === id && item.size === size))
          : state.items.map((item) => item.product.id === id && item.size === size ? { ...item, quantity } : item),
      })),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'bear-house-cart' },
  ),
);
