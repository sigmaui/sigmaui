import * as stylex from '@stylexjs/stylex';

import { colors } from './tokens/colors.stylex';

export const defaultTheme = stylex.createTheme(colors, {
  primary: {
    default: '#34C759'
  }
});

export const getTheme = (params: any = {}) => {
  const { mode: themeMode } = params;

  return defaultTheme
}