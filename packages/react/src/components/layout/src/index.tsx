import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';

import { type LayoutProps, styles } from 'packages/common/components/layout/styles';

const SigmaLayout: FC<LayoutProps> = ({ prefixCls = 'sm-layout', className, classes, children, header, sidebar }) => {
  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      {header && <header className={classNames(`${prefixCls}-header`, classes?.header)}>{header}</header>}
      <main className={classNames(`${prefixCls}-main`, classes?.main)}>
        {sidebar && <div className={classNames(`${prefixCls}-sidebar`, classes?.sidebar)}>{sidebar}</div>}
        <div className={classNames(`${prefixCls}-content`, classes?.content)}>{children}</div>
      </main>
    </div>
  );
};

SigmaLayout.displayName = 'Layout';

export default withStyles<LayoutProps>(styles)(SigmaLayout);
