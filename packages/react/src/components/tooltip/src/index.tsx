import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@sigmaui-kit/with-styles';
import RcTooltip from '@rc-component/tooltip';
import { getRestProps } from '@microui-kit/helpers';

import { styles, type TooltipProps } from './styles';

// function isFragment(child: any): boolean {
//   return child && React.isValidElement(child) && child.type === React.Fragment;
// }

const Tooltip: FC<TooltipProps> = ({
  prefixCls,
  className,
  classes,
  children,
  ...tooltipProps
}) => {
  const restProps = getRestProps(tooltipProps);

  return (
    <RcTooltip
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      classNames={classes}
      {...restProps}
    >
      <span>
        {children}
      </span>
    </RcTooltip>
  )
}

Tooltip.displayName = 'Tooltip';

export default withStyles<TooltipProps>(styles)(Tooltip)
