'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { categories } from '../categories';

const category = categories.find(cat => cat.id === 'espresso-bar')!;

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

const espressoItems = [
  {
    id: 'classic-espresso',
    name: 'Classic Espresso',
    price: 3.50,
    description: 'Rich and bold single shot of pure espresso with a perfect crema',
    image: '/images/menu/classic-espresso.jpg',
    calories: 1,
    allergens: []
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 4.50,
    description: 'Equal parts espresso, steamed milk, and silky milk foam topped with a sprinkle of cocoa',
    image: '/images/menu/cappuccino.jpg',
    calories: 120,
    allergens: ['milk']
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    price: 5.00,
    description: 'Vanilla-flavored drink marked with espresso and finished with caramel drizzle',
    image: '/images/menu/caramel-macchiato.jpg',
    calories: 250,
    allergens: ['milk']
  },
  {
    id: 'mocha',
    name: 'Café Mocha',
    price: 4.75,
    description: 'Espresso with rich chocolate, steamed milk, and whipped cream',
    image: '/images/menu/mocha.jpg',
    calories: 290,
    allergens: ['milk', 'cocoa']
  },
  {
    id: 'latte',
    name: 'Café Latte',
    price: 4.25,
    description: 'Espresso with steamed milk and a light layer of milk foam',
    image: '/images/menu/latte.jpg',
    calories: 190,
    allergens: ['milk']
  },
  {
    id: 'affogato',
    name: 'Affogato',
    price: 5.50,
    description: 'Hot espresso poured over vanilla gelato, creating a delicious hot-and-cold dessert drink',
    image: '/images/menu/affogato.jpg',
    calories: 230,
    allergens: ['milk']
  },
  {
    id: 'americano',
    name: 'Americano',
    price: 3.75,
    description: 'Espresso shots topped with hot water to produce a light layer of crema',
    image: '/images/menu/americano.jpg',
    calories: 15,
    allergens: []
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    price: 4.50,
    description: 'Expertly steamed milk poured over a double shot of espresso',
    image: '/images/menu/flat-white.jpg',
    calories: 180,
    allergens: ['milk']
  },
  {
    id: 'espresso-con-panna',
    name: 'Espresso Con Panna',
    price: 3.75,
    description: 'Espresso topped with a dollop of whipped cream',
    image: '/images/menu/espresso-con-panna.jpg',
    calories: 30,
    allergens: ['milk']
  }
];

export default function EspressoBarPage() {
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
          Espresso Bar
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-gray-600 mb-12 max-w-2xl"
        >
          Discover our artisanal espresso drinks, crafted with premium beans and expert technique
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {espressoItems.map((item, index) => (
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
