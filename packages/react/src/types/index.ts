import React, { type ReactNode } from 'react';
import type { Classes } from 'packages/common/components/types';

export type TStyles<T> = { [K in keyof T]: React.CSSProperties } | ((theme: any, props: any) => {
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
  classes: Classes<Styles>
  theme?: { key: string, value: any }
  _style?: TStyles<Styles>
}