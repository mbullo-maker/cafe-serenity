import { MenuItem, MenuCategory, NutritionInfo, DietaryInfo } from '@/types/menu';
import { Coffee, Cake, UtensilsCrossed, Sun, CupSoda, IceCream, Leaf, Pizza, Sandwich, Salad, Wine, Soup } from 'lucide-react';

// Helper function to create menu items with enhanced features
export function createMenuItem(
  id: string,
  name: string,
  description: string,
  price: number,
  category: string,
  options: Partial<MenuItem> = {}
): MenuItem {
  return {
    id,
    name,
    description,
    price,
    category,
    image: `/images/menu/${category}/${id}.jpg`,
    availability: { inStock: true },
    ...options,
  };
}

export const categories: MenuCategory[] = [
  {
    id: 'coffee',
    name: 'Coffee',
    icon: Coffee,
    description: 'Premium coffee selections from around the world',
    order: 1,
    featured: true,
    availableTime: { start: '06:00', end: '22:00' }
  },
  {
    id: 'tea',
    name: 'Tea',
    icon: Leaf,
    description: 'Aromatic teas and herbal infusions',
    order: 2,
    availableTime: { start: '06:00', end: '22:00' }
  },
  {
    id: 'pastries',
    name: 'Pastries',
    icon: Cake,
    description: 'Freshly baked pastries and desserts',
    order: 3,
    availableTime: { start: '06:00', end: '20:00' }
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    icon: Sun,
    description: 'Start your day with our breakfast selections',
    order: 4,
    availableTime: { start: '06:00', end: '11:00' }
  },
  {
    id: 'lunch',
    name: 'Lunch',
    icon: UtensilsCrossed,
    description: 'Satisfying lunch options',
    order: 5,
    availableTime: { start: '11:00', end: '16:00' }
  },
  {
    id: 'cold-beverages',
    name: 'Cold Beverages',
    icon: CupSoda,
    description: 'Refreshing cold drinks',
    order: 6
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: IceCream,
    description: 'Sweet treats and desserts',
    order: 7
  },
  {
    id: 'pizzas',
    name: 'Pizza',
    icon: Pizza,
    description: 'Artisanal pizzas',
    order: 8,
    availableTime: { start: '11:00', end: '22:00' }
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    icon: Sandwich,
    description: 'Fresh and hearty sandwiches',
    order: 9
  },
  {
    id: 'salads',
    name: 'Salads',
    icon: Salad,
    description: 'Fresh and healthy salads',
    order: 10
  },
  {
    id: 'wine-beverages',
    name: 'Wine & Beverages',
    icon: Wine,
    description: 'Fine wines and premium beverages',
    order: 11,
    availableTime: { start: '11:00', end: '23:00' },
    requiresAuth: true
  },
  {
    id: 'soups',
    name: 'Soups',
    icon: Soup,
    description: 'Homemade soups and broths',
    order: 12,
    availableTime: { start: '11:00', end: '21:00' }
  }
];

// Coffee Items (20 items)
export const coffeeItems: MenuItem[] = [
  createMenuItem('americano', 'Americano', 'Espresso diluted with hot water', 3.50, 'coffee', {
    nutritionInfo: { calories: 5, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 3,
    servingSize: '12 oz'
  }),
  createMenuItem('espresso', 'Espresso', 'Pure Italian espresso shot', 2.50, 'coffee', {
    nutritionInfo: { calories: 1, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 2,
    servingSize: '1 oz'
  }),
  createMenuItem('cappuccino', 'Cappuccino', 'Equal parts espresso, steamed milk, and foam', 4.00, 'coffee', {
    nutritionInfo: { calories: 120, protein: 6, carbs: 10, fat: 6 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('latte', 'Café Latte', 'Espresso with steamed milk', 4.00, 'coffee', {
    nutritionInfo: { calories: 150, protein: 8, carbs: 12, fat: 8 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('mocha', 'Café Mocha', 'Espresso with chocolate and steamed milk', 4.50, 'coffee', {
    nutritionInfo: { calories: 250, protein: 8, carbs: 35, fat: 8 },
    preparationTime: 5,
    servingSize: '12 oz'
  }),
  createMenuItem('caramel-macchiato', 'Caramel Macchiato', 'Vanilla-flavored drink marked with espresso and caramel', 4.75, 'coffee', {
    nutritionInfo: { calories: 250, protein: 8, carbs: 35, fat: 7 },
    preparationTime: 5,
    servingSize: '12 oz'
  }),
  createMenuItem('flat-white', 'Flat White', 'Espresso with steamed whole milk', 4.25, 'coffee', {
    nutritionInfo: { calories: 170, protein: 9, carbs: 14, fat: 9 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('cold-brew', 'Cold Brew', 'Smooth, cold-brewed coffee', 4.00, 'coffee', {
    nutritionInfo: { calories: 5, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 3,
    servingSize: '16 oz'
  }),
  createMenuItem('nitro-cold-brew', 'Nitro Cold Brew', 'Cold brew coffee charged with nitrogen', 4.50, 'coffee', {
    nutritionInfo: { calories: 5, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 2,
    servingSize: '16 oz'
  }),
  createMenuItem('affogato', 'Affogato', 'Espresso poured over vanilla gelato', 5.50, 'coffee', {
    nutritionInfo: { calories: 250, protein: 4, carbs: 30, fat: 12 },
    preparationTime: 3,
    servingSize: '8 oz'
  }),
  createMenuItem('vietnamese-coffee', 'Vietnamese Coffee', 'Strong coffee with sweetened condensed milk', 4.75, 'coffee', {
    nutritionInfo: { calories: 220, protein: 4, carbs: 36, fat: 6 },
    preparationTime: 5,
    servingSize: '12 oz'
  }),
  createMenuItem('turkish-coffee', 'Turkish Coffee', 'Finely ground coffee brewed in cezve', 4.50, 'coffee', {
    nutritionInfo: { calories: 10, protein: 0, carbs: 2, fat: 0 },
    preparationTime: 8,
    servingSize: '3 oz'
  }),
  createMenuItem('honey-lavender-latte', 'Honey Lavender Latte', 'Espresso with honey lavender syrup and steamed milk', 5.50, 'coffee', {
    nutritionInfo: { calories: 200, protein: 8, carbs: 32, fat: 6 },
    preparationTime: 5,
    servingSize: '12 oz'
  }),
  createMenuItem('maple-pecan-latte', 'Maple Pecan Latte', 'Espresso with maple pecan syrup and steamed milk', 5.50, 'coffee', {
    nutritionInfo: { calories: 220, protein: 8, carbs: 35, fat: 7 },
    preparationTime: 5,
    servingSize: '12 oz'
  }),
  createMenuItem('irish-coffee', 'Irish Coffee', 'Coffee with Irish whiskey and cream', 8.50, 'coffee', {
    nutritionInfo: { calories: 210, protein: 2, carbs: 18, fat: 8 },
    preparationTime: 6,
    servingSize: '8 oz',
    requiresAgeVerification: true
  }),
  createMenuItem('pumpkin-spice-latte', 'Pumpkin Spice Latte', 'Espresso with pumpkin spice and steamed milk', 5.50, 'coffee', {
    nutritionInfo: { calories: 380, protein: 14, carbs: 52, fat: 14 },
    preparationTime: 5,
    servingSize: '16 oz',
    seasonal: true
  }),
  createMenuItem('white-chocolate-mocha', 'White Chocolate Mocha', 'Espresso with white chocolate and steamed milk', 5.25, 'coffee', {
    nutritionInfo: { calories: 360, protein: 14, carbs: 47, fat: 15 },
    preparationTime: 5,
    servingSize: '16 oz'
  }),
  createMenuItem('cinnamon-dolce-latte', 'Cinnamon Dolce Latte', 'Espresso with cinnamon dolce syrup and steamed milk', 5.25, 'coffee', {
    nutritionInfo: { calories: 340, protein: 13, carbs: 45, fat: 14 },
    preparationTime: 5,
    servingSize: '16 oz'
  }),
  createMenuItem('toffee-nut-latte', 'Toffee Nut Latte', 'Espresso with toffee nut syrup and steamed milk', 5.25, 'coffee', {
    nutritionInfo: { calories: 330, protein: 13, carbs: 44, fat: 14 },
    preparationTime: 5,
    servingSize: '16 oz'
  }),
  createMenuItem('vanilla-sweet-cream-cold-brew', 'Vanilla Sweet Cream Cold Brew', 'Cold brew with vanilla sweet cream', 4.75, 'coffee', {
    nutritionInfo: { calories: 110, protein: 2, carbs: 14, fat: 6 },
    preparationTime: 3,
    servingSize: '16 oz'
  })
];

// Tea Items (20 items)
export const teaItems: MenuItem[] = [
  createMenuItem('earl-grey', 'Earl Grey', 'Classic black tea with bergamot', 3.50, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('english-breakfast', 'English Breakfast', 'Robust black tea blend', 3.50, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('chamomile', 'Chamomile', 'Soothing herbal tea', 3.50, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('green-tea', 'Japanese Green Tea', 'Premium sencha green tea', 3.75, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 3,
    servingSize: '12 oz'
  }),
  createMenuItem('matcha-latte', 'Matcha Green Tea Latte', 'Premium matcha with steamed milk', 4.50, 'tea', {
    nutritionInfo: { calories: 120, protein: 6, carbs: 18, fat: 4 },
    preparationTime: 4,
    servingSize: '12 oz',
    allergens: ['dairy']
  }),
  createMenuItem('chai-latte', 'Masala Chai Latte', 'Spiced black tea with steamed milk', 4.50, 'tea', {
    nutritionInfo: { calories: 180, protein: 6, carbs: 32, fat: 4 },
    preparationTime: 5,
    servingSize: '12 oz',
    allergens: ['dairy']
  }),
  createMenuItem('peppermint', 'Peppermint Tea', 'Refreshing herbal mint tea', 3.50, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('jasmine', 'Jasmine Green Tea', 'Green tea scented with jasmine', 3.75, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 3,
    servingSize: '12 oz'
  }),
  createMenuItem('oolong', 'Oolong Tea', 'Traditional Chinese oolong tea', 4.00, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('rooibos', 'Rooibos Tea', 'South African herbal tea', 3.75, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('ginger', 'Ginger Tea', 'Spicy and warming ginger tea', 3.75, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 5,
    servingSize: '12 oz'
  }),
  createMenuItem('london-fog', 'London Fog', 'Earl Grey tea with vanilla and steamed milk', 4.50, 'tea', {
    nutritionInfo: { calories: 140, protein: 6, carbs: 24, fat: 4 },
    preparationTime: 5,
    servingSize: '12 oz',
    allergens: ['dairy']
  }),
  createMenuItem('hibiscus', 'Hibiscus Tea', 'Tart and fruity herbal tea', 3.75, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('darjeeling', 'Darjeeling', 'Light and floral black tea', 4.00, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('lemongrass', 'Lemongrass Ginger', 'Refreshing lemongrass and ginger blend', 3.75, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 4,
    servingSize: '12 oz'
  }),
  createMenuItem('hojicha', 'Hojicha', 'Roasted Japanese green tea', 4.00, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 3,
    servingSize: '12 oz'
  }),
  createMenuItem('iced-matcha', 'Iced Matcha Latte', 'Cold matcha green tea with milk', 4.75, 'tea', {
    nutritionInfo: { calories: 120, protein: 6, carbs: 18, fat: 4 },
    preparationTime: 3,
    servingSize: '16 oz',
    allergens: ['dairy']
  }),
  createMenuItem('iced-thai-tea', 'Thai Iced Tea', 'Sweet Thai tea with cream', 4.75, 'tea', {
    nutritionInfo: { calories: 180, protein: 4, carbs: 32, fat: 6 },
    preparationTime: 3,
    servingSize: '16 oz',
    allergens: ['dairy']
  }),
  createMenuItem('turmeric-latte', 'Turmeric Tea Latte', 'Golden milk with turmeric and spices', 4.75, 'tea', {
    nutritionInfo: { calories: 130, protein: 6, carbs: 22, fat: 4 },
    preparationTime: 5,
    servingSize: '12 oz',
    allergens: ['dairy']
  }),
  createMenuItem('yerba-mate', 'Yerba Mate', 'Traditional South American energizing tea', 4.00, 'tea', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 4,
    servingSize: '12 oz'
  })
];

// Pastry Items (20 items)
export const pastryItems: MenuItem[] = [
  createMenuItem('croissant', 'Butter Croissant', 'Flaky, buttery French pastry', 3.50, 'pastries', {
    nutritionInfo: { calories: 280, protein: 5, carbs: 32, fat: 14 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy']
  }),
  createMenuItem('pain-au-chocolat', 'Pain au Chocolat', 'Chocolate-filled croissant', 4.00, 'pastries', {
    nutritionInfo: { calories: 300, protein: 6, carbs: 34, fat: 16 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'soy']
  }),
  createMenuItem('almond-croissant', 'Almond Croissant', 'Croissant filled with almond cream', 4.25, 'pastries', {
    nutritionInfo: { calories: 320, protein: 7, carbs: 36, fat: 18 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'nuts']
  }),
  createMenuItem('danish', 'Mixed Berry Danish', 'Flaky pastry with mixed berry filling', 3.75, 'pastries', {
    nutritionInfo: { calories: 290, protein: 5, carbs: 38, fat: 15 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy']
  }),
  createMenuItem('scone', 'Mixed Berry Scone', 'Buttery scone with fresh berries', 3.75, 'pastries', {
    nutritionInfo: { calories: 340, protein: 4, carbs: 46, fat: 16 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy']
  }),
  createMenuItem('muffin', 'Blueberry Muffin', 'Classic blueberry muffin', 3.50, 'pastries', {
    nutritionInfo: { calories: 380, protein: 5, carbs: 52, fat: 16 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('cinnamon-roll', 'Cinnamon Roll', 'Fresh-baked cinnamon roll with cream cheese frosting', 4.25, 'pastries', {
    nutritionInfo: { calories: 420, protein: 6, carbs: 64, fat: 18 },
    preparationTime: 4,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('banana-bread', 'Banana Bread', 'Moist banana bread slice', 3.50, 'pastries', {
    nutritionInfo: { calories: 320, protein: 4, carbs: 48, fat: 12 },
    preparationTime: 3,
    servingSize: '1 slice',
    allergens: ['wheat', 'eggs']
  }),
  createMenuItem('chocolate-chip-cookie', 'Chocolate Chip Cookie', 'Classic chocolate chip cookie', 2.75, 'pastries', {
    nutritionInfo: { calories: 220, protein: 3, carbs: 28, fat: 11 },
    preparationTime: 2,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('oatmeal-raisin-cookie', 'Oatmeal Raisin Cookie', 'Chewy oatmeal cookie with raisins', 2.75, 'pastries', {
    nutritionInfo: { calories: 200, protein: 3, carbs: 32, fat: 8 },
    preparationTime: 2,
    servingSize: '1 piece',
    allergens: ['wheat', 'eggs']
  }),
  createMenuItem('macaron', 'French Macarons', 'Assorted French macarons', 2.50, 'pastries', {
    nutritionInfo: { calories: 120, protein: 2, carbs: 18, fat: 6 },
    preparationTime: 2,
    servingSize: '1 piece',
    allergens: ['eggs', 'nuts']
  }),
  createMenuItem('eclair', 'Chocolate Éclair', 'Classic éclair with chocolate glaze', 4.50, 'pastries', {
    nutritionInfo: { calories: 260, protein: 5, carbs: 32, fat: 14 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('fruit-tart', 'Fresh Fruit Tart', 'Pastry cream tart with fresh fruits', 5.50, 'pastries', {
    nutritionInfo: { calories: 280, protein: 4, carbs: 36, fat: 14 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('carrot-cake', 'Carrot Cake', 'Spiced carrot cake with cream cheese frosting', 4.75, 'pastries', {
    nutritionInfo: { calories: 380, protein: 5, carbs: 52, fat: 18 },
    preparationTime: 3,
    servingSize: '1 slice',
    allergens: ['wheat', 'dairy', 'eggs', 'nuts']
  }),
  createMenuItem('lemon-pound-cake', 'Lemon Pound Cake', 'Classic pound cake with lemon glaze', 3.75, 'pastries', {
    nutritionInfo: { calories: 340, protein: 4, carbs: 48, fat: 16 },
    preparationTime: 3,
    servingSize: '1 slice',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('cheese-danish', 'Cheese Danish', 'Flaky pastry with sweet cheese filling', 4.00, 'pastries', {
    nutritionInfo: { calories: 300, protein: 6, carbs: 34, fat: 16 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('apple-turnover', 'Apple Turnover', 'Flaky pastry filled with spiced apples', 4.25, 'pastries', {
    nutritionInfo: { calories: 320, protein: 4, carbs: 42, fat: 16 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy']
  }),
  createMenuItem('chocolate-muffin', 'Double Chocolate Muffin', 'Rich chocolate muffin with chocolate chips', 3.75, 'pastries', {
    nutritionInfo: { calories: 400, protein: 6, carbs: 54, fat: 18 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'eggs', 'soy']
  }),
  createMenuItem('raspberry-scone', 'Raspberry White Chocolate Scone', 'Buttery scone with raspberries and white chocolate', 4.00, 'pastries', {
    nutritionInfo: { calories: 360, protein: 5, carbs: 48, fat: 17 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'soy']
  }),
  createMenuItem('pecan-sticky-bun', 'Pecan Sticky Bun', 'Sweet roll with caramel and pecans', 4.50, 'pastries', {
    nutritionInfo: { calories: 440, protein: 6, carbs: 58, fat: 22 },
    preparationTime: 4,
    servingSize: '1 piece',
    allergens: ['wheat', 'dairy', 'eggs', 'nuts']
  })
];

// Breakfast Items (20 items)
export const breakfastItems: MenuItem[] = [
  createMenuItem('avocado-toast', 'Avocado Toast', 'Smashed avocado on artisanal toast with microgreens', 8.50, 'breakfast', {
    nutritionInfo: { calories: 320, protein: 12, carbs: 35, fat: 18 },
    preparationTime: 8,
    servingSize: '1 serving',
    dietaryInfo: { isVegetarian: true, isVegan: true }
  }),
  createMenuItem('eggs-benedict', 'Eggs Benedict', 'Poached eggs with hollandaise on English muffin', 12.00, 'breakfast', {
    nutritionInfo: { calories: 540, protein: 24, carbs: 28, fat: 32 },
    preparationTime: 12,
    servingSize: '1 serving',
    allergens: ['eggs', 'dairy', 'wheat']
  }),
  createMenuItem('french-toast', 'Brioche French Toast', 'Classic French toast with maple syrup and berries', 10.00, 'breakfast', {
    nutritionInfo: { calories: 450, protein: 12, carbs: 65, fat: 18 },
    preparationTime: 10,
    servingSize: '2 pieces',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('pancakes', 'Buttermilk Pancakes', 'Fluffy pancakes with maple syrup and butter', 9.50, 'breakfast', {
    nutritionInfo: { calories: 520, protein: 8, carbs: 75, fat: 22 },
    preparationTime: 12,
    servingSize: '3 pancakes',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('breakfast-burrito', 'Breakfast Burrito', 'Scrambled eggs, cheese, potatoes, and salsa in a tortilla', 11.50, 'breakfast', {
    nutritionInfo: { calories: 580, protein: 24, carbs: 48, fat: 32 },
    preparationTime: 10,
    servingSize: '1 burrito',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('oatmeal', 'Steel Cut Oatmeal', 'Creamy steel-cut oats with fresh fruits and honey', 8.50, 'breakfast', {
    nutritionInfo: { calories: 320, protein: 12, carbs: 58, fat: 6 },
    preparationTime: 8,
    servingSize: '1 bowl',
    allergens: ['gluten'],
    dietaryInfo: { isVegetarian: true, isVegan: true }
  }),
  createMenuItem('breakfast-sandwich', 'Classic Breakfast Sandwich', 'Egg, cheese, and choice of meat on croissant', 9.50, 'breakfast', {
    nutritionInfo: { calories: 480, protein: 22, carbs: 35, fat: 28 },
    preparationTime: 8,
    servingSize: '1 sandwich',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('veggie-omelet', 'Garden Vegetable Omelet', 'Three-egg omelet with seasonal vegetables', 11.00, 'breakfast', {
    nutritionInfo: { calories: 380, protein: 18, carbs: 12, fat: 28 },
    preparationTime: 12,
    servingSize: '1 omelet',
    allergens: ['eggs', 'dairy'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('breakfast-bowl', 'Protein Breakfast Bowl', 'Quinoa, eggs, avocado, and roasted vegetables', 12.50, 'breakfast', {
    nutritionInfo: { calories: 440, protein: 24, carbs: 38, fat: 26 },
    preparationTime: 12,
    servingSize: '1 bowl',
    allergens: ['eggs'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('bagel-lox', 'Bagel and Lox', 'Everything bagel with smoked salmon and cream cheese', 13.50, 'breakfast', {
    nutritionInfo: { calories: 460, protein: 28, carbs: 42, fat: 22 },
    preparationTime: 8,
    servingSize: '1 bagel',
    allergens: ['wheat', 'dairy', 'fish']
  }),
  createMenuItem('waffles', 'Belgian Waffles', 'Crispy Belgian waffles with berries and whipped cream', 10.50, 'breakfast', {
    nutritionInfo: { calories: 460, protein: 9, carbs: 65, fat: 20 },
    preparationTime: 12,
    servingSize: '2 waffles',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('breakfast-platter', 'American Breakfast', 'Two eggs, bacon, hash browns, and toast', 14.50, 'breakfast', {
    nutritionInfo: { calories: 850, protein: 35, carbs: 65, fat: 48 },
    preparationTime: 15,
    servingSize: '1 platter',
    allergens: ['wheat', 'eggs', 'dairy']
  }),
  createMenuItem('acai-bowl', 'Açaí Bowl', 'Açaí blend topped with granola and fresh fruit', 11.50, 'breakfast', {
    nutritionInfo: { calories: 380, protein: 8, carbs: 72, fat: 12 },
    preparationTime: 10,
    servingSize: '1 bowl',
    allergens: ['nuts'],
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('quiche', 'Quiche Lorraine', 'Classic quiche with bacon and Gruyère', 11.00, 'breakfast', {
    nutritionInfo: { calories: 420, protein: 18, carbs: 28, fat: 28 },
    preparationTime: 8,
    servingSize: '1 slice',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('breakfast-tacos', 'Breakfast Tacos', 'Three tacos with eggs, cheese, and pico de gallo', 10.50, 'breakfast', {
    nutritionInfo: { calories: 480, protein: 24, carbs: 42, fat: 26 },
    preparationTime: 10,
    servingSize: '3 tacos',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('shakshuka', 'Shakshuka', 'Eggs poached in spiced tomato sauce with pita', 12.00, 'breakfast', {
    nutritionInfo: { calories: 380, protein: 18, carbs: 32, fat: 22 },
    preparationTime: 15,
    servingSize: '1 serving',
    allergens: ['eggs', 'wheat']
  }),
  createMenuItem('granola-parfait', 'Granola Parfait', 'Layered yogurt, granola, and fresh berries', 8.50, 'breakfast', {
    nutritionInfo: { calories: 320, protein: 12, carbs: 48, fat: 14 },
    preparationTime: 5,
    servingSize: '1 parfait',
    allergens: ['dairy', 'nuts'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('breakfast-pizza', 'Breakfast Pizza', 'Eggs, bacon, and cheese with hollandaise', 13.50, 'breakfast', {
    nutritionInfo: { calories: 580, protein: 42, carbs: 52, fat: 32 },
    preparationTime: 15,
    servingSize: '1 pizza',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('breakfast-quesadilla', 'Breakfast Quesadilla', 'Scrambled eggs and cheese in a crispy tortilla', 10.50, 'breakfast', {
    nutritionInfo: { calories: 520, protein: 24, carbs: 38, fat: 32 },
    preparationTime: 10,
    servingSize: '1 quesadilla',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('smoked-salmon-toast', 'Smoked Salmon Toast', 'Sourdough toast with smoked salmon and avocado', 13.50, 'breakfast', {
    nutritionInfo: { calories: 420, protein: 26, carbs: 32, fat: 24 },
    preparationTime: 8,
    servingSize: '1 serving',
    allergens: ['wheat', 'fish']
  })
];

// Lunch Menu Items
export const lunchItems: MenuItem[] = [
  createMenuItem('quinoa-bowl', 'Quinoa Buddha Bowl', 'Nutrient-rich quinoa bowl with roasted vegetables', 14.50, 'lunch', {
    nutritionInfo: { calories: 380, protein: 12, carbs: 58, fat: 16 },
    preparationTime: 10,
    dietaryInfo: { isVegan: true, isGlutenFree: true },
    servingSize: '1 bowl',
  }),
  createMenuItem('chicken-caesar', 'Chicken Caesar Salad', 'Grilled chicken with romaine and parmesan', 15.00, 'lunch', {
    nutritionInfo: { calories: 450, protein: 32, carbs: 15, fat: 28 },
    allergens: ['dairy', 'eggs'],
    preparationTime: 12,
    servingSize: '1 plate',
  }),
  createMenuItem('wagyu-burger', 'Wagyu Burger', 'Premium wagyu beef burger with truffle aioli', 24.50, 'lunch', {
    isLocked: true,
    requiresAuth: true,
    nutritionInfo: { calories: 850, protein: 45, carbs: 35, fat: 58 },
    allergens: ['wheat', 'dairy', 'eggs'],
    preparationTime: 20,
    rating: 4.9,
    servingSize: '1 burger',
  }),
  createMenuItem('lobster-roll', 'Maine Lobster Roll', 'Fresh Maine lobster with house-made aioli on brioche', 28.50, 'lunch', {
    nutritionInfo: { calories: 520, protein: 32, carbs: 42, fat: 28 },
    preparationTime: 12,
    servingSize: '1 roll',
    allergens: ['wheat', 'shellfish', 'eggs']
  }),
  createMenuItem('poke-bowl', 'Ahi Tuna Poke Bowl', 'Fresh ahi tuna with rice and vegetables', 18.50, 'lunch', {
    nutritionInfo: { calories: 520, protein: 32, carbs: 65, fat: 18 },
    preparationTime: 10,
    servingSize: '1 bowl',
    allergens: ['fish', 'soy']
  }),
  createMenuItem('club-sandwich', 'Classic Club Sandwich', 'Triple-decker with turkey, bacon, and avocado', 16.50, 'lunch', {
    nutritionInfo: { calories: 680, protein: 38, carbs: 48, fat: 42 },
    preparationTime: 10,
    servingSize: '1 sandwich',
    allergens: ['wheat', 'dairy', 'eggs']
  }),
  createMenuItem('mediterranean-salad', 'Mediterranean Salad', 'Mixed greens with feta, olives, and grilled chicken', 16.00, 'lunch', {
    nutritionInfo: { calories: 420, protein: 28, carbs: 22, fat: 26 },
    preparationTime: 10,
    servingSize: '1 plate',
    allergens: ['dairy'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('grilled-salmon', 'Grilled Salmon', 'Atlantic salmon with quinoa and roasted vegetables', 24.00, 'lunch', {
    nutritionInfo: { calories: 580, protein: 42, carbs: 32, fat: 34 },
    preparationTime: 15,
    servingSize: '1 plate',
    allergens: ['fish'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('veggie-wrap', 'Mediterranean Veggie Wrap', 'Hummus and grilled vegetables in spinach wrap', 13.50, 'lunch', {
    nutritionInfo: { calories: 420, protein: 14, carbs: 58, fat: 18 },
    preparationTime: 8,
    servingSize: '1 wrap',
    allergens: ['wheat'],
    dietaryInfo: { isVegetarian: true, isVegan: true }
  }),
  createMenuItem('steak-sandwich', 'Prime Steak Sandwich', 'Grilled ribeye with caramelized onions', 22.50, 'lunch', {
    nutritionInfo: { calories: 720, protein: 48, carbs: 42, fat: 44 },
    preparationTime: 15,
    servingSize: '1 sandwich',
    allergens: ['wheat', 'dairy']
  }),
  createMenuItem('falafel-plate', 'Falafel Plate', 'House-made falafel with hummus and tabbouleh', 15.50, 'lunch', {
    nutritionInfo: { calories: 480, protein: 18, carbs: 62, fat: 22 },
    preparationTime: 12,
    servingSize: '1 plate',
    dietaryInfo: { isVegetarian: true, isVegan: true }
  }),
  createMenuItem('cobb-salad', 'Classic Cobb Salad', 'Mixed greens with chicken, bacon, and blue cheese', 16.50, 'lunch', {
    nutritionInfo: { calories: 520, protein: 35, carbs: 18, fat: 38 },
    preparationTime: 10,
    servingSize: '1 plate',
    allergens: ['dairy', 'eggs']
  }),
  createMenuItem('shrimp-tacos', 'Baja Shrimp Tacos', 'Grilled shrimp tacos with chipotle slaw', 17.50, 'lunch', {
    nutritionInfo: { calories: 480, protein: 28, carbs: 45, fat: 24 },
    preparationTime: 12,
    servingSize: '3 tacos',
    allergens: ['wheat', 'shellfish']
  }),
  createMenuItem('caprese-panini', 'Caprese Panini', 'Fresh mozzarella, tomato, and basil on ciabatta', 14.50, 'lunch', {
    nutritionInfo: { calories: 520, protein: 22, carbs: 48, fat: 28 },
    preparationTime: 10,
    servingSize: '1 sandwich',
    allergens: ['wheat', 'dairy'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('grain-bowl', 'Ancient Grain Bowl', 'Quinoa, farro, roasted vegetables, and tahini', 15.50, 'lunch', {
    nutritionInfo: { calories: 440, protein: 16, carbs: 68, fat: 18 },
    preparationTime: 12,
    servingSize: '1 bowl',
    allergens: ['wheat'],
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('turkey-avocado', 'Turkey Avocado Sandwich', 'Roasted turkey with avocado on multigrain', 15.50, 'lunch', {
    nutritionInfo: { calories: 520, protein: 32, carbs: 42, fat: 28 },
    preparationTime: 8,
    servingSize: '1 sandwich',
    allergens: ['wheat']
  }),
  createMenuItem('thai-chicken-salad', 'Thai Chicken Salad', 'Grilled chicken with Asian slaw and peanut dressing', 16.50, 'lunch', {
    nutritionInfo: { calories: 480, protein: 32, carbs: 32, fat: 26 },
    preparationTime: 12,
    servingSize: '1 plate',
    allergens: ['nuts', 'soy'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('veggie-burger', 'Beyond Burger', 'Plant-based burger with vegan cheese and aioli', 16.50, 'lunch', {
    nutritionInfo: { calories: 580, protein: 28, carbs: 48, fat: 32 },
    preparationTime: 12,
    servingSize: '1 burger',
    allergens: ['wheat', 'soy'],
    dietaryInfo: { isVegetarian: true, isVegan: true }
  }),
  createMenuItem('tuna-nicoise', 'Tuna Niçoise Salad', 'Seared tuna with classic Niçoise preparation', 19.50, 'lunch', {
    nutritionInfo: { calories: 480, protein: 38, carbs: 28, fat: 26 },
    preparationTime: 15,
    servingSize: '1 plate',
    allergens: ['fish', 'eggs'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('mediterranean-plate', 'Mediterranean Plate', 'Hummus, baba ganoush, falafel, and pita', 16.50, 'lunch', {
    nutritionInfo: { calories: 620, protein: 22, carbs: 82, fat: 28 },
    preparationTime: 12,
    servingSize: '1 plate',
    allergens: ['wheat'],
    dietaryInfo: { isVegetarian: true, isVegan: true }
  })
];

// Premium Lunch Items
const premiumLunchItems: MenuItem[] = [
  createMenuItem('lobster-roll', 'Maine Lobster Roll', 'Fresh Maine lobster with house-made aioli on brioche', 45.00, 'lunch', {
    isLocked: true,
    requiresAuth: true,
    nutritionInfo: { calories: 650, protein: 35, carbs: 45, fat: 38 },
    preparationTime: 15,
    rating: 4.9,
    isLimited: true,
    allergens: ['shellfish', 'dairy', 'wheat'],
    servingSize: '1 roll',
  }),
  createMenuItem('truffle-pasta', 'Fresh Truffle Pasta', 'House-made tagliatelle with seasonal truffles and aged parmesan', 55.00, 'lunch', {
    isLocked: true,
    requiresAuth: true,
    nutritionInfo: { calories: 780, protein: 25, carbs: 90, fat: 35 },
    preparationTime: 18,
    rating: 4.8,
    isLimited: true,
    allergens: ['wheat', 'dairy', 'eggs'],
    servingSize: '1 plate',
  }),
];

// Pizza Menu Items
export const pizzaItems: MenuItem[] = [
  createMenuItem('margherita', 'Margherita Pizza', 'Fresh mozzarella, tomatoes, and basil', 14.00, 'pizzas', {
    nutritionInfo: { calories: 850, protein: 34, carbs: 98, fat: 36 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('pepperoni', 'Classic Pepperoni', 'Italian pepperoni with mozzarella', 15.00, 'pizzas', {
    nutritionInfo: { calories: 980, protein: 42, carbs: 96, fat: 48 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('quattro-formaggi', 'Four Cheese', 'Blend of mozzarella, gorgonzola, parmesan, and fontina', 16.00, 'pizzas', {
    nutritionInfo: { calories: 1020, protein: 48, carbs: 94, fat: 52 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('mushroom-truffle', 'Mushroom Truffle', 'Wild mushrooms with truffle oil and thyme', 17.00, 'pizzas', {
    nutritionInfo: { calories: 880, protein: 32, carbs: 96, fat: 40 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('prosciutto-arugula', 'Prosciutto & Arugula', 'Parma ham with fresh arugula and parmesan', 17.00, 'pizzas', {
    nutritionInfo: { calories: 920, protein: 44, carbs: 94, fat: 42 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('bbq-chicken', 'BBQ Chicken', 'Grilled chicken with red onions and BBQ sauce', 16.00, 'pizzas', {
    nutritionInfo: { calories: 940, protein: 46, carbs: 102, fat: 38 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('veggie-supreme', 'Vegetable Supreme', 'Assorted fresh vegetables and herbs', 15.00, 'pizzas', {
    nutritionInfo: { calories: 820, protein: 28, carbs: 98, fat: 34 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('mediterranean', 'Mediterranean', 'Olives, feta, sun-dried tomatoes, and spinach', 16.00, 'pizzas', {
    nutritionInfo: { calories: 860, protein: 32, carbs: 94, fat: 38 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('hawaiian', 'Hawaiian', 'Ham and pineapple with mozzarella', 15.00, 'pizzas', {
    nutritionInfo: { calories: 900, protein: 38, carbs: 100, fat: 40 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('spicy-sausage', 'Spicy Italian Sausage', 'Italian sausage with bell peppers and onions', 16.00, 'pizzas', {
    nutritionInfo: { calories: 960, protein: 44, carbs: 96, fat: 46 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('buffalo-chicken', 'Buffalo Chicken', 'Spicy buffalo chicken with blue cheese', 16.00, 'pizzas', {
    nutritionInfo: { calories: 940, protein: 46, carbs: 94, fat: 44 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('pesto-chicken', 'Pesto Chicken', 'Basil pesto with grilled chicken', 16.00, 'pizzas', {
    nutritionInfo: { calories: 920, protein: 44, carbs: 92, fat: 42 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten', 'nuts']
  }),
  createMenuItem('vegan-supreme', 'Vegan Supreme', 'Plant-based cheese and assorted vegetables', 16.00, 'pizzas', {
    nutritionInfo: { calories: 780, protein: 24, carbs: 98, fat: 32 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['gluten'],
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('meat-lovers', 'Meat Lovers', 'Pepperoni, sausage, bacon, and ground beef', 17.00, 'pizzas', {
    nutritionInfo: { calories: 1100, protein: 56, carbs: 94, fat: 58 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('fig-prosciutto', 'Fig & Prosciutto', 'Fresh figs, prosciutto, and balsamic glaze', 17.00, 'pizzas', {
    nutritionInfo: { calories: 880, protein: 36, carbs: 98, fat: 38 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('seafood', 'Seafood Delight', 'Shrimp, calamari, and mussels', 18.00, 'pizzas', {
    nutritionInfo: { calories: 860, protein: 48, carbs: 94, fat: 36 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten', 'shellfish']
  }),
  createMenuItem('goat-cheese', 'Goat Cheese & Honey', 'Creamy goat cheese with honey drizzle', 16.00, 'pizzas', {
    nutritionInfo: { calories: 840, protein: 32, carbs: 96, fat: 38 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('artichoke-spinach', 'Artichoke & Spinach', 'Creamy spinach sauce with artichokes', 16.00, 'pizzas', {
    nutritionInfo: { calories: 820, protein: 34, carbs: 94, fat: 36 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('breakfast-pizza', 'Breakfast Pizza', 'Eggs, bacon, and cheese with hollandaise', 16.00, 'pizzas', {
    nutritionInfo: { calories: 940, protein: 42, carbs: 92, fat: 46 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten', 'eggs']
  }),
  createMenuItem('dessert-pizza', 'Nutella & Banana', 'Sweet pizza with Nutella and fresh bananas', 15.00, 'pizzas', {
    nutritionInfo: { calories: 980, protein: 24, carbs: 128, fat: 42 },
    preparationTime: 15,
    servingSize: '12 inch',
    allergens: ['dairy', 'gluten', 'nuts'],
    dietaryInfo: { isVegetarian: true }
  })
];

// Sandwich Menu Items
export const sandwichItems: MenuItem[] = [
  createMenuItem('club-sandwich', 'Classic Club', 'Triple-decker with turkey, bacon, lettuce, and tomato', 12.50, 'sandwiches', {
    nutritionInfo: { calories: 680, protein: 42, carbs: 48, fat: 36 },
    preparationTime: 10,
    servingSize: 'Full sandwich',
    allergens: ['gluten', 'eggs']
  }),
  createMenuItem('grilled-cheese', 'Artisanal Grilled Cheese', 'Blend of premium cheeses on sourdough', 10.00, 'sandwiches', {
    nutritionInfo: { calories: 580, protein: 24, carbs: 46, fat: 34 },
    preparationTime: 8,
    servingSize: 'Full sandwich',
    allergens: ['dairy', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('caprese-sandwich', 'Caprese', 'Fresh mozzarella, tomatoes, basil, and balsamic', 11.00, 'sandwiches', {
    nutritionInfo: { calories: 520, protein: 22, carbs: 44, fat: 28 },
    preparationTime: 7,
    servingSize: 'Full sandwich',
    allergens: ['dairy', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('tuna-melt', 'Tuna Melt', 'House-made tuna salad with melted cheddar', 11.50, 'sandwiches', {
    nutritionInfo: { calories: 640, protein: 38, carbs: 42, fat: 36 },
    preparationTime: 10,
    servingSize: 'Full sandwich',
    allergens: ['dairy', 'gluten', 'fish']
  }),
  createMenuItem('veggie-wrap', 'Mediterranean Veggie Wrap', 'Grilled vegetables with hummus', 10.50, 'sandwiches', {
    nutritionInfo: { calories: 440, protein: 14, carbs: 58, fat: 18 },
    preparationTime: 8,
    servingSize: 'Full wrap',
    allergens: ['gluten'],
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('chicken-pesto', 'Chicken Pesto', 'Grilled chicken with pesto and provolone', 12.00, 'sandwiches', {
    nutritionInfo: { calories: 620, protein: 42, carbs: 44, fat: 32 },
    preparationTime: 10,
    servingSize: 'Full sandwich',
    allergens: ['dairy', 'gluten', 'nuts']
  }),
  createMenuItem('reuben', 'Classic Reuben', 'Corned beef, sauerkraut, Swiss cheese, and Russian dressing', 13.00, 'sandwiches', {
    nutritionInfo: { calories: 720, protein: 38, carbs: 46, fat: 44 },
    preparationTime: 12,
    servingSize: 'Full sandwich',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('blta', 'BLTA', 'Bacon, lettuce, tomato, and avocado', 11.50, 'sandwiches', {
    nutritionInfo: { calories: 580, protein: 24, carbs: 42, fat: 38 },
    preparationTime: 8,
    servingSize: 'Full sandwich',
    allergens: ['gluten']
  }),
  createMenuItem('turkey-avocado', 'Turkey Avocado', 'Roasted turkey with avocado and sprouts', 12.00, 'sandwiches', {
    nutritionInfo: { calories: 540, protein: 32, carbs: 44, fat: 28 },
    preparationTime: 8,
    servingSize: 'Full sandwich',
    allergens: ['gluten']
  }),
  createMenuItem('italian-sub', 'Italian Sub', 'Assorted Italian meats with provolone', 12.50, 'sandwiches', {
    nutritionInfo: { calories: 780, protein: 44, carbs: 46, fat: 48 },
    preparationTime: 10,
    servingSize: 'Full sandwich',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('portobello', 'Grilled Portobello', 'Marinated portobello with roasted peppers', 11.00, 'sandwiches', {
    nutritionInfo: { calories: 420, protein: 12, carbs: 48, fat: 22 },
    preparationTime: 10,
    servingSize: 'Full sandwich',
    allergens: ['gluten'],
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('french-dip', 'French Dip', 'Roast beef with au jus for dipping', 13.50, 'sandwiches', {
    nutritionInfo: { calories: 680, protein: 48, carbs: 44, fat: 34 },
    preparationTime: 12,
    servingSize: 'Full sandwich',
    allergens: ['gluten']
  }),
  createMenuItem('egg-salad', 'Classic Egg Salad', 'House-made egg salad with lettuce', 10.00, 'sandwiches', {
    nutritionInfo: { calories: 520, protein: 24, carbs: 38, fat: 32 },
    preparationTime: 7,
    servingSize: 'Full sandwich',
    allergens: ['eggs', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('cubano', 'Cuban Sandwich', 'Roasted pork, ham, Swiss cheese, and pickles', 13.00, 'sandwiches', {
    nutritionInfo: { calories: 740, protein: 46, carbs: 48, fat: 42 },
    preparationTime: 12,
    servingSize: 'Full sandwich',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('chickpea-salad', 'Chickpea "Tuna" Salad', 'Vegan chickpea salad with celery and herbs', 10.50, 'sandwiches', {
    nutritionInfo: { calories: 440, protein: 16, carbs: 52, fat: 20 },
    preparationTime: 8,
    servingSize: 'Full sandwich',
    allergens: ['gluten'],
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('salmon-bagel', 'Smoked Salmon Bagel', 'Smoked salmon with cream cheese and capers', 13.50, 'sandwiches', {
    nutritionInfo: { calories: 580, protein: 32, carbs: 54, fat: 28 },
    preparationTime: 8,
    servingSize: 'Full bagel',
    allergens: ['dairy', 'gluten', 'fish']
  }),
  createMenuItem('chicken-caesar-wrap', 'Chicken Caesar Wrap', 'Grilled chicken with Caesar salad', 11.50, 'sandwiches', {
    nutritionInfo: { calories: 580, protein: 38, carbs: 46, fat: 28 },
    preparationTime: 8,
    servingSize: 'Full wrap',
    allergens: ['dairy', 'gluten', 'eggs']
  }),
  createMenuItem('pb-banana', 'PB & Banana', 'Natural peanut butter with honey and banana', 9.00, 'sandwiches', {
    nutritionInfo: { calories: 480, protein: 16, carbs: 62, fat: 24 },
    preparationTime: 5,
    servingSize: 'Full sandwich',
    allergens: ['gluten', 'nuts'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('roasted-veggie', 'Roasted Vegetable', 'Seasonal roasted vegetables with goat cheese', 11.00, 'sandwiches', {
    nutritionInfo: { calories: 460, protein: 18, carbs: 48, fat: 24 },
    preparationTime: 10,
    servingSize: 'Full sandwich',
    allergens: ['dairy', 'gluten'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('lobster-roll', 'New England Lobster Roll', 'Fresh lobster salad on buttered roll', 18.00, 'sandwiches', {
    nutritionInfo: { calories: 620, protein: 32, carbs: 44, fat: 36 },
    preparationTime: 12,
    servingSize: 'Full roll',
    allergens: ['dairy', 'gluten', 'shellfish'],
    premium: true
  })
];

// Dessert Menu Items
export const dessertItems: MenuItem[] = [
  createMenuItem('tiramisu', 'Classic Tiramisu', 'Italian coffee-flavored dessert with mascarpone', 7.50, 'desserts', {
    nutritionInfo: { calories: 380, protein: 6, carbs: 42, fat: 22 },
    preparationTime: 5,
    servingSize: '1 piece',
    allergens: ['dairy', 'eggs', 'gluten']
  }),
  createMenuItem('chocolate-cake', 'Dark Chocolate Layer Cake', 'Rich chocolate cake with ganache', 8.00, 'desserts', {
    nutritionInfo: { calories: 420, protein: 6, carbs: 48, fat: 24 },
    preparationTime: 4,
    servingSize: '1 slice',
    allergens: ['dairy', 'eggs', 'gluten']
  }),
  createMenuItem('cheesecake', 'New York Cheesecake', 'Classic creamy cheesecake', 7.50, 'desserts', {
    nutritionInfo: { calories: 460, protein: 8, carbs: 46, fat: 28 },
    preparationTime: 4,
    servingSize: '1 slice',
    allergens: ['dairy', 'eggs', 'gluten']
  }),
  createMenuItem('creme-brulee', 'Crème Brûlée', 'French vanilla custard with caramelized sugar', 8.00, 'desserts', {
    nutritionInfo: { calories: 320, protein: 4, carbs: 32, fat: 20 },
    preparationTime: 5,
    servingSize: '1 ramekin',
    allergens: ['dairy', 'eggs']
  }),
  createMenuItem('apple-pie', 'Warm Apple Pie', 'Classic apple pie with vanilla ice cream', 7.50, 'desserts', {
    nutritionInfo: { calories: 440, protein: 5, carbs: 64, fat: 18 },
    preparationTime: 6,
    servingSize: '1 slice',
    allergens: ['dairy', 'gluten']
  }),
  createMenuItem('fruit-tart', 'Fresh Fruit Tart', 'Pastry cream tart with seasonal fruits', 7.00, 'desserts', {
    nutritionInfo: { calories: 340, protein: 5, carbs: 42, fat: 16 },
    preparationTime: 4,
    servingSize: '1 tart',
    allergens: ['dairy', 'eggs', 'gluten']
  }),
  createMenuItem('chocolate-mousse', 'Dark Chocolate Mousse', 'Light and airy chocolate mousse', 6.50, 'desserts', {
    nutritionInfo: { calories: 280, protein: 4, carbs: 28, fat: 18 },
    preparationTime: 3,
    servingSize: '1 serving',
    allergens: ['dairy', 'eggs']
  }),
  createMenuItem('bread-pudding', 'Warm Bread Pudding', 'Classic bread pudding with caramel sauce', 7.00, 'desserts', {
    nutritionInfo: { calories: 420, protein: 8, carbs: 58, fat: 18 },
    preparationTime: 8,
    servingSize: '1 serving',
    allergens: ['dairy', 'eggs', 'gluten']
  }),
  createMenuItem('gelato-trio', 'Artisanal Gelato Trio', 'Selection of three gelato flavors', 8.00, 'desserts', {
    nutritionInfo: { calories: 360, protein: 6, carbs: 44, fat: 16 },
    preparationTime: 3,
    servingSize: '3 scoops',
    allergens: ['dairy']
  }),
  createMenuItem('lemon-tart', 'Lemon Meringue Tart', 'Tangy lemon curd with toasted meringue', 7.00, 'desserts', {
    nutritionInfo: { calories: 320, protein: 5, carbs: 42, fat: 14 },
    preparationTime: 4,
    servingSize: '1 tart',
    allergens: ['dairy', 'eggs', 'gluten']
  }),
  createMenuItem('vegan-brownie', 'Vegan Chocolate Brownie', 'Rich plant-based brownie', 6.50, 'desserts', {
    nutritionInfo: { calories: 300, protein: 4, carbs: 42, fat: 16 },
    preparationTime: 3,
    servingSize: '1 piece',
    allergens: ['gluten'],
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('affogato', 'Classic Affogato', 'Vanilla gelato with espresso shot', 6.00, 'desserts', {
    nutritionInfo: { calories: 220, protein: 4, carbs: 28, fat: 12 },
    preparationTime: 2,
    servingSize: '1 serving',
    allergens: ['dairy']
  }),
  createMenuItem('berry-pavlova', 'Mixed Berry Pavlova', 'Light meringue with fresh berries', 7.50, 'desserts', {
    nutritionInfo: { calories: 280, protein: 4, carbs: 48, fat: 8 },
    preparationTime: 4,
    servingSize: '1 serving',
    allergens: ['eggs'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('carrot-cake', 'Carrot Cake', 'Spiced carrot cake with cream cheese frosting', 7.00, 'desserts', {
    nutritionInfo: { calories: 420, protein: 6, carbs: 52, fat: 22 },
    preparationTime: 4,
    servingSize: '1 slice',
    allergens: ['dairy', 'eggs', 'gluten', 'nuts']
  }),
  createMenuItem('panna-cotta', 'Vanilla Bean Panna Cotta', 'Italian cream dessert with berry compote', 6.50, 'desserts', {
    nutritionInfo: { calories: 260, protein: 4, carbs: 28, fat: 16 },
    preparationTime: 3,
    servingSize: '1 serving',
    allergens: ['dairy'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('profiteroles', 'Chocolate Profiteroles', 'Cream puffs with chocolate sauce', 7.50, 'desserts', {
    nutritionInfo: { calories: 380, protein: 6, carbs: 44, fat: 20 },
    preparationTime: 5,
    servingSize: '3 pieces',
    allergens: ['dairy', 'eggs', 'gluten']
  }),
  createMenuItem('sorbet-duo', 'Seasonal Sorbet Duo', 'Two scoops of fruit sorbet', 6.00, 'desserts', {
    nutritionInfo: { calories: 180, protein: 0, carbs: 44, fat: 0 },
    preparationTime: 2,
    servingSize: '2 scoops',
    dietaryInfo: { isVegan: true, isGlutenFree: true }
  }),
  createMenuItem('baklava', 'Honey Baklava', 'Traditional phyllo pastry with nuts and honey', 6.50, 'desserts', {
    nutritionInfo: { calories: 340, protein: 6, carbs: 38, fat: 20 },
    preparationTime: 3,
    servingSize: '2 pieces',
    allergens: ['gluten', 'nuts']
  }),
  createMenuItem('molten-chocolate', 'Molten Chocolate Cake', 'Warm chocolate cake with liquid center', 8.50, 'desserts', {
    nutritionInfo: { calories: 460, protein: 8, carbs: 48, fat: 28 },
    preparationTime: 12,
    servingSize: '1 cake',
    allergens: ['dairy', 'eggs', 'gluten']
  }),
  createMenuItem('creme-caramel', 'Classic Crème Caramel', 'French-style caramel custard', 7.00, 'desserts', {
    nutritionInfo: { calories: 280, protein: 6, carbs: 36, fat: 12 },
    preparationTime: 4,
    servingSize: '1 serving',
    allergens: ['dairy', 'eggs'],
    dietaryInfo: { isGlutenFree: true }
  })
];

// Salad Menu Items
export const saladItems: MenuItem[] = [
  createMenuItem('caesar-salad', 'Caesar Salad', 'Romaine lettuce with classic Caesar dressing', 11.00, 'salads', {
    nutritionInfo: { calories: 320, protein: 10, carbs: 15, fat: 25 },
    allergens: ['dairy', 'eggs'],
    preparationTime: 8,
    servingSize: '1 bowl'
  }),
  createMenuItem('garden-salad', 'Garden Fresh Salad', 'Mixed greens with seasonal vegetables', 10.00, 'salads', {
    nutritionInfo: { calories: 220, protein: 5, carbs: 20, fat: 15 },
    preparationTime: 8,
    servingSize: '1 bowl',
    dietaryInfo: { isVegan: true, isGlutenFree: true }
  }),
  createMenuItem('quinoa-salad', 'Quinoa & Avocado Salad', 'Quinoa with fresh vegetables and avocado', 13.00, 'salads', {
    nutritionInfo: { calories: 380, protein: 12, carbs: 45, fat: 20 },
    preparationTime: 10,
    servingSize: '1 bowl',
    dietaryInfo: { isVegan: true, isGlutenFree: true }
  }),
  createMenuItem('cobb-salad', 'Classic Cobb Salad', 'Mixed greens with chicken, bacon, eggs, and avocado', 14.50, 'salads', {
    nutritionInfo: { calories: 520, protein: 35, carbs: 18, fat: 38 },
    preparationTime: 12,
    servingSize: '1 bowl',
    allergens: ['eggs', 'dairy']
  }),
  createMenuItem('greek-salad', 'Mediterranean Greek Salad', 'Tomatoes, cucumbers, olives, and feta cheese', 12.00, 'salads', {
    nutritionInfo: { calories: 380, protein: 12, carbs: 22, fat: 28 },
    preparationTime: 8,
    servingSize: '1 bowl',
    allergens: ['dairy'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('spinach-salad', 'Baby Spinach & Strawberry', 'Fresh spinach with strawberries and goat cheese', 12.50, 'salads', {
    nutritionInfo: { calories: 340, protein: 10, carbs: 28, fat: 22 },
    preparationTime: 8,
    servingSize: '1 bowl',
    allergens: ['dairy'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('asian-chicken', 'Asian Chicken Salad', 'Grilled chicken with mandarin oranges and sesame dressing', 13.50, 'salads', {
    nutritionInfo: { calories: 420, protein: 28, carbs: 32, fat: 24 },
    preparationTime: 10,
    servingSize: '1 bowl',
    allergens: ['soy', 'nuts']
  }),
  createMenuItem('caprese-salad', 'Caprese Salad', 'Fresh mozzarella, tomatoes, and basil with balsamic', 11.50, 'salads', {
    nutritionInfo: { calories: 320, protein: 14, carbs: 12, fat: 24 },
    preparationTime: 6,
    servingSize: '1 bowl',
    allergens: ['dairy'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('tuna-nicoise', 'Tuna Niçoise', 'Seared tuna with green beans, potatoes, and olives', 15.50, 'salads', {
    nutritionInfo: { calories: 440, protein: 32, carbs: 28, fat: 26 },
    preparationTime: 12,
    servingSize: '1 bowl',
    allergens: ['fish', 'eggs'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('waldorf-salad', 'Waldorf Salad', 'Apples, celery, walnuts with creamy dressing', 12.00, 'salads', {
    nutritionInfo: { calories: 380, protein: 8, carbs: 32, fat: 26 },
    preparationTime: 8,
    servingSize: '1 bowl',
    allergens: ['dairy', 'nuts']
  }),
  createMenuItem('roasted-beet', 'Roasted Beet Salad', 'Roasted beets with goat cheese and pine nuts', 13.00, 'salads', {
    nutritionInfo: { calories: 360, protein: 10, carbs: 28, fat: 24 },
    preparationTime: 8,
    servingSize: '1 bowl',
    allergens: ['dairy', 'nuts'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('southwest-salad', 'Southwest Chicken Salad', 'Grilled chicken with black beans and corn salsa', 13.50, 'salads', {
    nutritionInfo: { calories: 460, protein: 32, carbs: 38, fat: 24 },
    preparationTime: 10,
    servingSize: '1 bowl',
    allergens: ['dairy']
  }),
  createMenuItem('pear-gorgonzola', 'Pear & Gorgonzola Salad', 'Mixed greens with pears and gorgonzola cheese', 12.50, 'salads', {
    nutritionInfo: { calories: 380, protein: 12, carbs: 32, fat: 24 },
    preparationTime: 8,
    servingSize: '1 bowl',
    allergens: ['dairy', 'nuts'],
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('mediterranean-bowl', 'Mediterranean Bowl', 'Falafel with hummus and tabbouleh', 13.00, 'salads', {
    nutritionInfo: { calories: 420, protein: 14, carbs: 52, fat: 18 },
    preparationTime: 10,
    servingSize: '1 bowl',
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('kale-caesar', 'Kale Caesar Salad', 'Kale with classic Caesar dressing and croutons', 12.00, 'salads', {
    nutritionInfo: { calories: 340, protein: 12, carbs: 18, fat: 26 },
    preparationTime: 8,
    servingSize: '1 bowl',
    allergens: ['dairy', 'eggs', 'gluten']
  }),
  createMenuItem('seafood-salad', 'Seafood Cobb Salad', 'Mixed greens with shrimp, crab, and avocado', 16.50, 'salads', {
    nutritionInfo: { calories: 480, protein: 36, carbs: 22, fat: 32 },
    preparationTime: 12,
    servingSize: '1 bowl',
    allergens: ['shellfish', 'eggs', 'dairy']
  }),
  createMenuItem('harvest-salad', 'Autumn Harvest Salad', 'Mixed greens with roasted squash and cranberries', 13.00, 'salads', {
    nutritionInfo: { calories: 360, protein: 8, carbs: 42, fat: 20 },
    preparationTime: 10,
    servingSize: '1 bowl',
    allergens: ['nuts'],
    dietaryInfo: { isVegan: true, isGlutenFree: true },
    seasonal: true
  }),
  createMenuItem('power-bowl', 'Power Bowl', 'Quinoa, kale, sweet potato, and chickpeas', 14.00, 'salads', {
    nutritionInfo: { calories: 440, protein: 16, carbs: 62, fat: 18 },
    preparationTime: 10,
    servingSize: '1 bowl',
    dietaryInfo: { isVegan: true, isGlutenFree: true }
  }),
  createMenuItem('citrus-salad', 'Citrus & Fennel Salad', 'Mixed citrus with shaved fennel and arugula', 12.50, 'salads', {
    nutritionInfo: { calories: 280, protein: 6, carbs: 32, fat: 16 },
    preparationTime: 8,
    servingSize: '1 bowl',
    dietaryInfo: { isVegan: true, isGlutenFree: true },
    seasonal: true
  }),
  createMenuItem('steak-salad', 'Grilled Steak Salad', 'Mixed greens with grilled steak and blue cheese', 16.50, 'salads', {
    nutritionInfo: { calories: 520, protein: 38, carbs: 18, fat: 36 },
    preparationTime: 12,
    servingSize: '1 bowl',
    allergens: ['dairy']
  })
];

// Cold Beverages Menu Items
export const coldBeveragesItems: MenuItem[] = [
  createMenuItem('fruit-smoothie', 'Fresh Fruit Smoothie', 'Blend of seasonal fruits', 5.50, 'cold-beverages', {
    nutritionInfo: { calories: 180, protein: 2, carbs: 42, fat: 1 },
    preparationTime: 5,
    servingSize: '16 oz'
  }),
  createMenuItem('iced-latte', 'Iced Caffè Latte', 'Espresso with cold milk over ice', 4.50, 'cold-beverages', {
    nutritionInfo: { calories: 130, protein: 8, carbs: 13, fat: 5 },
    preparationTime: 3,
    servingSize: '16 oz',
    allergens: ['dairy']
  }),
  createMenuItem('cold-brew', 'Cold Brew Coffee', 'Smooth, cold-brewed coffee', 4.00, 'cold-beverages', {
    nutritionInfo: { calories: 5, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 2,
    servingSize: '16 oz'
  }),
  createMenuItem('iced-matcha', 'Iced Matcha Latte', 'Green tea powder with cold milk', 5.00, 'cold-beverages', {
    nutritionInfo: { calories: 120, protein: 6, carbs: 18, fat: 4 },
    preparationTime: 3,
    servingSize: '16 oz',
    allergens: ['dairy']
  }),
  createMenuItem('lemonade', 'Fresh Lemonade', 'House-made fresh lemonade', 3.75, 'cold-beverages', {
    nutritionInfo: { calories: 120, protein: 0, carbs: 30, fat: 0 },
    preparationTime: 3,
    servingSize: '16 oz'
  }),
  createMenuItem('iced-tea', 'Iced Black Tea', 'Classic black tea over ice', 3.50, 'cold-beverages', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 2,
    servingSize: '16 oz'
  }),
  createMenuItem('mango-lassi', 'Mango Lassi', 'Indian-style mango yogurt drink', 5.50, 'cold-beverages', {
    nutritionInfo: { calories: 180, protein: 5, carbs: 35, fat: 2 },
    preparationTime: 4,
    servingSize: '16 oz',
    allergens: ['dairy']
  }),
  createMenuItem('sparkling-water', 'Sparkling Water', 'Premium sparkling mineral water', 3.00, 'cold-beverages', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 1,
    servingSize: '16 oz'
  }),
  createMenuItem('coconut-water', 'Fresh Coconut Water', 'Natural coconut water', 4.50, 'cold-beverages', {
    nutritionInfo: { calories: 45, protein: 2, carbs: 11, fat: 0 },
    preparationTime: 2,
    servingSize: '16 oz'
  }),
  createMenuItem('berry-smoothie', 'Mixed Berry Smoothie', 'Blend of mixed berries and yogurt', 6.00, 'cold-beverages', {
    nutritionInfo: { calories: 200, protein: 4, carbs: 45, fat: 2 },
    preparationTime: 4,
    servingSize: '16 oz',
    allergens: ['dairy']
  }),
  createMenuItem('green-juice', 'Green Goddess Juice', 'Fresh pressed vegetable juice', 7.00, 'cold-beverages', {
    nutritionInfo: { calories: 120, protein: 3, carbs: 25, fat: 0 },
    preparationTime: 5,
    servingSize: '16 oz',
    dietaryInfo: { isVegan: true, isGlutenFree: true }
  }),
  createMenuItem('iced-chai', 'Iced Chai Latte', 'Spiced chai tea with cold milk', 4.75, 'cold-beverages', {
    nutritionInfo: { calories: 160, protein: 6, carbs: 32, fat: 2 },
    preparationTime: 3,
    servingSize: '16 oz',
    allergens: ['dairy']
  }),
  createMenuItem('kombucha', 'House Kombucha', 'Fermented tea drink', 5.00, 'cold-beverages', {
    nutritionInfo: { calories: 60, protein: 0, carbs: 14, fat: 0 },
    preparationTime: 2,
    servingSize: '16 oz'
  }),
  createMenuItem('mint-lemonade', 'Mint Lemonade', 'Fresh lemonade with mint leaves', 4.00, 'cold-beverages', {
    nutritionInfo: { calories: 130, protein: 0, carbs: 32, fat: 0 },
    preparationTime: 4,
    servingSize: '16 oz'
  }),
  createMenuItem('protein-smoothie', 'Protein Power Smoothie', 'Protein blend with almond milk and banana', 7.00, 'cold-beverages', {
    nutritionInfo: { calories: 280, protein: 20, carbs: 35, fat: 8 },
    preparationTime: 5,
    servingSize: '16 oz',
    allergens: ['nuts'],
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('cold-mocha', 'Iced Mocha', 'Cold brew with chocolate and milk', 5.25, 'cold-beverages', {
    nutritionInfo: { calories: 220, protein: 8, carbs: 38, fat: 6 },
    preparationTime: 3,
    servingSize: '16 oz',
    allergens: ['dairy']
  }),
  createMenuItem('ginger-ale', 'House-made Ginger Ale', 'Fresh ginger brew with sparkling water', 4.50, 'cold-beverages', {
    nutritionInfo: { calories: 90, protein: 0, carbs: 22, fat: 0 },
    preparationTime: 4,
    servingSize: '16 oz'
  }),
  createMenuItem('watermelon-juice', 'Fresh Watermelon Juice', 'Pure pressed watermelon', 6.00, 'cold-beverages', {
    nutritionInfo: { calories: 120, protein: 2, carbs: 28, fat: 0 },
    preparationTime: 4,
    servingSize: '16 oz',
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('passion-tea', 'Iced Passion Tea', 'Tropical herbal tea blend over ice', 3.75, 'cold-beverages', {
    nutritionInfo: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    preparationTime: 2,
    servingSize: '16 oz'
  }),
  createMenuItem('coconut-smoothie', 'Coconut Smoothie', 'Coconut milk smoothie with tropical fruits', 6.50, 'cold-beverages', {
    nutritionInfo: { calories: 240, protein: 4, carbs: 42, fat: 8 },
    preparationTime: 4,
    servingSize: '16 oz',
    dietaryInfo: { isVegan: true }
  })
];

// Soup Menu Items
export const soupItems: MenuItem[] = [
  createMenuItem('tomato-basil', 'Tomato Basil Soup', 'Classic creamy tomato soup with fresh basil', 6.50, 'soups', {
    nutritionInfo: { calories: 220, protein: 5, carbs: 28, fat: 12 },
    preparationTime: 8,
    servingSize: '12 oz',
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('french-onion', 'French Onion Soup', 'Caramelized onion soup with melted gruyere', 7.50, 'soups', {
    nutritionInfo: { calories: 280, protein: 12, carbs: 32, fat: 14 },
    preparationTime: 10,
    servingSize: '12 oz',
    allergens: ['dairy']
  }),
  createMenuItem('chicken-noodle', 'Chicken Noodle Soup', 'Traditional comfort soup with tender chicken', 6.75, 'soups', {
    nutritionInfo: { calories: 180, protein: 18, carbs: 22, fat: 6 },
    preparationTime: 8,
    servingSize: '12 oz'
  }),
  createMenuItem('butternut-squash', 'Butternut Squash Soup', 'Creamy roasted butternut squash soup', 6.50, 'soups', {
    nutritionInfo: { calories: 200, protein: 4, carbs: 36, fat: 8 },
    preparationTime: 8,
    servingSize: '12 oz',
    dietaryInfo: { isVegetarian: true, isGlutenFree: true }
  }),
  createMenuItem('lentil-soup', 'Hearty Lentil Soup', 'Nutritious red lentil soup with vegetables', 6.00, 'soups', {
    nutritionInfo: { calories: 240, protein: 14, carbs: 40, fat: 4 },
    preparationTime: 8,
    servingSize: '12 oz',
    dietaryInfo: { isVegan: true, isGlutenFree: true }
  }),
  createMenuItem('miso-soup', 'Traditional Miso Soup', 'Japanese-style miso soup with tofu', 5.50, 'soups', {
    nutritionInfo: { calories: 120, protein: 8, carbs: 12, fat: 6 },
    preparationTime: 5,
    servingSize: '12 oz',
    allergens: ['soy'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('mushroom-soup', 'Wild Mushroom Soup', 'Creamy blend of assorted wild mushrooms', 7.00, 'soups', {
    nutritionInfo: { calories: 260, protein: 6, carbs: 24, fat: 16 },
    preparationTime: 8,
    servingSize: '12 oz',
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('clam-chowder', 'New England Clam Chowder', 'Creamy seafood chowder with potatoes', 7.50, 'soups', {
    nutritionInfo: { calories: 320, protein: 15, carbs: 28, fat: 18 },
    preparationTime: 10,
    servingSize: '12 oz',
    allergens: ['dairy', 'shellfish']
  }),
  createMenuItem('minestrone', 'Vegetable Minestrone', 'Italian vegetable soup with pasta', 6.25, 'soups', {
    nutritionInfo: { calories: 180, protein: 8, carbs: 32, fat: 4 },
    preparationTime: 8,
    servingSize: '12 oz',
    dietaryInfo: { isVegan: true }
  }),
  createMenuItem('gazpacho', 'Chilled Gazpacho', 'Cold Spanish tomato-based soup', 6.00, 'soups', {
    nutritionInfo: { calories: 140, protein: 4, carbs: 28, fat: 3 },
    preparationTime: 6,
    servingSize: '12 oz',
    dietaryInfo: { isVegan: true, isGlutenFree: true }
  }),
  createMenuItem('potato-leek', 'Potato Leek Soup', 'Creamy potato soup with sautéed leeks', 6.50, 'soups', {
    nutritionInfo: { calories: 240, protein: 6, carbs: 38, fat: 10 },
    preparationTime: 8,
    servingSize: '12 oz',
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('thai-coconut', 'Thai Coconut Soup', 'Spicy coconut soup with mushrooms', 7.00, 'soups', {
    nutritionInfo: { calories: 280, protein: 8, carbs: 22, fat: 20 },
    preparationTime: 8,
    servingSize: '12 oz',
    dietaryInfo: { isVegan: true, isGlutenFree: true }
  }),
  createMenuItem('beef-barley', 'Beef Barley Soup', 'Hearty soup with tender beef and barley', 7.25, 'soups', {
    nutritionInfo: { calories: 290, protein: 22, carbs: 34, fat: 10 },
    preparationTime: 10,
    servingSize: '12 oz'
  }),
  createMenuItem('carrot-ginger', 'Carrot Ginger Soup', 'Smooth carrot soup with fresh ginger', 6.25, 'soups', {
    nutritionInfo: { calories: 160, protein: 3, carbs: 32, fat: 4 },
    preparationTime: 8,
    servingSize: '12 oz',
    dietaryInfo: { isVegan: true, isGlutenFree: true }
  }),
  createMenuItem('corn-chowder', 'Sweet Corn Chowder', 'Creamy corn soup with potatoes', 6.75, 'soups', {
    nutritionInfo: { calories: 260, protein: 8, carbs: 42, fat: 10 },
    preparationTime: 8,
    servingSize: '12 oz',
    allergens: ['dairy']
  }),
  createMenuItem('split-pea', 'Split Pea Soup', 'Traditional split pea soup with ham', 6.50, 'soups', {
    nutritionInfo: { calories: 220, protein: 16, carbs: 36, fat: 4 },
    preparationTime: 8,
    servingSize: '12 oz'
  }),
  createMenuItem('lobster-bisque', 'Lobster Bisque', 'Rich and creamy lobster soup', 8.50, 'soups', {
    nutritionInfo: { calories: 340, protein: 18, carbs: 24, fat: 22 },
    preparationTime: 12,
    servingSize: '12 oz',
    allergens: ['dairy', 'shellfish']
  }),
  createMenuItem('broccoli-cheddar', 'Broccoli Cheddar Soup', 'Cheesy broccoli soup', 6.75, 'soups', {
    nutritionInfo: { calories: 300, protein: 14, carbs: 26, fat: 18 },
    preparationTime: 8,
    servingSize: '12 oz',
    allergens: ['dairy'],
    dietaryInfo: { isVegetarian: true }
  }),
  createMenuItem('tortilla-soup', 'Mexican Tortilla Soup', 'Spicy tomato-based soup with tortilla strips', 6.75, 'soups', {
    nutritionInfo: { calories: 240, protein: 12, carbs: 32, fat: 8 },
    preparationTime: 8,
    servingSize: '12 oz',
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('asparagus-soup', 'Cream of Asparagus', 'Delicate asparagus soup with cream', 7.00, 'soups', {
    nutritionInfo: { calories: 220, protein: 8, carbs: 24, fat: 12 },
    preparationTime: 8,
    servingSize: '12 oz',
    allergens: ['dairy'],
    dietaryInfo: { isVegetarian: true }
  })
];

// Wine & Beverages Menu Items
export const wineAndBeveragesItems: MenuItem[] = [
  createMenuItem('house-red', 'House Red Wine', 'Medium-bodied California red blend', 8.00, 'wine-beverages', {
    nutritionInfo: { calories: 125, protein: 0, carbs: 4, fat: 0 },
    servingSize: '6 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('house-white', 'House White Wine', 'Crisp California Chardonnay', 8.00, 'wine-beverages', {
    nutritionInfo: { calories: 120, protein: 0, carbs: 4, fat: 0 },
    servingSize: '6 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('prosecco', 'Italian Prosecco', 'Light and bubbly sparkling wine', 9.00, 'wine-beverages', {
    nutritionInfo: { calories: 110, protein: 0, carbs: 3, fat: 0 },
    servingSize: '5 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('cabernet', 'Cabernet Sauvignon', 'Full-bodied red wine from Napa Valley', 12.00, 'wine-beverages', {
    nutritionInfo: { calories: 130, protein: 0, carbs: 4, fat: 0 },
    servingSize: '6 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('pinot-noir', 'Pinot Noir', 'Light-bodied red wine from Oregon', 11.00, 'wine-beverages', {
    nutritionInfo: { calories: 120, protein: 0, carbs: 3, fat: 0 },
    servingSize: '6 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('sauvignon-blanc', 'Sauvignon Blanc', 'Crisp white wine from New Zealand', 10.00, 'wine-beverages', {
    nutritionInfo: { calories: 120, protein: 0, carbs: 3, fat: 0 },
    servingSize: '6 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('rose', 'Provence Rosé', 'Dry French rosé wine', 10.00, 'wine-beverages', {
    nutritionInfo: { calories: 120, protein: 0, carbs: 3, fat: 0 },
    servingSize: '6 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('merlot', 'Merlot', 'Smooth red wine from Washington State', 11.00, 'wine-beverages', {
    nutritionInfo: { calories: 125, protein: 0, carbs: 4, fat: 0 },
    servingSize: '6 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('riesling', 'German Riesling', 'Semi-sweet white wine', 10.00, 'wine-beverages', {
    nutritionInfo: { calories: 120, protein: 0, carbs: 5, fat: 0 },
    servingSize: '6 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('champagne', 'French Champagne', 'Premium sparkling wine', 15.00, 'wine-beverages', {
    nutritionInfo: { calories: 110, protein: 0, carbs: 3, fat: 0 },
    servingSize: '5 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('craft-beer1', 'Local IPA', 'Hoppy craft beer from local brewery', 7.00, 'wine-beverages', {
    nutritionInfo: { calories: 180, protein: 2, carbs: 15, fat: 0 },
    servingSize: '16 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('craft-beer2', 'Artisanal Lager', 'Crisp craft lager', 6.50, 'wine-beverages', {
    nutritionInfo: { calories: 150, protein: 1, carbs: 13, fat: 0 },
    servingSize: '16 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('stout', 'Creamy Stout', 'Rich and dark stout beer', 7.00, 'wine-beverages', {
    nutritionInfo: { calories: 200, protein: 2, carbs: 20, fat: 0 },
    servingSize: '16 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('wheat-beer', 'Belgian Wheat Beer', 'Light and refreshing wheat beer', 7.00, 'wine-beverages', {
    nutritionInfo: { calories: 160, protein: 2, carbs: 14, fat: 0 },
    servingSize: '16 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('cider', 'Hard Apple Cider', 'Crisp and refreshing cider', 6.50, 'wine-beverages', {
    nutritionInfo: { calories: 140, protein: 0, carbs: 16, fat: 0 },
    servingSize: '12 oz',
    preparationTime: 2,
    requiresAgeVerification: true,
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('sangria', 'House Sangria', 'Red wine with fresh fruit', 9.00, 'wine-beverages', {
    nutritionInfo: { calories: 150, protein: 0, carbs: 15, fat: 0 },
    servingSize: '8 oz',
    preparationTime: 3,
    requiresAgeVerification: true
  }),
  createMenuItem('port-wine', 'Vintage Port', 'Premium Portuguese dessert wine', 12.00, 'wine-beverages', {
    nutritionInfo: { calories: 160, protein: 0, carbs: 12, fat: 0 },
    servingSize: '3 oz',
    preparationTime: 2,
    requiresAgeVerification: true
  }),
  createMenuItem('sake', 'Premium Sake', 'Traditional Japanese rice wine', 11.00, 'wine-beverages', {
    nutritionInfo: { calories: 120, protein: 0, carbs: 5, fat: 0 },
    servingSize: '5 oz',
    preparationTime: 2,
    requiresAgeVerification: true,
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('mead', 'Honey Mead', 'Traditional honey wine', 10.00, 'wine-beverages', {
    nutritionInfo: { calories: 160, protein: 0, carbs: 18, fat: 0 },
    servingSize: '5 oz',
    preparationTime: 2,
    requiresAgeVerification: true,
    dietaryInfo: { isGlutenFree: true }
  }),
  createMenuItem('mulled-wine', 'Mulled Wine', 'Warm spiced red wine', 9.00, 'wine-beverages', {
    nutritionInfo: { calories: 140, protein: 0, carbs: 12, fat: 0 },
    servingSize: '6 oz',
    preparationTime: 5,
    requiresAgeVerification: true,
    seasonal: true
  })
];

// Combining all menu items
export const menuItems: MenuItem[] = [
  ...coffeeItems,
  ...teaItems,
  ...pastryItems,
  ...breakfastItems,
  ...lunchItems,
  ...pizzaItems,
  ...sandwichItems,
  ...dessertItems,
  ...saladItems,
  ...coldBeveragesItems,
  ...wineAndBeveragesItems,
  ...soupItems
];
