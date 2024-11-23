export interface Coupon {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  minimumOrder: number;
  validUntil: string;
  type: 'percentage' | 'fixed';
}

export const coupons: Coupon[] = [
  {
    id: 'welcome-10',
    title: 'Welcome Discount',
    description: 'Get 10% off on your first order',
    code: 'WELCOME10',
    discount: '10% OFF',
    minimumOrder: 20,
    validUntil: '2024-12-31',
    type: 'percentage'
  },
  {
    id: 'holiday-special',
    title: 'Holiday Special',
    description: '$5 off on orders above $30',
    code: 'HOLIDAY5',
    discount: '$5 OFF',
    minimumOrder: 30,
    validUntil: '2024-12-25',
    type: 'fixed'
  },
  {
    id: 'lunch-deal',
    title: 'Lunch Deal',
    description: '15% off on all lunch items',
    code: 'LUNCH15',
    discount: '15% OFF',
    minimumOrder: 25,
    validUntil: '2024-12-31',
    type: 'percentage'
  }
];
