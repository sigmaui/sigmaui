import type { ReactNode } from 'react';
import type { MenuProps } from '@rc-component/menu';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties };

export interface MenuItemOption {
  key: string;
  label: string | ReactNode;
  children?: MenuItemOption[];
}

export interface IProps<Styles> extends Omit<MenuProps, 'children'>, FCWithStylesProps<Styles> {
  items?: MenuItemOption[];
}
