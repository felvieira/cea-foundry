import { Product, Order } from './types';

export const mockProducts: Product[] = [
  {
    id: '1',
    code: 'TOP-EPP-001',
    name: 'GOLDEN SECRET BELEZA',
    department: 'Beauty',
    division: 'Personal Care',
    program: 'TOP EPP',
    status: 'APPROVED',
    quantity: 1930,
    lastUpdate: '2024-03-10',
    updatedBy: 'Diego Alves Verdan',
    purchaseGroup: 'OPAG-001',
  },
  // Add more mock products...
];

export const mockOrders: Order[] = [
  {
    timestamp: 'Nov 5, 2024',
    vendorName: 'FASHIONING COMERCIAL',
    userId: 'Diego Alves Verdan',
    similarGroupName: 'MESA LICENSE',
    optionId: '1079847',
    operation: 'BUY',
    weekIdOriginal: '202504',
    week: '202504',
    quantityRecommended: 3860,
    quantityFinal: 1930,
    initialPrice: 23.11,
    finalPrice: 23.11,
  },
  // Add more mock orders...
];

export const mockChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];