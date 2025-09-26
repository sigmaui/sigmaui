import type { AnimateProps } from '@sigmaui-kit/animate';
import type { FCWithStylesProps, StylesObject, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties, StylesObject };

export interface IProps<Styles> extends Omit<FCWithStylesProps<Styles>, 'size'> {
  size?: number;
  animateProps?: AnimateProps;
}
