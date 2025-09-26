import React, { FC } from 'react';
import classNames from 'classnames';
import RcSelect from '@rc-component/select';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';
import ChevronDownSingleIcon from '@sigmaui-kit/icons/ChevronDownSingleIcon';
import XMarkIcon from '@sigmaui-kit/icons/XMarkIcon';
import CheckIcon from '@sigmaui-kit/icons/CheckIcon';

import { type SelectProps, styles } from './styles';

export type { SelectProps };

const SigmaSelect: FC<SelectProps> = ({
  prefixCls,
  className,
  classes,
  options,
  placeholder,
  allowClear,
  ...selectProps
}) => {
  const restProps = getRestProps(selectProps);

  const suffixIcon = <ChevronDownSingleIcon />;

  const clearIcon = <XMarkIcon />;

  const menuItemSelectedIcon = <CheckIcon />;

  const removeIcon = <XMarkIcon />;

  const mergedAllowClear = allowClear === true ? { clearIcon } : allowClear;

  return (
    <RcSelect
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      popupClassName={classes?.popup}
      options={options}
      placeholder={placeholder}
      classNames={{}}
      allowClear={mergedAllowClear}
      suffixIcon={suffixIcon}
      menuItemSelectedIcon={menuItemSelectedIcon}
      removeIcon={removeIcon}
      {...restProps}
    />
  );
};

SigmaSelect.displayName = 'Select';

export default withStyles<SelectProps>(styles)(SigmaSelect);
