import type { ReactNode } from 'react';
import type { FCWithStylesProps, TStyles } from '@packages/react/types';

export type {
  TStyles
}

export interface MenuOption {
  value: string;
  label: string | ReactNode;
  options?: MenuOption[];
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  options?: MenuOption[];
  direction?: 'horizontal' | 'vertical';
}