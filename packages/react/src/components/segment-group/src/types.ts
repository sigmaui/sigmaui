import type { ReactNode } from 'react';
import type { FCWithStylesProps } from '@packages/react/types';
import type { SegmentGroupTypes } from 'packages/common/components/segment-group/styles';

export interface SegmentGroupOption {
  value: string | number;
  label: string | ReactNode;
}

export interface SegmentGroupProps<Styles> extends FCWithStylesProps<Styles> {
  options: SegmentGroupOption[];
  placeholder?: string;
  label?: string | ReactNode;
  value?: string | number;
  onChange?: (value: string | number) => void;
  direction?: 'horizontal' | 'vertical';
  prefixCls?: string;
} 