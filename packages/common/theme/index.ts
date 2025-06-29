import { defaultTheme } from './modes/default.stylex';
import { darkTheme } from './modes/dark.stylex';
import { colors, types, sizes, variants } from './tokens/variants.stylex';

import type { Theme, ThemeMode } from './types';

export {
  defaultTheme,
  darkTheme
}

export interface ThemeParams {
  mode?: ThemeMode;
}

export const getTheme = (params: ThemeParams = {}) => {
  const { mode } = params;

  let theme: Theme<any, any>;

  if (mode === 'dark') {
    theme = darkTheme;
  } else {
    theme = defaultTheme;
  }

  return {
    theme,
    themeTokens: {
      types,
      sizes,
      variants
    }
  }
}