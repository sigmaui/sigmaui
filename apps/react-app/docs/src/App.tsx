import { Outlet } from 'react-router'
import { MDXProvider } from '@mdx-js/react'
import { MicroUIProvider, THEME_MODE } from '@microui-kit/provider'
import { useRouter } from '@microui-kit/use-router'
import Layout from '@sigmaui-kit/layout'
import { getRoute } from '@docs/helpers'
import themeConfig, { globalStyle } from 'packages/common/theme/config'
import { routes } from './router'

import { MDXComponents } from './components/mdx'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'

const App = ({ renderer }) => {
  const router = useRouter()
  const { pathname } = router

  const route = getRoute({ routes, pathname })
  const { routeProps = {}, name: pageName } = route

  const theme = {
    ...themeConfig,
  }

  const isSidebar = pathname.startsWith('/docs')

  // console.log('renderer', renderer);

  return (
    <MicroUIProvider
      renderer={renderer}
      theme={theme}
      themeMode={THEME_MODE.LIGHT}
      globalStyle={globalStyle}
      prefix="sm"
    >
      <MDXProvider components={MDXComponents}>
        <Layout
          _style={{
            wrapper: {
              width: 1200,
              marginInline: 'auto',
            },
            main: {
              marginTop: 24,
            },
          }}
          header={<Header/>}
          isSidebar={isSidebar}
          sidebar={isSidebar && <Sidebar/>}
        >
          <Outlet
            context={{
              pageName,
              routeProps,
            }}
          />
        </Layout>
      </MDXProvider>
    </MicroUIProvider>
  )
}

export default App
