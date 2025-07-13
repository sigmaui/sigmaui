import { RouterProvider } from '@tanstack/react-router';
import { MDXProvider } from '@mdx-js/react';
import router from './router';

const App = ({}) => {
  return (
    <MDXProvider>
      <RouterProvider router={router}/>
    </MDXProvider>
  )
}

export default App