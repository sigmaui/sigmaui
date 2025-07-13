import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { useMicroUI } from '@microui-kit/use-micro-ui';

import type { BoxProps } from './types';

const SigmaBox: FC<BoxProps> = ({
  prefixCls = 'sm-box',
  className,
  children,
  as: As = 'div',
}) => {
  const { css } = useMicroUI();

  return (
    <As
      className={classNames(prefixCls, className)}
    >
      {children}
    </As>
  )
}

SigmaBox.displayName = 'Box';

export default SigmaBox