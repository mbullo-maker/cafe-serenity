'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { MenuItem } from '@/types/menu';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import RainAnimation from './RainAnimation';
import Image from 'next/image';

interface MenuCategoryPageProps {
  title: string;
  items: MenuItem[];
  description?: string;
  icon?: React.ReactNode;
}

export const MenuCategoryPage: React.FC<MenuCategoryPageProps> = ({
  title,
  items,
  description,
  icon,
}) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const { isAuthenticated, redirectToLogin } = useAuth();
  const { addToCart } = useCart();
  const router = useRouter();

  const handleQuickAdd = (item: MenuItem) => {
    if (!isAuthenticated) {
      toast.info('Please login to add items to cart');
      redirectToLogin(window.location.pathname);
      return;
    }
    addToCart(item, 1);
    toast.success(`Added ${item.name} to cart!`);
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (!selectedItem) return;
    if (!isAuthenticated) {
      toast.info('Please login to add items to cart');
      redirectToLogin(window.location.pathname);
      return;
    }
    addToCart(selectedItem, quantity);
    toast.success(`Added ${quantity} ${selectedItem.name}${quantity > 1 ? 's' : ''} to cart!`);
    setSelectedItem(null);
    setQuantity(1);
  };

  const toggleFavorite = (itemId: string) => {
    if (!isAuthenticated) {
      toast.info('Please login to add items to favorites');
      redirectToLogin(window.location.pathname);
      return;
    }
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(itemId)) {
        newFavorites.delete(itemId);
      } else {
        newFavorites.add(itemId);
      }
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      <RainAnimation />
      <motion.div 
        className="container mx-auto py-12 px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            {icon && (
              <motion.div
                className="p-4 bg-amber-100 rounded-full"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              >
                {icon}
              </motion.div>
            )}
            <h1 className="text-4xl font-bold text-brown-900 font-serif">{title}</h1>
          </div>
          {description && (
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(item.id)}
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors duration-300 ${
                        favorites.has(item.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuickAdd(item)}
                    className="p-2 bg-amber-700 rounded-full shadow-md hover:shadow-lg transition-all text-white"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-brown-900 mb-2">
                  {item.name}
                </h2>
                <p className="text-brown-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-700">
                    ${item.price.toFixed(2)}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleItemClick(item)}
                    className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors shadow-md hover:shadow-lg"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-48 -mx-8 -mt-8 mb-6">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                  {selectedItem.name}
                </h3>
                <p className="text-brown-600 mb-4">{selectedItem.description}</p>
                <div className="mb-6 space-y-2">
                  <p className="text-brown-600">
                    Calories: {selectedItem.calories}
                  </p>
                  {selectedItem.allergens.length > 0 && (
                    <p className="text-brown-600">
                      Allergens: {selectedItem.allergens.join(', ')}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 bg-amber-100 rounded-md text-amber-700 font-bold"
                    >
                      -
                    </motion.button>
                    <span className="text-lg font-medium">{quantity}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 bg-amber-100 rounded-md text-amber-700 font-bold"
                    >
                      +
                    </motion.button>
                  </div>
                  <span className="text-xl font-bold text-amber-700">
                    ${(selectedItem.price * quantity).toFixed(2)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="w-full py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
