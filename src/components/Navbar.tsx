'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  slideInVariants,
  floatingElementVariants,
  microInteractionVariants,
  menuNavLinkVariants,
  staggeredEntranceVariants,
  staggeredChildVariants
} from '@/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';

  const handleLogin = () => {
    signIn();
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <motion.nav
      variants={slideInVariants.fromTop}
      initial="initial"
      animate="animate"
      className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            variants={floatingElementVariants}
            initial="initial"
            animate="animate"
            className="flex-shrink-0"
          >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Café Logo"
                width={40}
                height={40}
                className="w-auto h-8"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={staggeredEntranceVariants}
            initial="initial"
            animate="animate"
            className="hidden md:flex items-center space-x-8"
          >
            {[
              { href: '/', label: 'Home' },
              { href: '/menu', label: 'Menu' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <motion.div key={link.href} variants={staggeredChildVariants}>
                <Link href={link.href}>
                  <motion.span
                    variants={menuNavLinkVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* User Actions */}
          <motion.div
            variants={staggeredEntranceVariants}
            initial="initial"
            animate="animate"
            className="hidden md:flex items-center space-x-4"
          >
            <motion.div variants={staggeredChildVariants}>
              <Link href="/cart">
                <motion.button
                  variants={microInteractionVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={staggeredChildVariants}>
              {isAuthenticated ? (
                <motion.button
                  onClick={handleLogout}
                  variants={microInteractionVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700"
                >
                  Sign Out
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleLogin}
                  variants={microInteractionVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700"
                >
                  Sign In
                </motion.button>
              )}
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div variants={microInteractionVariants} className="md:hidden">
            <motion.button
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <motion.div
          variants={staggeredEntranceVariants}
          initial="initial"
          animate={isOpen ? "animate" : "initial"}
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
        >
          {[
            { href: '/', label: 'Home' },
            { href: '/menu', label: 'Menu' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <motion.div key={link.href} variants={staggeredChildVariants}>
              <Link href={link.href}>
                <motion.span
                  variants={menuNavLinkVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                >
                  {link.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
