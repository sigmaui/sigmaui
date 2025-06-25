import * as stylex from '@stylexjs/stylex';

import { colors } from './tokens/colors.stylex';

const DARK = '@media (prefers-color-scheme: dark)';

export const darkTheme = stylex.createTheme(colors, {
  primary: 'red'
});