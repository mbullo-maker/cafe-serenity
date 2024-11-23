'use client';

import { useState, useEffect } from 'react';
import { MenuItem } from '@/types/menu';
import { X, Minus, Plus, Info } from 'lucide-react';
import { toast } from 'react-toastify';

interface ItemPopupProps {
  item: MenuItem;
  onClose: () => void;
  onAddToCart: (quantity: number, customizations?: Record<string, string>) => void;
}

export default function ItemPopup({ item, onClose, onAddToCart }: ItemPopupProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedCustomizations, setSelectedCustomizations] = useState<Record<string, string>>({});
  const [showNutrition, setShowNutrition] = useState(false);

  useEffect(() => {
    // Initialize default customization selections
    if (item.customizations) {
      const defaults: Record<string, string> = {};
      item.customizations.forEach(group => {
        defaults[group.name] = group.options[0].name;
      });
      setSelectedCustomizations(defaults);
    }
  }, [item]);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  const handleCustomizationChange = (groupName: string, optionName: string) => {
    setSelectedCustomizations(prev => ({
      ...prev,
      [groupName]: optionName,
    }));
  };

  const calculateTotalPrice = () => {
    let total = item.price * quantity;
    
    if (item.customizations) {
      Object.entries(selectedCustomizations).forEach(([groupName, optionName]) => {
        const group = item.customizations?.find(c => c.name === groupName);
        const option = group?.options.find(o => o.name === optionName);
        if (option?.price) {
          total += option.price * quantity;
        }
      });
    }
    
    return total.toFixed(2);
  };

  const handleAddToCart = () => {
    onAddToCart(quantity, selectedCustomizations);
    toast.success(`Added ${quantity} ${item.name} to cart`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="relative">
          {item.image && (
            <div className="relative h-64 w-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all"
          >
            <X className="w-5 h-5 text-brown-900" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-brown-900">{item.name}</h2>
              <div className="text-xl font-semibold text-brown-900">
                ${calculateTotalPrice()}
              </div>
            </div>
            <p className="mt-2 text-brown-600">{item.description}</p>
          </div>

          {/* Nutrition and Allergens */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowNutrition(!showNutrition)}
                className="flex items-center space-x-2 text-brown-600 hover:text-brown-900"
              >
                <Info className="w-5 h-5" />
                <span>Nutrition & Allergen Info</span>
              </button>
            </div>

            {showNutrition && (
              <div className="bg-brown-50 p-4 rounded-lg space-y-2">
                {item.calories && (
                  <p className="text-brown-700">
                    <span className="font-semibold">Calories:</span> {item.calories}
                  </p>
                )}
                {item.allergens && item.allergens.length > 0 && (
                  <p className="text-brown-700">
                    <span className="font-semibold">Allergens:</span>{' '}
                    {item.allergens.join(', ')}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Customizations */}
          {item.customizations && (
            <div className="space-y-6">
              {item.customizations.map((group) => (
                <div key={group.name} className="space-y-3">
                  <h3 className="font-semibold text-brown-900">{group.name}</h3>
                  <div className="grid gap-2">
                    {group.options.map((option) => (
                      <label
                        key={option.name}
                        className="flex items-center p-3 bg-brown-50 rounded-lg cursor-pointer hover:bg-brown-100 transition-colors"
                      >
                        <input
                          type="radio"
                          name={group.name}
                          value={option.name}
                          checked={selectedCustomizations[group.name] === option.name}
                          onChange={() => handleCustomizationChange(group.name, option.name)}
                          className="w-4 h-4 text-amber-600 focus:ring-amber-500 border-brown-300"
                        />
                        <span className="ml-3 flex-1 text-brown-900">{option.name}</span>
                        {option.price && (
                          <span className="text-brown-600">+${option.price.toFixed(2)}</span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex items-center justify-between pt-4 border-t border-brown-200">
            <div className="flex items-center space-x-4 bg-brown-50 rounded-lg p-2">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="p-1 rounded-full hover:bg-brown-200 text-brown-600"
                disabled={quantity <= 1}
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="w-8 text-center font-medium text-brown-900">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="p-1 rounded-full hover:bg-brown-200 text-brown-600"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 ml-4 bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
            >
              Add to Cart - ${calculateTotalPrice()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
