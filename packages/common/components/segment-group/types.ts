import type { ReactNode } from 'react';
import type { FCWithStylesProps } from 'packages/common/types';

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