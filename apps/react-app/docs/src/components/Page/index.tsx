import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';

import { styles, type PageProps } from './styles';

const Page: FC<PageProps> = ({
  prefixCls = 'sm-page',
  className,
  children,
  classes
}) => {
  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      {children}
    </div>
  )
}

Page.displayName = 'Page';

export default withStyles<PageProps>(styles)(Page)