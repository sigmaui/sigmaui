import React from 'react';
import type { FC } from 'react';
import MicroBox, { BoxProps } from '@microui-kit/box';

const Box: FC<BoxProps> = ({
  prefixCls = 'sm-box',
  ...restProps
}) => {
  return (
    <MicroBox
      prefixCls={prefixCls}
      {...restProps}
    />
  );
};

Box.displayName = 'Box';

export default Box;
