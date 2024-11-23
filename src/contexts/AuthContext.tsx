'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useSession, signIn, signOut } from 'next-auth/react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (provider: string, credentials?: { email: string; password: string }) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  isLoading: boolean;
  redirectToLogin: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
  loading: true,
  isLoading: true,
  redirectToLogin: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
      return;
    }

    if (session?.user) {
      setUser({
        id: session.user.email || '1',
        name: session.user.name || 'User',
        email: session.user.email || '',
        image: session.user.image || undefined,
      });
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, [session, status]);

  const login = async (provider: string, credentials?: { email: string; password: string }) => {
    try {
      const result = await signIn(provider, { 
        ...(credentials && { ...credentials }),
        callbackUrl: '/menu',
        redirect: false,
      });
      
      if (result?.error) {
        toast.error('Login failed. Please try again.');
        return;
      }
      
      if (result?.ok) {
        toast.success('Successfully logged in!');
        router.push('/menu');
      }
    } catch (error) {
      toast.error('An error occurred during login');
      throw error;
    }
  };

  const signup = async (data: SignupData) => {
    try {
      // Here we'll add the actual signup logic when we implement the backend
      // For now, we'll just log in with the credentials
      await login('credentials', {
        email: data.email,
        password: data.password,
      });
      toast.success('Account created successfully!');
    } catch (error) {
      toast.error('Failed to create account');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut({ callbackUrl: '/' });
      toast.success('Successfully logged out');
    } catch (error) {
      toast.error('An error occurred during logout');
      throw error;
    }
  };

  const redirectToLogin = () => {
    router.push('/auth/signin');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        signup,
        logout,
        loading,
        isLoading: loading,
        redirectToLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
