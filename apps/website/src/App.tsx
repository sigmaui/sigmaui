import React from 'react';
import type { FC, ReactNode } from 'react';
import Select from '@packages/react/components/select';
import { ThemeProvider } from '@packages/react/hooks/use-theme';

import { defaultTheme } from 'packages/common/theme/default.stylex';
import { darkTheme } from 'packages/common/theme/dark.stylex';

interface AppProps {
  children: ReactNode
}

const App: FC<AppProps> = ({
  children
}) => {
  return (
    <ThemeProvider
      theme={defaultTheme}
      themeConfig={{
        globalProps: {
          mode: 'dark',
          platform: 'desktop'
        }
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