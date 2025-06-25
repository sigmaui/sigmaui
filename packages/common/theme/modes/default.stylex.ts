import * as stylex from '@stylexjs/stylex';

import { colors } from '../tokens/colors.stylex.ts';

const DARK = '@media (prefers-color-scheme: dark)';

export const defaultTheme = stylex.createTheme(colors, {
  primary: {
    default: '#34C759'
  }
});