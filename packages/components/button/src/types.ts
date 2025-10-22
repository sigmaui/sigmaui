import type { ButtonHTMLAttributes, ComponentType } from 'react';
import type { WithStyleProps } from '@sigma-ui-kit/theme';

// Temporary LoadingProps interface until loading package is published
export interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

export type ClassKeys = 'wrapper' | 'prefix' | 'suffix' | 'link';

export type VariantKeys = 'primary' | 'secondary' | 'tertiary';
export type SizeKeys = 'smaller' | 'small' | 'medium' | 'standard' | 'big' | 'bigger';
export type ToneKeys = 'brand' | 'neutral' | 'success' | 'error' | 'warning' | 'info';

export interface ButtonBaseProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  href?: string;
  asLink?: ComponentType<any>;
  loading?: boolean;
  locking?: boolean;
  disabled?: boolean;
  prefix?: any;
  suffix?: any;
  loadingProps?: LoadingProps;
  size?: SizeKeys;
  variant?: VariantKeys;
  tone?: ToneKeys;
}

export type ButtonProps = WithStyleProps<ClassKeys> & ButtonBaseProps;
