import type { ReactNode } from 'react';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';
import type { SwitchChangeEventHandler } from '@rc-component/switch';

export type { StylesProperties }

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  checkedChildren?: ReactNode
  unCheckedChildren?: ReactNode
  onChange?: SwitchChangeEventHandler
  value?: boolean
  defaultValue?: boolean
  checked?: boolean
  defaultChecked?: boolean
}