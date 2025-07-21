import { routeMap } from '../../../router/routeMap';

export default {
  name: 'page-box',
  path: routeMap.component.box,
  lazy: () => import('./index'),
}