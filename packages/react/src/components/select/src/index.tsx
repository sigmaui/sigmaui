import React, { FC, useState } from 'react';
import classNames from 'classnames';
import RcSelect from '@rc-component/select';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';
import PathMorphing from '@sigmaui-kit/path-morphing';
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
  const [open, setOpen] = useState<boolean>(false);

  const suffixIcon = (
    <PathMorphing
      paths={[
        'M18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289Z',
        'M18.7071 14.7071C19.0976 14.3166 19.0976 13.6834 18.7071 13.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L12 9.41421L17.2929 14.7071C17.6834 15.0976 18.3166 15.0976 18.7071 14.7071Z'
      ]}
      pathIndex={open ? 1 : 0}
    />
  );

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
      open={open}
      onPopupVisibleChange={setOpen}
      // transitionName="slide-up"
      {...restProps}
    />
  );
};

SigmaSelect.displayName = 'Select';

export default withStyles<SelectProps>(styles)(SigmaSelect);
