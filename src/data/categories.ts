import { Coffee, Cake, UtensilsCrossed, Sun, CupSoda, IceCream, Leaf, Sandwich, Pizza, Salad, Wine, Soup } from 'lucide-react';
import { MenuCategory } from '@/types/menu';

export const categories: MenuCategory[] = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    description: 'Start your day right with our breakfast selections',
    image: '/images/categories/breakfast.jpg',
    icon: Sun,
  },
  {
    id: 'coffee',
    title: 'Coffee',
    description: 'Premium coffee selections from around the world',
    image: '/images/categories/coffee.jpg',
    icon: Coffee,
  },
  {
    id: 'tea',
    title: 'Tea',
    description: 'Aromatic teas and herbal infusions',
    image: '/images/categories/tea.jpg',
    icon: Leaf,
  },
  {
    id: 'pastries',
    title: 'Pastries',
    description: 'Freshly baked pastries and treats',
    image: '/images/categories/pastries.jpg',
    icon: Cake,
  },
  {
    id: 'lunch',
    title: 'Lunch',
    description: 'Satisfying lunch options for every taste',
    image: '/images/categories/lunch.jpg',
    icon: UtensilsCrossed,
  },
  {
    id: 'cold-beverages',
    title: 'Cold Beverages',
    description: 'Refreshing cold drinks and smoothies',
    image: '/images/categories/cold-beverages.jpg',
    icon: CupSoda,
  },
  {
    id: 'desserts',
    title: 'Desserts',
    description: 'Sweet treats and indulgent desserts',
    image: '/images/categories/desserts.jpg',
    icon: IceCream,
  },
  {
    id: 'pizza',
    title: 'Pizza',
    description: 'Artisanal pizzas with premium toppings',
    image: '/images/categories/pizza.jpg',
    icon: Pizza,
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    description: 'Gourmet sandwiches and wraps',
    image: '/images/categories/sandwiches.jpg',
    icon: Sandwich,
  },
  {
    id: 'salads',
    title: 'Salads',
    description: 'Fresh and healthy salad options',
    image: '/images/categories/salads.jpg',
    icon: Salad,
  },
  {
    id: 'wine-beverages',
    title: 'Wine & Beverages',
    description: 'Premium wines and specialty drinks',
    image: '/images/categories/wine-beverages.jpg',
    icon: Wine,
  },
  {
    id: 'soups',
    title: 'Soups',
    description: 'Homemade soups and broths',
    image: '/images/categories/soups.jpg',
    icon: Soup,
  },
];
