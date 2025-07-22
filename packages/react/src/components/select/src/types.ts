import type { ReactNode } from 'react';
import type { CollectionOptions } from '@zag-js/collection';

import type { FCWithStylesProps } from 'packages/common/types';

export interface SelectProps<Styles> extends FCWithStylesProps<Styles> {
  options: CollectionOptions
  placeholder?: string
  label?: string | ReactNode
  itemGroupLabel?: string | ReactNode
}