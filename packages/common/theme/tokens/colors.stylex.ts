import * as stylex from '@stylexjs/stylex';
import type { ColorTheme } from '../types';

export const colors = stylex.defineVars({
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#FFFFFF',
  text: '#000000',
  error: '#FF3B30',
  warning: '#FF9500',
  success: '#34C759',

  gray0: '#f8f9fa',
  gray1: '#f1f3f5',
  gray2: '#e9ecef',
  gray3: '#dee2e6',
  gray4: '#ced4da',
  gray5: '#adb5bd',
  gray6: '#868e96',
  gray7: '#495057',
  gray8: '#343a40',
  gray9: '#212529',
  gray10: '#16191d',
  gray11: '#0d0f12',
  gray12: '#030507',
  stone0: '#f8fafb',
  stone1: '#f2f4f6',
  stone2: '#ebedef',
  stone3: '#e0e4e5',
  stone4: '#d1d6d8',
  stone5: '#b1b6b9',
  stone6: '#979b9d',
  stone7: '#7e8282',
  stone8: '#666968',
  stone9: '#50514f',
  stone10: '#3a3a37',
  stone11: '#252521',
  stone12: '#121210'
}) satisfies ColorTheme; 