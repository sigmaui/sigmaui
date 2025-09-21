import type { ReactNode } from 'react';
import type { TooltipProps } from '@rc-component/tooltip/lib/Tooltip';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties }

export interface IProps<Styles> extends Omit<TooltipProps, 'children'>, FCWithStylesProps<Styles> {
}