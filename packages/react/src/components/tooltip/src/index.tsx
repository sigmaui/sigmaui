import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@sigmaui-kit/with-styles';
import RcTooltip from '@rc-component/tooltip';
import { getRestProps } from '@microui-kit/helpers';

import { type TooltipProps, styles } from './styles';

export type { TooltipProps };

// function isFragment(child: any): boolean {
//   return child && React.isValidElement(child) && child.type === React.Fragment;
// }

const Tooltip: FC<TooltipProps> = ({ prefixCls, className, classes, children, ...tooltipProps }) => {
  const restProps = getRestProps(tooltipProps);

  return (
    <RcTooltip
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      classNames={{
        root: classes?.root,
        arrow: classes?.arrow,
        body: classes?.body,
      }}
      {...restProps}
    >
      <span className={classes?.inner}>{children}</span>
    </RcTooltip>
  );
};

Tooltip.displayName = 'Tooltip';

export default withStyles<TooltipProps>(styles)(Tooltip);
