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
  id: string;
  name: string;
  value: string;
  options: {
    id: string;
    name: string;
    price?: number;
  }[];
  price?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  allergens?: string[];
  calories?: number;
  isVegan?: boolean;
  isVegetarian?: boolean;
  isSeasonal?: boolean;
  isSpicy?: boolean;
  isNew?: boolean;
  isLocked?: boolean;
  requiresAuth?: boolean;
  rating?: number;
  nutritionInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber?: number;
  };
  availability?: {
    inStock: boolean;
    nextAvailable?: string;
  };
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  itemCount: number;
  items?: MenuItem[];
}

export interface CartItem extends Omit<MenuItem, 'description' | 'category'> {
  quantity: number;
  customizations?: Customization[];
}

export interface MenuCategoryPageProps {
  category: MenuCategory;
}
