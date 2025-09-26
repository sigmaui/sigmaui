import { routeMap } from '@docs/router/routeMap.ts';

export default {
  name: 'page-tooltip',
  path: routeMap.component.tooltip,
  lazy: () => import('./index.tsx'),
};
