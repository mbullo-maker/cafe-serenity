'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import {
  menuCategoryContainerVariants,
  menuCategoryImageVariants,
  menuCategoryTextVariants,
  menuCategoryOverlayVariants,
  menuCategoryIconVariants
} from '@/animations';

interface AnimatedMenuCategoryProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  image: string;
}

export default function AnimatedMenuCategory({ 
  href,
  title,
  description,
  icon: Icon,
  index,
  image
}: AnimatedMenuCategoryProps) {
  return (
    <motion.div
      variants={menuCategoryContainerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={index}
      className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-[400px]"
    >
      <Link href={href} className="block h-full">
        <div className="relative h-full">
          <motion.div
            className="absolute inset-0 bg-black"
            variants={menuCategoryOverlayVariants}
          />
          
          <motion.div className="absolute inset-0" variants={menuCategoryImageVariants}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 4}
            />
          </motion.div>

          <motion.div 
            className="absolute inset-0 flex flex-col justify-end p-6 text-white"
            variants={menuCategoryTextVariants}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4"
              variants={menuCategoryIconVariants}
            >
              <Icon className="w-6 h-6" />
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mb-2"
              variants={menuCategoryTextVariants}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="text-sm opacity-90 mb-4"
              variants={menuCategoryTextVariants}
            >
              {description}
            </motion.p>

            <motion.div
              className="inline-flex items-center text-sm font-semibold"
              variants={menuCategoryTextVariants}
            >
              <span className="mr-2">View Menu</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
