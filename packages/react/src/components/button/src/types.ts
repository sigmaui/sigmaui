import type { ReactNode } from 'react';
import type { Classes } from 'packages/common/hooks/use-stylex';

export interface ButtonProps<Styles> {
  prefixCls: string;
  classes: Classes<Styles>;
  children?: ReactNode;
  className?: string;
}