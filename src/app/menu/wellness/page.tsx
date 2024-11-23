'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { categories } from '@/data/categories';

const category = categories.find(cat => cat.id === 'wellness')!;

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

const wellnessItems = [
  {
    id: 'acai-bowl',
    name: 'Açaí Bowl',
    price: 12.99,
    description: 'Organic açaí blend topped with granola, fresh fruits, and honey',
    category: 'wellness',
    calories: 380,
    allergens: ['nuts'],
    image: '/images/acai-bowl.jpg'
  },
  {
    id: 'green-smoothie',
    name: 'Green Goddess Smoothie',
    price: 8.99,
    description: 'Spinach, kale, banana, mango, and coconut water',
    category: 'wellness',
    calories: 220,
    allergens: [],
    image: '/images/green-smoothie.jpg'
  },
  {
    id: 'avocado-toast-wellness',
    name: 'Protein Avocado Toast',
    price: 11.99,
    description: 'Whole grain toast with avocado, poached egg, and microgreens',
    category: 'wellness',
    calories: 320,
    allergens: ['eggs', 'gluten'],
    image: '/images/avocado-toast.jpg'
  },
  {
    id: 'quinoa-bowl',
    name: 'Quinoa Power Bowl',
    price: 13.99,
    description: 'Quinoa with roasted vegetables, chickpeas, and tahini dressing',
    category: 'wellness',
    calories: 440,
    allergens: ['sesame'],
    image: '/images/quinoa-bowl.jpg'
  },
  {
    id: 'mushroom-latte',
    name: 'Lion\'s Mane Latte',
    price: 6.99,
    description: 'Adaptogenic mushroom blend with oat milk and cinnamon',
    category: 'wellness',
    calories: 120,
    allergens: ['nuts'],
    image: '/images/mushroom-latte.jpg'
  },
  {
    id: 'chia-pudding',
    name: 'Chia Seed Pudding',
    price: 8.99,
    description: 'Coconut milk chia pudding with seasonal fruits and maple syrup',
    category: 'wellness',
    calories: 280,
    allergens: [],
    image: '/images/chia-pudding.jpg'
  },
];

category.items = wellnessItems;

export default function WellnessPage() {
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
