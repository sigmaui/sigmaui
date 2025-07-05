import * as stylex from '@stylexjs/stylex';

import { colors } from '../tokens/variables.stylex.ts';
import { sizes } from '../tokens/sizes.stylex.ts';

export const defaultTheme = stylex.createTheme(colors, {
  primary: {
    default: '#34C759'
  }
});

console.log('defaultTheme', defaultTheme)