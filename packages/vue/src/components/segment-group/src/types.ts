import type { FCWithStylesProps } from '@packages/vue/types';

export interface SegmentItem {
  label: string;
  value: string;
}

export interface SegmentGroupProps<Styles> extends FCWithStylesProps<Styles> {
  items?: SegmentItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: string
} 