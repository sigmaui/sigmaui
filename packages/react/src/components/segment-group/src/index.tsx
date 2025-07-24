import React, { Fragment } from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { useRouter } from '@microui-kit/use-router'
import { SegmentGroup, useSegmentGroup, type SegmentGroupItemProps } from '@ark-ui/react'
import { withStyles } from '@microui-kit/with-styles'

import { styles, type SegmentGroupProps } from 'packages/common/components/segment-group/styles'

const SigmaSegmentGroup: FC<SegmentGroupProps> = ({
  prefixCls = 'sm-segment-group',
  className,
  classes,
  options,
  label,
  defaultValue,
  orientation = 'horizontal',
}) => {
  const router = useRouter()

  const onValueChange = ({ value }) => {
    console.log('onValueChange', value)
  }

  const segmentGroup = useSegmentGroup({
    defaultValue,
    onValueChange,
    orientation,
  })

  console.log('segmentGroup', segmentGroup)

  const { setValue } = segmentGroup

  return (
    <SegmentGroup.RootProvider
      className={classNames(prefixCls, className, classes?.wrapper)}
      value={segmentGroup}
    >
      {label && <SegmentGroup.Label className={classes?.label}>{label}</SegmentGroup.Label>}
      <SegmentGroup.Indicator className={classes?.indicator}/>
      {options.map(({ value, label }) => {
        const itemProps: SegmentGroupItemProps = {
          className: classes?.item,
          value,
        }

        const isLink = value?.startsWith?.('/')

        const item = (
          <Fragment>
            <SegmentGroup.ItemText className={classes?.itemText}>{label}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl/>
            <SegmentGroup.ItemHiddenInput/>
          </Fragment>
        )

        if (isLink) {
          itemProps.asChild = true
          itemProps.children = (
            <a
              href={value}
              onClick={(event) => {
                event.preventDefault()

                router.push(value)
                setValue(value)
              }}
            >
              {item}
            </a>
          )
        } else {
          itemProps.children = item
        }

        return (
          <SegmentGroup.Item
            key={value}
            {...itemProps}
          />
        )
      })}
    </SegmentGroup.RootProvider>
  )
}

SigmaSegmentGroup.displayName = 'SegmentGroup'

export default withStyles<SegmentGroupProps>(styles)(SigmaSegmentGroup)
