import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import Pages from '../pages';

const routes: RouteRecordRaw[] = [];

Pages.forEach((route: any) => {
  if (route.path instanceof Array) {
    route.path.forEach((path: string) => {
      routes.push({
        ...route,
        path
      })
    })
  } else {
    routes.push(route)
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router