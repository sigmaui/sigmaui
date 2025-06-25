import type { ReactNode } from 'react';
import type { CollectionOptions } from '@zag-js/collection';
import type { Classes } from 'packages/common/hooks/use-stylex';

export interface SelectProps<Styles> {
  prefixCls: string;
  classes: Classes<Styles>;
  children?: ReactNode;
  className?: string;
  options: CollectionOptions
}