import React, { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@sigmaui-kit/with-styles';
import LoadingDots from '@sigmaui-kit/loading-dots';

import { styles, LoadingProps } from './styles';

export type {
  LoadingProps
}

const Loading: FC<LoadingProps> = ({
  prefixCls,
  className,
  classes,
  text,
  full,
  center,
  size,
  dot,
  dotProps = {}
}) => {
  let renderLoader = (
    <div className={classes?.loader}/>
  );

  if (dot) {
    renderLoader = (
      <LoadingDots
        size={size}
        {...dotProps}
      />
    )
  }

  return (
    <div
      className={classNames(prefixCls, classes?.wrapper, className, {
        [classes?.full!]: full,
        [classes?.center!]: center
      })}
    >
      <div className={classes?.inner}>
        {renderLoader}
        {
          text
          &&
          <div className={classes?.text}>
            {text}
          </div>
        }
      </div>
    </div>
  )
};

Loading.displayName = 'Loading';

export default withStyles<LoadingProps>(styles)(Loading)
