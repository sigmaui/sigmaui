import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'page-text',
  path: routeMap.component.text,
  lazy: () => import('./index'),
};
