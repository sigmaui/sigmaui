const createLoadable = (route: any = {}) => {
  const {
    lazy,
    ...restRoute
  } = route;

  const newRoute: any = {
    ...restRoute
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