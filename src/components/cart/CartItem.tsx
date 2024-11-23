'use client';

import Image from 'next/image';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { CartItem as CartItemType } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
    >
      <div className="relative w-20 h-20">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        {item.customizations && Object.entries(item.customizations).length > 0 && (
          <div className="text-sm text-gray-500 mt-1">
            {Object.entries(item.customizations).map(([key, value]) => (
              <span key={key} className="mr-2">
                {key}: {value}
              </span>
            ))}
          </div>
        )}
        <div className="text-primary-600 font-medium mt-1">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Decrease quantity"
        >
          <FiMinus className="w-4 h-4" />
        </button>
        
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          <FiPlus className="w-4 h-4" />
        </button>

        <button
          onClick={() => removeItem(item.id)}
          className="p-1 ml-2 text-red-500 rounded-full hover:bg-red-50 transition-colors"
          aria-label="Remove item"
        >
          <FiTrash2 className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
