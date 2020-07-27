import React from 'react';

const Beranda = React.lazy(() => import('./views/beranda'));
const Driver = React.lazy(() => import('./views/driver'));
const Laporan = React.lazy(() => import('./views/laporan'));
const Merchant = React.lazy(() => import('./views/merchant'));
const Order = React.lazy(() => import('./views/order'));
const Pickup = React.lazy(() => import('./views/pickup'));
const Profile = React.lazy(() => import('./views/profile'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/beranda', name: 'Beranda', component: Beranda },
  { path: '/driver', name: 'Driver', component: Driver },
  { path: '/laporan', name: 'Laporan', component: Laporan },
  { path: '/merchant', name: 'Merchant', component: Merchant },
  { path: '/order', name: 'Order', component: Order },
  { path: '/pickup', name: 'Pickup', component: Pickup },
  { path: '/profile', name: 'Profile', component: Profile },
];

export default routes;
