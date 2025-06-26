import React, { useContext, createContext } from 'react';
import type { FC, ReactNode } from 'react';
import type { Theme } from '@stylexjs/stylex';

interface ThemeConfig {
  globalProps?: Record<string, unknown>;
  [key: string]: any;
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
  themeConfig?: Record<string, unknown>;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  themeConfig: themeConfigFromProp = {}
}) => {
  const { themeConfig = {} } = useContext(ThemeContext);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeConfig: {
          ...themeConfig,
          ...themeConfigFromProp,
          globalProps: Object.assign({}, themeConfig?.globalProps, themeConfigFromProp?.globalProps)
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