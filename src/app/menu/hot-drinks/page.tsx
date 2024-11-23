'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { categories } from '../categories';

const category = categories.find(cat => cat.id === 'hot-drinks')!;

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

const hotDrinksItems = [
  {
    id: 'classic-coffee',
    name: 'Classic Coffee',
    price: 3.99,
    description: 'Our signature house blend, freshly brewed for a smooth and balanced flavor. Made with premium Arabica beans.',
    category: 'hot-drinks',
    image: '/images/classic-coffee.jpg',
    calories: 5,
    allergens: [],
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    price: 5.49,
    description: 'Espresso combined with vanilla-flavored syrup, steamed milk and caramel sauce. A perfect balance of sweet and coffee.',
    category: 'hot-drinks',
    image: '/images/caramel-macchiato.jpg',
    calories: 250,
    allergens: ['dairy'],
  },
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte',
    price: 4.99,
    description: 'Espresso with steamed milk and vanilla syrup, topped with a light layer of foam. A classic favorite.',
    category: 'hot-drinks',
    image: '/images/vanilla-latte.jpg',
    calories: 220,
    allergens: ['dairy'],
  },
  {
    id: 'mocha',
    name: 'Café Mocha',
    price: 5.49,
    description: 'Espresso with rich chocolate sauce and steamed milk, topped with whipped cream and chocolate drizzle.',
    category: 'hot-drinks',
    image: '/images/mocha.jpg',
    calories: 290,
    allergens: ['dairy'],
  },
  {
    id: 'earl-grey',
    name: 'Earl Grey Tea',
    price: 4.49,
    description: 'Premium black tea infused with bergamot oil for a citrusy aroma. Served with optional lemon and honey.',
    category: 'hot-drinks',
    image: '/images/earl-grey.jpg',
    calories: 0,
    allergens: [],
  },
  {
    id: 'chamomile',
    name: 'Chamomile Tea',
    price: 4.49,
    description: 'Soothing herbal tea with delicate floral notes. Perfect for relaxation.',
    category: 'hot-drinks',
    image: '/images/chamomile.jpg',
    calories: 0,
    allergens: [],
  },
  {
    id: 'hot-chocolate',
    name: 'Belgian Hot Chocolate',
    price: 4.99,
    description: 'Rich Belgian chocolate steamed with whole milk, topped with whipped cream and chocolate shavings.',
    category: 'hot-drinks',
    image: '/images/hot-chocolate.jpg',
    calories: 320,
    allergens: ['dairy'],
  },
  {
    id: 'chai-latte',
    name: 'Spiced Chai Latte',
    price: 4.99,
    description: 'Masala chai with steamed milk, honey, and our special blend of aromatic spices.',
    category: 'hot-drinks',
    image: '/images/chai-latte.jpg',
    calories: 240,
    allergens: ['dairy'],
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Green Tea Latte',
    price: 5.49,
    description: 'Premium Japanese matcha whisked with steamed milk and a touch of honey.',
    category: 'hot-drinks',
    image: '/images/matcha-latte.jpg',
    calories: 180,
    allergens: ['dairy'],
  },
  {
    id: 'cinnamon-coffee',
    name: 'Cinnamon Dolce Coffee',
    price: 4.99,
    description: 'Our classic coffee infused with cinnamon syrup, topped with whipped cream and cinnamon powder.',
    category: 'hot-drinks',
    image: '/images/cinnamon-coffee.jpg',
    calories: 180,
    allergens: ['dairy'],
  },
  {
    id: 'peppermint-hot-chocolate',
    name: 'Peppermint Hot Chocolate',
    price: 5.49,
    description: 'Belgian hot chocolate with peppermint syrup, topped with whipped cream and crushed candy cane.',
    category: 'hot-drinks',
    image: '/images/peppermint-hot-chocolate.jpg',
    calories: 340,
    allergens: ['dairy'],
  },
  {
    id: 'ginger-tea',
    name: 'Ginger Honey Tea',
    price: 4.49,
    description: 'Fresh ginger tea with honey and a slice of lemon. Great for immunity!',
    category: 'hot-drinks',
    image: '/images/ginger-tea.jpg',
    calories: 50,
    allergens: [],
  }
];

export default function HotDrinksPage() {
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
          Hot Drinks
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-gray-600 mb-12 max-w-2xl"
        >
          Explore our selection of specialty hot drinks, crafted with love and care to warm your heart and soul.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotDrinksItems.map((item, index) => (
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
