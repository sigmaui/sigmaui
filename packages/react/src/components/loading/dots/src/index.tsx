import React, { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@sigmaui-kit/with-styles';
import Animate from '@sigmaui-kit/animate';

import { styles, LoadingDotsProps } from './styles';

export type {
  LoadingDotsProps
}

const LoadingDots: FC<LoadingDotsProps> = ({
  prefixCls,
  className,
  classes,
  animateProps = {},
  size = 12
}) => {
  const animateStyle = {
    wrapper: {
      width: size,
      height: size,
      backgroundColor: 'base',
      borderRadius: '50%'
    }
  };

  const animation = {
    name: 'blink',
    duration: '1.4s'
  }

  return (
    <div
      className={classNames(prefixCls, classes?.wrapper, className)}
    >
      <Animate
        animation={{
          ...animation
        }}
        _style={animateStyle}
        {...animateProps}
      />
      <Animate
        animation={{
          ...animation,
          delay: '200ms'
        }}
        _style={animateStyle}
        {...animateProps}
      />
      <Animate
        animation={{
          ...animation,
          delay: '400ms'
        }}
        _style={animateStyle}
        {...animateProps}
      />
    </div>
  )
};

LoadingDots.displayName = 'LoadingDots';

export default withStyles<LoadingDotsProps>(styles)(LoadingDots)
