import { routeMap } from '@docs/router/routeMap'

export default {
  name: 'theming-sizes',
  path: `${routeMap.themingPath}/:slug`,
  lazy: () => import('./index'),
}
