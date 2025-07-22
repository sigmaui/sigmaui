import { Outlet } from 'react-router';
import { MDXProvider } from '@mdx-js/react';
import { createRenderer } from '@microui-kit/create-renderer';
import { MicroUIProvider, THEME_MODE } from '@microui-kit/provider';
import { useRouter } from '@microui-kit/use-router';
import Layout from '@sigmaui-kit/layout';
import themeConfig, { globalStyle } from 'packages/common/theme/config';

import { MDXComponents } from './components/mdx';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const renderer = createRenderer({});

const App = ({}) => {
  const router = useRouter();
  const { pathname } = router;

  const theme = {
    ...themeConfig
  }

  const isSidebar = pathname.startsWith('/docs');

  return (
    <MicroUIProvider
      renderer={renderer}
      theme={theme}
      themeMode={THEME_MODE.LIGHT}
      globalStyle={globalStyle}
    >
      <MDXProvider
        components={MDXComponents}
      >
        <Layout
          styles={{
            wrapper: {
              width: 1200,
              marginInline: 'auto'
            },
            main: {
              marginTop: 24
            },
            header: {},
            sidebar: {},
            content: {}
          }}
          header={(
            <Header/>
          )}
          isSidebar={isSidebar}
          sidebar={isSidebar && (
            <Sidebar/>
          )}
        >
          <Outlet/>
        </Layout>
      </MDXProvider>
    </MicroUIProvider>
  )
}

export default App