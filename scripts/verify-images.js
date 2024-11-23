const fs = require('fs');
const path = require('path');

// Import menu items
const menuData = require('../src/data/menu');

const publicDir = path.join(__dirname, '../public');

// Get all menu item arrays
const menuCategories = [
  { items: menuData.coffeeItems, name: 'coffee' },
  { items: menuData.teaItems, name: 'tea' },
  { items: menuData.pastryItems, name: 'pastries' },
  { items: menuData.dessertItems, name: 'desserts' },
  { items: menuData.coldBeveragesItems, name: 'cold-beverages' },
  { items: menuData.soupItems, name: 'soups' },
  { items: menuData.wineAndBeveragesItems, name: 'wine-beverages' },
  { items: menuData.breakfastItems, name: 'breakfast' },
  { items: menuData.lunchItems, name: 'lunch' },
  { items: menuData.sandwichItems, name: 'sandwiches' },
  { items: menuData.pizzaItems, name: 'pizzas' },
  { items: menuData.saladItems, name: 'salads' }
];

console.log('Checking for missing images...\n');

menuCategories.forEach(category => {
  console.log(`Category: ${category.name}`);
  
  if (!category.items) {
    console.log('  No items found in category\n');
    return;
  }

  category.items.forEach(item => {
    const imagePath = path.join(publicDir, 'images/menu', category.name, `${item.id}.jpg`);
    if (!fs.existsSync(imagePath)) {
      console.log(`  Missing: ${item.id}.jpg`);
    }
  });
  console.log('');
});
