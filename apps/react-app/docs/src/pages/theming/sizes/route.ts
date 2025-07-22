import { routeMap } from '@docs/router/routeMap';

export default {
  name: 'page-sizes',
  path: routeMap.theming.sizes,
  lazy: () => import('./index')
}