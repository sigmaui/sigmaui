import { RouterProvider } from '@tanstack/react-router';
import { MDXProvider } from '@mdx-js/react';
import { createRenderer } from '@microui-kit/create-renderer';
import { SigmaUIProvider } from 'packages/react/src/system/provider/src';
import router from './router';

const renderer = createRenderer({});

const App = ({}) => {
  return (
    <SigmaUIProvider
      renderer={renderer}
      theme={{
        modes: {
          light: {},
          dark: {}
        }
      }}
    >
      <MDXProvider>
        <RouterProvider router={router}/>
      </MDXProvider>
    </SigmaUIProvider>
  )
}

export default App