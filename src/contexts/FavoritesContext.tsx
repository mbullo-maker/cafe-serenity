'use client';

import React, { createContext, useContext, useState } from 'react';

interface MenuItem {
  id: string;
}

interface FavoritesContextType {
  favorites: MenuItem[];
  addToFavorites: (item: MenuItem) => void;
  removeFromFavorites: (itemId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<MenuItem[]>([]);

  const addToFavorites = (item: MenuItem) => {
    setFavorites((prev) => {
      if (prev.some((favItem) => favItem.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromFavorites = (itemId: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
