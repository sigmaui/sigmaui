import * as stylex from '@stylexjs/stylex';

import { colors } from '../tokens/colors.stylex.ts';

const DARK = '@media (prefers-color-scheme: dark)';

export const darkTheme = stylex.createTheme(colors, {
  primary: 'red'
});