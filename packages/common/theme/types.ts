import type { StyleXStyles } from '@stylexjs/stylex';

export interface ColorTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
  warning: string;
  success: string;
}

export interface SpacingTheme {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface TypographyTheme {
  fontFamilyPrimary: string;
  fontFamilySecondary: string;
  fontSizeXs: string;
  fontSizeSm: string;
  fontSizeMd: string;
  fontSizeLg: string;
  fontSizeXl: string;
  fontSizeXxl: string;
  fontWeightLight: string;
  fontWeightRegular: string;
  fontWeightMedium: string;
  fontWeightBold: string;
}

export interface BorderTheme {
  radiusSm: string;
  radiusMd: string;
  radiusLg: string;
  radiusRound: string;
}

export interface GlobalTheme {
  colors: ColorTheme;
  spacing: SpacingTheme;
  typography: TypographyTheme;
  borders: BorderTheme;
}

export type ThemeStyles = StyleXStyles<{
  [K in keyof GlobalTheme]: GlobalTheme[K];
}>; 