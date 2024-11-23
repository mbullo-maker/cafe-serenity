'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import RainAnimation from './RainAnimation';
import {
  Coffee,
  GlassWater,
  Cake,
  Pizza,
  Salad,
  CupSoda,
} from 'lucide-react';

const categories = [
  {
    id: 'espresso-bar',
    title: 'Espresso Bar',
    description: 'Premium espresso drinks and coffee specialties',
    icon: <Coffee className="h-12 w-12" />,
    href: '/menu/espresso-bar',
    itemCount: 10,
    animation: {
      hover: { rotate: [0, -10, 10, -10, 0], scale: 1.1 },
      tap: { scale: 0.95 }
    }
  },
  {
    id: 'hot-drinks',
    title: 'Hot Drinks',
    description: 'Warm your soul with our selection of hot beverages',
    icon: <CupSoda className="h-12 w-12" />,
    href: '/menu/hot-drinks',
    itemCount: 12,
    animation: {
      hover: { y: [-2, 2, -2], scale: 1.1 },
      tap: { scale: 0.95 }
    }
  },
  {
    id: 'cold-drinks',
    title: 'Cold Drinks',
    description: 'Cool down with our refreshing cold drinks',
    icon: <GlassWater className="h-12 w-12" />,
    href: '/menu/cold-drinks',
    itemCount: 12,
    animation: {
      hover: { rotate: [0, 5, -5, 5, 0], scale: 1.1 },
      tap: { scale: 0.95 }
    }
  },
  {
    id: 'desserts',
    title: 'Desserts & Pastries',
    description: 'Indulge in our handcrafted desserts',
    icon: <Cake className="h-12 w-12" />,
    href: '/menu/desserts',
    itemCount: 12,
    animation: {
      hover: { y: [-3, 3, -3], scale: 1.1 },
      tap: { scale: 0.95 }
    }
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    description: 'Fresh and hearty sandwiches made to order',
    icon: <Pizza className="h-12 w-12" />,
    href: '/menu/sandwiches',
    itemCount: 8,
    animation: {
      hover: { rotate: [0, 180], scale: 1.1 },
      tap: { scale: 0.95 }
    }
  },
  {
    id: 'salads',
    title: 'Salads & Bowls',
    description: 'Fresh, healthy, and delicious salads',
    icon: <Salad className="h-12 w-12" />,
    href: '/menu/salads',
    itemCount: 8,
    animation: {
      hover: { rotate: [0, 10, -10, 10, 0], scale: 1.1 },
      tap: { scale: 0.95 }
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function MenuCategories() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      <RainAnimation />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-brown-900 mb-4 font-serif">
            Welcome to Café Serenity
          </h1>
          <p className="text-xl text-brown-600">
            Discover our delightful menu selections
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
            >
              <Link
                href={category.href}
                className="block"
              >
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6"
                      whileHover={category.animation.hover}
                      whileTap={category.animation.tap}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h2 className="text-2xl font-bold text-brown-900 mb-3">
                      {category.title}
                    </h2>
                    <p className="text-brown-600 mb-4">
                      {category.description}
                    </p>
                    <span className="text-amber-700 font-medium">
                      {category.itemCount} items
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {!isAuthenticated && (
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-brown-600 mb-6">
              Sign in to add items to your cart and access exclusive features
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/login"
                className="px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-6 py-3 bg-brown-600 text-white rounded-md hover:bg-brown-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
