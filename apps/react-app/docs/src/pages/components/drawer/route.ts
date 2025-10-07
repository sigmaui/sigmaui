import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'page-drawer',
  path: routeMap.component.drawer,
  lazy: () => import('./index'),
};
