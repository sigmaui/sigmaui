import React from 'react';
import type { FC, ReactNode } from 'react';
import Button from '@packages/react/components/button';
import Select from '@packages/react/components/select';
import { ThemeProvider } from '@packages/react/hooks/use-theme';
import { getTheme } from 'packages/common/theme';
import { themeConfig } from './theme/config';

import { defaultTheme } from '../../../packages/common/theme/modes/default.stylex.ts';
import { darkTheme } from '../../../packages/common/theme/modes/dark.stylex.ts';

interface AppProps {
  children: ReactNode
}

const App: FC<AppProps> = ({
  children
}) => {
  const theme = getTheme({
    primary: '#fff',
  });

  console.log('theme', theme)

  return (
    <ThemeProvider
      theme={theme}
      themeConfig={{
        globalProps: {
          mode: 'dark',
          platform: 'desktop'
        },
        ...themeConfig
      }}
    >
      <Button>
        Button
      </Button>
      <ThemeProvider
        theme={darkTheme}
        themeConfig={{
          globalProps: {
            platform: 'mobile'
          },
          test: '123'
        }}
      >
        <Select
          options={{
            items: [
              {
                label: 'React',
                value: 'react'
              },
              {
                label: 'Vue',
                value: 'vue'
              }
            ]
          }}
        >
          Test
        </Select>
      </ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App