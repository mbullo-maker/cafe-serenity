import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const publicDir = join(__dirname, '../public');

// Function to check if an image exists
function checkImage(category, id) {
  const imagePath = join(publicDir, 'images/menu', category, `${id}.jpg`);
  return existsSync(imagePath);
}

// Check each category directory
const categories = [
  'coffee',
  'tea',
  'pastries',
  'desserts',
  'cold-beverages',
  'soups',
  'wine-beverages',
  'breakfast',
  'lunch',
  'sandwiches',
  'pizzas',
  'salads'
];

console.log('Checking menu directories...\n');

categories.forEach(category => {
  const categoryPath = join(publicDir, 'images/menu', category);
  console.log(`Category: ${category}`);
  
  if (!existsSync(categoryPath)) {
    console.log(`  Directory missing: ${category}\n`);
    return;
  }
  
  if (!existsSync(join(categoryPath, '.gitkeep'))) {
    console.log(`  Warning: No .gitkeep file in ${category} directory\n`);
  }
  
  console.log('');
});
