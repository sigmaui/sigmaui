import type { ReactNode } from 'react';
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';

export type { StylesProperties };

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  isSidebar?: boolean;
}
