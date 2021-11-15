import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('layouts/SlideBarLayout/SlideBarLayout.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/Index.vue')
          },
          {
            path: '/article',
            component: () => import('pages/Article.vue')
          }
        ]
      },
      {
        path: '/article',
        component: () => import('layouts/ArticleLayout/ArticleLayout.vue'),
        name: 'articlelayout'
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
