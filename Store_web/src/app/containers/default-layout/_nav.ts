import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Orders',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Bookings',
    url: '/bookings',
    iconComponent: { name: 'cil-storage' },
  },
  {
    name: 'Insights',
    url: '/insights',
    iconComponent: { name: 'cil-bar-chart' },
  },
  {
    name: 'Categories',
    url: '/categories',
    iconComponent: { name: 'cil-grid' },
  },
  {
    name: 'Foods',
    url: '/foods',
    iconComponent: { name: 'cil-burger' },
  },
  {
    name: 'Tickets',
    url: '/tickets',
    iconComponent: { name: 'cil-comment-bubble' },
  },
  {
    name: 'Reviews',
    url: '/reviews',
    iconComponent: { name: 'cil-happy' },
  },
  {
    name: 'Stats',
    url: '/stats',
    iconComponent: { name: 'cil-chart-line' },
  },
];
