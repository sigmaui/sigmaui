import * as stylex from '@stylexjs/stylex';
import type { TypographyTheme } from '../types';

export const typography = stylex.defineVars({
  fontFamilyPrimary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontFamilySecondary: 'Georgia, "Times New Roman", serif',
  fontSizeXs: '12px',
  fontSizeSm: '14px',
  fontSizeMd: '16px',
  fontSizeLg: '20px',
  fontSizeXl: '24px',
  fontSizeXxl: '32px',
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightBold: '700'
}) satisfies  TypographyTheme;