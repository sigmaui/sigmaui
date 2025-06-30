import type { Theme } from '@stylexjs/stylex';

import { createContext } from '../../../system/create-context';

interface ComponentDefaultProps {
  [key: string]: unknown;
}

type DefaultPropsFunction = (theme: Theme<any, any>) => ComponentDefaultProps;

export interface Components<Props> {
  [componentName: string]: {
    defaultProps?: Props | ComponentDefaultProps | DefaultPropsFunction;
  };
}

export interface ThemeConfig {
  globalProps?: Record<string, unknown>;
  components?: Components<any>;

  [key: string]: any;
}

export interface ThemeContextProps {
  theme?: Theme<any, any>;
  themeConfig?: ThemeConfig;
  themeTokens?: { [key: string]: any };
}

const ThemeContext = createContext<ThemeContextProps>('ThemeContext');

export const [ThemeProvider, useTheme] = ThemeContext;