import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'theming',
  path: `${routeMap.themingPath}/:slug`,
  lazy: () => import('./index'),
};
