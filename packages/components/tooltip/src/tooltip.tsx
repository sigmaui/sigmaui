import * as React from 'react';
import type { BuildInPlacements } from '@rc-component/trigger';
import { classnames, useDefaultProps } from '@sigma-ui-kit/theme';
import type { ComponentBaseProps } from '@sigma-ui-kit/theme';
import RcTooltip from '@rc-component/tooltip';
import type { placements as Placements } from '@rc-component/tooltip/lib/placements';
import type {
  TooltipProps as RcTooltipProps,
  TooltipRef as RcTooltipRef,
} from '@rc-component/tooltip/lib/Tooltip';
import useMergedState from '@rc-component/util/lib/hooks/useMergedState';
import type { RenderFunction } from '@sigma-ui-kit/util/getRenderPropValue';
import useZIndex from '@sigma-ui-kit/util/hooks/useZIndex';
import { getTransitionName } from '@sigma-ui-kit/util/motion';
import type { AdjustOverflow, PlacementsConfig } from '@sigma-ui-kit/util/placements';
import zIndexContext from '@sigma-ui-kit/util/zindexContext';
import { cloneElement, isFragment } from '@sigma-ui-kit/util/reactNode';
import getPlacements from '@sigma-ui-kit/util/placements';
import type { LiteralUnion } from '@sigma-ui-kit/util/type';

// import type { PresetColorType } from '../_util/colors';
// import ContextIsolator from '../_util/ContextIsolator';
import styleFn from './styles';
// import { parseColor } from './util';

export type { AdjustOverflow, PlacementsConfig };

export interface TooltipRef {
  forceAlign: VoidFunction;
  /** Wrapped dom element. Not promise valid if child not support ref */
  nativeElement: HTMLElement;
  /** Popup dom element */
  popupElement: HTMLDivElement;
}

export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

// https://github.com/react-component/tooltip
// https://github.com/yiminghe/dom-align
export interface TooltipAlignConfig {
  points?: [string, string];
  offset?: [number | string, number | string];
  targetOffset?: [number | string, number | string];
  overflow?: { adjustX: boolean; adjustY: boolean };
  useCssRight?: boolean;
  useCssBottom?: boolean;
  useCssTransform?: boolean;
}
// remove this after RcTooltip switch visible to open.
interface LegacyTooltipProps
  extends Partial<
    Omit<
      RcTooltipProps,
      | 'children'
      | 'visible'
      | 'defaultVisible'
      | 'onVisibleChange'
      | 'afterVisibleChange'
      | 'destroyTooltipOnHide'
    >
  > {
  open?: RcTooltipProps['visible'];
  defaultOpen?: RcTooltipProps['defaultVisible'];
  onOpenChange?: RcTooltipProps['onVisibleChange'];
  afterOpenChange?: RcTooltipProps['afterVisibleChange'];
}

type SemanticName = 'root' | 'body';
export interface AbstractTooltipProps
  extends Omit<LegacyTooltipProps, 'styles' | 'classNames'>,
    ComponentBaseProps<SemanticName> {
  style?: React.CSSProperties;
  className?: string;
  rootClassName?: string;
  // color?: LiteralUnion<PresetColorType>;
  color?: string;
  placement?: TooltipPlacement;
  builtinPlacements?: typeof Placements;
  openClassName?: string;
  arrow?:
    | boolean
    | {
        pointAtCenter?: boolean;
      };
  autoAdjustOverflow?: boolean | AdjustOverflow;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  children?: React.ReactNode;
  destroyOnHidden?: boolean;
}

export interface TooltipPropsWithOverlay extends AbstractTooltipProps {
  title?: React.ReactNode | RenderFunction;
  overlay?: React.ReactNode | RenderFunction;
}

export interface TooltipPropsWithTitle extends AbstractTooltipProps {
  title: React.ReactNode | RenderFunction;
  overlay?: React.ReactNode | RenderFunction;
}

export declare type TooltipProps = TooltipPropsWithTitle | TooltipPropsWithOverlay;

const Tooltip = React.forwardRef<TooltipRef, TooltipProps>((inProps, ref) => {
  const props = useDefaultProps({
    props: inProps,
    defaultProps: {
      arrow: true,
      autoAdjustOverflow: true,
      placement: 'top',
      mouseEnterDelay: 0.1,
      mouseLeaveDelay: 0.1,
    },
    name: 'Tooltip',
    styleFn,
  });

  const {
    openClassName,
    getTooltipContainer,
    color,
    children,
    afterOpenChange,
    destroyOnHidden,
    title,
    overlay,
    builtinPlacements,
    arrow = true,
    autoAdjustOverflow = true,
    placement = 'top',
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    motion: _motion,
    getPopupContainer,
    rootClassName,
    classes,
    direction,
    prefixCls,
    rootPrefixCls,
    // styles,
    // classNames: tooltipClassNames,
    ...restProps
  } = props;

  const mergedShowArrow = !!arrow;

  // const {
  //   getPopupContainer: getContextPopupContainer,
  //   getPrefixCls,
  //   direction,
  //   className: contextClassName,
  //   style: contextStyle,
  //   classNames: contextClassNames,
  //   styles: contextStyles,
  // } = useComponentConfig('tooltip');

  // ============================== Ref ===============================

  const tooltipRef = React.useRef<RcTooltipRef>(null);

  const forceAlign = () => {
    tooltipRef.current?.forceAlign();
  };

  React.useImperativeHandle(ref, () => ({
    forceAlign,
    nativeElement: tooltipRef.current?.nativeElement!,
    popupElement: tooltipRef.current?.popupElement!,
  }));

  // ============================== Open ==============================
  const [open, setOpen] = useMergedState(false, {
    value: props.open,
    defaultValue: props.defaultOpen,
  });

  const noTitle = !title && !overlay && title !== 0; // overlay for old version compatibility

  const onOpenChange = (vis: boolean) => {
    setOpen(noTitle ? false : vis);
    if (!noTitle) {
      props.onOpenChange?.(vis);
    }
  };

  const tooltipPlacements = React.useMemo<BuildInPlacements>(() => {
    return (
      builtinPlacements ||
      getPlacements({
        arrowPointAtCenter:
          typeof arrow === 'object' && arrow.pointAtCenter ? arrow.pointAtCenter : false,
        autoAdjustOverflow,
        arrowWidth: mergedShowArrow ? 16 : 0,
        borderRadius: 6,
        offset: 6,
        visibleFirst: true,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrow, builtinPlacements]);

  const memoOverlay = React.useMemo<TooltipProps['overlay']>(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || '';
  }, [overlay, title]);

  const memoOverlayWrapper = (
    // <ContextIsolator space>
    <>{typeof memoOverlay === 'function' ? memoOverlay() : memoOverlay}</>
    // </ContextIsolator>
  );

  const injectFromPopover = (props as any)['data-popover-inject'];

  let tempOpen = open;
  // Hide tooltip when there is no title
  if (!('open' in props) && noTitle) {
    tempOpen = false;
  }

  // ============================= Render =============================
  const child =
    React.isValidElement(children) && !isFragment(children) ? children : <span>{children}</span>;
  const childProps = child.props;
  const childCls =
    !childProps.className || typeof childProps.className === 'string'
      ? classnames(childProps.className, openClassName || `${prefixCls}-open`)
      : childProps.className;

  // Style
  // const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, !injectFromPopover);

  // Color
  // const colorInfo = parseColor(prefixCls, color);
  // const arrowContentStyle = colorInfo.arrowStyle;

  const rootClassNames = classnames(
    {
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    // colorInfo.className,
    rootClassName,
    classes.root
  );

  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = useZIndex('Tooltip', restProps.zIndex);

  const content = (
    <RcTooltip
      {...restProps}
      zIndex={zIndex}
      showArrow={mergedShowArrow}
      placement={placement}
      mouseEnterDelay={mouseEnterDelay}
      mouseLeaveDelay={mouseLeaveDelay}
      prefixCls={prefixCls}
      classNames={{ root: rootClassNames, container: classes.body }}
      getTooltipContainer={getPopupContainer || getTooltipContainer}
      ref={tooltipRef}
      builtinPlacements={tooltipPlacements}
      overlay={memoOverlayWrapper}
      visible={tempOpen}
      onVisibleChange={onOpenChange}
      afterVisibleChange={afterOpenChange}
      arrowContent={<span className={`${prefixCls}-arrow-content`} />}
      motion={{
        motionName: getTransitionName(rootPrefixCls, 'zoom-big-fast'),
        motionDeadline: 1000,
      }}
      destroyOnHidden={destroyOnHidden}
    >
      {tempOpen ? cloneElement(child, { className: childCls }) : child}
    </RcTooltip>
  );

  return <zIndexContext.Provider value={contextZIndex}>{content}</zIndexContext.Provider>;
});

if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = 'Tooltip';
}

export default Tooltip;
