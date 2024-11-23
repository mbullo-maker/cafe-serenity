'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CartItem from '@/components/cart/CartItem';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function CartPage() {
  const { items, clearCart, total } = useCart();
  const { isAuthenticated, redirectToLogin } = useAuth();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      redirectToLogin('/cart');
    }
  }, [isAuthenticated, redirectToLogin]);

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      toast.info('Please log in to checkout');
      redirectToLogin('/cart');
      return;
    }

    setIsProcessing(true);
    try {
      // TODO: Implement actual checkout logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Order placed successfully!');
      clearCart();
      router.push('/profile');
    } catch (error) {
      toast.error('Checkout failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <motion.div 
        className="min-h-[calc(100vh-4rem)] py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-brown-900 mb-4">Loading...</h1>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (items.length === 0) {
    return (
      <motion.div 
        className="min-h-[calc(100vh-4rem)] py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
          >
            <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-brown-300" />
            <h1 className="text-3xl font-bold text-brown-900 mb-4">Your Cart is Empty</h1>
            <p className="text-brown-600 mb-8">Add some delicious items to get started!</p>
            <motion.button
              onClick={() => router.push('/menu')}
              className="bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Menu
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="min-h-[calc(100vh-4rem)] py-12 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-brown-900 mb-8"
          variants={fadeInUp}
        >
          Your Cart
        </motion.h1>

        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-8 space-y-4"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6"
          variants={fadeInUp}
        >
          <div className="flex justify-between mb-6">
            <span className="text-2xl font-semibold text-brown-900">Total</span>
            <span className="text-2xl font-semibold text-brown-900">
              ${total.toFixed(2)}
            </span>
          </div>

          <div className="space-y-4">
            <motion.button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full bg-amber-600 text-white py-3 px-4 rounded-md hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
            </motion.button>
            
            <motion.button
              onClick={clearCart}
              className="w-full bg-brown-100 text-brown-900 py-3 px-4 rounded-md hover:bg-brown-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Clear Cart
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
