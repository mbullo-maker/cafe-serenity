import { LucideIcon } from 'lucide-react';

export interface NutritionInfo {
  calories: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  sugar?: number;
  fiber?: number;
  sodium?: number;
}

export interface DietaryInfo {
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isDairyFree?: boolean;
  isNutFree?: boolean;
  isHalal?: boolean;
  isKosher?: boolean;
}

export interface Customization {
  name: string;
  options: {
    name: string;
    price: number;
    available?: boolean;
  }[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isSpecial?: boolean;
  isSeasonal?: boolean;
  isBestSeller?: boolean;
  requiresAuth?: boolean;
  nutritionInfo?: NutritionInfo;
  allergens?: string[];
  customizations?: Customization[];
  isLocked?: boolean;
  rating?: number;
  isNew?: boolean;
  preparationTime?: number;
  spicyLevel?: 1 | 2 | 3;
  servingSize?: string;
  ingredients?: string[];
  dietaryInfo?: DietaryInfo;
  availability?: {
    inStock: boolean;
    quantity?: number;
    nextAvailable?: string;
  };
  discount?: {
    percentage: number;
    validUntil: string;
  };
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  items?: MenuItem[];
  isLocked?: boolean;
  order?: number;
  featured?: boolean;
  availableTime?: {
    start: string;
    end: string;
  };
}

export interface MenuCategoryPageProps {
  category: MenuCategory;
}
