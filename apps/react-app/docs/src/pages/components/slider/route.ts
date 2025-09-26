import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'page-slider',
  path: routeMap.component.slider,
  lazy: () => import('./index'),
};
