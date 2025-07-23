import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { useMicroUI } from '@microui-kit/use-micro-ui'
import { getRestProps } from '@microui-kit/helpers'

import { type TextProps } from 'packages/common/components/text/types'

const displayName = 'Text'

const SigmaText: FC<TextProps> = ({ prefixCls = 'sm-text', className, children, size, ...textProps }) => {
  const restProps = getRestProps(textProps)

  const { css } = useMicroUI()

  const classString = css({
    displayName,
    size,
    ...restProps,
  })

  return <div className={classNames(prefixCls, className, classString)}>{children}</div>
}

SigmaText.displayName = displayName

export default SigmaText
