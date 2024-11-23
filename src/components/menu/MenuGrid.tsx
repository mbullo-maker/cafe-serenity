'use client';

import React from 'react';
import { MenuItem as MenuItemType } from '@/types/menu';
import { MenuItem } from '@/components/MenuItem';

interface MenuGridProps {
  items: MenuItemType[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuGrid;
