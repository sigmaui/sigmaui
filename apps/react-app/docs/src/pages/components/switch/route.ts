import { routeMap } from '@docs/router/routeMap.ts';

export default {
  name: 'page-switch',
  path: routeMap.component.switch,
  lazy: () => import('./index.tsx'),
};
