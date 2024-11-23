'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '@/contexts/AuthContext';
import { MenuItem } from '@/types/menu';

export interface CartItem extends Omit<MenuItem, 'description' | 'category' | 'allergens' | 'calories'> {
  quantity: number;
  customizations?: Record<string, string>;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, quantity?: number, customizations?: Record<string, string>) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isItemInCart: (itemId: string) => boolean;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  total: 0,
  itemCount: 0,
  isItemInCart: () => false,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: MenuItem, quantity: number = 1, customizations?: Record<string, string>) => {
    if (item.requiresAuth && !isAuthenticated) {
      toast.error('Please log in to add this item to your cart');
      return;
    }

    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id);
      
      if (existingItem) {
        // Update existing item
        return currentItems.map(i => 
          i.id === item.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }

      // Add new item
      const newItem: CartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity,
        customizations,
        isLocked: item.isLocked,
        requiresAuth: item.requiresAuth,
      };

      return [...currentItems, newItem];
    });

    toast.success(`Added ${item.name} to cart`);
  };

  const removeItem = (itemId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
    toast.success('Item removed from cart');
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(itemId);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Cart cleared');
  };

  const isItemInCart = (itemId: string) => {
    return items.some(item => item.id === itemId);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        itemCount,
        isItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
