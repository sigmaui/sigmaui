import React, { useContext, createContext } from 'react';
import type { FC, ReactNode } from 'react';
import type { Theme } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

export type StylesDefinitions = Parameters<typeof stylex.create>[0];

interface ComponentDefaultProps {
  [key: string]: unknown;
}

type DefaultPropsFunction = (theme: Theme<any, any>) => ComponentDefaultProps;

interface ThemeConfig {
  globalProps?: Record<string, unknown>;
  components?: {
    [componentName: string]: {
      defaultProps?: ComponentDefaultProps | DefaultPropsFunction;
    };
  };

  [key: string]: any;
}

export interface ThemeContextProps {
  theme?: Theme<any, any>;
  themeConfig: ThemeConfig;
  themeVariant: { [key: string]: any };
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: undefined,
  themeConfig: {},
  themeVariant: {}
});

interface ThemeProviderProps {
  children?: ReactNode;
  theme?: Theme<any, any>;
  themeConfig?: Record<string, unknown>;
  themeVariant?: { [key: string]: any };
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  themeConfig: themeConfigFromProp = {},
  themeVariant: themeVariantFromProp = {},
}) => {
  const { themeVariant = {}, themeConfig = {} } = useContext(ThemeContext);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeVariant: {
          ...themeVariant,
          ...themeVariantFromProp
        },
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

export const useTheme = (): ThemeContextProps => {
  return useContext(ThemeContext);
};