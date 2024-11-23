export interface Policy {
  id: string;
  title: string;
  content: string[];
}

export interface AgeRestriction {
  itemType: string;
  minimumAge: number;
  description: string;
  requiredDocuments: string[];
}

export const ageRestrictions: AgeRestriction[] = [
  {
    itemType: 'Alcoholic Beverages',
    minimumAge: 21,
    description: 'All alcoholic beverages including wine, beer, and spirits',
    requiredDocuments: [
      'Valid Government-issued Photo ID',
      'Driver\'s License',
      'Passport'
    ]
  },
  {
    itemType: 'Energy Drinks',
    minimumAge: 16,
    description: 'High-caffeine energy beverages',
    requiredDocuments: [
      'Valid School ID',
      'Government-issued Photo ID',
      'Driver\'s License'
    ]
  }
];

export const termsAndConditions: Policy[] = [
  {
    id: 'general',
    title: 'General Terms',
    content: [
      'By using our services, you agree to these terms and conditions.',
      'We reserve the right to refuse service to anyone.',
      'Prices are subject to change without notice.',
      'All prices listed are in USD and exclude applicable taxes.',
      'Payment is required at the time of order.',
      'We accept major credit cards, debit cards, and cash payments.'
    ]
  },
  {
    id: 'reservations',
    title: 'Reservations',
    content: [
      'Reservations are recommended for groups of 6 or more.',
      'We hold reservations for 15 minutes past the scheduled time.',
      'Cancellations must be made at least 2 hours in advance.',
      'Special events may require a deposit or credit card hold.'
    ]
  },
  {
    id: 'dietary',
    title: 'Dietary Information',
    content: [
      'While we provide allergen information, we cannot guarantee a completely allergen-free environment.',
      'Please inform our staff of any allergies or dietary restrictions.',
      'Cross-contamination may occur during food preparation.',
      'Nutritional information is approximate and may vary.'
    ]
  },
  {
    id: 'delivery',
    title: 'Delivery Policy',
    content: [
      'Delivery is available within a 5-mile radius of our location.',
      'Minimum order amount for delivery is $20.',
      'Delivery fees vary based on distance and order size.',
      'Estimated delivery times are approximate and may vary based on traffic and weather conditions.'
    ]
  },
  {
    id: 'refunds',
    title: 'Refunds and Returns',
    content: [
      'We strive to ensure your complete satisfaction with our products and services.',
      'If you are unsatisfied with your order, please notify us within 30 minutes of receipt.',
      'Refunds will be issued in the original form of payment.',
      'We cannot accept returns on consumed food items.'
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    content: [
      'We collect and store only necessary customer information.',
      'Your personal information will never be sold to third parties.',
      'We use secure payment processing systems.',
      'Customer data is stored in accordance with local data protection laws.'
    ]
  },
  {
    id: 'loyalty',
    title: 'Loyalty Program',
    content: [
      'Membership in our loyalty program is free.',
      'Points are earned on qualifying purchases.',
      'Points cannot be earned on alcoholic beverages.',
      'Points expire after 12 months of account inactivity.',
      'Rewards are subject to availability and may change without notice.'
    ]
  },
  {
    id: 'covid',
    title: 'Health and Safety',
    content: [
      'We follow all local health department guidelines.',
      'Our staff undergoes regular health and safety training.',
      'Enhanced cleaning protocols are in place.',
      'We reserve the right to modify our operations based on public health guidelines.'
    ]
  }
];

export const disclaimers: Policy[] = [
  {
    id: 'allergens',
    title: 'Allergen Disclaimer',
    content: [
      'Our kitchen handles common allergens including but not limited to: nuts, dairy, eggs, soy, wheat, and shellfish.',
      'While we take precautions to keep ingredients separate, we cannot guarantee that any menu item is completely free of allergens.',
      'Customers with severe allergies should exercise caution when dining with us.'
    ]
  },
  {
    id: 'alcohol',
    title: 'Alcohol Service Disclaimer',
    content: [
      'We strictly enforce age verification for all alcohol purchases.',
      'We reserve the right to refuse alcohol service to anyone who appears intoxicated.',
      'Valid identification is required for all alcohol purchases regardless of apparent age.',
      'Zero tolerance policy for attempting to purchase alcohol for minors.'
    ]
  }
];
