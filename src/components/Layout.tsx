'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransitionVariants } from '@/animations';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransitionVariants}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
