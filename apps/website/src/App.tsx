import React from 'react';
import type { FC, ReactNode } from 'react';
import Select from '../../../packages/react/src/components/select/src';
import { ThemeProvider } from '../../../packages/react/src/hooks/use-theme/src';

interface AppProps {
  children: ReactNode
}

const App: FC<AppProps> = ({
  children
}) => {
  return (
    <ThemeProvider>
      <Select>
        Test
      </Select>
      {children}
    </ThemeProvider>
  )
}

export default App