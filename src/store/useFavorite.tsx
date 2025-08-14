import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export const useFavorites = create<Store>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (id) => {
        const current = get().favorites;
        set({
          favorites: current.includes(id)
            ? current.filter((f) => f !== id)
            : [...current, id],
        });
      },
    }),
    { name: "favorites-storage" }
  )
);
