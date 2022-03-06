import React from 'react';
import { Icon } from '@iconify/react';

export const sideNavData = [
  {
    title: 'Dashboard',
    icon: <Icon icon='bxs:category' />,

    link: '/dashboard',
  },

  {
    title: 'Plans',
    icon: <Icon icon='fluent:document-one-page-20-filled' />,
    link: '/plans',
  },
  {
    title: 'Purse',
    icon: <Icon icon='fa6-solid:bag-shopping' />,
    link: '/purse',
  },
  {
    title: 'Transactions',
    icon: <Icon icon='ion:document-text' />,
    link: '/transactions',
  },
  {
    title: 'Banks & Cards',
    icon: <Icon icon='ri:bank-card-2-fill' />,
    link: '/banks',
  },
  {
    title: 'Girl Code',
    icon: <Icon icon='teenyicons:users-solid' />,
    link: '/girlcode',
  },
  {
    title: 'Profile',
    icon: <Icon icon='ep:user-filled' />,
    link: '/profile',
  },
  {
    title: 'Portfolio',
    icon: <Icon icon='foundation:graph-pie' />,
    link: '/portfolio',
  },
  {
    title: 'About HerVest',
    icon: <Icon icon='bxs:info-square' />,
    link: '/about',
  },
  {
    title: 'Support',
    icon: <Icon icon='bi:chat-dots-fill' />,
    link: '/suport',
  },
  {
    title: 'Logout',
    icon: <Icon icon='majesticons:logout' />,
    link: '/logout',
  },
];
