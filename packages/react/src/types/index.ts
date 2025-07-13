import type { ReactNode } from 'react';

export interface FCDefaultProps {
  prefixCls?: string;
  className?: string;
  children?: ReactNode;
}

export interface FCProps<Styles> extends FCDefaultProps {
  styles?: Partial<Record<keyof Styles, any>>;
}

export interface FCWithStylesProps<Styles> extends FCProps<Styles> {
  classes: any
}