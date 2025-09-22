import type { ComponentType, HTMLAttributes } from 'react';
import type { LoadingProps } from '@sigmaui-kit/loading';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties };

const _ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
export type ButtonHTMLType = (typeof _ButtonHTMLTypes)[number];

export interface IProps<Styles> extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'>, FCWithStylesProps<Styles> {
  htmlType?: ButtonHTMLType
  href?: string
  asLink?: ComponentType<any>
  loading?: boolean
  locking?: boolean
  disabled?: boolean
  prefix?: any
  suffix?: any
  loadingProps?: LoadingProps
}