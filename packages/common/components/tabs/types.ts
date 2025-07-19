import { type TabsRootProps } from '@ark-ui/react';
import type { FCWithStylesProps } from '@packages/react/types';

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  options?: any
  rootProps?: TabsRootProps
}