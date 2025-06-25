import * as stylex from '@stylexjs/stylex';
import type { BorderTheme } from '../types';

export const borders = stylex.defineVars({
  radiusSm: '4px',
  radiusMd: '8px',
  radiusLg: '16px',
  radiusRound: '9999px'
}) satisfies BorderTheme;