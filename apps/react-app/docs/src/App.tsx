import { Outlet } from 'react-router';
import { MDXProvider } from '@mdx-js/react';
import { createRenderer } from '@microui-kit/create-renderer';
import { MicroUIProvider, THEME_MODE } from '@microui-kit/provider';
import Layout from 'packages/react/src/components/layout/src';
import themeConfig, { globalStyle } from 'packages/common/theme/config';

import { MDXComponents } from './components/mdx';

const renderer = createRenderer({});

const App = ({}) => {
  const theme = {
    ...themeConfig
  }

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
          _style={{
            wrapper: {
              width: 1200,
              marginInline: 'auto'
            },
            content: {
              marginTop: 24
            }
          }}
        >
          <Outlet/>
        </Layout>
      </MDXProvider>
    </MicroUIProvider>
  )
}

export default App