import { routeMap } from '@docs/router/routeMap'

export default {
  name: 'components',
  path: `${routeMap.componentPath}/:slug`,
  lazy: () => import('./index'),
}
