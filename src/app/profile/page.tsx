'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { User, ShieldCheck, Package } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'completed' | 'processing' | 'delivered';
}

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    // Mock orders data
    const mockOrders: Order[] = [
      {
        id: '1',
        date: '2024-02-15',
        items: [
          { name: 'Cappuccino', quantity: 2, price: 4.99 },
          { name: 'Croissant', quantity: 1, price: 3.99 }
        ],
        total: 13.97,
        status: 'completed'
      },
      {
        id: '2',
        date: '2024-02-14',
        items: [
          { name: 'Latte', quantity: 1, price: 4.49 },
          { name: 'Avocado Toast', quantity: 1, price: 8.99 }
        ],
        total: 13.48,
        status: 'delivered'
      }
    ];
    setOrders(mockOrders);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-amber-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-amber-100 p-3 rounded-full">
              <User className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-brown-900">{user?.name}</h1>
              <p className="text-brown-600">{user?.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 text-amber-600 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-medium">Account Status</span>
              </div>
              <p className="text-brown-600">Active Member</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 text-amber-600 mb-2">
                <Package className="w-5 h-5" />
                <span className="font-medium">Total Orders</span>
              </div>
              <p className="text-brown-600">{orders.length} orders</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-brown-900 mb-6">Order History</h2>
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="border-b border-brown-200 pb-6 last:border-0">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-brown-600">Order #{order.id}</p>
                    <p className="text-sm text-brown-600">{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-brown-600">
                      <span>{item.quantity}x {item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-medium text-brown-900 pt-2">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
