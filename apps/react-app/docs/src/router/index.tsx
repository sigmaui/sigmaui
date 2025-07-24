import React from 'react'
import { createBrowserRouter } from 'react-router'
import loadable from './loadable'

import Pages from '../pages'

export const routes: any = []

Pages.forEach((route: any) => {
  if (route.path instanceof Array) {
    route.path.forEach((path: string) => {
      routes.push(
        loadable({
          ...route,
          path,
        }),
      )
    })
  } else {
    routes.push(loadable(route))
  }
})

export const createRouter = (props: any = {}) => {
  const { App, ...restProps } = props

  return createBrowserRouter([
    {
      path: '/',
      element: <App {...restProps} />,
      children: routes,
    },
  ])
}
