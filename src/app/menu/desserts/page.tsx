'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { categories } from '../categories';

const category = categories.find(cat => cat.id === 'desserts')!;

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

const dessertItems = [
  {
    id: 'chocolate-cake',
    name: 'Triple Chocolate Layer Cake',
    price: 7.99,
    description: 'Three layers of rich chocolate cake filled with dark chocolate ganache, topped with chocolate buttercream and fresh berries. A chocolate lover\'s dream!',
    category: 'desserts',
    image: '/images/menu/chocolate-cake.jpg',
    calories: 450,
    allergens: ['dairy', 'eggs', 'gluten'],
  },
  {
    id: 'cheesecake',
    name: 'Classic New York Cheesecake',
    price: 8.49,
    description: 'Creamy vanilla cheesecake with a buttery graham cracker crust, topped with fresh berry compote. Baked to perfection!',
    category: 'desserts',
    image: '/images/menu/cheesecake.jpg',
    calories: 400,
    allergens: ['dairy', 'eggs', 'gluten'],
  },
  {
    id: 'tiramisu',
    name: 'Traditional Tiramisu',
    price: 8.99,
    description: 'Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with premium cocoa powder. Made fresh daily!',
    category: 'desserts',
    image: '/images/menu/tiramisu.jpg',
    calories: 380,
    allergens: ['dairy', 'eggs', 'gluten'],
  }
];

category.items = dessertItems;

export default function DessertsPage() {
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
