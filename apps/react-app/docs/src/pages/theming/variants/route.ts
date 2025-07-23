import { routeMap } from '@docs/router/routeMap'

export default {
  name: 'page-variants',
  path: routeMap.theming.variants,
  lazy: () => import('./index'),
}
