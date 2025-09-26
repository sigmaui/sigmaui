import type { ReactNode } from 'react';
import type { Meta } from '@rc-component/form/lib/interface';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties };

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  fieldId?: string;
  meta?: Meta;
  formItemPrefixCls?: string;
  note?: ReactNode;
}
