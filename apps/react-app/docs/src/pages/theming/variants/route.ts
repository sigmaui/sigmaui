import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'theming-variants',
  path: routeMap.theming.variants,
  lazy: () => import('./index'),
};
