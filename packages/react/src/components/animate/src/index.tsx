import React, { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@sigmaui-kit/with-styles';
import { getEvent } from '@microui-kit/helpers';

import { AnimateProps, styles } from './styles';

export type { AnimateProps };

const Animate: FC<AnimateProps> = ({ prefixCls, className, classes = {}, as: As = 'div', ...animateProps }) => {
  const events = getEvent(animateProps);

  return (
    <As
      className={classNames(prefixCls, className, classes.wrapper)}
      {...events}
    />
  );
};

Animate.displayName = 'Animate';

export default withStyles<AnimateProps>(styles)(Animate);
