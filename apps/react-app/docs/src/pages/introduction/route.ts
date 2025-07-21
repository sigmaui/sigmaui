export default {
  name: 'page-introduction',
  path: '/docs/introduction',
  lazy: () => import('./index'),
  routeProps: {
    isSidebar: true
  }
}