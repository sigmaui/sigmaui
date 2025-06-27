import * as stylex from '@stylexjs/stylex';
import type { ColorTheme } from '../types';

export const colors = stylex.defineVars({
  primary: '#FF8000',
  secondary: '#5856D6',
  background: '#FFFFFF',
  text: '#000000',
  error: '#FF3B30',
  warning: '#FF9500',
  success: '#34C759',
  button: '#FFFFFF'
}) satisfies ColorTheme; 