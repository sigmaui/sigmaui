import React from 'react';
import type { FC } from 'react';

import classNames from 'classnames';

import RcDrawer from 'rc-drawer';
import type { DrawerProps as RcDrawerProps } from 'rc-drawer';
import type { CSSMotionProps } from 'rc-motion';
import { composeRef } from 'rc-util/lib/ref';

import { withStyles } from '@sigmaui-kit/with-styles';
import Button from '@sigmaui-kit/button';
import XMarkIcon from '@sigmaui-kit/icons/XMarkIcon';

import { type DrawerProps, styles } from './style';
import { PushState } from './types';
import { usePanelRef } from './context';

export type { DrawerProps };

const defaultPushState: PushState = { distance: 180 };

const Drawer: FC<DrawerProps> = ({
  forceRender,
  getContainer: customizeGetContainer,
  height,
  mask = true,
  placement = 'left',
  push = defaultPushState,
  prefixCls = 'sm-drawer',
  size = 'default',
  width,
  zIndex,
  onClose,
  panelRef = null,
  rootClassName,
  title,
  closable = {},
  extra,
  footer,
  loading,
  children,
  classes,
  ...restProps
}) => {
  // ============================ getContainer ============================
  const getContainer =
    customizeGetContainer === undefined
      ? () => document.body
      : customizeGetContainer;

  // ============================ Size ============================
  const mergedWidth = React.useMemo<string | number>(
    () => width ?? (size === 'large' ? 736 : 378),
    [width, size],
  );

  const mergedHeight = React.useMemo<string | number>(
    () => height ?? (size === 'large' ? 736 : 378),
    [height, size],
  );

  // =========================== Motion ===========================
  const maskMotion: CSSMotionProps = {
    motionName: `${prefixCls}-mask-motion`,
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500,
  };

  const panelMotion: RcDrawerProps['motion'] = (motionPlacement) => ({
    motionName: `${prefixCls}-panel-motion-${motionPlacement}`,
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500,
  });

  // ============================ Refs ============================
  // Select `ant-drawer-content` by `panelRef`
  const innerPanelRef = usePanelRef();
  const mergedPanelRef = composeRef(
    panelRef,
    innerPanelRef,
  ) as React.Ref<HTMLDivElement>;

  // ============================ zIndex ============================
  // const [zIndex, contextZIndex] = useZIndex('Drawer', rest.zIndex);

  // =========================== Render ===========================
  const { classNames: propClassNames = {}, styles: propStyles = {} } =
    restProps;
  console.log(propClassNames, propStyles);

  // ===================== Header Node =====================
  const headerNode = React.useMemo<React.ReactNode>(() => {
    if (!title && !closable) {
      return null;
    }
    return (
      <div
        style={{
          ...propStyles?.header,
        }}
        className={classNames(
          `${prefixCls}-header`,
          {
            [`${prefixCls}-header-close-only`]: !title && !extra,
          },
          classes?.header,
          propClassNames?.header,
        )}
      >
        <div className={`${prefixCls}-header-title`}>
          {closable && (
            <Button
              htmlType="button"
              onClick={onClose}
              className={`${prefixCls}-close`}
            >
              {typeof closable === 'object' && closable.closeIcon ? (
                closable.closeIcon
              ) : (
                <XMarkIcon />
              )}
            </Button>
          )}
          {title && <div className={`${prefixCls}-title`}>{title}</div>}
        </div>
        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closable, extra, prefixCls, title]);
  // ===================== Footer Node =====================

  const footerNode = React.useMemo<React.ReactNode>(() => {
    if (!footer) {
      return null;
    }
    return (
      <div
        className={classNames(
          `${prefixCls}-footer`,
          classes?.footer,
          propClassNames?.footer,
        )}
        style={{
          ...propStyles?.footer,
        }}
      >
        {footer}
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [footer, prefixCls]);

  return (
    <RcDrawer
      prefixCls={prefixCls}
      onClose={onClose}
      maskMotion={maskMotion}
      motion={panelMotion}
      rootClassName={classNames(classes?.root, rootClassName)}
      {...restProps}
      classNames={{
        mask: classNames(classes?.mask, propClassNames.mask),
        content: classNames(classes?.content, propClassNames.content),
        wrapper: classNames(classes?.wrapper, propClassNames.wrapper),
      }}
      styles={{
        mask: {
          ...propStyles.mask,
        },
        content: {
          ...propStyles.content,
        },
        wrapper: {
          ...propStyles.wrapper,
        },
      }}
      mask={mask}
      push={push}
      width={mergedWidth}
      height={mergedHeight}
      panelRef={mergedPanelRef}
      getContainer={getContainer}
    >
      {headerNode}
      <div
        className={classNames(
          `${prefixCls}-body`,
          classes?.body,
          propClassNames?.body,
        )}
        style={{
          ...propStyles?.body,
        }}
      >
        {loading
          ? //   <Skeleton
            //     active
            //     title={false}
            //     paragraph={{ rows: 5 }}
            //     className={`${prefixCls}-body-skeleton`}
            //   />
            null
          : children}
      </div>
      {footerNode}
    </RcDrawer>
  );
};

Drawer.displayName = 'Drawer';

export default withStyles<DrawerProps>(styles)(Drawer);
