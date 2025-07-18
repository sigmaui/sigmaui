import React, { type ReactNode } from 'react';
import { type Theme } from '@microui-kit/theme';
import type { Classes } from 'packages/common/components/types';

export type TStyles<T> = { [K in keyof T]: React.CSSProperties } | ((theme: Theme, props: any) => {
  [K in keyof T]: React.CSSProperties
})

export interface FCDefaultProps {
  prefixCls?: string;
  className?: string;
  children?: ReactNode;
}

export interface FCProps extends FCDefaultProps {

}

export interface FCWithStylesProps<Styles> extends FCProps {
  classes?: Classes<Styles>
  theme?: Theme
  _style?: TStyles<Styles>
}