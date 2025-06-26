import type { CollectionOptions } from '@zag-js/collection';

import type { FCWithStylesProps } from 'packages/react/src/types';

export interface SelectProps<Styles> extends FCWithStylesProps<Styles> {
  options: CollectionOptions
}