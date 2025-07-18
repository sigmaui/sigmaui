import { Outlet } from 'react-router';
import { MDXProvider } from '@mdx-js/react';
import { createRenderer } from '@microui-kit/create-renderer';
import { MicroUIProvider, THEME_MODE } from '@microui-kit/provider';
import themeConfig from 'packages/common/theme/config';

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
    >
      <MDXProvider>
        <Outlet/>
      </MDXProvider>
    </MicroUIProvider>
  )
}

export default App