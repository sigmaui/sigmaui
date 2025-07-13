import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import Pages from '../pages';

const rootRoute = createRootRoute({});

const routes = Pages.flatMap((route: any) => {
  if (Array.isArray(route.path)) {
    return route.path.map((path: string) =>
      createRoute({
        ...route,
        path,
        getParentRoute: () => rootRoute,
      })
    );
  } else {
    return [
      createRoute({
        ...route,
        getParentRoute: () => rootRoute,
      })
    ];
  }
});

const routeTree = rootRoute.addChildren(routes);

const router = createRouter({
  routeTree,
});

export default router;