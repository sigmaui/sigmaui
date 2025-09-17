import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';

export type { StylesProperties };

const _ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
export type ButtonHTMLType = (typeof _ButtonHTMLTypes)[number];

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  htmlType?: ButtonHTMLType
  loading?: boolean
  locking?: boolean
  disabled?: boolean
  prefix?: any
  suffix?: any
}
