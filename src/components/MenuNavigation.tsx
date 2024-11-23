'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, Cake, UtensilsCrossed, Sandwich, IceCream, Home, Sun, CupSoda } from 'lucide-react';

const menuCategories = [
  {
    href: '/',
    title: 'Home',
    icon: Home
  },
  {
    href: '/menu/breakfast',
    title: 'Breakfast',
    icon: Sun
  },
  {
    href: '/menu/hot-drinks',
    title: 'Hot Drinks',
    icon: Coffee
  },
  {
    href: '/menu/cold-drinks',
    title: 'Cold Drinks',
    icon: CupSoda
  },
  {
    href: '/menu/pastries',
    title: 'Pastries',
    icon: Cake
  },
  {
    href: '/menu/lunch',
    title: 'Lunch',
    icon: UtensilsCrossed
  },
  {
    href: '/menu/desserts',
    title: 'Desserts',
    icon: IceCream
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function MenuNavigation() {
  const pathname = usePathname();

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="container mx-auto px-4 py-4"
        variants={containerVariants}
      >
        <motion.ul 
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          variants={containerVariants}
        >
          {menuCategories.map((category) => {
            const isActive = pathname === category.href;
            const Icon = category.icon;

            return (
              <motion.li
                key={category.href}
                variants={itemVariants}
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={category.href}
                  className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-500 hover:bg-primary-50'
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 mb-1" />
                  </motion.div>
                  <span className="text-sm font-medium">{category.title}</span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
}
