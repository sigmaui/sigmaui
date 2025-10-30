import * as React from 'react';
import { classnames } from '@sigma-ui-kit/theme';
// import Skeleton from '@sigma-ui-kit/skeleton';
import useClosable, { pickClosable } from '@sigma-ui-kit/util/hooks/useClosable';

import type { DrawerPanelProps } from './types';

const DrawerPanel: React.FC<DrawerPanelProps> = props => {
  const { prefixCls, title, footer, extra, loading, onClose, children, classes } = props;
  // const drawerContext = useComponentConfig('drawer');

  const customCloseIconRender = React.useCallback(
    (icon: React.ReactNode) => (
      <button type="button" onClick={onClose} className={`${prefixCls}-close`}>
        {icon}
      </button>
    ),
    [onClose, prefixCls]
  );

  const [mergedClosable, mergedCloseIcon] = useClosable(pickClosable(props), undefined, {
    closable: true,
    closeIconRender: customCloseIconRender,
  });

  const renderHeader = () => {
    if (!title && !mergedClosable) {
      return null;
    }
    return (
      <div
        className={classnames(
          `${prefixCls}-header`,
          {
            [`${prefixCls}-header-close-only`]: mergedClosable && !title && !extra,
          },
          classes?.header
        )}
      >
        <div className={`${prefixCls}-header-title`}>
          {mergedCloseIcon}
          {title && <div className={`${prefixCls}-title`}>{title}</div>}
        </div>
        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
      </div>
    );
  };

  const renderFooter = () => {
    if (!footer) {
      return null;
    }
    return <div className={classnames(`${prefixCls}-footer`, classes.footer)}>{footer}</div>;
  };

  return (
    <>
      {renderHeader()}
      <div className={classnames(`${prefixCls}-body`, classes.body)}>
        {loading ? (
          // <Skeleton
          //   active
          //   title={false}
          //   paragraph={{ rows: 5 }}
          //   className={`${prefixCls}-body-skeleton`}
          // />
          <div>Loading</div>
        ) : (
          children
        )}
      </div>
      {renderFooter()}
    </>
  );
};

export default DrawerPanel;
