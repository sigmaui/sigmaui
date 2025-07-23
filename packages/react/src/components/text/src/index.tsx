import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';

import { styles, type TextProps } from 'packages/common/components/text/styles';

const SigmaText: FC<TextProps> = ({
  prefixCls = 'sm-text',
  className,
  children,
  classes
}) => {
  return (
    <div
      className={classNames(prefixCls, className, classes?.wrapper)}
    >
      {children}
    </div>
  )
}

SigmaText.displayName = 'Text';

export default withStyles<TextProps>(styles)(SigmaText)