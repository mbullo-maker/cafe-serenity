'use client';

import { MenuCategoryPage } from '@/components/MenuCategoryPage';
import { getCategoryData } from '../../categories';

export default function BreakfastPage() {
  const { category, items } = getCategoryData('breakfast');
  return <MenuCategoryPage category={category!} items={items} />;
}

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

const breakfastItems = [
  {
    id: 'classic-breakfast',
    name: 'Classic Breakfast',
    price: 14.99,
    description: 'Two eggs any style, crispy bacon, roasted potatoes, and artisanal toast',
    category: 'breakfast',
    calories: 650,
    allergens: ['eggs', 'gluten'],
    image: '/images/classic-breakfast.jpg',
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    price: 12.99,
    description: 'Smashed avocado on sourdough with poached eggs, cherry tomatoes, and microgreens',
    category: 'breakfast',
    calories: 450,
    allergens: ['eggs', 'gluten'],
    image: '/images/avocado-toast.jpg',
  },
  {
    id: 'french-toast',
    name: 'French Toast',
    price: 13.99,
    description: 'Brioche French toast with maple syrup, fresh berries, and whipped cream',
    category: 'breakfast',
    calories: 580,
    allergens: ['eggs', 'dairy', 'gluten'],
    image: '/images/french-toast.jpg',
  },
  {
    id: 'granola-bowl',
    name: 'Granola Bowl',
    price: 11.99,
    description: 'House-made granola with Greek yogurt, honey, and seasonal fruits',
    category: 'breakfast',
    calories: 420,
    allergens: ['nuts', 'dairy'],
    image: '/images/granola-bowl.jpg',
  },
  {
    id: 'breakfast-burrito',
    name: 'Breakfast Burrito',
    price: 13.99,
    description: 'Scrambled eggs, black beans, avocado, cheese, and pico de gallo in a flour tortilla',
    category: 'breakfast',
    calories: 720,
    allergens: ['eggs', 'dairy', 'gluten'],
    image: '/images/breakfast-burrito.jpg',
  },
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    price: 15.99,
    description: 'Poached eggs on English muffin with Canadian bacon and hollandaise sauce',
    category: 'breakfast',
    calories: 680,
    allergens: ['eggs', 'dairy', 'gluten'],
    image: '/images/eggs-benedict.jpg',
  },
];
