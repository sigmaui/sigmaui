import type { ReactNode } from 'react';
import type { CollectionOptions } from '@zag-js/collection';

import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';

export type {
  StylesProperties
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  options: CollectionOptions
  placeholder?: string
  label?: string | ReactNode
  itemGroupLabel?: string | ReactNode
}