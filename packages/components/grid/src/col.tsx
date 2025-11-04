import * as React from 'react';
import { classnames, useDefaultProps } from '@sigma-ui-kit/theme';
import type { ComponentBaseProps, StylesObject, Tokens } from '@sigma-ui-kit/theme';
import type { Breakpoint } from '@sigma-ui-kit/util/responsiveObserver';
import type { LiteralUnion } from '@sigma-ui-kit/util/type';

import RowContext from './RowContext';
import { colStyleFn } from './style';

// https://github.com/ant-design/ant-design/issues/14324
type ColSpanType = number | string;

type FlexType = number | LiteralUnion<'none' | 'auto'>;

export type SemanticName = 'root';

export interface ColSize {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}

export type ColProps = {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
} & ComponentBaseProps<SemanticName> &
  Partial<Record<Breakpoint, ColSpanType | ColSize>> &
  React.HTMLAttributes<HTMLDivElement>;

function parseFlex(flex: FlexType): string {
  if (flex === 'auto') {
    return '1 1 auto';
  }

  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
const Col = React.forwardRef<HTMLDivElement, ColProps>((inProps, ref) => {
  const { gutter, wrap } = React.useContext(RowContext);

  const { styles } = inProps;

  const props = useDefaultProps<SemanticName, ColProps>({
    props: inProps,
    defaultProps: {},
    name: 'Col',
    styleFn: colStyleFn,
  });

  const {
    span,
    order,
    offset,
    push,
    pull,
    className,
    children,
    flex,
    style,
    prefixCls,
    classes,
    direction,
    rootPrefixCls,
    ...others
  } = props;

  // const prefixCls = getPrefixCls('col', customizePrefixCls);

  // const [wrapCSSVar, hashId, cssVarCls] = useColStyle(prefixCls);

  // ===================== Size ======================
  const sizeStyle: Record<string, string> = {};

  let sizeClassObj: Record<string, boolean | ColSpanType> = {};
  sizes.forEach(size => {
    let sizeProps: ColSize = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];

    sizeClassObj = {
      ...sizeClassObj,
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]:
        sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    };

    // Responsive flex layout
    if (sizeProps.flex) {
      sizeClassObj[`${prefixCls}-${size}-flex`] = true;
      sizeStyle[`--${prefixCls}-${size}-flex`] = parseFlex(sizeProps.flex);
    }
  });

  // ==================== Normal =====================
  const mergedClasses = classnames(
    prefixCls,
    {
      [`${prefixCls}-${span}`]: span !== undefined,
      [`${prefixCls}-order-${order}`]: order,
      [`${prefixCls}-offset-${offset}`]: offset,
      [`${prefixCls}-push-${push}`]: push,
      [`${prefixCls}-pull-${pull}`]: pull,
    },
    classes.root,
    className,
    sizeClassObj
  );

  const mergedStyle: React.CSSProperties = {};
  // Horizontal gutter use padding
  if (gutter?.[0]) {
    const horizontalGutter =
      typeof gutter[0] === 'number' ? `${gutter[0] / 2}px` : `calc(${gutter[0]} / 2)`;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex);

    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  // ==================== Render =====================
  return (
    <div
      {...others}
      style={{ ...mergedStyle, ...style, ...sizeStyle }}
      className={mergedClasses}
      ref={ref}
    >
      {children}
    </div>
  );
});

if (process.env.NODE_ENV !== 'production') {
  Col.displayName = 'Col';
}

export default Col;
