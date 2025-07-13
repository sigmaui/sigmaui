import type { ReactNode } from 'react';

export interface FCDefaultProps {
  prefixCls?: string;
  className?: string;
  children?: ReactNode;
}

export interface FCProps extends FCDefaultProps {

}

export interface FCWithStylesProps<Styles> extends FCProps {
  classes: any
}