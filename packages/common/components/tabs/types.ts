import type { ReactNode } from 'react';
import { type TabsRootProps } from '@ark-ui/react';
import type { FCWithStylesProps } from 'packages/common/types';

export interface TabsOption {
  value: string;
  label: string | ReactNode;
  content: string | ReactNode;
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  options?: TabsOption[]
  rootProps?: TabsRootProps
}