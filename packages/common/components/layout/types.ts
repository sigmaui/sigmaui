import type { ReactNode } from 'react';
import type { FCWithStylesProps } from 'packages/common/types';

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  header?: ReactNode
  footer?: ReactNode
  sidebar?: ReactNode
  isSidebar?: boolean
}