import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'page-button',
  path: routeMap.component.button,
  lazy: () => import('./index'),
};
