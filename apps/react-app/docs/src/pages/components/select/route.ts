import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'page-select',
  path: routeMap.component.select,
  lazy: () => import('./index'),
};
