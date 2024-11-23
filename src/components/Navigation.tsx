'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ShoppingCart, LogIn, LogOut, User, Coffee } from 'lucide-react';

export default function Navigation() {
  const { isAuthenticated, user, login, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Coffee className="h-8 w-8 text-amber-600" />
              </div>
              <span className="text-xl font-bold text-amber-900">Café Serenity</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link href="/cart" className="relative">
                  <ShoppingCart className="w-6 h-6 text-amber-900" />
                  {/* Add cart items count here if needed */}
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-2 text-amber-900">
                    {user?.image ? (
                      <img 
                        src={user.image} 
                        alt={user.name || 'Profile'} 
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <User className="w-6 h-6" />
                    )}
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 invisible group-hover:visible">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <button
                      onClick={() => logout()}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <button
                onClick={() => login()}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
