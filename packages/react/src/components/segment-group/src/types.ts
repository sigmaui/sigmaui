import type { ReactNode } from 'react';
import { SegmentedProps } from '@rc-component/segmented';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties }

export interface SegmentGroupOption {
  value: string
  label: string | ReactNode
  disabled?: boolean
}

export interface IProps<Styles> extends Omit<SegmentedProps, 'children' | 'size'>, FCWithStylesProps<Styles> {
  options: SegmentGroupOption[]
  defaultValue?: string
  isThumbLine?: boolean
}
