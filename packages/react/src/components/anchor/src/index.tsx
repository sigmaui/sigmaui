import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'

import { styles, type AnchorProps } from 'packages/common/components/anchor/styles'

const SigmaAnchor: FC<AnchorProps> = ({ prefixCls = 'sm-anchor', className, classes }) => {
  return <div className={classNames(prefixCls, className, classes?.wrapper)}></div>
}

SigmaAnchor.displayName = 'Anchor'

export default withStyles<AnchorProps>(styles)(SigmaAnchor)
