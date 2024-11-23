'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Utensils, Clock, Star, ChefHat, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const { isAuthenticated, login } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />
            <Image
              src="/images/menu/cafe-hero.jpg"
              alt="Café Serenity"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Welcome to{" "}
            <span className="text-amber-400">
              Café Serenity
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-8 text-amber-100"
            variants={itemVariants}
          >
            Experience tranquility in every sip
          </motion.p>

          <motion.div 
            className="flex gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link
                href="/menu"
                className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold
                         hover:bg-amber-600 transition-colors inline-flex items-center gap-2"
              >
                <Utensils className="w-5 h-5" />
                View Menu
              </Link>
            </motion.div>

            {!isAuthenticated && (
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <button
                  onClick={() => login()}
                  className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold
                           hover:bg-amber-50 transition-colors inline-flex items-center gap-2"
                >
                  <LogIn className="w-5 h-5" />
                  Sign In
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          <ChefHat className="w-12 h-12 text-amber-400" />
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-amber-900"
            variants={itemVariants}
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: "Premium Coffee",
                description: "Sourced from the finest beans around the world"
              },
              {
                icon: Star,
                title: "Excellence",
                description: "Award-winning service and atmosphere"
              },
              {
                icon: Clock,
                title: "Always Fresh",
                description: "Made to order with fresh ingredients"
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mb-4">
                  {<feature.icon className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-900">{feature.title}</h3>
                <p className="text-amber-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
