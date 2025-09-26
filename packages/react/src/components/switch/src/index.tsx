import React, { useState } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@sigmaui-kit/with-styles';
import RcSwitch, { type SwitchChangeEventHandler } from '@rc-component/switch';
import { getRestProps } from '@microui-kit/helpers';

import { type SwitchProps, styles } from './styles';

export type { SwitchProps };
const Switch: FC<SwitchProps> = ({
  prefixCls,
  className,
  classes,
  children,
  onChange,
  value,
  defaultValue,
  checked: checkedProp,
  defaultChecked: defaultCheckedProp,
  ...switchProps
}) => {
  const restProps = getRestProps(switchProps);

  const [checked, setChecked] = useState(checkedProp ?? value ?? defaultCheckedProp ?? defaultValue);

  const handleChange: SwitchChangeEventHandler = (...args) => {
    setChecked(args[0]);
    onChange?.(...args);
  };

  const loadingIcon = (
    <div className={classNames(`${prefixCls}-content`, classes?.content)}>
      <div className={`${prefixCls}-handle`}></div>
    </div>
  );

  return (
    <RcSwitch
      {...restProps}
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      loadingIcon={loadingIcon}
      checked={checked}
      onChange={handleChange}
    />
  );
};

Switch.displayName = 'Switch';

export default withStyles<SwitchProps>(styles)(Switch);
