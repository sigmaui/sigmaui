import type { ReactNode } from 'react';
import type { Classes } from 'use-stylex';

export interface SelectProps<Styles> {
  classes: Classes<Styles>;
  children?: ReactNode;
  className?: string;
}