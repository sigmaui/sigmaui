import type { ReactNode } from 'react';
import type { FCWithStylesProps } from '@packages/react/types';

export interface SegmentGroupOption {
  value: string;
  label: string | ReactNode;
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  options: SegmentGroupOption[];
  label?: string | ReactNode;
  defaultValue?: string | null;
  direction?: 'horizontal' | 'vertical';
} 