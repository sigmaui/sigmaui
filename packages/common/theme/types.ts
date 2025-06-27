import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles, Theme } from '@stylexjs/stylex';

export type {
  Theme
}

export type StylesDefinitions = Parameters<typeof stylex.create>[0];

export interface ColorTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
  warning: string;
  success: string;
  info?: string;
  disabled?: string;
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

export interface GradientTheme {
  primary: string;
  secondary: string;
  background: string;
  overlay: string;
}

export interface ShadowTheme {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface GlobalTheme {
  colors: ColorTheme;
  spacing: SpacingTheme;
  typography: TypographyTheme;
  borders: BorderTheme;
  gradients?: GradientTheme;
  shadows?: ShadowTheme;
}

export type ThemeStyles = StyleXStyles<{
  [K in keyof GlobalTheme]: GlobalTheme[K];
}>;

export type ThemeMode = 'default' | 'light' | 'dark' | 'desktop' | 'mobile' | 'tablet';

export type ThemeColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'background'
  | 'text'
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'disabled';

export type ThemeSize = 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ThemeType = 'default' | 'secondary' | 'destructive' | 'outline' | 'filled' | 'ghost' | 'link';