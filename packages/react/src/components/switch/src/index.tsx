import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@sigmaui-kit/with-styles';
import RcSwitch from '@rc-component/switch';
import { getRestProps } from '@microui-kit/helpers';

import { styles, type SwitchProps } from './styles';

export type {
  SwitchProps
}
const Switch: FC<SwitchProps> = ({
  prefixCls,
  className,
  classes,
  children,
  ...switchProps
}) => {
  const restProps = getRestProps(switchProps);

  const loadingIcon = (
    <div className={`${prefixCls}-handle`}>
    </div>
  )

  return (
    <RcSwitch
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      classNames={{
        content: classes?.content
      }}
      loadingIcon={loadingIcon}
      {...restProps}
    />
  )
}

Switch.displayName = 'Switch';

export default withStyles<SwitchProps>(styles)(Switch)
