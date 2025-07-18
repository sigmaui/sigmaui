import React from 'react';
import classNames from 'classnames';
import type { FC } from 'react';
import { SegmentGroup } from '@ark-ui/react';
import { withStyles } from '@microui-kit/with-styles';

import type { SegmentGroupProps } from './types';

import { styles, type SegmentGroupTypes } from 'packages/common/components/segment-group/styles';

const SigmaSegmentGroup: FC<SegmentGroupProps<SegmentGroupTypes>> = ({
  prefixCls = 'sm-segment-group',
  className,
  classes = {},
  options,
  placeholder,
  label,
  value,
  onChange,
  direction = 'horizontal',
}) => {
  // Only pass string or undefined to value
  const stringValue = typeof value === 'string' ? value : value !== undefined ? String(value) : undefined;
  const items = options?.map(opt => ({ label: opt.label, value: String(opt.value) })) || [];

  return (
    <SegmentGroup.Root
      className={classNames(prefixCls, className, classes.wrapper, classes[direction])}
      // value={stringValue}
      onValueChange={(e) => onChange?.(e.value)}
      orientation={direction}
    >
      {label && <SegmentGroup.Label className={classes.label}>{label}</SegmentGroup.Label>}
      <SegmentGroup.Indicator className={classes.indicator} />
      <div className={classes.control}>
        {items.length > 0 ? (
          items.map((item) => (
            <SegmentGroup.Item key={item.value} value={item.value} className={classes.item}>
              <SegmentGroup.ItemText className={classes.itemText}>{item.label}</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          ))
        ) : (
          placeholder && <span className={classes.itemText}>{placeholder}</span>
        )}
      </div>
    </SegmentGroup.Root>
  );
};

SigmaSegmentGroup.displayName = 'SegmentGroup';

export default withStyles<SegmentGroupProps<SegmentGroupTypes>>(styles)(SigmaSegmentGroup); 