import React, { type ReactNode } from 'react';
import { type Theme } from '@microui-kit/theme';
import type { Classes } from 'packages/common/components/types';

interface StyleProperties extends React.CSSProperties {
  size?: string
  variant?: string
}

export type Breakpoints = {
  breakpoints: {
    mediaType?: 'max' | 'min' | string
  } | {
    [key: string | number]: StyleProperties
  }
}

export type TStyles =
  { [key: 'wrapper' | string]: Breakpoints | StyleProperties | TStyles }
  | ((theme: any, props: any) => {
  [key: 'wrapper' | string]: Breakpoints | StyleProperties | TStyles
})

export type Styles<T> = { [K in keyof T]: React.CSSProperties } | ((theme: Theme, props: any) => {
  [K in keyof T]: React.CSSProperties
})

export interface FCDefaultProps {
  prefixCls?: string;
  className?: string;
  children?: ReactNode;
}

export interface FCProps extends FCDefaultProps {

}

export interface FCWithStylesProps<IStyles> extends FCProps {
  classes?: Classes<IStyles>
  theme?: Theme
  styles?: Styles<IStyles>
}