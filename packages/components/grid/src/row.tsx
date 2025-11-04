import * as React from 'react';
import { classnames, useDefaultProps } from '@sigma-ui-kit/theme';
import type { ComponentBaseProps } from '@sigma-ui-kit/theme';
import type { Breakpoint, ScreenMap } from '@sigma-ui-kit/util/responsiveObserver';
import { responsiveArray } from '@sigma-ui-kit/util/responsiveObserver';

// import { ConfigContext } from '../config-provider';

import useBreakpoint from './hooks/useBreakpoint';
import useGutter from './hooks/useGutter';
import RowContext from './RowContext';
import type { RowContextState } from './RowContext';
import { rowStyleFn } from './style';

export type SemanticName = 'root';

const _RowAligns = ['top', 'middle', 'bottom', 'stretch'] as const;
const _RowJustify = [
  'start',
  'end',
  'center',
  'space-around',
  'space-between',
  'space-evenly',
] as const;

type Responsive = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
type ResponsiveLike<T> = {
  [key in Responsive]?: T;
};

export type Gutter = number | string | undefined | Partial<Record<Breakpoint, number>>;

type ResponsiveAligns = ResponsiveLike<(typeof _RowAligns)[number]>;
type ResponsiveJustify = ResponsiveLike<(typeof _RowJustify)[number]>;
export interface RowProps
  extends ComponentBaseProps<SemanticName>,
    React.HTMLAttributes<HTMLDivElement> {
  gutter?: Gutter | [Gutter, Gutter];
  align?: (typeof _RowAligns)[number] | ResponsiveAligns;
  justify?: (typeof _RowJustify)[number] | ResponsiveJustify;
  wrap?: boolean;
}

function useMergedPropByScreen(
  oriProp: RowProps['align'] | RowProps['justify'],
  screen: ScreenMap | null
) {
  const [prop, setProp] = React.useState(typeof oriProp === 'string' ? oriProp : '');

  const calcMergedAlignOrJustify = () => {
    if (typeof oriProp === 'string') {
      setProp(oriProp);
    }
    if (typeof oriProp !== 'object') {
      return;
    }
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint: Breakpoint = responsiveArray[i];
      // if do not match, do nothing
      if (!screen || !screen[breakpoint]) {
        continue;
      }
      const curVal = oriProp[breakpoint];
      if (curVal !== undefined) {
        setProp(curVal);
        return;
      }
    }
  };

  React.useEffect(() => {
    calcMergedAlignOrJustify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(oriProp), screen]);

  return prop;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((inProps, ref) => {
  const props = useDefaultProps<SemanticName, RowProps>({
    props: inProps,
    defaultProps: {
      gutter: 0,
    },
    name: 'Row',
    styleFn: rowStyleFn,
  });

  const {
    justify,
    align,
    className,
    style,
    children,
    gutter,
    wrap,
    classes,
    prefixCls,
    rootPrefixCls,
    direction,
    ...others
  } = props;

  // const { getPrefixCls, direction } = React.useContext(ConfigContext);

  const screens = useBreakpoint(true, null);

  const mergedAlign = useMergedPropByScreen(align, screens);
  const mergedJustify = useMergedPropByScreen(justify, screens);

  const gutters = useGutter(gutter, screens);
  const mergedClasses = classnames(
    prefixCls,
    {
      [`${prefixCls}-no-wrap`]: wrap === false,
      [`${prefixCls}-${mergedJustify}`]: mergedJustify,
      [`${prefixCls}-${mergedAlign}`]: mergedAlign,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    classes.root,
    className
  );

  // Add gutter related style
  const rowStyle: React.CSSProperties = {};

  if (gutters?.[0]) {
    const horizontalGutter =
      typeof gutters[0] === 'number' ? `${gutters[0] / -2}px` : `calc(${gutters[0]} / -2)`;
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.
  const [gutterH, gutterV] = gutters;

  rowStyle.rowGap = gutterV;

  const rowContext = React.useMemo<RowContextState>(
    () => ({ gutter: [gutterH, gutterV] as [number, number], wrap }),
    [gutterH, gutterV, wrap]
  );

  return (
    <RowContext.Provider value={rowContext}>
      <div {...others} className={mergedClasses} style={{ ...rowStyle, ...style }} ref={ref}>
        {children}
      </div>
    </RowContext.Provider>
  );
});

if (process.env.NODE_ENV !== 'production') {
  Row.displayName = 'Row';
}

export default Row;
