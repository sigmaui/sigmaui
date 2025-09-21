import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@sigmaui-kit/with-styles';
import Loading from '@sigmaui-kit/loading';

import { styles, type ButtonProps } from './styles';

export type {
  ButtonProps
}

const Button: FC<ButtonProps> = ({
  prefixCls,
  className,
  children,
  classes,
  htmlType,
  href,
  asLink: Link,
  loading,
  locking,
  disabled,
  prefix,
  suffix,
  loadingProps = {}
}) => {
  if (loading) {
    prefix = (
      <Loading
        size={20}
        _style={(theme: any) => ({
          loader: {
            borderColor: theme.fn.rgba('#fff', 0.2),
            borderLeftColor: '#fff!important',
            borderWidth: 2,
          }
        })}
        {...loadingProps}
      />
    )
  }

  if (locking) {
    suffix = (
      <Loading
        dot
        size={6}
        dotProps={{
          animateProps: {
            extendStyle: {
              wrapper: {
                backgroundColor: '#fff'
              }
            }
          }
        }}
        {...loadingProps}
      />
    )
  }

  let buttonNode = (
    <button
      type={htmlType}
      className={classNames(prefixCls, className, classes?.wrapper)}
      disabled={disabled || loading || locking}
    >
      {prefix && <div className={classes?.prefix}>{prefix}</div>}
      {children}
      {suffix && <div className={classes?.suffix}>{suffix}</div>}
    </button>
  );

  if (href && Link) {
    return (
      <Link
        to={href}
        className={classes?.link}
      >
        {buttonNode}
      </Link>
    )
  }

  return buttonNode
}

Button.displayName = 'Button';

export default withStyles<ButtonProps>(styles)(Button)
