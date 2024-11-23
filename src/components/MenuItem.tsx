'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import toast from 'react-hot-toast';
import { Lock, ChevronDown, Heart, ShoppingCart } from 'lucide-react';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  index: number;
  isSpecial?: boolean;
  isSeasonal?: boolean;
  isBestSeller?: boolean;
  requiresAuth?: boolean;
  nutritionInfo?: {
    calories: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  allergens?: string[];
  customizations?: {
    name: string;
    options: { name: string; price: number; }[];
  }[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: (index: number) => index * 0.1
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export function MenuItem({ 
  name, 
  description, 
  price, 
  image, 
  index,
  isSpecial,
  isSeasonal,
  isBestSeller,
  requiresAuth,
  nutritionInfo,
  allergens,
  customizations 
}: MenuItemProps) {
  const [showDetails, setShowDetails] = useState(false);
  const { data: session } = useSession();
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();

  const handleAddToCart = () => {
    addToCart({ name, price, image });
    toast.success('Added to cart!');
  };

  const handleAddToFavorites = () => {
    if (!session) {
      toast.error('Please sign in to save favorites');
      return;
    }
    addToFavorites({ name, price, image });
    toast.success('Added to favorites!');
  };

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      whileHover="hover"
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
    >
      <div className="relative h-48 group">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {(isSpecial || isSeasonal || isBestSeller) && (
          <div className="absolute top-4 right-4 flex gap-2">
            {isSpecial && (
              <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Special
              </span>
            )}
            {isSeasonal && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Seasonal
              </span>
            )}
            {isBestSeller && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Best Seller
              </span>
            )}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold text-amber-900">{name}</h3>
            {requiresAuth && !session && (
              <div className="flex items-center gap-1 text-amber-600 text-sm mt-1">
                <Lock className="w-4 h-4" />
                <span>Sign in to order</span>
              </div>
            )}
          </div>
          <span className="text-lg font-bold text-amber-600">${price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <motion.div
          animate={{ height: showDetails ? 'auto' : 0, opacity: showDetails ? 1 : 0 }}
          initial={false}
          className="overflow-hidden"
        >
          {nutritionInfo && (
            <div className="mb-4">
              <h4 className="font-medium text-amber-900 mb-2">Nutrition Info</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Calories:</span>
                  <span className="font-medium">{nutritionInfo.calories}</span>
                </div>
                {nutritionInfo.protein && (
                  <div className="flex justify-between">
                    <span>Protein:</span>
                    <span className="font-medium">{nutritionInfo.protein}g</span>
                  </div>
                )}
                {nutritionInfo.carbs && (
                  <div className="flex justify-between">
                    <span>Carbs:</span>
                    <span className="font-medium">{nutritionInfo.carbs}g</span>
                  </div>
                )}
                {nutritionInfo.fat && (
                  <div className="flex justify-between">
                    <span>Fat:</span>
                    <span className="font-medium">{nutritionInfo.fat}g</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {allergens && allergens.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-amber-900 mb-2">Allergens</h4>
              <div className="flex flex-wrap gap-2">
                {allergens.map((allergen) => (
                  <span 
                    key={allergen}
                    className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          )}

          {customizations && customizations.length > 0 && (
            <div>
              <h4 className="font-medium text-amber-900 mb-2">Customizations</h4>
              {customizations.map((customization) => (
                <div key={customization.name} className="mb-3">
                  <h5 className="text-sm font-medium mb-1">{customization.name}</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {customization.options.map((option) => (
                      <div 
                        key={option.name}
                        className="flex justify-between text-sm"
                      >
                        <span>{option.name}</span>
                        <span className="text-amber-600">+${option.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-amber-600 text-sm font-medium flex items-center gap-1 hover:text-amber-700"
          >
            {showDetails ? 'Less Info' : 'More Info'}
            <motion.div
              animate={{ rotate: showDetails ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={handleAddToFavorites}
              className="p-2 rounded-full hover:bg-amber-50 transition-colors"
              title="Add to favorites"
            >
              <Heart className="w-5 h-5 text-amber-600" />
            </button>
            <button
              onClick={handleAddToCart}
              disabled={requiresAuth && !session}
              className={`p-2 rounded-full transition-colors ${
                requiresAuth && !session
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-amber-50'
              }`}
              title="Add to cart"
            >
              <ShoppingCart className="w-5 h-5 text-amber-600" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
