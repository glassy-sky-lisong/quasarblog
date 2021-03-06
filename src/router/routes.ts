import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('layouts/SlideBarLayout/SlideBarLayout.vue'),
        children: [
          {
            path: '/',
            component: () => import('pages/Index.vue'),
          },
        ],
      },
      {
        path: '/article/:id',
        component: () => import('layouts/ArticleLayout/ArticleLayout.vue'),
      },
    ],
  },
  {
    path: '/test',
    component: () => import('src/pages/Test.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
