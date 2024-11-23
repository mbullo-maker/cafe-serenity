'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import {
  slideInVariants,
  floatingElementVariants,
  microInteractionVariants,
  cardInteractionVariants,
  revealLandingVariants
} from '@/animations';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface MenuItemProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={cardInteractionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform-gpu"
    >
      <motion.div
        variants={revealLandingVariants}
        className="relative aspect-w-16 aspect-h-9 h-48"
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <motion.div
          variants={slideInVariants.fromTop}
          initial="initial"
          animate={isHovered ? "animate" : "initial"}
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        />
      </motion.div>

      <motion.div className="p-4">
        <motion.div
          variants={floatingElementVariants}
          className="flex justify-between items-start mb-2"
        >
          <motion.h3
            variants={slideInVariants.fromLeft}
            className="text-lg font-semibold text-gray-900"
          >
            {item.name}
          </motion.h3>
          <motion.span
            variants={slideInVariants.fromRight}
            className="text-lg font-bold text-amber-600"
          >
            ${item.price.toFixed(2)}
          </motion.span>
        </motion.div>

        <motion.p
          variants={slideInVariants.fromBottom}
          className="text-gray-600 text-sm mb-4 line-clamp-2"
        >
          {item.description}
        </motion.p>

        <motion.div
          variants={microInteractionVariants}
          className="flex justify-between items-center"
        >
          <motion.button
            onClick={() => onAddToCart(item)}
            whileHover="hover"
            whileTap="tap"
            variants={microInteractionVariants}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-amber-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </motion.button>

          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={microInteractionVariants}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Heart className="w-5 h-5 text-gray-600" />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MenuItem;
