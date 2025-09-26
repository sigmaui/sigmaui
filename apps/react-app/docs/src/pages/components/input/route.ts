import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'page-input',
  path: routeMap.component.input,
  lazy: () => import('./index'),
};
