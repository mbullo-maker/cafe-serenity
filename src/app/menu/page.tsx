'use client';

import { Coffee, Cake, UtensilsCrossed, Sun, CupSoda, IceCream, Leaf, Sandwich, Ticket, Check, Copy, Heart, ShoppingCart, Lock, LogIn, Star, Sparkles, ChefHat, ChevronDown, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { categories } from '@/data/categories';
import { 
  coffeeItems, teaItems, pastryItems, dessertItems, coldBeveragesItems, 
  soupItems, wineAndBeveragesItems as wineItems, breakfastItems, lunchItems, sandwichItems, 
  pizzaItems, saladItems
} from '@/data/menu';
import { useSession } from 'next-auth/react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { MenuItem as MenuItemType } from '@/types/menu';

const categoryCardVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
    rotateY: -180,
    filter: 'blur(10px)',
  },
  animate: (i: number) => ({
    scale: 1,
    opacity: 1,
    rotateY: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: i * 0.2,
      type: "spring",
      stiffness: 100,
    }
  }),
  hover: {
    scale: 1.05,
    rotateY: 15,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.3,
    }
  },
  tap: {
    scale: 0.95,
    rotateY: -15,
  },
  exit: {
    scale: 0,
    opacity: 0,
    rotateY: 180,
    filter: 'blur(20px)',
    transition: {
      duration: 0.5,
    }
  }
};

const categoryContentVariants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.9,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      mass: 0.5,
    }
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    filter: 'blur(10px)',
    transition: {
      duration: 0.5,
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MenuPage() {
  const { data: session } = useSession();
  const { isAuthenticated } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with dramatic reveal */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-4">
            Our Menu
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-amber-700"
          >
            Discover our exquisite selection of handcrafted delights
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            // Grid of category cards with 3D hover effect
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  custom={index}
                  variants={categoryCardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setSelectedCategory(category.id)}
                  className="relative cursor-pointer perspective-1000"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform-gpu transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center gap-3">
                          {React.createElement(category.icon, { className: "w-8 h-8" })}
                          <h2 className="text-2xl font-bold">{category.title}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Selected category content with dramatic entrance
            <motion.div
              key="category-content"
              variants={categoryContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    {React.createElement(
                      categories.find(c => c.id === selectedCategory)?.icon || 'div',
                      { className: "w-8 h-8 text-amber-600" }
                    )}
                    <h2 className="text-3xl font-bold text-gray-800">
                      {categories.find(c => c.id === selectedCategory)?.title}
                    </h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCategory(null)}
                    className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full font-medium
                             hover:bg-amber-200 transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Menu
                  </motion.button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(() => {
                    const categoryId = selectedCategory;
                    let items;
                    switch (categoryId) {
                      case 'breakfast':
                        items = breakfastItems;
                        break;
                      case 'coffee':
                        items = coffeeItems;
                        break;
                      case 'tea':
                        items = teaItems;
                        break;
                      case 'pastries':
                        items = pastryItems;
                        break;
                      case 'lunch':
                        items = lunchItems;
                        break;
                      case 'cold-beverages':
                        items = coldBeveragesItems;
                        break;
                      case 'desserts':
                        items = dessertItems;
                        break;
                      case 'soups':
                        items = soupItems;
                        break;
                      case 'wine-beverages':
                        items = wineItems;
                        break;
                      case 'sandwiches':
                        items = sandwichItems;
                        break;
                      case 'pizza':
                        items = pizzaItems;
                        break;
                      case 'salads':
                        items = saladItems;
                        break;
                      default:
                        items = [];
                    }
                    return items?.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <MenuItem item={item} />
                      </motion.div>
                    )) || null;
                  })()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function MenuItem({ item }: { item: MenuItemType }) {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const { isAuthenticated } = useAuth();
  const isFavorite = favorites.includes(item.id);
  const isLocked = item.isLocked && !isAuthenticated;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden
                ${isLocked ? 'opacity-75 grayscale' : ''}`}
    >
      <div className="relative h-48">
        {isLocked && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
            <div className="text-center text-white">
              <Lock className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium">Login to Access</p>
            </div>
          </div>
        )}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.isNew && (
          <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            New
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          {item.rating && (
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{item.rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-amber-600">
            ${item.price.toFixed(2)}
          </span>
          
          <div className="flex gap-2">
            {!isLocked && (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (isFavorite) {
                      removeFromFavorites(item.id);
                    } else {
                      addToFavorites(item.id);
                    }
                  }}
                  className={`p-2 rounded-full transition-colors
                            ${isFavorite 
                              ? 'bg-red-50 text-red-500' 
                              : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    quantity: 1
                  })}
                  className="bg-amber-500 text-white px-4 py-2 rounded-full
                           text-sm font-medium hover:bg-amber-600 transition-colors
                           flex items-center gap-1"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add
                </motion.button>
              </>
            )}
            {isLocked && (
              <Link
                href="/auth/signin"
                className="bg-amber-500 text-white px-4 py-2 rounded-full
                         text-sm font-medium hover:bg-amber-600 transition-colors
                         flex items-center gap-1"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
