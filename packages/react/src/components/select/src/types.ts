import type { ReactNode } from 'react';
import { SelectProps as RcSelectProps } from '@rc-component/select';
import type { FCWithStylesProps, StylesProperties, ThemeSize, ThemeVariant } from 'packages/common/types';

export type { StylesProperties }

export interface SelectOption {
  value: string
  label: string | ReactNode
  disabled?: boolean
}

export interface IProps<Styles> extends Omit<RcSelectProps, 'children'>, FCWithStylesProps<Styles> {
  options: SelectOption[]
  placeholder?: string,
  size?: ThemeSize
  variant?: ThemeVariant
}
