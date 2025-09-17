import type { ReactNode } from 'react';
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';

export type { StylesProperties }

interface TooltipProps {
}

export type WrapperTooltipProps = TooltipProps & {
  icon?: string | ReactNode;
};

export type LabelTooltipType = WrapperTooltipProps | ReactNode

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  id?: string
  htmlFor?: string
  required?: boolean
  requiredMark?: string
  isSuffixMark?: boolean
  tooltip?: LabelTooltipType
}
