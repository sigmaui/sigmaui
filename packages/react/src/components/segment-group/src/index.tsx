import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { useRouter } from '@microui-kit/use-router';
import Segmented from '@rc-component/segmented';
import { withStyles } from '@sigmaui-kit/with-styles';
import { getRestProps } from '@microui-kit/helpers';

import { styles, type SegmentGroupProps } from './styles';

const SegmentGroup: FC<SegmentGroupProps> = ({
  prefixCls,
  className,
  classes,
  options,
  defaultValue,
  isThumbLine,
  ...segmentGroupProps
}) => {
  const restProps = getRestProps(segmentGroupProps);
  const router = useRouter()

  const onChange = (value: string) => {
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
      classNames={classes}
      {...restProps}
    />
  )
}

SegmentGroup.displayName = 'SegmentGroup'

export default withStyles<SegmentGroupProps>(styles)(SegmentGroup)
