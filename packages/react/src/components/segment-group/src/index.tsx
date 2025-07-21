import React, { Fragment } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { useRouter } from '@microui-kit/use-router';
import { Link } from 'react-router-dom';
import { SegmentGroup } from '@ark-ui/react';
import { withStyles } from '@microui-kit/with-styles';

import { styles, type SegmentGroupProps } from 'packages/common/components/segment-group/styles';

const SigmaSegmentGroup: FC<SegmentGroupProps> = ({
  prefixCls = 'sm-segment-group',
  className,
  classes,
  options,
  label,
  defaultValue,
  direction = 'horizontal',
}) => {
  const router = useRouter();

  const onValueChange = ({ value }) => {
    console.log('onValueChange', value)
  }

  return (
    <SegmentGroup.Root
      className={classNames(prefixCls, className, classes?.wrapper, classes?.[direction])}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      orientation={direction}
    >
      {
        label
        &&
        <SegmentGroup.Label className={classes?.label}>{label}</SegmentGroup.Label>
      }
      <SegmentGroup.Indicator className={classes?.indicator}/>
      {
        options.map(({ value, label }) => {
          const itemProps = {
            className: classes?.item,
            value
          };

          const isLink = value.startsWith('/');

          const item = (
            <Fragment>
              <SegmentGroup.ItemText className={classes?.itemText}>{label}</SegmentGroup.ItemText>
              <SegmentGroup.ItemControl/>
              <SegmentGroup.ItemHiddenInput/>
            </Fragment>
          )

          if (isLink) {
            itemProps.children = (
              <a
                href={value}
                onClick={(event) => {
                  // event.preventDefault();

                  router.push(value)
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
        })
      }
    </SegmentGroup.Root>
  );
};

SigmaSegmentGroup.displayName = 'SegmentGroup';

export default withStyles<SegmentGroupProps>(styles)(SigmaSegmentGroup);