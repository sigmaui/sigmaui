import type { ReactNode } from 'react';
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';

export type {
  StylesProperties
}

export interface SegmentGroupOption {
  value: string;
  label: string | ReactNode;
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  options: SegmentGroupOption[];
  label?: string | ReactNode;
  defaultValue?: string | null;
  orientation?: 'horizontal' | 'vertical';
} 