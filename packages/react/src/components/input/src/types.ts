import type { InputRef } from '@rc-component/input';
import type { FCWithStylesProps, StylesProperties, ThemeSize, ThemeVariant } from 'packages/common/types';

export type { StylesProperties }

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  href?: string
  status?: string
  placeholder?: string
  disabled?: boolean
  inputRef?: InputRef
}
