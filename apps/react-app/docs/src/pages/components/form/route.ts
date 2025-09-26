import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'page-form',
  path: routeMap.component.form,
  lazy: () => import('./index'),
};
