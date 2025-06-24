import React, { useContext, createContext } from 'react';
import type { FC, ReactNode } from 'react';
import type { Theme } from '@stylexjs/stylex';

interface ThemeConfig {
  globalProps?: Record<string, unknown>;
}

interface ThemeContextType {
  theme?: Theme<any, any>;
  themeConfig: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: undefined,
  themeConfig: {}
});

interface ThemeProviderProps {
  children?: ReactNode;
  theme?: Theme<any, any>;
  globalProps?: Record<string, unknown>;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  globalProps
}) => {
  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeConfig: {
          globalProps
        }
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};