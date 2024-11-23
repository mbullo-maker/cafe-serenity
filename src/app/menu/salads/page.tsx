'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { categories } from '@/data/categories';

const category = categories.find(cat => cat.id === 'salads')!;

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

const saladItems = [
  {
    id: 'caesar-salad',
    name: 'Classic Caesar Salad',
    price: 11.99,
    description: 'Crisp romaine lettuce, house-made croutons, shaved parmesan, and creamy Caesar dressing. Add grilled chicken +$4.',
    category: 'salads',
    image: '/images/menu/caesar-salad.jpg',
    calories: 380,
    allergens: ['dairy', 'gluten', 'eggs'],
  },
  {
    id: 'garden-salad',
    name: 'Fresh Garden Salad',
    price: 10.99,
    description: 'Mixed greens, cherry tomatoes, cucumber, carrots, red onions, and your choice of dressing.',
    category: 'salads',
    image: '/images/menu/garden-salad.jpg',
    calories: 220,
    allergens: [],
  },
  {
    id: 'quinoa-salad',
    name: 'Quinoa & Roasted Vegetable Salad',
    price: 13.99,
    description: 'Quinoa with roasted seasonal vegetables, chickpeas, feta cheese, fresh herbs, and lemon vinaigrette.',
    category: 'salads',
    image: '/images/menu/quinoa-salad.jpg',
    calories: 450,
    allergens: ['dairy'],
  },
  {
    id: 'pasta-salad',
    name: 'Mediterranean Pasta Salad',
    price: 12.99,
    description: 'Al dente pasta with cherry tomatoes, olives, feta cheese, cucumber, and Italian dressing.',
    category: 'salads',
    image: '/images/menu/pasta.jpg',
    calories: 480,
    allergens: ['gluten', 'dairy'],
  },
  {
    id: 'salmon-bowl',
    name: 'Grilled Salmon Bowl',
    price: 16.99,
    description: 'Fresh grilled salmon over quinoa with roasted vegetables and citrus dressing.',
    category: 'salads',
    image: '/images/menu/salmon.jpg',
    calories: 520,
    allergens: ['fish'],
  },
  {
    id: 'steak-bowl',
    name: 'Steak & Grain Bowl',
    price: 17.99,
    description: 'Grilled steak over ancient grains with roasted vegetables and chimichurri sauce.',
    category: 'salads',
    image: '/images/menu/steak.jpg',
    calories: 590,
    allergens: ['gluten'],
  },
  {
    id: 'smoothie-bowl',
    name: 'Berry Smoothie Bowl',
    price: 11.99,
    description: 'Blended acai and mixed berries topped with granola, fresh fruit, and honey.',
    category: 'salads',
    image: '/images/menu/smoothie.jpg',
    calories: 420,
    allergens: ['nuts', 'gluten'],
  },
  {
    id: 'garden-bowl',
    name: 'Garden Harvest Bowl',
    price: 13.99,
    description: 'Fresh mixed greens, roasted vegetables, avocado, seeds, and tahini dressing.',
    category: 'salads',
    image: '/images/menu/garden-salad.jpg',
    calories: 450,
    allergens: ['sesame'],
  }
];

category.items = saladItems;

export default function SaladsPage() {
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
