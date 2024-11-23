'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import RainAnimation from './RainAnimation';
import AnimatedMenuCategory from './AnimatedMenuCategory';
import {
  Coffee,
  GlassWater,
  Cake,
  Pizza,
  Salad,
  CupSoda,
} from 'lucide-react';
import {
  staggeredEntranceVariants,
  staggeredChildVariants,
  perspectiveLandingVariants,
  floatingElementVariants
} from '@/animations';

const categories = [
  {
    id: 'espresso-bar',
    title: 'Espresso Bar',
    description: 'Premium espresso drinks and coffee specialties',
    icon: <Coffee className="h-12 w-12" />,
    href: '/menu/espresso-bar',
    itemCount: 10,
  },
  {
    id: 'hot-drinks',
    title: 'Hot Drinks',
    description: 'Warm your soul with our selection of hot beverages',
    icon: <CupSoda className="h-12 w-12" />,
    href: '/menu/hot-drinks',
    itemCount: 12,
  },
  {
    id: 'cold-drinks',
    title: 'Cold Drinks',
    description: 'Cool down with our refreshing cold drinks',
    icon: <GlassWater className="h-12 w-12" />,
    href: '/menu/cold-drinks',
    itemCount: 12,
  },
  {
    id: 'desserts',
    title: 'Desserts & Pastries',
    description: 'Indulge in our handcrafted desserts',
    icon: <Cake className="h-12 w-12" />,
    href: '/menu/desserts',
    itemCount: 12,
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    description: 'Fresh and hearty sandwiches made to order',
    icon: <Pizza className="h-12 w-12" />,
    href: '/menu/sandwiches',
    itemCount: 8,
  },
  {
    id: 'salads',
    title: 'Salads & Bowls',
    description: 'Fresh, healthy, and delicious salads',
    icon: <Salad className="h-12 w-12" />,
    href: '/menu/salads',
    itemCount: 8,
  }
];

const MenuCategories = () => {
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
          variants={staggeredEntranceVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={staggeredChildVariants}
              custom={index}
              whileHover="hover"
              initial="initial"
              animate="animate"
              className="relative"
            >
              <Link href={`/menu/${category.id}`}>
                <motion.div
                  variants={perspectiveLandingVariants}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                >
                  <motion.div
                    variants={floatingElementVariants}
                    className="aspect-w-16 aspect-h-9"
                  >
                    <AnimatedMenuCategory category={category} />
                  </motion.div>
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
};

export default MenuCategories;
