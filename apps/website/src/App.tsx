import React from 'react';
import type { FC, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import Button, { ButtonKeys } from '@packages/react/components/button';
import Select, { SelectKeys } from '@packages/react/components/select';
import { ThemeProvider } from '@packages/react/hooks/use-theme';
import type { StylesDefinitions } from '@packages/react/hooks/use-theme';
import { getTheme, darkTheme } from 'packages/common/theme';
import { themeConfig } from './theme/config';

interface AppProps {
  children: ReactNode
}

const buttonStyles = stylex.create({
  root: {
    // position: 'fixed',
    backgroundColor: 'pink'
  }
} as Partial<Pick<StylesDefinitions, ButtonKeys>>);

const selectStyles = stylex.create({
  root: {
    paddingInline: '10px'
  },
  label: {
    color: 'pink'
  }
} as Partial<Pick<StylesDefinitions, SelectKeys>>);

const App: FC<AppProps> = ({
  children
}) => {
  const { theme, themeTokens } = getTheme();

  console.log('theme', theme)

  return (
    <ThemeProvider
      // theme={theme}
      themeTokens={themeTokens}
      themeConfig={{
        globalProps: {
          mode: 'dark',
          platform: 'desktop'
        },
        ...themeConfig
      }}
    >
      <Button>
        Button default
      </Button>
      <Button
        color="primary"
        size="lg"
        type="ghost"
        styles={buttonStyles}
      >
        Button 1
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
        <Button
          color="primary"
          // size="lg"
          type="ghost"
        >
          Button 2
        </Button>
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
          styles={selectStyles}
        >
          Test
        </Select>
      </ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App