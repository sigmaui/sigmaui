import * as React from 'react';
import type { DrawerProps as RcDrawerProps } from '@rc-component/drawer';
import RcDrawer from '@rc-component/drawer';
import type { CSSMotionProps } from '@rc-component/motion';
import { composeRef } from '@rc-component/util/lib/ref';
import { classnames, useDefaultProps } from '@sigma-ui-kit/theme';
import { usePanelRef } from '@sigma-ui-kit/watermark';
import CircleXmarkFilledIcon from '@sigma-ui-kit/icons/CircleXmarkFilledIcon';
import useZIndex from '@sigma-ui-kit/util/hooks/useZIndex';
import { getTransitionName } from '@sigma-ui-kit/util/motion';
import zIndexContext from '@sigma-ui-kit/util/zindexContext';

import type { DrawerProps, PushState, SematicName } from './types';
import DrawerPanel from './DrawerPanel';
import styleFn from './styles';

const defaultPushState: PushState = { distance: 180 };

const Drawer: React.FC<DrawerProps> = inProps => {
  const {
    rootClassName,
    width,
    height,
    size = 'default',
    mask = true,
    push = defaultPushState,
    open,
    afterOpenChange,
    onClose,
    prefixCls,
    getContainer: customizeGetContainer,
    panelRef = null,
    style,
    className,
    destroyOnHidden,
    classes,
    direction,
    closeIcon,
    children,
    loading,
    title,
    footer,
    extra,
    rootPrefixCls,
    ...rest
  } = useDefaultProps<SematicName, DrawerProps>({
    props: inProps,
    defaultProps: {
      size: 'default',
      mask: true,
      push: defaultPushState,
      panelRef: null,
    },
    name: 'Drawer',
    styleFn,
  });

  const getContainer =
    customizeGetContainer === undefined ? () => document.body : customizeGetContainer;

  const drawerClassName = classnames(
    {
      'no-mask': !mask,
      // [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    rootClassName,
    classes.root
  );

  // ============================ Close Icon ============================
  const mergedCloseIcon = React.useMemo(() => {
    if (closeIcon === false) {
      return false;
    }
    return closeIcon === undefined ? <CircleXmarkFilledIcon /> : closeIcon;
  }, [closeIcon]);

  // ============================ Size ============================
  const mergedWidth = React.useMemo<string | number>(
    () => width ?? (size === 'large' ? 736 : 378),
    [width, size]
  );

  const mergedHeight = React.useMemo<string | number>(
    () => height ?? (size === 'large' ? 736 : 378),
    [height, size]
  );

  // =========================== Motion ===========================
  const maskMotion: CSSMotionProps = {
    motionName: getTransitionName(prefixCls, 'mask-motion'),
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500,
  };

  const panelMotion: RcDrawerProps['motion'] = motionPlacement => ({
    motionName: getTransitionName(prefixCls, `panel-motion-${motionPlacement}`),
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500,
  });

  // ============================ Refs ============================
  // Select `ant-drawer-content` by `panelRef`
  const innerPanelRef = usePanelRef();
  const mergedPanelRef = composeRef(panelRef, innerPanelRef) as React.Ref<HTMLDivElement>;

  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = useZIndex('Drawer', rest.zIndex);

  // =========================== Render ===========================

  return (
    <zIndexContext.Provider value={contextZIndex}>
      <RcDrawer
        prefixCls={prefixCls}
        onClose={onClose}
        maskMotion={maskMotion}
        motion={panelMotion}
        {...rest}
        classNames={{
          mask: classes.mask,
          section: classes.section,
          wrapper: classes.wrapper,
        }}
        open={open}
        mask={mask}
        push={push}
        width={mergedWidth}
        height={mergedHeight}
        style={{ ...style }}
        className={className}
        rootClassName={drawerClassName}
        getContainer={getContainer}
        afterOpenChange={afterOpenChange}
        panelRef={mergedPanelRef}
        zIndex={zIndex}
        destroyOnHidden={destroyOnHidden}
      >
        <DrawerPanel
          prefixCls={prefixCls}
          closeIcon={mergedCloseIcon}
          onClose={onClose}
          classes={classes}
          loading={loading}
          title={title}
          footer={footer}
          extra={extra}
        >
          {children}
        </DrawerPanel>
      </RcDrawer>
    </zIndexContext.Provider>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Drawer.displayName = 'Drawer';
}

export default Drawer;
