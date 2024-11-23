'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { categories } from '../categories';

const category = categories.find(cat => cat.id === 'breakfast')!;

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

const breakfastItems = [
  {
    id: 'classic-breakfast',
    name: 'Classic Breakfast',
    price: 14.99,
    description: 'Two eggs any style, crispy bacon, roasted potatoes, and artisanal toast',
    category: 'breakfast',
    calories: 650,
    allergens: ['eggs', 'gluten'],
    image: '/images/classic-breakfast.jpg',
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    price: 12.99,
    description: 'Smashed avocado on sourdough with poached eggs, cherry tomatoes, and microgreens',
    category: 'breakfast',
    calories: 450,
    allergens: ['eggs', 'gluten'],
    image: '/images/avocado-toast.jpg',
  },
  {
    id: 'french-toast',
    name: 'French Toast',
    price: 13.99,
    description: 'Brioche French toast with maple syrup, fresh berries, and whipped cream',
    category: 'breakfast',
    calories: 580,
    allergens: ['eggs', 'dairy', 'gluten'],
    image: '/images/french-toast.jpg',
  },
  {
    id: 'granola-bowl',
    name: 'Granola Bowl',
    price: 11.99,
    description: 'House-made granola with Greek yogurt, honey, and seasonal fruits',
    category: 'breakfast',
    calories: 420,
    allergens: ['nuts', 'dairy'],
    image: '/images/granola-bowl.jpg',
  },
  {
    id: 'breakfast-burrito',
    name: 'Breakfast Burrito',
    price: 13.99,
    description: 'Scrambled eggs, black beans, avocado, cheese, and pico de gallo in a flour tortilla',
    category: 'breakfast',
    calories: 720,
    allergens: ['eggs', 'dairy', 'gluten'],
    image: '/images/breakfast-burrito.jpg',
  },
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    price: 15.99,
    description: 'Poached eggs on English muffin with Canadian bacon and hollandaise sauce',
    category: 'breakfast',
    calories: 680,
    allergens: ['eggs', 'dairy', 'gluten'],
    image: '/images/eggs-benedict.jpg',
  },
];

category.items = breakfastItems;

export default function BreakfastPage() {
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
          {category.title}
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-gray-600 mb-12 max-w-2xl"
        >
          {category.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.items.map((item, index) => (
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
