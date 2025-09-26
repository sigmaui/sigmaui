import type { ReactNode } from 'react';
import type { TooltipProps } from '@sigmaui-kit/tooltip';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties };

export interface WrapperTooltipProps extends TooltipProps {
  icon?: string | ReactNode;
}

export type LabelTooltipType = WrapperTooltipProps | ReactNode;

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  id?: string;
  htmlFor?: string;
  required?: boolean;
  requiredMark?: string;
  isSuffixMark?: boolean;
  tooltip?: LabelTooltipType;
}
