import type { ReactNode } from 'react';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';
import type { InputProps } from '@sigmaui-kit/input';

export type { StylesProperties };

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  suffix?: ReactNode;
  action?: 'click' | 'pointer';
  iconRender?: (visible: boolean) => ReactNode;
  isTooltip?: boolean;
}
