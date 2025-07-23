import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { withStyles } from '@microui-kit/with-styles'
import Loading from '@microui-kit/loading'

import { styles, type ButtonProps } from 'packages/common/components/button/styles'

const SigmaButton: FC<ButtonProps> = ({
  prefixCls = 'sm-button',
  className,
  children,
  classes,
  href,
  loading,
  locking,
  disabled,
  prefix,
  suffix,
}) => {
  if (loading) {
    prefix = (
      <Loading
        isLoader
        loaderProps={{
          size: 20,
          _style: (theme: any) => ({
            loader: {
              borderColor: theme.fn.rgba('#fff', 0.2),
              borderLeftColor: '#fff!important',
              borderWidth: 2,
            },
          }),
        }}
      />
    )
  }

  if (locking) {
    prefix = <Loading isDot />
  }

  const buttonEl = (
    <button
      className={classNames(prefixCls, className, classes?.wrapper)}
      disabled={disabled || loading || locking}
    >
      {prefix && <div className={classes?.prefix}>{prefix}</div>}
      {children}
      {suffix && <div className={classes?.suffix}>{suffix}</div>}
    </button>
  )

  if (href) {
    return <Link to={href}>{buttonEl}</Link>
  }

  return buttonEl
}

SigmaButton.displayName = 'Button'

export default withStyles<ButtonProps>(styles)(SigmaButton)
