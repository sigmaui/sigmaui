import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';

import { styles, type LayoutProps } from 'packages/common/components/layout/styles';

const SigmaLayout: FC<LayoutProps> = ({
  prefixCls = 'sm-layout',
  className,
  children,
  classes
}) => {
  return (
    <div
      className={classNames(prefixCls, className, classes?.wrapper)}
    >
      <div className={classNames(`${prefixCls}-content`, classes?.content)}>
        {children}
      </div>
    </div>
  )
}

SigmaLayout.displayName = 'Layout';

export default withStyles<LayoutProps>(styles)(SigmaLayout)