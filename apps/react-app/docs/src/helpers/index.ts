import { matchRoutes } from 'react-router-dom';

export const getRoute = ({ routes, pathname }: any) => {
  const dataRoute: any = matchRoutes(routes, pathname);

  // console.log('dataRoute', dataRoute);

  if (!dataRoute) {
    return {};
  }

  const routeItem = dataRoute[0] || {};

  return {
    ...routeItem?.route,
    params: routeItem.params,
    pathname,
  };
};
