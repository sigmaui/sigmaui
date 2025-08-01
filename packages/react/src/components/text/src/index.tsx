import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { useMicroUI } from '@microui-kit/use-micro-ui'
import { getRestProps } from '@microui-kit/helpers'

import { type TextProps } from 'packages/common/components/text/types'

const displayName = 'Text'

const SigmaText: FC<TextProps> = ({
  prefixCls = 'sm-text',
  className,
  children,
  _class,
  size,
  as: As = 'div',
  ...textProps
}) => {
  const restProps = getRestProps(textProps)

  const { css } = useMicroUI()

  const classString = css(
    {
      displayName,
      size,
      ...restProps,
    },
    { _class },
  )

  return <As className={classNames(prefixCls, className, classString)}>{children}</As>
}

SigmaText.displayName = displayName

export default SigmaText
