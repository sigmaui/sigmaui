import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'page-box',
  path: routeMap.component.box,
  lazy: () => import('./index'),
}