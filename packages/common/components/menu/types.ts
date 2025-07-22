import type { ReactNode } from 'react';
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';

export type {
  StylesProperties
}

export interface MenuOption {
  value: string;
  label: string | ReactNode;
  options?: MenuOption[];
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  options?: MenuOption[];
  orientation?: 'horizontal' | 'vertical';
}