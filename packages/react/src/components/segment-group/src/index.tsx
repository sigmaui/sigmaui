import React, { Fragment } from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { useRouter } from '@microui-kit/use-router'
import Segmented from '@rc-component/segmented'
import { withStyles } from '@microui-kit/with-styles'

import { styles, type SegmentGroupProps } from 'packages/common/components/segment-group/styles'

const SigmaSegmentGroup: FC<SegmentGroupProps> = ({
  prefixCls = 'sm-segment-group',
  className,
  classes,
  options,
  defaultValue
}) => {
  const router = useRouter()

  const onChange = (value) => {
    console.log('onChange', value);
    const isLink = value?.startsWith?.('/');

    if (isLink) {
      router.push(value)
    }
  }

  return (
    <Segmented
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      options={options}
      defaultValue={defaultValue}
      onChange={onChange}
      classNames={{
        item: classes?.item,
        label: classes?.label
      }}
    />
  )
}

SigmaSegmentGroup.displayName = 'SegmentGroup'

export default withStyles<SegmentGroupProps>(styles)(SigmaSegmentGroup)
