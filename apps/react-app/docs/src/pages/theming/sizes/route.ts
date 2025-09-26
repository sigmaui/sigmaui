import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'theming-sizes',
  path: routeMap.theming.sizes,
  lazy: () => import('./index'),
};
