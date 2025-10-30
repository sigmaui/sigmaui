import React from 'react';
import { useDefaultProps } from '@sigma-ui-kit/theme';
import type { ComponentBaseProps } from '@sigma-ui-kit/theme';

import type { OverridableAsComponent, SemanticName } from './types';
import styleFn from './styles';

/** ------------------------------
 *   Box Implementation
 *  ------------------------------
 */
interface BoxOwnProps extends ComponentBaseProps<SemanticName> {
  /** Box content */
  children?: React.ReactNode;
}

type BoxTypeMap = {
  props: BoxOwnProps;
  defaultComponent: 'div';
};

export type BoxComponent = OverridableAsComponent<BoxTypeMap> & { displayName?: string };

/**
 * Component có thể thay đổi tag qua prop `as` và hỗ trợ ref.
 */
const Box = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    inProps: {
      as?: C;
      styles?: React.CSSProperties;
      classNames?: string;
    } & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'styles' | 'classNames'>,
    ref: React.Ref<any>
  ) => {
    const { classes, as, prefixCls, rootPrefixCls, direction, ...rest } = useDefaultProps<
      SemanticName,
      any
    >({
      props: inProps,
      defaultProps: {},
      styleFn,
      name: 'Box',
    });
    const Component = as || 'div';
    return <Component ref={ref} {...rest} />;
  }
) as BoxComponent;

if (process.env.NODE_ENV !== 'production') {
  Box.displayName = 'Box';
}

export default Box;
