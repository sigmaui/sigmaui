import React from 'react';
import type { FC, ReactNode } from 'react';

interface AppProps {
  children: ReactNode
}

const App: FC<AppProps> = ({
  children
}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default App