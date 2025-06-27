import type { Theme } from '@stylexjs/stylex';

import { createContext } from '../../../system/create-context';

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
  themeConfig?: ThemeConfig;
  themeVariant?: { [key: string]: any };
}

const ThemeContext = createContext<ThemeContextProps>('ThemeContext');

export const [ThemeProvider, useTheme] = ThemeContext;