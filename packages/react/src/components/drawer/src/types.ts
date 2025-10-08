import type { HTMLAttributes } from 'react';
import type { DrawerProps as RCDrawerProps } from 'rc-drawer';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties };

type DrawerSize = 'default' | 'large';

export interface DrawerClassNames
  extends NonNullable<RCDrawerProps['classNames']> {
  header?: string;
  body?: string;
  footer?: string;
}

export interface DrawerStyles extends NonNullable<RCDrawerProps['styles']> {
  header?: React.CSSProperties;
  body?: React.CSSProperties;
  footer?: React.CSSProperties;
}

export interface PushState {
  distance: string | number;
}

export interface DrawerPanelProps {
  prefixCls: string;

  title?: React.ReactNode;
  footer?: React.ReactNode;
  extra?: React.ReactNode;
  /**
   * Recommend to use closeIcon instead
   *
   * e.g.
   *
   * `<Drawer closeIcon={false} />`
   */
  closable?:
    | boolean
    | ({
        closeIcon?: React.ReactNode;
        disabled?: boolean;
      } & React.AriaAttributes);
  onClose?: RCDrawerProps['onClose'];

  children?: React.ReactNode;
  classNames?: DrawerClassNames;
  styles?: DrawerStyles;
  loading?: boolean;
}

export interface IProps<Styles>
  extends Omit<
      RCDrawerProps,
      'children' | 'maskMotion' | 'motion' | 'maskStyle'
    >,
    Omit<DrawerPanelProps, 'prefixCls' | 'children'>,
    Omit<FCWithStylesProps<Styles>, 'size'> {
  classNames?: DrawerClassNames;
  styles?: DrawerStyles;
  size?: DrawerSize;
}
