import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@sigmaui-kit/with-styles'
import { getRestProps } from '@microui-kit/helpers'

import { styles, type FormItemErrorProps } from './styles'

const FormItemError: FC<FormItemErrorProps> = ({
  prefixCls,
  className,
  classes,
  id,
  t,
  children,
  errors = [],
  ...formItemErrorProps
}) => {
  const restProps = getRestProps(formItemErrorProps);

  return (
    <div
      id={id}
      className={classNames(prefixCls, className, classes?.wrapper)}
      {...restProps}
    >
      {
        errors.map((error) => {
          return (
            <div className={classNames(`${prefixCls}-line`, classes?.errorLine)}>{t(error)}</div>
          )
        })
      }
    </div>
  )
}

FormItemError.displayName = 'FormItemError'

export default withStyles<FormItemErrorProps>(styles)(FormItemError)
