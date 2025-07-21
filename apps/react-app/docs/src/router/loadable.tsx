const createLoadable = (route: any = {}) => {
  const {
    lazy,
    element: Element,
    ...restRoute
  } = route;

  const newRoute: any = {
    ...restRoute
  }

  if (Element) {
    newRoute.element = <Element/>
  }

  if (lazy) {
    newRoute.lazy = async () => {
      const { default: Component } = await lazy();

      return {
        Component: (props: any) => (
          <Component
            {...props}
          />
        )
      }
    }
  }

  return newRoute
}

export default createLoadable