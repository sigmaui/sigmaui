import type { ReactNode } from 'react';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';
import type { TextAreaProps } from '@rc-component/textarea';

export type { StylesProperties };

export interface IProps<Styles> extends Omit<TextAreaProps, 'children'>, FCWithStylesProps<Styles> {
  status?: string
}
