import PageView from '@/layouts/PageView';
import UserLayout from '@/layouts/UserLayout';
export default [
  {
    path: '/',
    name: 'home',
    meta: { title: 'Home' },
    // component: PageView,
    component: () => import('@/views/Navigation'),
  },
];
