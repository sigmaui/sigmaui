import type React from 'react';
import type { DrawerProps as RcDrawerProps } from '@rc-component/drawer';

export type SematicName =
  | 'root' // root
  | 'mask' // root => mask
  | 'wrapper' // root => wrapper
  | 'section' // root => wrapper => section
  | 'header' // root => wrapper => section => header
  | 'body' // root => wrapper => section => body
  | 'footer'; // root => wrapper => section => footer;

export type DrawerClassNames = Partial<Record<SematicName, string>>;

export type DrawerStyles = Partial<Record<SematicName, React.CSSProperties>>;

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
  closeIcon?: boolean | React.ReactNode;
  onClose?: RcDrawerProps['onClose'];

  classes: DrawerClassNames;
  children?: React.ReactNode;
  loading?: boolean;
}

const _SizeTypes = ['default', 'large'] as const;
type SizeType = (typeof _SizeTypes)[number];

export interface PushState {
  distance: string | number;
}

// Drawer diff props: 'open' | 'motion' | 'maskMotion' | 'wrapperClassName'
export interface DrawerProps
  extends Omit<RcDrawerProps, 'maskStyle' | 'destroyOnClose' | 'visible' | 'afterVisibleChange'>,
    Omit<DrawerPanelProps, 'prefixCls' | 'classes'> {
  size?: SizeType;
  open?: boolean;
  afterOpenChange?: (open: boolean) => void;
  classNames?: DrawerClassNames;
  styles?: DrawerStyles;
  destroyOnHidden?: boolean;
}
