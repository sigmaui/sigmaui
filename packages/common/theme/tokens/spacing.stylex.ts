import * as stylex from '@stylexjs/stylex';
import type { SpacingTheme } from '../types';

export const spacing = stylex.defineVars({
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px'
}) satisfies SpacingTheme; 