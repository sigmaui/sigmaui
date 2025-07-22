import type { ReactNode } from 'react';
import { type TabsRootProps } from '@ark-ui/react';
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';

export type {
  StylesProperties
}

export interface TabsOption {
  value: string;
  label: string | ReactNode;
  content: string | ReactNode;
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  options?: TabsOption[]
  rootProps?: TabsRootProps
}