'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { categories } from '@/data/categories';

const category = categories.find(cat => cat.id === 'sandwiches')!;

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
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const sandwichItems = [
  {
    id: 'club-sandwich',
    name: 'Classic Club Sandwich',
    price: 12.99,
    description: 'Triple-decker sandwich with roasted turkey, crispy bacon, lettuce, tomato, and mayo on toasted sourdough. Served with house-made chips.',
    category: 'sandwiches',
    image: '/images/menu/club-sandwich.jpg',
    calories: 850,
    allergens: ['gluten', 'eggs'],
  },
  {
    id: 'panini',
    name: 'Italian Panini',
    price: 11.99,
    description: 'Fresh mozzarella, prosciutto, tomatoes, basil pesto, and balsamic glaze on pressed ciabatta bread.',
    category: 'sandwiches',
    image: '/images/menu/panini.jpg',
    calories: 680,
    allergens: ['dairy', 'gluten', 'nuts'],
  },
  {
    id: 'veggie-sandwich',
    name: 'Garden Veggie Sandwich',
    price: 11.49,
    description: 'Fresh vegetables, avocado, sprouts, hummus, and herb aioli on whole grain bread. A vegetarian delight!',
    category: 'sandwiches',
    image: '/images/menu/veggie-sandwich.jpg',
    calories: 580,
    allergens: ['dairy', 'gluten'],
  }
];

export default function SandwichesPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-8">
          <Link 
            href="/menu"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Menu
          </Link>
        </div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Sandwiches
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-gray-600 mb-12 max-w-2xl"
        >
          Artisanal sandwiches crafted with fresh ingredients and served on locally-baked bread
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sandwichItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-bold text-green-600">${item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{item.calories} cal</span>
                  {item.allergens.length > 0 && (
                    <span>Contains: {item.allergens.join(', ')}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
