import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface FavoritesStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      isFavorite: (id) => get().items.some((item) => item.id === id),
    }),
    {
      name: 'favorites-storage',
    }
  )
);