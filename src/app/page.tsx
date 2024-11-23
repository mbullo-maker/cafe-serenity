'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Utensils, Clock, Star, ChefHat, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  heroLandingVariants,
  slideInVariants,
  cascadeLandingVariants,
  staggeredEntranceVariants,
  staggeredChildVariants,
  floatingElementVariants,
  revealLandingVariants
} from '@/animations';

export default function Home() {
  const { isAuthenticated, login } = useAuth();

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section with Landing Animation */}
      <motion.section
        variants={heroLandingVariants}
        initial="initial"
        animate="animate"
        className="relative h-[90vh] flex items-center justify-center text-center px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            variants={floatingElementVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0"
          >
            <Image
              src="/hero-bg.jpg"
              alt="Café background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            variants={slideInVariants.fromBottom}
            initial="initial"
            animate="animate"
            className="text-6xl font-bold text-white mb-6"
          >
            Welcome to Our Café
          </motion.h1>
          <motion.p
            variants={slideInVariants.fromBottom}
            initial="initial"
            animate="animate"
            className="text-xl text-white mb-8"
          >
            Experience the perfect blend of taste and ambiance
          </motion.p>
          <motion.div
            variants={staggeredEntranceVariants}
            initial="initial"
            animate="animate"
            className="flex justify-center gap-4"
          >
            <Link href="/menu">
              <motion.button
                variants={staggeredChildVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold"
              >
                View Menu
              </motion.button>
            </Link>
            {!isAuthenticated && (
              <motion.button
                variants={staggeredChildVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={login}
                className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold"
              >
                Sign In
              </motion.button>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section with Cascade Animation */}
      <motion.section
        variants={revealLandingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 bg-white"
      >
        <motion.div
          variants={staggeredEntranceVariants}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Coffee className="w-8 h-8" />,
              title: "Premium Coffee",
              description: "Sourced from the finest beans around the world"
            },
            {
              icon: <ChefHat className="w-8 h-8" />,
              title: "Expert Chefs",
              description: "Culinary masters creating unforgettable experiences"
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Always Fresh",
              description: "Made to order with the freshest ingredients"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cascadeLandingVariants}
              className="text-center p-6 rounded-xl bg-amber-50"
            >
              <motion.div
                variants={floatingElementVariants}
                initial="initial"
                animate="animate"
                className="inline-block mb-4 text-amber-600"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Special Offers with Slide Animation */}
      <motion.section
        variants={slideInVariants.fromRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 bg-amber-100"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={slideInVariants.fromLeft}
            className="text-4xl font-bold text-center mb-12"
          >
            Today's Specials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Morning Delight",
                description: "Freshly baked croissant with premium coffee",
                price: "$8.99"
              },
              {
                title: "Lunch Special",
                description: "Gourmet sandwich with soup of the day",
                price: "$12.99"
              }
            ].map((special, index) => (
              <motion.div
                key={index}
                variants={cascadeLandingVariants}
                custom={index}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{special.title}</h3>
                <p className="text-gray-600 mb-4">{special.description}</p>
                <p className="text-2xl font-bold text-amber-600">{special.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action with Bounce Animation */}
      <motion.section
        variants={slideInVariants.fromBottom}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 bg-amber-600 text-white text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={slideInVariants.fromTop}
            className="text-4xl font-bold mb-6"
          >
            Join Us Today
          </motion.h2>
          <motion.p className="text-xl mb-8">
            Experience the perfect blend of comfort and taste
          </motion.p>
          <Link href="/menu">
            <motion.button
              variants={staggeredChildVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold"
            >
              Explore Menu
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
