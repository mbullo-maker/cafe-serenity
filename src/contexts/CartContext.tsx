'use client';

import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '@/contexts/AuthContext';
import { MenuItem, Customization } from '@/types/menu';

export interface CartItem extends Omit<MenuItem, 'description' | 'category' | 'allergens' | 'calories'> {
  quantity: number;
  customizations?: Customization[];
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, quantity?: number, customizations?: Customization[]) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isItemInCart: (itemId: string) => boolean;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
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

  const addToCart = (item: MenuItem, quantity: number = 1, customizations?: Customization[]) => {
    if (item.requiresAuth && !isAuthenticated) {
      toast.error('Please log in to add this item to your cart');
      return;
    }

    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prevItems, {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity,
        customizations,
        isLocked: item.isLocked,
        requiresAuth: item.requiresAuth,
      }];
    });

    toast.success(`Added ${item.name} to cart`);
  };

  const removeFromCart = (itemId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    toast.success('Item removed from cart');
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Cart cleared');
  };

  const total = useMemo(() => 
    items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const itemCount = useMemo(() => 
    items.reduce((count, item) => count + item.quantity, 0),
    [items]
  );

  const isItemInCart = (itemId: string) => {
    return items.some(item => item.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
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
