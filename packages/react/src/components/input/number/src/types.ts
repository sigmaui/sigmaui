import type { ReactNode } from 'react';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';
import type { InputNumberProps } from '@rc-component/input-number';

export type { StylesProperties }

export interface IProps<Styles> extends Omit<InputNumberProps, 'children' | 'size'>, FCWithStylesProps<Styles> {
  upIcon?: ReactNode
  downIcon?: ReactNode
}
