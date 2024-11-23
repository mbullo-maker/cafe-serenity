import { categories } from '@/data/categories';
import { menuItems } from '@/data/menu';

export function getCategoryData(categoryId: string) {
  const category = categories.find(cat => cat.id === categoryId);
  const items = menuItems.filter(item => item.category === categoryId);
  return { category, items };
}
