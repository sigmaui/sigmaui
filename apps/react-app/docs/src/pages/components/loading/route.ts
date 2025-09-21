import { routeMap } from '@docs/router/routeMap'

export default {
  name: 'page-loading',
  path: routeMap.component.loading,
  lazy: () => import('./index'),
}
