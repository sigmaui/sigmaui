import type { FCWithStylesProps, TStyles } from 'packages/common/types';

export type {
  TStyles
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  href?: string
}