import type { ReactNode } from 'react';
import type { TabsProps } from '@rc-component/tabs';
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';

export type { StylesProperties }

export interface TabsOption {
  value: string
  label: string | ReactNode
  content: string | ReactNode
}

export interface IProps<Styles> extends TabsProps, FCWithStylesProps<Styles> {
  options?: TabsOption[]
}
