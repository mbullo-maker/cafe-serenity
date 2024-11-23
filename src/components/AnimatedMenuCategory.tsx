'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface AnimatedMenuCategoryProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  image: string;
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: (custom: number) => custom * 0.2
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.15,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 300
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.4 },
  hover: { 
    opacity: 0.2,
    transition: {
      duration: 0.3
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5
    }
  }
};

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
      variants={containerVariants}
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
            variants={overlayVariants}
          />
          
          <motion.div className="absolute inset-0" variants={imageVariants}>
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
            variants={textVariants}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4"
              variants={iconVariants}
            >
              <Icon className="w-6 h-6" />
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mb-2"
              variants={textVariants}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="text-sm opacity-90 mb-4"
              variants={textVariants}
            >
              {description}
            </motion.p>

            <motion.div
              className="inline-flex items-center text-sm font-semibold"
              variants={textVariants}
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
