'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { CartItem as CartItemType } from '@/types/menu';
import { motion } from 'framer-motion';
import { microInteractionVariants } from '@/animations';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <motion.div
      variants={microInteractionVariants}
      initial="initial"
      animate="animate"
      className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow"
    >
      <div className="flex items-center space-x-4">
        <Image
          src={item.image}
          alt={item.name}
          width={64}
          height={64}
          className="rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
          {item.customizations?.map((customization, index) => (
            <p key={index} className="text-sm text-gray-500">
              {customization.name}: {customization.value}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Decrease quantity"
          >
            <FiMinus className="w-4 h-4" />
          </button>
          <select
            value={item.quantity}
            onChange={handleQuantityChange}
            className="p-2 border rounded"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Increase quantity"
          >
            <FiPlus className="w-4 h-4" />
          </button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="p-1 ml-2 text-red-500 rounded-full hover:bg-red-50 transition-colors"
            aria-label="Remove item"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
