'use client';

import React, { useMemo } from 'react';
import Dialog from '@rc-component/dialog';
import { composeRef } from '@rc-component/util/lib/ref';
import XMarkIcon from '@sigma-ui-kit/icons/XMarkIcon';
import { classnames, useDefaultProps } from '@sigma-ui-kit/theme';
import Skeleton from '@sigma-ui-kit/skeleton';
import { usePanelRef } from '@sigma-ui-kit/watermark';
import useZIndex from '@sigma-ui-kit/util/hooks/useZIndex';
import zIndexContext from '@sigma-ui-kit/util/zindexContext';
import { getTransitionName } from '@sigma-ui-kit/util/motion';
import { canUseDocElement } from '@sigma-ui-kit/util/styleChecker';
import type { Breakpoint } from '@sigma-ui-kit/util/responsiveObserver';
import CircleXmarkFilledIcon from '@sigma-ui-kit/icons/CircleXmarkFilledIcon';

// import ContextIsolator from '../_util/ContextIsolator';
// import useClosable, { pickClosable } from '../_util/hooks/useClosable';
// import { devUseWarning } from '../_util/warning';
import type { ModalProps, MousePosition, SemanticName } from './types';
import { Footer, renderCloseIcon } from './shared';
import styleFn from './styles';

let mousePosition: MousePosition;

const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY,
  };
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};

if (canUseDocElement()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}

function mergeClosable(
  closable?: ModalProps['closable'],
  closeIcon?: React.ReactNode
): ModalProps['closable'] {
  if (closable === false) {
    return false;
  }

  const base: ModalProps['closable'] =
    typeof closable === 'object' ? closable : { closeIcon: undefined, disabled: false };

  return {
    ...base,
    closeIcon: closeIcon ?? base.closeIcon ?? <CircleXmarkFilledIcon />,
  };
}

const Modal: React.FC<ModalProps> = inProps => {
  const props = useDefaultProps<SemanticName, ModalProps>({
    props: inProps,
    defaultProps: {
      focusTriggerAfterClose: true,
      maskClosable: true,
      closable: false,
    },
    name: 'Modal',
    styleFn,
  });

  const {
    rootClassName,
    open,
    centered,
    getContainer,
    focusTriggerAfterClose = true,
    style,
    closable,
    closeIcon,
    // Deprecated
    width = 640,
    footer,
    children,
    loading,
    confirmLoading,
    zIndex: customizeZIndex,
    mousePosition: customizeMousePosition,
    onOk,
    onCancel,
    destroyOnHidden,
    panelRef = null,
    afterClose,
    afterOpenChange,
    bodyProps,
    cancelButtonProps,
    classes,
    direction,
    prefixCls,
    rootPrefixCls,
    modalRender,
    ...restProps
  } = props;

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (confirmLoading) {
      return;
    }
    onCancel?.(e);
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOk?.(e);
  };

  // Style

  const dialogFooter =
    footer !== null && !loading ? (
      <Footer {...props} onOk={handleOk} onCancel={handleCancel} />
    ) : null;

  // ============================ closeable ============================

  const closableConfig = useMemo(() => mergeClosable(closable, closeIcon), [closable, closeIcon]);

  // ============================ modalRender ============================
  const mergedModalRender = modalRender
    ? (node: React.ReactNode) => <div className={`${prefixCls}-render`}>{modalRender(node)}</div>
    : undefined;

  // ============================ Refs ============================
  // Select `ant-modal-content` by `panelRef`
  const panelClassName = `.${prefixCls}-${modalRender ? 'render' : 'container'}`;
  const innerPanelRef = usePanelRef(panelClassName);
  const mergedPanelRef = composeRef(panelRef, innerPanelRef) as React.Ref<HTMLDivElement>;

  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = useZIndex('Modal', customizeZIndex);

  // =========================== Width ============================
  const [numWidth, responsiveWidth] = React.useMemo<
    [string | number | undefined, Partial<Record<Breakpoint, string | number>> | undefined]
  >(() => {
    if (width && typeof width === 'object') {
      return [undefined, width];
    }
    return [width, undefined];
  }, [width]);

  const responsiveWidthVars = React.useMemo(() => {
    const vars: Record<string, string> = {};
    if (responsiveWidth) {
      Object.keys(responsiveWidth).forEach(breakpoint => {
        const breakpointWidth = responsiveWidth[breakpoint as Breakpoint];
        if (breakpointWidth !== undefined) {
          vars[`--${prefixCls}-${breakpoint}-width`] =
            typeof breakpointWidth === 'number' ? `${breakpointWidth}px` : breakpointWidth;
        }
      });
    }
    return vars;
  }, [prefixCls, responsiveWidth]);

  // =========================== Render ===========================
  return (
    <zIndexContext.Provider value={contextZIndex}>
      <Dialog
        width={numWidth}
        {...restProps}
        zIndex={zIndex}
        getContainer={getContainer}
        prefixCls={prefixCls}
        rootClassName={rootClassName}
        footer={dialogFooter}
        visible={open}
        mousePosition={customizeMousePosition ?? mousePosition}
        onClose={handleCancel as any}
        closable={closableConfig}
        focusTriggerAfterClose={focusTriggerAfterClose}
        transitionName={getTransitionName(rootPrefixCls, 'zoom', props.transitionName)}
        maskTransitionName={getTransitionName(rootPrefixCls, 'fade', props.maskTransitionName)}
        classNames={{
          wrapper: classnames(
            {
              [`${prefixCls}-centered`]: centered,
              [`${prefixCls}-wrap-rtl`]: direction === 'rtl',
            },
            classes.wrapper
          ),
          body: classnames(classes.body),
          header: classnames(classes.header),
          footer: classnames(classes.footer, 'footer'),
          container: classnames(classes.container, 'container'),
          title: classnames(classes.title, 'title'),
          mask: classnames(classes.mask, 'mask'),
        }}
        modalRender={mergedModalRender}
        panelRef={mergedPanelRef}
        destroyOnHidden={destroyOnHidden}
      >
        {loading ? (
          // <Skeleton
          //   active
          //   title={false}
          //   paragraph={{ rows: 4 }}
          //   className={`${prefixCls}-body-skeleton`}
          // />
          <span>loading</span>
        ) : (
          children
        )}
      </Dialog>
    </zIndexContext.Provider>
  );
};

export default Modal;
