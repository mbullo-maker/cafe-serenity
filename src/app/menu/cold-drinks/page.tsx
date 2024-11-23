'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { categories } from '@/data/categories';

const category = categories.find(cat => cat.id === 'cold-drinks')!;

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

const coldDrinkItems = [
  {
    id: 'iced-coffee',
    name: 'Classic Iced Coffee',
    price: 4.99,
    description: 'Our signature coffee blend served over ice. Add your choice of milk and sweetener.',
    category: 'cold-drinks',
    image: '/images/menu/iced-coffee.jpg',
    calories: 120,
    allergens: [],
  },
  {
    id: 'iced-tea',
    name: 'Fresh Brewed Iced Tea',
    price: 3.99,
    description: 'House-brewed black tea served over ice. Available sweetened or unsweetened.',
    category: 'cold-drinks',
    image: '/images/menu/iced-tea.jpg',
    calories: 0,
    allergens: [],
  },
  {
    id: 'smoothie-berry',
    name: 'Mixed Berry Smoothie',
    price: 6.99,
    description: 'Blend of strawberries, blueberries, raspberries, and yogurt. Rich in antioxidants.',
    category: 'cold-drinks',
    image: '/images/menu/smoothie.jpg',
    calories: 280,
    allergens: ['dairy'],
  },
  {
    id: 'red-wine',
    name: 'House Red Wine',
    price: 8.99,
    description: 'Selected red wine with notes of dark fruits and oak. Glass serving.',
    category: 'cold-drinks',
    image: '/images/menu/red-wine.jpg',
    calories: 125,
    allergens: [],
  },
  {
    id: 'white-wine',
    name: 'House White Wine',
    price: 8.99,
    description: 'Crisp white wine with citrus and floral notes. Glass serving.',
    category: 'cold-drinks',
    image: '/images/menu/white-wine.jpg',
    calories: 120,
    allergens: [],
  },
  {
    id: 'champagne',
    name: 'Sparkling Wine',
    price: 9.99,
    description: 'Elegant sparkling wine with fine bubbles and crisp finish. Glass serving.',
    category: 'cold-drinks',
    image: '/images/menu/champagne.jpg',
    calories: 110,
    allergens: [],
  },
  {
    id: 'iced-latte',
    name: 'Iced Café Latte',
    price: 5.49,
    description: 'Espresso and cold milk served over ice. A refreshing coffee classic.',
    category: 'cold-drinks',
    image: '/images/menu/iced-coffee.jpg',
    calories: 130,
    allergens: ['dairy'],
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    price: 5.99,
    description: 'Espresso, chocolate, and cold milk over ice, topped with whipped cream.',
    category: 'cold-drinks',
    image: '/images/menu/iced-coffee.jpg',
    calories: 280,
    allergens: ['dairy'],
  },
  {
    id: 'fruit-smoothie',
    name: 'Tropical Fruit Smoothie',
    price: 6.99,
    description: 'Mango, pineapple, and banana blended with coconut water. Refreshing and tropical.',
    category: 'cold-drinks',
    image: '/images/menu/smoothie.jpg',
    calories: 220,
    allergens: [],
  },
  {
    id: 'iced-chai',
    name: 'Iced Chai Latte',
    price: 5.49,
    description: 'Spiced chai tea blend with cold milk over ice. A perfect balance of sweet and spicy.',
    category: 'cold-drinks',
    image: '/images/menu/iced-tea.jpg',
    calories: 240,
    allergens: ['dairy'],
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew Coffee',
    price: 4.99,
    description: 'Smooth, slow-steeped cold brew coffee served over ice. Less acidic than regular iced coffee.',
    category: 'cold-drinks',
    image: '/images/menu/iced-coffee.jpg',
    calories: 15,
    allergens: [],
  },
  {
    id: 'iced-matcha',
    name: 'Iced Matcha Latte',
    price: 5.99,
    description: 'Premium matcha green tea with cold milk over ice. Rich in antioxidants.',
    category: 'cold-drinks',
    image: '/images/menu/iced-tea.jpg',
    calories: 180,
    allergens: ['dairy'],
  }
];

category.items = coldDrinkItems;

export default function ColdDrinksPage() {
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
