import type { InputRef, InputProps } from '@rc-component/input';
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';

export type { StylesProperties }

export interface IProps<Styles> extends Omit<InputProps, 'children' | 'classes'>, FCWithStylesProps<Styles> {
  href?: string
  status?: string
  placeholder?: string
  disabled?: boolean
  inputRef?: InputRef
}
