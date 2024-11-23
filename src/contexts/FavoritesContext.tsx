'use client';

import React, { createContext, useContext, useState } from 'react';

interface FavoritesContextType {
  favorites: string[];
  addToFavorites: (itemId: string) => void;
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
  const [favorites, setFavorites] = useState<string[]>([]);

  const addToFavorites = (itemId: string) => {
    setFavorites((prev) => [...prev, itemId]);
  };

  const removeFromFavorites = (itemId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== itemId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
